import Home from "../pages/home/home";
import Login from "../pages/login/loginPage";
import Signup from "../pages/Signup/SignupPage";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/services/Services";
import Events from "../pages/events/events";

import DashServices from "../pages/dashbaord/DashboardPages/ServiceComp/DashServices";
import DashEvents from "../pages/dashbaord/DashboardPages/EventComp/DashEvents";
import DashTestimonials from "../pages/dashbaord/DashboardPages/TestimonialsComp/DashTestimonial";


import CreateService from "../pages/dashbaord/DashboardPages/ServiceComp/CreateService";
import EditService from "../pages/dashbaord/DashboardPages/ServiceComp/EditService";

import CreateEvent from "../pages/dashbaord/DashboardPages/EventComp/CreateEvent";
import EditEvent from "../pages/dashbaord/DashboardPages/EventComp/EditEvent";

import CreateTestimonial from "../pages/dashbaord/DashboardPages/TestimonialsComp/CreateTestimonial";
import EditTestimonial from "../pages/dashbaord/DashboardPages/TestimonialsComp/EditTestimonial";
import ContactUs from "../pages/contactUs/contatcUs";

import AdminRoutes from "./AdminRoutes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "services", element: <Services /> },
      { path: "events", element: <Events /> },
      { path: "contactus", element: <ContactUs /> },
      {
        path: "dashboard",
        children: [
          {
            path: "",
            element: <AdminRoutes />,
            children: [
              { path: "services", element: <DashServices /> },
              { path: "createService", element: <CreateService /> },
              { path: "editService/:id", element: <EditService /> },
  
              { path: "events", element: <DashEvents /> },
              { path: "createEvent", element: <CreateEvent /> },
              { path: "editEvent/:id", element: <EditEvent /> },
              
              { path: "testimonials", element: <DashTestimonials /> },
              { path: "createTestimonial", element: <CreateTestimonial /> },
              { path: "editTestimonial/:id", element: <EditTestimonial /> },
            ],
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
