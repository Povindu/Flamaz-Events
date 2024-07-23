import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/login";
import { Spinner } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("user", user);
    if(user.userDetails.id !== ''){
      console.log("user", user);
      navigate("/dashboard");
    }
  }, [user]);

  const LoginFunc = async () => {
    if (email === "" || password === "") {
      toast.warn("Please fill all the fields");
      return;
    }

    setLoading(true);
    const loginMsg = await login({ email: email, password: password });
    console.log("loginMsg", loginMsg.error);
    if (loginMsg.error) {
      toast.error(loginMsg.error);
    } else {
      toast.success("Login Successful");
      console.log("user", user);
      while (user.userDetails.id == null) {
        return <div>Loading...</div>;
      }
      navigate("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div className="absolute left-[49%] top-[15%]">
          <Spinner />
        </div>
      )}
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">
              Flamez Admin Login
            </p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
              {/* <p className=" text-red-500 h-6 border border-black"> Error </p> */}
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
              />

              {/* <p className=" text-red-500 h-6 border border-black"> Error </p> */}
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                onClick={() => LoginFunc()}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>

            <div className="mt-4 flex items-center w-full text-center">
              <Link
                to="/signup"
                className="text-xs text-gray-500 capitalize text-center w-full"
              >
                Don&apos;t have any account yet?
                <span className="text-blue-700"> Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
