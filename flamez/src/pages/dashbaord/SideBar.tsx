import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <Sidebar aria-label="Default sidebar example" className="w-fit m-auto">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            <Link to="/dashboard">Dashboard</Link>
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Kanban
          </Sidebar.Item> */}
          <Sidebar.Item icon={HiInbox}>
            <Link to="/dashboard/services">Services</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable}>
            <Link to="/dashboard/testamonials">Testamonials</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag}>
            <Link to="/dashboard/clients">Clients</Link>
          </Sidebar.Item>
          <div className="flex justify-center">
            <Link to="/signup">
              <Button variant="outlined" color="deep-orange" className="mt-5">
                Create Account
              </Button>
            </Link>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
