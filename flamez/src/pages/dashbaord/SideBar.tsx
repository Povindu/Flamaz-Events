import { Sidebar } from "flowbite-react";
import { HiInbox, HiHome, HiTable } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Component() {
  return (
    <Sidebar aria-label="Default sidebar example" className="w-fit m-auto" >
      <Sidebar.Items >
        <Sidebar.ItemGroup >
          <Sidebar.Item icon={HiInbox}>
            <Link to="/dashboard/services">Services</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable}>
            <Link to="/dashboard/testimonials">Testimonials</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiHome}>
            <Link to="/dashboard/events">Events</Link>
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
