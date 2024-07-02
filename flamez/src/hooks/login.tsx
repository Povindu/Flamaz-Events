import { useUser } from "../context/AuthContext";
import { baseUrl } from "../constants/constants";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import Cookies from "js-cookie";

export const useLogin = () => {
  const { context } = useUser();

  const login = async ({
    email,
    password,
  }: {
    email: String;
    password: String;
  }) => {
    console.log(email, password);

    try {
      const res = await axios.post(baseUrl + `/login`, {
        email,
        password}).then((res) => {

        }).catch((err) => {

        })

      Cookies.set("token", res.data.token, {
        expires: 1,
        httpOnly: false,
        secure: true,
      });

      const data = await response.json();
      console.log("data from use login", data);
      console.log("response", response.status);
      if (response.status === 200) {
        await AsyncStorage.setItem("access-token", data.accessToken);
        await AsyncStorage.setItem("refresh-token", data.refreshToken);

        // console.log("AT: " + (await AsyncStorage.getItem("access-token")));
        // console.log("RT: " + (await AsyncStorage.getItem("refresh-token")));

        dispatch({ type: "LOGIN", payload: jwtDecode(data.accessToken) });
        return { status: "success", data };
      } else if (data.error === "User not verified") {
        return { status: "notVerified" };
      } else if (data.error === "Medical Id not verified") {
        return { status: "notVerified" };
      } else if (data.error === "Invalid password or email") {
        return { status: "invalid" };
      } else if (data.error === "Invalid email") {
        return { status: "invalid" };
      } else {
        return { status: "failed" };
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return { status: "error", error };
    }
  };

  return { login };
};
