import { baseUrl } from "../constants/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  // const user = useUser();
  // console.log("user", user);

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
      .post(baseUrl + `/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        console.log("data from use Signup", response.data);
        localStorage.setItem("FLamezUser", JSON.stringify(response.data));
        console.log("response", response.status);
        navigate("/login");
        return { status: "success", data: response.data, error: "" };
      })
      .catch((error) => {
        console.log("error", error.response.data);
        console.log(
          error.response.data == (undefined || "")
            ? "An error occured"
            : error.response?.data.error
        );
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
