"use client";
import Image from "next/image";
import react from "react";
import Link from "next/link";

const Signup = () => {
  const handleSubmit = () => {
    // Handle form submission
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-col md:mx-6 md:w-[94%] lg:flex-row items-center justify-center xl:justify-between  gap-2  sm:w-full sm:m-0 sm-p-0 mx-3   w-[94%] m-0 mt-2  lg:w-[100%] lg:mx-0">
      {/* Left Image Container */}
      <div className="flex-1 flex items-center lg:ml-0 justify-center mb-3 lg:mb-0 w-400 h-500   sm:mx-5">
        <img
          src="/sign2.png" // Replace with your image path
          alt="Left Image"
          // Ensure the aspect ratio is consistent
          className="object-cover w-400 h-500 "
        />
      </div>

      {/* Middle Content Container */}
      <div className="w-full  lg:w-[35%] text-center px-4 lg:mb-7 lg:px-4  ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-[#00A264] text-[24px] leading-[36px] font-[600] mb-1">
            Your smooth sailing starts from here
          </h2>
          <p className="text-[13px] leading-[19.5px] font-[400px] text-gray-700 lg:w-[440px] lg:text-center">
            Create an account or sign in. By continuing, you agree to our{" "}
            <Link href="/terms">
              <span className="text-[#00A264]">Terms of Use</span>
            </Link>{" "}
            and acknowledge our{" "}
            <Link href="/privacy-policy">
              <span className="text-[#00A264]">Privacy Policy.</span>
            </Link>
          </p>
        </div>

        <div className="-mb-2 flex justify-evenly items-center lg:mt-2 lg:w-[444px] lg:h-[75px] lg:ml-7 lg:gap-2 ">
          <button
            type="button"
            className="text-black bg-white border border-[#181919]  focus:ring-1 focus:outline-none focus:ring-[#181c1a] font-medium rounded-lg text-[13px] px-2 py-2.5 inline-flex items-center mb-2 w-full lg:w-[220px] lg:h-[45px]"
          >
            <Image
              src="/google.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="w-[33px] h-[32.8px] me-2"
            />
            Continue with Google
          </button>

          <button
            type="button"
            className="text-black bg-white  focus:ring-1 focus:outline-none focus:ring-[#111312] font-medium border border-[#08100d] rounded-lg text-[13px] px-2 py-2.5 inline-flex items-center mb-2 w-full lg:w-[220px] lg:h-[45px] "
          >
            <Image
              src="/facebook.png"
              alt="Facebook Logo"
              width={20}
              height={20}
              className="w-[33px] h-[32.8px] me-2"
            />
            Continue with Facebook
          </button>
        </div>

        <div className="flex flex-row items-center justify-center">
          <hr className="border-1 border-black mb-3 w-[209px]" data-content="OR" /><span className="text-[14px] w-[17px] h-[21px] pb-8">Or</span>
          <hr className="border-1 border-black mb-3 w-[209px]" data-content="OR" />

        </div>

        <div className=" lg:w-[444px] lg:h-[50px] flex flex-row items-center justify-center lg:ml-7 lg:mb-5">
          <form
            className="flex flex-col lg:flex-row justify-evenly items-center space-y-4 lg:space-y-0 lg:space-x-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-[268px] px-3 lg:h-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              style={{ minHeight: "2.5rem" }} // Ensures consistent height
            />
            <button
              type="submit"
              className="w-full text-sm lg:w-[165px] lg:h-[50px] bg-[#00A264] text-white rounded-lg hover:bg-[#00A264] px-1 text-center"
              style={{ minHeight: "2.5rem" }} // Ensures consistent height
            >
              Continue with Email
            </button>
          </form>
        </div>

        <div className="flex lg:flex-row lg:w-[364px] lg:[53px] justify-center lg:ml-16 items-center mt-4 lg:mt-1 space-y-0 lg:space-y-0 lg:space-x-1">
          {/* Google Play Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white w-full lg:w-auto"
          >
            <img
              src="./play.png"
              alt="Google Play"
              className="w-auto lg:w-[178px] h-[53px]"
            />
          </Link>

          {/* App Store Button */}
          <Link
            href="https://apps.apple.com/us/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white  w-full lg:w-auto"
          >
            <img
              src="./apple.png"
              alt="App Store"
              className="w-[178px] h-[53px]"
            />
          </Link>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="flex-1  flex items-center justify-center mb-5 lg:mb-0 w-400 h-500   ">
        <img
          src="/sign1.png" // Replace with your image path
          alt="Left Image"
          // Ensure the aspect ratio is consistent
          className="object-cover w-400 h-500 "
        />
      </div>
    </div>
  );
};

export default Signup;
