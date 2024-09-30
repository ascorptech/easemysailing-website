"use client";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import { useState } from "react";
import LoginImg from "@/components/candidate/image/LoginImg";
import LoginHeader from "@/app/Shared/LoginHeader/LoginHeader";
import Footer from "@/app/Shared/Footer/Footer";
import ForgotPassword from "../ChangePassword/ForgotPassword";
import VerificationOpt from "../ChangePassword/VerificationOpt";
import VerificationCode from "../ChangePassword/VerificationCode";
import Congratulations from "../ChangePassword/Congratulations";
import ResetPassword from "../ChangePassword/ResetPassword";
import PasswordChange from "../ChangePassword/PasswordChange";
import { LoginData } from "@/app/(candidate)/candidate/Services/loginService";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

type Props = {
  route: string;
};
const SignIn = ({ route }: Props) => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isVerificationOptOpen, setIsVerificationOptOpen] = useState(false);
  const [isVerificationCodeOpen, setIsVerificationCodeOpen] = useState(false);
  const [isCongratulationsOpen, setIsCongratulationsOpen] = useState(false);
  const [isResetPasswordOpne, setIsResetpasswordOpen] = useState(false);
  const [isPasswordChange, setIsPasswordChangeOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);


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
    // console.log(element.preventDefault());
    // Handle login logic here
    // console.log({ emailOrPhone, password });
    try {
      e.preventDefault();
      // if (!termsAccepted) {
      //   toast.error("You must accept the terms and conditions");
      //   return;
      // }

      let data = {
        email: emailOrPhone,
        password: password,
      };
      setIsLoading(true)
      const response = await LoginData(data);
      if (response?.status==200) {
        if (response?.data) {
          const token = response?.data?.token;
          const user = response?.data?.user;
          if (route == 'candidate') {
  
            document.cookie = `token=${response?.data?.token}; path=/candidate`;
            localStorage.setItem("token", token);
            localStorage.setItem("id", user?.id);
            localStorage.setItem("firstName", user?.firstName);
            localStorage.setItem("lastName", user?.lastName);
            localStorage.setItem("email", user?.email);
    
            toast.success('Login successfull')
            if (token) {
              router.push("/candidate/profilecv");
              setIsLoading(false)
            }
  
          }
          if ( route == 'recruiter'){
            document.cookie = `token=${response?.data?.token}; path=/recruiter`;
            localStorage.setItem("token", token);
            localStorage.setItem("id", user?.id);
            localStorage.setItem("firstName", user?.firstName);
            localStorage.setItem("lastName", user?.lastName);
            localStorage.setItem("email", user?.email);
    
            toast.success('Login successfull')
            if (token) {
              router.push("/recruiter/dashboard");
              setIsLoading(false)
            }
  
          }
         
  
        }
      } else {
        setIsLoading(false)
        toast.error("Invalid email or password");
      }
     
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className="flex items-center justify-center bg-[#EAEAEA]   ">
        <div className="flex w-full h-auto overflow-hidden bg-[#EAEAEA]">
          <LoginImg />

          {/* Sign-In Form Section */}
          <div className="w-full flex flex-col items-center justify-center md:w-1/2  bg-[#EAEAEA]  ">
            <h2 className="mt-12 mb-2 text-[30.52px] leading-[45.79px] font-semibold text-center">
              Sign In as {route == "candidate" ? "Candidate" : "Recruiter"}
            </h2>
            <p className="mb-4 text-center text-[18px] leading-[27px] text-[#333333] w-[70%]">
              Enter your credential to access your account.
            </p>
            <form
              // onSubmit={handleSubmit}
              className="w-[70%]"
            >
              <div className="mb-2">
                <label
                  className="block mb-2 text-[16px] leading-[24px] font-[500] text-[#333333] "
                  htmlFor="emailOrPhone"
                >
                  Enter Registered Email/Phone
                </label>
                <div className="relative flex items-center pl-8 rounded-l-md ">
                  <input
                    id="emailOrPhone"
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Email/Phone"
                    required
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-[#00A264] rounded-l-md">
                    <IoCallOutline />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-[16px] leading-[24px] font-[500] text-[#333333]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative flex items-center pl-8 rounded-l-md">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 h-[42px] leading-[21.79px] text-[16px] text-[#333333] border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />

                  <span className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-[#00A264] rounded-l-md">
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

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="w-4 h-4 text-[#00A264] border-[#333333] rounded focus:ring-[#00A264]"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="block ml-2 text-[15.26px] leading-[22.89px] text-[#00A264]"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="#"
                  className="inline-block text-[15.26px] leading-[22.89px]  text-[#00A264] align-baseline hover:text-[#00A264] "
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
              /> </div>: <button
                type="submit"
                className="block w-full px-4 h-[42px] text-white bg-[#00A264] text-center hover:bg-[#00A264] font-bold rounded focus:outline-none focus:shadow-outline "
              >
                Sign in
              </button>}
            </form>

            {route == "candidate" && (
              <p className="mt-2 text-center mb-16 text-[16px] leading-[24px]  text-[#333333] ">
                Don’t have an account?
                <Link
                  href={"/candidate/signup"}
                  className="text-[#00A264] font-[500] hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </p>
            )}
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
