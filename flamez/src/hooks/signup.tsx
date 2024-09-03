import { baseUrl } from "../constants/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();

  const Signup = async ({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
  }) => {
    const res = await axios
      .post(baseUrl + `auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("FLamezUser", JSON.stringify(response.data));

        navigate("/login");
        return { status: "success", data: response.data, error: "" };
      })
      .catch((error) => {
        return {
          status: "error",
          data: "",
          error:
            error.response.data == (undefined || "")
              ? "An error occured"
              : error.response?.data.error,
        };
      });
    return res;
  };

  return { Signup };
};
