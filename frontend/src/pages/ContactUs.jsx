import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";
import Map from "../ui/Map";

function ContactUs() {
  return (
    <div className="flex flex-col gap-y-10 px-4">
      <h1 className="font-bold text-3xl lg:text-5xl my-10  text-center text-secondary-900">
        <span className="text-primary-900 font-bold "> ارتباط با ما </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center min-h-[50vh]">
        <div className=" w-full md:w-1/2 bg-secondary-100 rounded-xl shadow-2xl p-4 min-h-[400px]">
          <section className=" rounded-xl flex flex-col gap-y-4  mt-5">
            <div className="flex items-center gap-x-3">
              <HiMapPin className="w-5 h-5  text-secondary-600" />
              <p className="text-secondary-600 whitespace-nowrap ">
                نشانی دفتر :
              </p>
              <p className="text-secondary-900">
                تهران- آزادی- خیابان وحید نظری
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <HiOutlineMail className="w-5 h-5 text-secondary-600" />
              <p className="text-secondary-600"> کد پستی :</p>
              <p className="text-secondary-900">12345678</p>
            </div>
            <div className="flex items-center gap-x-3">
              <HiPhone className="w-[18px] h-[18px] text-secondary-600" />
              <p className="text-secondary-600"> پیگیری خرید و سفارشات :</p>
              <p className="text-secondary-900">09123456789</p>
            </div>
          </section>
        </div>
        <div  className="w-full md:w-1/2 bg-secondary-100 h-full rounded-xl shadow-2xl p-4 min-h-[400px]">
          <Map  />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
