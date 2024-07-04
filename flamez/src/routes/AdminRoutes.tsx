import React, { useEffect } from "react";
import { useUser } from "../context/authContext";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashbaord/DashboardHome";

export default function AdminRoutes() {
  const user = useUser();
  const [status, setStatus] = React.useState<any>("default");

  const statusFunc = async () => {
    setStatus(user.userDetails.login);
    console.log(user.userDetails)
  };

  
  useEffect(() => {
    statusFunc();
  }, []);


  useEffect(() => {
    statusFunc();
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    console.log("status", status);
  }, [status]);

  while (status == "default" || status == null) {
    return <></>;
  }
  if (status == true) {
    return  <Dashboard />
  }
  else{
    return <Navigate to="/login" replace />
  }
}
