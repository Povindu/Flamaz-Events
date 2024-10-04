import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FlamezLogo from "../../assets/flamezLogo.png";
import { useLogout } from "../../hooks/logout";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-poppins">
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center text-black hover:text-amber-500 transition-colors"
        >
          Dashboard
        </Link>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-black hover:text-amber-500 transition-colors"
        >
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/gallery"
          className="flex items-center text-black hover:text-amber-500 transition-colors"
        >
          Testamonials
        </Link>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/gallery"
          className="flex items-center text-black hover:text-amber-500 transition-colors"
        >
          Clients
        </Link>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/gallery"
          className="flex items-center text-black hover:text-amber-500 transition-colors"
        >
          Logout
        </Link>
      </Typography>
    </ul>
  );
}

function NavListOpen() {
  const { Logout } = useLogout();
  const handleLogout = () => {
    Logout();
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default function DashboardNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={FlamezLogo} alt="Flamez Logo" className="w-28 h-fit" />
        <div className="hidden md:block">
          <NavListOpen />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-black md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" stroke="black" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" stroke="black" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
