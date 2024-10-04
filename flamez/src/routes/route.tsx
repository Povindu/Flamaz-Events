import Home from "../pages/home/home";
import Login from "../pages/login/loginPage";
import Signup from "../pages/Signup/SignupPage";
import Gallery from "../pages/gallery/galleryPage";
import DashServices from "../pages/dashbaord/DashboardPages/ServiceComp/DashServices";
import DashTestimonials from "../pages/dashbaord/DashboardPages/TestimonialsComp/DashTestimonial";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/services/Services";

import CreateService from "../pages/dashbaord/DashboardPages/ServiceComp/CreateService";
import EditService from "../pages/dashbaord/DashboardPages/ServiceComp/EditService";
import CreateTestimonial from "../pages/dashbaord/DashboardPages/TestimonialsComp/CreateTestimonial";
import EditTestimonial from "../pages/dashbaord/DashboardPages/TestimonialsComp/EditTestimonial";

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
      { path: "gallery", element: <Gallery /> },
      { path: "services", element: <Services /> },
      {
        path: "dashboard",
        children: [
          {
            path: "",
            element: <AdminRoutes />,
            children: [
              { path: "services", element: <DashServices /> },
              // { path: "clients", element: <DashClients /> },
              { path: "createService", element: <CreateService /> },
              { path: "editService/:id", element: <EditService /> },
              
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
