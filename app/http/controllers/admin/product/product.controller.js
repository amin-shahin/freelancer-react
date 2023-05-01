const {
  addCourseSchema,
  changeCourseDiscountSchema,
} = require("../../../validators/admin/course.schema");
const Controller = require("../../controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const mongoose = require("mongoose");
const {
  copyObject,
  deleteInvalidPropertyInObject,
} = require("../../../../utils/functions");
const createHttpError = require("http-errors");
const { CommentController } = require("../../comment/comment.controller");
const ObjectId = mongoose.Types.ObjectId;
const { CategoryModel } = require("../../../../models/category");
const { UserModel } = require("../../../../models/user");
const { ProductModel } = require("../../../../models/product");

class ProductController extends Controller {
  async addNewProduct(req, res) {
    // const seller = req.user._id;
    await addCourseSchema.validateAsync(req.body);
    const {
      title,
      description,
      slug,
      imageLink,
      brand,
      tags,
      category,
      price,
      discount = 0,
      offPrice,
      countInStock,
    } = req.body;

    const product = await ProductModel.create({
      title,
      description,
      slug,
      imageLink,
      brand,
      tags,
      category,
      price,
      discount,
      offPrice,
      countInStock,
    });
    if (!product?._id)
      throw createHttpError.InternalServerError("محصول ثبت نشد");
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "محصول با موفقیت ایجاد شد",
        product,
      },
    });
  }
  async getListOfProducts(req, res) {
    let dbQuery = {};
    const user = req.user;
    const { search, category, sort, type } = req.query;
    // console.log({ category, sort, type });
    if (search) dbQuery["$text"] = { $search: search };
    if (category) {
      const categories = [category].flat(2);
      const categoryIds = [];
      for (const item of categories) {
        const { _id } = await CategoryModel.findOne({ englishTitle: item });
        categoryIds.push(_id);
      }
      dbQuery["category"] = {
        $in: categoryIds,
      };
    }
    if (type) {
      const types = [type].flat(2);
      dbQuery["$or"] = [];
      for (const type of types) {
        if (type === "off") dbQuery["$or"].push({ discount: { $gt: 0 } });
        if (type === "free")
          dbQuery["$or"].push({ type: "free" }, { discount: 100 });
        if (type === "cash") dbQuery["$or"].push({ type: "cash" });
        if (type === "completed") dbQuery["$or"].push({ status: "completed" });
        if (type === "uncompleted")
          dbQuery["$or"].push({ status: "uncompleted" });
      }
    }
    const sortQuery = {};
    if (!sort) sortQuery["createdAt"] = 1;
    if (sort) {
      if (sort === "latest") sortQuery["createdAt"] = -1;
      if (sort === "earliest") sortQuery["createdAt"] = 1;
      if (sort === "popular") sortQuery["numsOfStudents"] = -1;
    }

    const courses = await CourseModel.find(dbQuery, {
      reviews: 0,
      FAQ: 0,
    })
      .populate([
        { path: "category", select: { title: 1, englishTitle: 1 } },
        { path: "teacher", select: { name: 1, biography: 1 } },
      ])
      .sort(sortQuery);

    const transformedCourses = copyObject(courses);

    const newCourses = transformedCourses.map((course) => {
      course.likesCount = course.likes.length;
      course.isLiked = false;
      delete course.chapters;
      if (!user) {
        course.isLiked = false;
        delete course.likes;
        return course;
      }
      if (course.likes.includes(user._id.toString())) {
        course.isLiked = true;
      }
      delete course.likes;
      return course;
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "همه دوره ها",
        courses: newCourses,
      },
    });
  }
  async getCourseById(req, res) {
    const { id: courseId } = req.params;
    const user = req.user;

    const acceptedCommnets = await CommentController.findAcceptedComments(
      "course",
      courseId
    );
    const { FAQ } = await CourseModel.findOne(
      { _id: courseId },
      { FAQ: 1 }
    ).populate([
      { path: "FAQ.answer.user", select: { name: 1, biography: 1, avatar: 1 } },
    ]);
    // const accedptedReviews = await CourseModel.find(
    //   { _id: courseId, "reviews.status": 2 },
    //   { "reviews.$": 1 }
    // ).populate([{ path: "reviews.user", select: { name: 1 } }]);

    // const findedCourse = await CourseModel.findById(courseId).populate([
    //   { path: "category", select: { title: 1, englishTitle: 1 } },
    //   { path: "teacher", select: { name: 1, biography: 1 } },
    // ]);
    // const course = copyObject(findedCourse);
    // course.reviews = copyObject(accedptedReviews)[0]?.reviews;

    const course = (await this.getCourseDetail(courseId, user))[0];
    course.comments = acceptedCommnets;
    course.commentsCount = acceptedCommnets.length;
    course.FAQ = FAQ;
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        course,
      },
    });
  }
  async getOneCourseBySlug(req, res) {
    const { slug } = req.params;
    const user = req.user;
    const _course = await CourseModel.findOne({ slug }, { FAQ: 1 }).populate([
      { path: "FAQ.answer.user", select: { name: 1, biography: 1, avatar: 1 } },
    ]);

    if (!_course)
      throw createHttpError.NotFound("دوره ای با این مشخصات یافت نشد");
    const { id: courseId, FAQ } = _course;
    const acceptedCommnets = await CommentController.findAcceptedComments(
      "course",
      courseId
    );
    const course = (await this.getCourseDetail(courseId, user))[0];
    course.comments = acceptedCommnets;
    course.commentsCount =
      acceptedCommnets.length +
      acceptedCommnets.reduce((a, c) => a + c.answers.length, 0);
    course.FAQ = FAQ;
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        course,
      },
    });
  }
  async changeCourseDiscountStatus(req, res) {
    const { id } = req.params;
    await this.findCourseById(id);
    await changeCourseDiscountSchema.validateAsync(req.body);
    const { discount, offPrice } = req.body;
    const result = await CourseModel.updateOne(
      { _id: id },
      { $set: { discount, offPrice } }
    );
    if (result.modifiedCount > 0) {
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "وضعیت تخفیف دوره فعال شد",
        },
      });
    }
    throw createHttpError.BadRequest("تغییر انجام نشد مجددا تلاش کنید");
  }
  async removeCourse(req, res) {}
  async updateCourse(req, res) {
    const { id } = req.params;
    const course = await this.findCourseById(id);
    const data = copyObject(req.body);
    let blackListFields = [
      "time",
      "chapters",
      "episodes",
      "bookmarks",
      "likes",
      "reviews",
      "teacher",
      "FAQ",
    ];
    deleteInvalidPropertyInObject(data, blackListFields);
    const updateCourseResult = await CourseModel.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    if (!updateCourseResult.modifiedCount)
      throw new createHttpError.InternalServerError(
        "به روزرسانی دوره انجام نشد"
      );

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روزرسانی دوره با موفقیت انجام شد",
      },
    });
  }
  async likeCourse(req, res) {
    const { id: courseId } = req.params;
    const user = req.user;
    const course = await this.findCourseById(courseId);
    const likedCourse = await CourseModel.findOne({
      _id: courseId,
      likes: user._id,
    });
    const updateCourseQuery = likedCourse
      ? { $pull: { likes: user._id } }
      : { $push: { likes: user._id } };

    const updateUserQuery = likedCourse
      ? { $pull: { likedCourses: course._id } }
      : { $push: { likedCourses: course._id } };

    const courseUpdate = await CourseModel.updateOne(
      { _id: courseId },
      updateCourseQuery
    );
    const userUpdate = await UserModel.updateOne(
      { _id: user._id },
      updateUserQuery
    );

    if (courseUpdate.modifiedCount === 0 || userUpdate.modifiedCount === 0)
      throw createHttpError.BadRequest("عملیات ناموفق بود.");

    let message;
    if (!likedCourse) {
      message = "مرسی بابت لایک تون";
    } else message = "لایک شما برداشته شد";

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  }
  async findCourseById(id) {
    if (!mongoose.isValidObjectId(id))
      throw createHttpError.BadRequest("شناسه دوره ارسال شده صحیح نمیباشد");
    const course = await CourseModel.findById(id);
    if (!course) throw createHttpError.NotFound("دوره ای یافت نشد");
    return course;
  }
  async getCourseDetail(courseId, user) {
    // not fetches comments for a course
    const course = await CourseModel.aggregate([
      {
        $match: {
          _id: ObjectId(courseId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "teacher",
          foreignField: "_id",
          as: "teacher",
          pipeline: [
            {
              $project: {
                name: 1,
                biography: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: "$teacher",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
          pipeline: [
            {
              $project: {
                englishTitle: 1,
                title: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: "$category",
        },
      },
      {
        $addFields: {
          reviews: {
            $filter: {
              input: "$reviews",
              as: "review",
              cond: {
                $eq: ["$$review.status", 2],
              },
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "reviews.user",
          foreignField: "_id",
          as: "reviewWriter",
          pipeline: [
            {
              $project: {
                name: 1,
                biography: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $addFields: {
          reviewWriter: {
            $map: {
              input: "$reviewWriter",
              as: "item",
              in: {
                $mergeObjects: [
                  "$$item",
                  {
                    avatar: {
                      $concat: [process.env.SERVER_URL, "/", "$$item.avatar"],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        $set: {
          reviews: {
            $map: {
              input: "$reviews",
              as: "item",
              in: {
                $mergeObjects: [
                  "$$item",
                  {
                    content: {
                      text: "$$item.content.text",
                      audio: {
                        $concat: [
                          process.env.SERVER_URL,
                          "/",
                          "$$item.content.audio",
                        ],
                      },
                      video: {
                        $concat: [
                          process.env.SERVER_URL,
                          "/",
                          "$$item.content.video",
                        ],
                      },
                    },
                  },
                  {
                    user: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: "$reviewWriter",
                            as: "writer",
                            cond: {
                              $eq: ["$$writer._id", "$$item.user"],
                            },
                          },
                        },
                        0,
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        $set: {
          reviews: {
            $function: {
              body: function (reviews) {
                reviews.sort((a, b) => {
                  const aDate = new Date(a.createdAt);
                  const bDate = new Date(b.createdAt);
                  return aDate < bDate ? 1 : -1;
                });
                return reviews;
              },
              args: ["$reviews"],
              lang: "js",
            },
          },
        },
      },
      {
        $addFields: {
          totalTime: {
            $function: {
              body: function (chapters) {
                let time = 0;
                for (const chapter of chapters) {
                  if (Array.isArray(chapter.episodes)) {
                    for (const episode of chapter.episodes) {
                      if (episode.time) time += parseInt(episode.time);
                    }
                  }
                }
                const seconds = time * 60;
                h = Math.floor(seconds / 3600); //convert second to hour
                m = Math.floor((seconds % 3600) / 60); //convert second to mintutes
                s = Math.floor((seconds % 3600) % 60); //convert seconds to second
                if (String(h).length == 1) h = `0${h}`;
                if (String(m).length == 1) m = `0${m}`;
                if (String(s).length == 1) s = `0${s}`;
                return h + ":" + m + ":" + s;
              },
              args: ["$chapters"],
              lang: "js",
            },
          },
        },
      },
      {
        $addFields: {
          totalEpisodes: {
            $function: {
              body: function (chapters) {
                let totalEpisodes = 0;
                for (const chapter of chapters) {
                  totalEpisodes += Number(chapter.episodes.length);
                }
                return totalEpisodes;
              },
              args: ["$chapters"],
              lang: "js",
            },
          },
        },
      },
      {
        $addFields: {
          chapters: {
            $function: {
              body: function chapters(id, chapters, user) {
                if (user && user.role === "ADMIN") return chapters;

                if (user && user.enrolledCourses.some((c) => c.equals(id)))
                  return chapters;

                // transfor chapters : delete episodes with lock type
                for (const chapter of chapters) {
                  for (const episode of chapter.episodes) {
                    if (episode.type === "lock") delete episode.link;
                  }
                }
                return chapters;
              },
              args: ["$_id", "$chapters", user],
              lang: "js",
            },
          },
        },
      },
      {
        $addFields: {
          likesCount: {
            $size: "$likes",
          },
        },
      },
      {
        $addFields: {
          isLiked: {
            $function: {
              body: function (likes, user) {
                if (!user) return false;
                if (likes.some((c) => c.equals(user._id))) {
                  return true;
                }
                return false;
              },
              args: ["$likes", user],
              lang: "js",
            },
          },
        },
      },
      // {
      //   $addFields: {
      //     introVideoUrl: {
      //       $concat: [process.env.SERVER_URL, "/", "$introVideo"],
      //     },
      //   },
      // },
      {
        $unset: ["reviewWriter", "FAQ", "likes"],
      },
    ]);
    if (!course)
      throw createHttpError.BadRequest("دوره ای با این مشخصات یافت نشد.");
    return copyObject(course);
  }
}

module.exports = {
  ProductController: new ProductController(),
};
