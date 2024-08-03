import { useNavigate } from "react-router-dom";
import { useUser } from "../context/authContext";
export const useLogout = () => {
  const user = useUser();
  const navigate = useNavigate();
  const Logout = async () => {
    localStorage.removeItem("FLamezUserAT");
    localStorage.removeItem("FLamezUserRT");
    user.setAuth(false);
    navigate("/");
  };

  return { Logout };
};
