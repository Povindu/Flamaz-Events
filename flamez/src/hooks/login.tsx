import { baseUrl } from "../constants/constants";
import axios from "axios";
import { useUser } from "../context/authContext";

export const useLogin = () => {
  const user = useUser();

  const login = async ({
    email,
    password,
  }: {
    email: String;
    password: String;
  }) => {
    const res = await axios
      .post(baseUrl + `auth/signin`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "FLamezUserAT",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "FLamezUserRT",
          JSON.stringify(response.data.refreshToken)
        );

        user.setAuth(true);

        return { status: "success", data: response.data, error: "" };
      })
      .catch((error) => {
        console.log(error.response);

        if (error.response.status === 404) {
          return {
            status: "error",
            data: "",
            error: "Internal Server Error",
          };
        }
        return {
          status: "error",
          data: "",
          error:
            error.response == undefined
              ? "An error occured"
              : error.response?.data.error,
        };
      });
    return res;
  };

  return { login };
};
