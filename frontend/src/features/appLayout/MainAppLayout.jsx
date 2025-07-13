import { Link, Outlet } from "react-router";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";

function MainAppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-secondary-800 bg-red-100">
      </div>
      <MainHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="text-secondary-800">
        <Footer/>
      </div>
    </div>
  );
}

export default MainAppLayout;
