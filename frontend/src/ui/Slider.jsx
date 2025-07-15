import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { toPersianNumbersWithComma } from "../utils/convertToPersianNumber";
import { Link } from "react-router";
const Slider = ({ slidesData }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="relative">
      <h2 className="badge text-4xl font-bold my-10 text-secondary-700 text-start w-full">
        آخرین پروژه ها
      </h2>
      <Swiper
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        loop
        className="mySwiper"
      >
        {slidesData?.slice(0, 5).map((item) => (
          <SwiperSlide>
            <p className="text-secondary-900 font-bold text-xl mb-8">
              {item?.title}
            </p>

            <div className="flex flex-col gap-y-2">
              <p className="text-base text-secondary-700">
                دسته بندی : {item?.category?.englishTitle}
              </p>
              <p className="text-secondary-800  wrap-anywhere text-sm">
                {item?.description}
              </p>
              <p className="mt-3">
                {item.tags &&
                  item.tags.map((tag) => (
                    <span className="badge badge--secondary p-2 mx-1 text-xs">
                      {tag}
                    </span>
                  ))}
              </p>
            </div>
            <p className="btn btn--outline mt-2">
              {toPersianNumbersWithComma(item?.budget)} تومان
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to={"/projects"} className="projects cursor-pointer z-10 ">
        مشاهده همه
      </Link>
    </div>
  );
};

export default Slider;
