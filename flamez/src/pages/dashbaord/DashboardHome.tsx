import SideBar from "./SideBar";
import DashboardNavbar from "./DashboardNavBar";
import { Outlet } from "react-router-dom";

export default function dashboardHome() {
  return (
    <div>
      <DashboardNavbar />
      <div className="w-full h-screen hidden md:block md:float-left md:w-fit">
        <SideBar />
      </div>
      <div className="w-full md:w-fit md:float-left">
        <Outlet />
      </div>
    </div>
  );
}
