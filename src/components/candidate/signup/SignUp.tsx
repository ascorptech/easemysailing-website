// import { Link } from "react-router-dom";
"use client";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

import { GoEye } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { FaPhone } from "react-icons/fa";

import { useState } from "react";
// import LoginImg from "../Login/LoginImg";
// import LoginImg from "../LoginImg";
import LoginImg from "../image/LoginImg";
// import LoginHeader from "@Shared/LoginHeader/LoginHeader";
import LoginHeader from "@/app/Shared/LoginHeader/LoginHeader";
// import Footer from "@Shared/Footer/Footer";
import Footer from "@/app/Shared/Footer/Footer";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [cPassword, setCpassword] = useState("");
  const [showCpassword, setShowCpassword] = useState(false);

  const [error, setError] = useState("");

  const validatePasswords = () => {
    if (password !== cPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validatePasswords();
    if (!error) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className=" flex items-center justify-center bg-[#EAEAEA]">
        <div className="bg-white overflow-hidden flex w-full h-auto">
          {/* Illustration Section */}
          {/* <div className="w-1/2 hidden md:flex items-center justify-center  bg-gray-100">
          <img
            src="./Images/user.jpg"
            alt="Sign In Illustration"
            className="w-full h-[517px] object-cover"
          />
        </div> */}

          <LoginImg />

          {/* Sign-Up Form Section */}
          <div className="w-full md:w-1/2 p-1 pr-3 pl-6 bg-[#EAEAEA]  ">
            <h2 className="text-xl font-bold  text-center">
              Sign In as Candidate
            </h2>
            <p className="text-gray-600  text-center">
              Enter your credential to access your account.
            </p>
            <form
              onSubmit={handleSubmit}
              className="items-center p-2 pr-2 pl-2 ml-20 w-full max-w-lg "
            >
              <div className="mb-1 flex"> 
                <div > <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="userName"
                >
                  First Name
                </label>
                <div className="relative flex items-center pl-8 ">
                  <input
                    id="userName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter First Name"
                    required
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <FaRegUser />
                  </span>
                </div></div>
               

                <div className="mb-1 ml-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <div className="relative flex items-center pl-8 ">
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Last Name"
                      required
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                      <FaRegUser />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="email"
                >
                  Enter Registered Email
                </label>
                <div className="relative flex items-center pl-8 ">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineEmail />
                  </span>
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="relative flex items-center pl-8 ">
                  <input
                    id="phone"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Phone"
                    required
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <FaPhone />
                  </span>
                </div>
              </div>

              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative pl-8">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineLock />
                  </span>
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <GoEye />
                  </span>
                </div>
              </div>

              <div className="mb-[6px]">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="Password"
                >
                  Confirm Password
                </label>
                <div className="relative pl-8">
                  <input
                    id="Password"
                    type={showCpassword ? "text" : "password"}
                    value={cPassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white rounded-l-md">
                    <MdOutlineLock />
                  </span>
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowCpassword(!showCpassword)}
                  >
                    <GoEye />
                  </span>
                </div>
              </div>

              <div>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-[#00A264] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>

                <div className="flex items-center justify-between">
                  <div className="flex items-center mt-2">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 text-[#00A264] focus:ring-green-800 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="You agree to our"
                      className="ml-2 block  text-sm "
                    >
                      You agree to our
                      <Link href="/demo" className="text-[#00A264]">
                        Teams & Conditions
                      </Link>
                      and{" "}
                      <Link href="#" className="text-[#00A264]">
                        Privacy Policy.
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <p className=" text-center font-semibold">
              Already have on account?
              <Link href="/" className="text-[#00A264] ">
                Sign In as Candidate
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
