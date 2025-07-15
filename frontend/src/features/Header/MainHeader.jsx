import { Link } from "react-router";
import useUser from "../authentication/useUser";
import { useEffect, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { HiBars3 } from "react-icons/hi2";
import ToggleTheme from "../Theme/ToggleTheme";
import Logout from "../authentication/Logout";
import { useMediaQuery } from "react-responsive";
import { useLocationCondition } from "../../hooks/useLocatationCondition";

const MainHeader = () => {
  const { isLoading, user } = useUser();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isUserDashboardMenu, setIsShowUserDashboardMenu] = useState(false);
  const ref = useOutsideClick(() => setIsShowMenu(false), true);
  const refUser = useOutsideClick(
    () => setIsShowUserDashboardMenu(false),
    true
  );
  const isMedium = useMediaQuery({ maxWidth: "768px" });
  const isRoute = useLocationCondition("auth");

  useEffect(() => {
    setIsShowUserDashboardMenu(false);
    setIsShowMenu(false);
  }, [isMedium]);
  let role;

  if (user) {
    role = user?.role;
  }

  const openUserMenu = () => {
    setIsShowUserDashboardMenu(true);
  };

  return (
    <>
      {" "}
      <div className="flex items-center fixed top-0   justify-between w-full bg-secondary-0 left-0 right-0 z-50 border-b border-secondary-300 px-4 py-3 ">
        <div className="flex gap-x-3 sm:w-32">
          <HiBars3
            onClick={() => setIsShowMenu((prev) => !prev)}
            className="md:hidden cursor-pointer w-6 h-6 text-secondary-900"
          />
          <ToggleTheme />
        </div>

        <div className="hidden md:flex gap-x-6">
          <Link className="text-secondary-800" to={"/"}>
            خانه{" "}
          </Link>
          <Link className="text-secondary-800" to={"/about-us"}>
            درباره ما
          </Link>
          <Link className="text-secondary-800" to={"/contact-us"}>
            ارتباط با ما
          </Link>
          
            <Link className="text-secondary-800" to={"/projects"}>
              پروژه ها
            </Link>
        

          {!isRoute && (
            <div className="text-secondary-800 relative !cursor-pointer">
              {user ? (
                <button
                  onClick={openUserMenu}
                  type="button"
                  className="relative !cursor-pointer"
                >
                  {user?.name}
                </button>
              ) : (
                <Link to={"/auth"}>ورود/ ثبت نام</Link>
              )}{" "}
            </div>
          )}
        </div>
        <Link to={"/"}>
          <img
            src="/images/freelancer-logo-light.svg"
            className="h-8 invert dark:invert-0"
            alt="logo"
          />
        </Link>

        {!isRoute && (
          <div className="md:hidden text-secondary-800 relative">
            {user ? (
              <div onClick={openUserMenu} className="relative cursor">
                {user?.name}
              </div>
            ) : (
              <Link to={"/auth"}>ورود/ ثبت نام</Link>
            )}
          </div>
        )}
      </div>
      <div
        className={` fixed inset-0 backdrop-blur-xs h-screen w-screen z-20  duration-1000 transition-all ${
          isShowMenu ? "flex" : "pointer-events-none hidden"
        }`}
      ></div>
      <div
        ref={ref}
        className={`w-[250px] rounded-xl  flex flex-col gap-y-4 h-fit overflow-y-auto fixed top-10 right-5 z-60 bg-secondary-0 dark:border dark:border-secondary-300 shadow-2xl transition-all transform  ${
          isShowMenu ? "translate-y-0 " : "-translate-y-[420px]"
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
        <Link
          className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800"
          to={"/"}
        >
          خانه
        </Link>
        <Link
          className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800"
          to={"/about-us"}
        >
          درباره ما
        </Link>
        <Link
          className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800"
          to={"/contact-us"}
        >
          ارتباط با ما
        </Link>
        
          <Link
            className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800"
            to={"/projects"}
          >
            پروژه ها
          </Link>
       
        <div className="text-secondary-800 relative !cursor-pointer hover:bg-secondary-200 transition-all duration-300 p-2">
          {user ? (
            <button
              onClick={openUserMenu}
              type="button"
              className="relative !cursor-pointer"
            >
              {user?.name}
            </button>
          ) : (
            <Link to={"/auth"}>ورود/ ثبت نام</Link>
          )}{" "}
        </div>
        {user && (
          <div className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800 ">
            <Logout text={"خروج"} />
          </div>
        )}
      </div>
      {/* //////// use dashboard menu section*/}
      <div
        className={`fixed inset-0 h-screen  w-screen z-20  duration-1000 transition-all ${
          isUserDashboardMenu ? "flex" : "pointer-events-none hidden"
        }`}
      ></div>
      <div
        ref={refUser}
        className={`w-1/3 md:w-[250px] rounded-xl flex flex-col gap-y-4 h-fit overflow-y-auto fixed top-10 left-4  md:right-[48%] bg-secondary-0 dark:border dark:border-secondary-300 shadow-2xl transition-all transform z-60 ${
          isUserDashboardMenu ? "translate-y-0 " : "-translate-y-96 "
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsShowUserDashboardMenu(false);
        }}
      >
        <p
          onClick={() => setIsShowUserDashboardMenu(false)}
          className="bg-rose-400 text-white rounded-lg p-1 cursor-pointer "
        >
          بستن
        </p>

        <Link
          className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800"
          to={`${role?.toLowerCase()}/dashboard`}
        >
          داشبورد
        </Link>

        <div className="hover:bg-secondary-200 transition-all duration-300 p-2 text-secondary-800 ">
          <Logout text={"خروج"} />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
