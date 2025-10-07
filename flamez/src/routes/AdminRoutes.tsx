import React, { useEffect } from "react";
import { useUser } from "../context/authContext";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashbaord/DashboardHome";
import { Spinner } from "@material-tailwind/react";

export default function AdminRoutes() {
  const user = useUser();
  const [status, setStatus] = React.useState<any>("default");

  const statusFunc = async () => {
    setStatus(user.userDetails.login);
  };

  useEffect(() => {
    statusFunc();
  }, [user]);

  return (
    <div>
      {status == "default" || status == null ? (
        <Spinner />
      ) : status == true ? (
        <Dashboard />
      ) : (
        <Navigate to="/login" replace />
      )}
    </div>
  );

}
