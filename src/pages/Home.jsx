import {
  HiOutlinePresentationChartBar,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import CardInfo from "../ui/CardInfo";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCommandLine,
  HiOutlineLanguage,
  HiOutlinePaintBrush,
  HiOutlinePhoneArrowDownLeft,
} from "react-icons/hi2";
import HorizontalScroll from "../features/Home/HorizontalScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import OurTeam from "../features/Home/OurTeam";
import Slider from "../ui/Slider";
import { useProjects } from "../features/projects/useProjects";

function Home() {
  const { projects, isLoading } = useProjects();
  console.log(projects);
  
  useGSAP(() => {
    gsap.to(".text-top-site", {
      opacity: 1,
      y: 0,
      duration: 2,
    });

    gsap.to(".why-us", {
      opacity: 1,
      y: 0,
      // duration: 2,
      scrollTrigger: {
        trigger: ".why-us",
        start: "top 30%",
        end: "top center",
        scrub: 2,
      },
    });

    gsap.from("#card-gsap", {
      duration: 0.8,
      ease: "power2.inOut",
      y: -30,
      scale: 1.2,
      stagger: 0.3,
    });

    gsap.fromTo(
      "#category-item",
      {
        duration: 0.8,
        ease: "power2.inOut",
        opacity: 0.5,
        x: 30,
        scale: 0.6,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.3,

        scrollTrigger: {
          trigger: "#category-item",
          scrub: true,
          start: "bottom bottom",
          end: "top top",
        },
      }
    );
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg text-secondary-900 h-full w-full min-h-screen overflow-x-hidden">
      <div>
        <h1 className="text-top-site opacity-0 translate-y-12 text-secondary-900 font-black lg:text-4xl md:text-3xl  text-xl !my-20">
          پروژه ات رو به حرفه ای ها بسپار
        </h1>
        <p className="text-lg mt-4 mb-10 text-start text-secondary-700">
          ما به شما این امکان را می‌دهیم که ایده‌هایتان را به واقعیت تبدیل کنید
          و به فریلنسرها این فرصت را می‌دهیم که مهارت‌های خود را به نمایش
          بگذارند. به جمع ما بپیوندید و تجربه‌ای جدید از همکاری‌های آنلاین را
          آغاز کنید! همین امروز ثبت‌نام کنید و پروژه‌های خود را شروع کنی
        </p>
        <img
          src={"/images/output7.jpg"}
          className="rounded-xl object-cover object-center"
          alt="banner"
        />
      </div>

      <div className="px-4 mt-20">
        <h2 className="text-start text-secondary-700 text-2xl font-bold mb-20">
          مزایای استفاده از سایت
        </h2>

        <div className="grid grid-cols-1  lg:grid-cols-4 place-items-center gap-10 md:grid-cols-2 flex-wrap ">
          <CardInfo
            id="card-gsap"
            Icon={HiOutlineShieldCheck}
            text={"پرداخت امن"}
          />
          <CardInfo
            id="card-gsap"
            Icon={HiOutlinePresentationChartBar}
            text={" سیستم امتیازدهی کاربران"}
          />
          <CardInfo
            id="card-gsap"
            Icon={HiOutlinePhoneArrowDownLeft}
            text={"پشتیبانی ۲۴/۷"}
          />
          <CardInfo
            id="card-gsap"
            Icon={HiOutlineSparkles}
            text={" ابزارهای مدیریت پروژه"}
          />
        </div>
      </div>

      <HorizontalScroll />

      <div>
        <h2 className="text-start text-secondary-700 text-2xl font-bold mb-20">
          دسته‌بندی پروژه‌ها
        </h2>

        <div className="grid grid-cols-1  lg:grid-cols-4 place-items-center gap-10 md:grid-cols-2 flex-wrap ">
          <CardInfo
            id="category-item"
            Icon={HiOutlinePaintBrush}
            text={"طراحی و گرافیک"}
          />
          <CardInfo
            id="category-item"
            Icon={HiOutlineCommandLine}
            text={"برنامه نویسی"}
          />
          <CardInfo
            id="category-item"
            Icon={HiOutlineLanguage}
            text={" ترجمه"}
          />
          <CardInfo
            id="category-item"
            Icon={HiOutlineChatBubbleBottomCenterText}
            text={"تولید محتوا "}
          />
        </div>
      </div>

      <div className="text-start why-us opacity-0 -translate-y-20">
        <h2 className="text-start text-secondary-700 text-3xl font-bold mb-10">
          چرا ما؟
        </h2>
        <p>
          ما به شما این امکان را می‌دهیم که به راحتی فریلنسرهای با استعداد و با
          تجربه را پیدا کنید و از خدمات آن‌ها بهره‌مند شوید. با ما، شما
          می‌توانید:
        </p>
        <p className=" w-3/4">
          <span className="font-bold my-4 text-xl text-secondary-800 bg-secondary-100 dark:bg-secondary-200 p-2 rounded-xl block w-fit">
            انتخاب هوشمند فریلنسر
          </span>
          <span className="text-secondary-700">
            سیستم امتیازدهی ما به کارفرماها این امکان را می‌دهد که فریلنسرهای
            باکیفیت را بر اساس نظرات و امتیازهای قبلی انتخاب کنند. این ویژگی به
            شما کمک می‌کند تا بهترین گزینه را برای پروژه‌تان پیدا کنید و از
            کیفیت کار اطمینان حاصل کنید.
          </span>
        </p>
        <p>
          <span className="font-bold my-4 text-xl text-secondary-800 bg-secondary-100 dark:bg-secondary-200 p-2 rounded-xl block w-fit">
            پرداخت امن و مطمئن
          </span>
          <span className="text-secondary-700 ">
            ما به امنیت مالی شما اهمیت می‌دهیم. با سیستم پرداخت امن ما،
            می‌توانید با اطمینان خاطر به فریلنسرها پرداخت کنید و از خدمات آن‌ها
            بهره‌مند شوید. تمامی تراکنش‌ها تحت نظارت و محافظت قرار دارند تا شما
            با خیال راحت به انجام کارهایتان بپردازید.
          </span>
        </p>
        <p>
          <span className="font-bold my-4 text-xl text-secondary-800 bg-secondary-100 dark:bg-secondary-200 p-2 rounded-xl block w-fit">
            پشتیبانی 24 ساعته
          </span>
          <span className="text-secondary-700 ">
            تیم پشتیبانی ما در هر ساعت از شبانه‌روز آماده پاسخگویی به سوالات و
            نیازهای شماست. ما در کنار شما هستیم تا تجربه‌ای بی‌نظیر از همکاری
            آنلاین را داشته باشید و در هر مرحله از پروژه، شما را همراهی کنیم.
          </span>
        </p>
        <p>
          <span className="font-bold my-4 text-xl text-secondary-800 bg-secondary-100 dark:bg-secondary-200 p-2 rounded-xl block w-fit">
            تنظیم ددلاین و مبلغ
          </span>
          <span className="text-secondary-700 ">
            شما می‌توانید به راحتی ددلاین و مبلغ پروژه‌های خود را تعیین کنید و
            با فریلنسرها به توافق برسید. این انعطاف‌پذیری به شما کمک می‌کند تا
            پروژه‌های خود را به بهترین شکل مدیریت کنید و زمان و هزینه‌های خود را
            بهینه کنید.
          </span>
        </p>
      </div>

      <OurTeam />
      <Slider slidesData={projects} />
    </div>
  );
}

export default Home;
