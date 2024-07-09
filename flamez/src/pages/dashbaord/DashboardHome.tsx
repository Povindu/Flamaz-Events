import SideBar from "./SideBar";
import DashboardNavbar from "./DashboardNavBar";
import { Outlet } from "react-router-dom";

export default function dashboardHome() {
  return (
    <div className="w-full">
      <DashboardNavbar />
      <div className="w-full h-screen hidden md:block md:float-left md:w-fit">
        <SideBar />
      </div>
      <div className="flex justify-center">
        <div className="w-full m-4 flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
