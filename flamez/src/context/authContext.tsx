import { useState, createContext, useEffect, useContext } from "react";
// import api from "../services/AuthService";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext<any>(null);

const UserProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>({
    id: "",
    firstName: "",
    lastName: "",
    login: null,
  });

  const [Auth, setAuth] = useState(false);

  const setDataFunc = () => {
    const token = localStorage.getItem("FLamezUserAT");
    console.log("token", token);

    const decoded: {
      _id?: string;
      fName?: string;
      lName?: string;
    } = token ? jwtDecode(token) : {};
    // console.log("decoded", decoded);
    if (decoded._id) {
      console.log("decoded", decoded);
      setUserDetails({
        id: decoded._id || "",
        firstName: decoded.fName || "",
        lastName: decoded.lName || "",
        login: true,
      });
    } else {
      setUserDetails({
        id: "",
        firstName: "",
        lastName: "",
        login: false,
      });
    }
  };

  useEffect(() => {
    setDataFunc();
  }, []);

  useEffect(() => {
    console.log("isAuthenticated", Auth);
    console.log("userDetails", userDetails);
    setDataFunc();
  }, [Auth]);

  return (
    <UserContext.Provider value={{ userDetails, Auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("user must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
