import { Link } from "react-router";
import useUser from "../authentication/useUser";

const MainHeader = () => {
  const {isLoading,user} = useUser()
  console.log(user);
  
  return (
    <div className="flex gap-x-6">
      <Link to={"/about-us"}>درباره ما</Link>
      <Link to={"/about-us"}>ارتباط با ما</Link>
      <Link to={"/about-us"}>پروژه ها</Link>
      <Link to={"/about-us"}>ورود/ثبت نام</Link>
      <p>{user?.name}</p>

    </div>
  );
};

export default MainHeader;
