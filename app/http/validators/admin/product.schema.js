const createError = require("http-errors");
const Joi = require("joi");
const { MongoIDPattern } = require("../../../utils/constants");

const addCourseSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(3)
    .max(30)
    .error(createError.BadRequest("عنوان دوره صحیح نمیباشد")),
  text: Joi.string()
    .required()
    .error(createError.BadRequest("متن ارسال شده صحیح نمیباشد")),
  shortText: Joi.string()
    .required()
    .error(createError.BadRequest("متن ارسال شده صحیح نمیباشد")),
  slug: Joi.string()
    .required()
    .error(createError.BadRequest("اسلاگ ارسال شده صحیح نمیباشد")),
  imageLink: Joi.string()
    .required()
    .error(createError.BadRequest("لینک عکس دوره صحیح نمیباشد")),
  introVideo: Joi.string()
    .required()
    .error(createError.BadRequest("لینک ویدئو معرفی صحیح نمیباشد")),
  icon: Joi.string()
    .required()
    .error(createError.BadRequest("آیکون تصویر صحیح نمی باشد")),
  tags: Joi.array()
    .min(0)
    .max(20)
    .error(createError.BadRequest("برچسب ها نمیتواند بیشتر از 20 ایتم باشد")),
  category: Joi.string()
    .required()
    .regex(MongoIDPattern)
    .error(createError.BadRequest("دسته بندی مورد نظر یافت نشد")),
  type: Joi.string()
    .required()
    .regex(/(free|cash)/i)
    .error(createError.BadRequest("نوع دوره صحیح نمی باشد")),
  status: Joi.string()
    .regex(/(completed|uncompleted)/i)
    .error(createError.BadRequest("وضعیت دوره صحیح نمی باشد")),
  offPrice: Joi.number().error(
    createError.BadRequest("قیمت وارد شده صحیح نمیباشد")
  ),
  price: Joi.number()
    .required()
    .error(createError.BadRequest("قیمت وارد شده صحیح نمیباشد")),
  discount: Joi.number()
    .allow(0)
    .error(createError.BadRequest("تخفیف وارد شده صحیح نمیباشد")),
});

const linkSchema = Joi.object({
  file: Joi.string()
    .allow("")
    .allow(null)
    .regex(/(\.rar|\.zip)$/)
    .error(createError.BadRequest("لینک فایل ارسال شده صحیح نمیباشد")),
  video: Joi.string()
    .allow("")
    .allow(null)
    .regex(/(\.mp4|\.mov|\.mkv|\.mpg)$/)
    .error(createError.BadRequest("لینک جلسه صحیح نمی باشد")),
});

const addEpisodeSchema = Joi.object({
  index: Joi.number()
    .required()
    .error(createError.BadRequest("ایندکس جلسه را وارد کنید")),
  title: Joi.string()
    .required()
    .min(3)
    .max(300)
    .error(createError.BadRequest("عنوان جلسه صحیح نمیباشد")),
  type: Joi.string()
    .regex(/(lock|unlock)/i)
    .error(createError.BadRequest("نوع جلسه صحیح نمی باشد")),
  time: Joi.number()
    .required()
    .error(createError.BadRequest("زمان جلسه صحیح نمی باشد")),
  chapterId: Joi.string()
    .required()
    .regex(MongoIDPattern)
    .error(createError.BadRequest("شناسه ی فصل صحیح نمیباشد")),
  courseId: Joi.string()
    .required()
    .regex(MongoIDPattern)
    .error(createError.BadRequest("شناسه ی دوره صحیح نمیباشد")),
  link: linkSchema,
});

const changeCourseDiscountSchema = Joi.object({
  offPrice: Joi.number()
    .required()
    .error(createError.BadRequest("قیمت وارد شده صحیح نمیباشد")),
  discount: Joi.number()
    .required()
    .allow(0)
    .error(createError.BadRequest("تخفیف وارد شده صحیح نمیباشد")),
});

module.exports = {
  addCourseSchema,
  addEpisodeSchema,
  changeCourseDiscountSchema,
};
