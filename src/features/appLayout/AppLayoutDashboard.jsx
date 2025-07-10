import { Outlet } from "react-router";
import Header from "../mainComponent/Header";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";

function AppLayoutDashboard({ children }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="h-screen w-full flex ">
      <div className="md:w-[30vw]  md:hidden">
        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          {children}
        </Drawer>
      </div>
      <div className="hidden md:block w-[30vw]">{children}</div>
      <div className="w-full flex flex-col bg-secondary-100  overflow-y-auto">
        <Header setOpen={() => setIsOpenDrawer(true)} />
        <div className="mx-auto max-w-screen-lg w-full py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayoutDashboard;
