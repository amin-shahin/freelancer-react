import { Link } from "react-router";
import useUser from "../authentication/useUser";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { HiBars3 } from "react-icons/hi2";

const MainHeader = () => {
  const { isLoading, user } = useUser();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const ref = useOutsideClick(() => setIsShowMenu(false), true);

  return (
    <>
      {" "}
      <div className="flex items-center justify-between relative px-4 py-3">
        <p
          className="md:hidden cursor-pointer"
          onClick={() => setIsShowMenu( (prev => !prev))}
        >
          <HiBars3 className="w-6 h-6 text-secondary-900"/>
        </p>
        <p>sun</p>
        <div className="hidden md:flex gap-x-6">
          <Link className="text-secondary-800" to={"/about-us"}>درباره ما</Link>
          <Link className="text-secondary-800" to={"/contact-us"}>ارتباط با ما</Link>
          <Link className="text-secondary-800" to={"/projects"}>پروژه ها</Link>
          <Link className="text-secondary-800" to={"/auth"}>ورود/ثبت نام</Link>
          <p>{user?.name}</p>
        </div>
        <p>logo</p>
      </div>
      <div
        className={` fixed inset-0 h-screen w-screen z-20  duration-1000 transition-all ${
          isShowMenu ? "flex" : "pointer-events-none hidden"
        }`}
      ></div>
      <div
        ref={ref}
        className={`w-[250px] rounded-xl flex flex-col gap-y-4 h-fit overflow-y-auto fixed top-10 right-5 bg-secondary-0 dark:border dark:border-secondary-300 shadow-2xl transition-all transform z-30 ${
          isShowMenu ? "translate-y-0 " : "-translate-y-96 "
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsShowMenu(false);
        }}
      >
        <p
          onClick={() => setIsShowMenu(false)}
          className="bg-rose-400 text-white rounded-lg p-1 cursor-pointer "
        >
          بستن
        </p>
        <Link className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800" to={"/about-us"}>درباره ما</Link>
        <Link className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800" to={"/contact-us"}>ارتباط با ما</Link>
        <Link className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800" to={"/projects"}>پروژه ها</Link>
        <Link className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800" to={"/auth"}>ورود/ثبت نام</Link>
      </div>
    </>
  );
};

export default MainHeader;
