import { useState, createContext, useEffect, useContext } from "react";
import api from "../services/AuthService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext<any>(null);

const UserProvider = ({ children }: any) => {
  const [decodedValues, setDecodedValues] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>({
    id: "",
    firstName: "",
    lastName: "",
    role: "",
    accessToken: "",
    refreshTOken: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    const decoded = token ? jwtDecode(token) : undefined;
    setDecodedValues(decoded);
  }, []);

  // console.log("decodedValues", decodedValues);
  // console.log("decodedValues", decodedValues?.userId);

  const UserID = decodedValues?.userId;

  useEffect(() => {
    try {
      const fetchData = async () => {
        if (UserID) {
          // Check if t is not null
          api
            .get(`${process.env.REACT_APP_API_URL}api/getuser/${UserID}`)
            .then((res) => {
              console.log("dataaaaaaaaaa", res.data);
              setUserDetails({
                id: res.data.user_id,
                firstName: res.data.firstname,
                lastName: res.data.lastname,
                role: res.data.role,
                image: res.data.user_image,
                // phoneNumbers: res.data.phone[0].phone_number,
                discription: res.data.Discription,
                achivements: res.data.achivements,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
      fetchData();
    } catch (error) {
      console.error("Error:", error);
      // Handle error responses here if needed
    }
  }, [UserID]);

  return (
    <UserContext.Provider value={{ userDetails }}>
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