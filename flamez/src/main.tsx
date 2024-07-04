import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/authContext";


import RoutesPath from "./routes/route";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
        <RoutesPath/>
    </UserProvider>
  </React.StrictMode>
);
