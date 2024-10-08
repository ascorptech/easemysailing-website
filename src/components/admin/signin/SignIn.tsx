"use client";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import { useState } from "react";
import LoginImg from "@/components/candidate/image/LoginImg";
import LoginHeader from "@/app/Shared/LoginHeader/LoginHeader";
import Footer from "@/app/Shared/Footer/Footer";
import ForgotPassword from "@/components/candidate/ChangePassword/ForgotPassword";
import VerificationOpt from "@/components/candidate/ChangePassword/VerificationOpt";
import VerificationCode from "@/components/candidate/ChangePassword/VerificationCode";
import Congratulations from "@/components/candidate/ChangePassword/Congratulations";
import ResetPassword from "@/components/candidate/ChangePassword/ResetPassword";
import PasswordChange from "@/components/candidate/ChangePassword/PasswordChange";
import { postReq } from "@/RootServices";
import { LoginData } from "@/app/(admin)/admin/Services/loginService";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const SignIn = () => {
  const route = useRouter();
  // const [emailOrPhone, setEmailOrPhone] = useState("ems@admin.com");
  const [emailOrPhone, setEmailOrPhone] = useState(
    ""
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isVerificationOptOpen, setIsVerificationOptOpen] = useState(false);
  const [isVerificationCodeOpen, setIsVerificationCodeOpen] = useState(false);
  const [isCongratulationsOpen, setIsCongratulationsOpen] = useState(false);
  const [isResetPasswordOpne, setIsResetpasswordOpen] = useState(false);
  const [isPasswordChange, setIsPasswordChangeOpen] = useState(false);

  const openForgotPassword = () => {
    setIsForgotPasswordOpen(true);
  };

  const closeForgotPassword = () => {
    setIsForgotPasswordOpen(false);
  };

  const openVerificationOpt = () => {
    setIsVerificationOptOpen(true);
    closeForgotPassword(); // Close the Forgot Password modal when opening Verification Options
  };

  const closeVerificationOpt = () => {
    setIsVerificationOptOpen(false);
  };

  const openVerificationCode = () => {
    setIsVerificationCodeOpen(true);
    closeVerificationOpt(); // Close the Verification Options modal when opening Verification Code
  };

  const closeVerificationCode = () => {
    setIsVerificationCodeOpen(false);
  };

  const openCongratulations = () => {
    setIsCongratulationsOpen(true);
    closeVerificationCode();
  };

  const closeCongratulations = () => {
    setIsCongratulationsOpen(false);
  };
  const openResetPassword = () => {
    setIsResetpasswordOpen(true);
    closeCongratulations();
  };
  const closeResetPassword = () => {
    setIsResetpasswordOpen(false);
  };

  const openPasswordChange = () => {
    setIsPasswordChangeOpen(true);
    closeResetPassword();
  };
  const closePasswordChange = () => {
    setIsPasswordChangeOpen(false);
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setIsLoading(true)
      let data = {
        email: emailOrPhone,
        password: password,
        // rememberMe: true,
      };

      const response = await LoginData(data);
      if (response?.data) {
       
        if (response?.status ==200) {
          const token = response?.data?.token;
          document.cookie = `token=${response?.data?.token}; path=/admin`;
          localStorage.setItem("token", token);
          route.push("/admin/dashboard");
          toast.success('Login Successfull')
          setIsLoading(false)
        }else{
          toast.error('Invalid Email or Password')
          setIsLoading(false)
        }
        
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="flex w-full h-auto overflow-hidden bg-white">
          <LoginImg />

          {/* Sign-In Form Section */}
          <div className="w-full md:w-1/2 p-7 bg-[#EAEAEA]  ">
            <h2 className="mt-8 mb-2 text-2xl font-bold text-center">
              Sign In as {"Admin"}
            </h2>
            <p className="mb-4 text-center text-gray-600">
              Enter your credential to access your account.
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg p-6 sm:ml-10 "
            >
              <div className="mb-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Enter Registered Email
                </label>
                <div className="relative flex items-center pl-8 ">
                  {/* <span className="p-2 bg-green-600 border-2"></span> */}
                  <input
                    id="email"
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Email/Phone"
                    required
                  />
                  {/* <QuillEditor/> */}
                  <span className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-[#00A264] rounded-l-md">
                    <IoCallOutline />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
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
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-[#00A264] rounded-l-md">
                    <MdOutlineLock />
                  </span>
                  {/* <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    
                  > */}
                  <GoEye
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  {/* </span> */}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="w-4 h-4 text-[#00A264] border-gray-300 rounded focus:ring-green-800"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="block ml-2 text-sm text-[#00A264]"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="#"
                  className="inline-block text-sm text-[#00A264] align-baseline hover:text-green-800 "
                  onClick={openForgotPassword}
                >
                  Forgot Password?
                </Link>
              </div>

              {isLoading ? <div className="block w-full px-4 py-2 text-white bg-[#00A264] text-center hover:bg-[#00A264] font-bold rounded focus:outline-none focus:shadow-outline "><ClipLoader
                color={'#ffffff'}
                loading={isLoading}
                cssOverride={{
                  height:'25px',
                  width:'25px'
                }}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> </div>:<button
                type="submit"
                className="block w-full px-4 py-2 text-white bg-[#00A264] text-center hover:bg-[#00A264] font-bold rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>}
            </form>
          </div>
        </div>

        {/* Modals */}
        <ForgotPassword
          isOpen={isForgotPasswordOpen}
          onClose={closeForgotPassword}
          onSubmit={openVerificationOpt}
        />
        <VerificationOpt
          isOpen={isVerificationOptOpen}
          onClose={closeVerificationOpt}
          onSubmit={openVerificationCode}
        />
        <VerificationCode
          isOpen={isVerificationCodeOpen}
          onClose={closeVerificationCode}
          onSubmit={openCongratulations}
        />
        <Congratulations
          isOpen={isCongratulationsOpen}
          onClose={closeCongratulations}
          onSubmit={openResetPassword}
        />
        <ResetPassword
          isOpen={isResetPasswordOpne}
          onClose={closeResetPassword}
          onSubmit={openPasswordChange}
        />
        <PasswordChange
          isOpen={isPasswordChange}
          onClose={closePasswordChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
