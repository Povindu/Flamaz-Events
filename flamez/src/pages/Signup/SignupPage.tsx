import React, { useState, useEffect } from "react";
import { useSignup } from "../../hooks/signup";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const { Signup } = useSignup();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const SignupFunc = async () => {
    if (
      firstName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      lastName === ""
    ) {
      toast.warn("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
      return;
    }

    setLoading(true);
    const SignupMsg = await Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    // console.log("SignupMsg", SignupMsg.error);

    if (SignupMsg.error) {
      toast.error(SignupMsg.error);
    } else {
      toast.success("Signup Successful");
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
              Flamez Admin Signup
            </p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
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
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
              </div>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button
                onClick={() => SignupFunc()}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Signup
              </button>
            </div>

            <div className="mt-4 flex items-center w-full text-center">
              =
              <Link
                to="/login"
                className="text-xs text-gray-500 capitalize text-center w-full"
              >
                Already a User?
                <span className="text-blue-700"> Login</span>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignupPage;
