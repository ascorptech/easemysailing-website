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
    <div className="flex flex-col md:mx-6 md:w-[94%] lg:flex-row items-center justify-center xl:justify-between  gap-2 bg-gray-100 sm:w-full sm:m-0 sm-p-0 mx-3   w-[94%] m-0 mt-2  lg:w-[99%] lg:mx-0">
      {/* Left Image Container */}
      <div className="flex-1 flex items-center justify-center mb-5 lg:mb-0 w-500 h-400   sm:mx-5">
        <img
          src="/sign2.png" // Replace with your image path
          alt="Left Image"
          // Ensure the aspect ratio is consistent
          className="object-cover w-500 h-400 "
        />
      </div>

      {/* Middle Content Container */}
      <div className="w-full lg:w-[33%] text-center px-4 lg:px-0">
        <div>
          <p className="text-[#00A264] text-lg font-semibold mb-3">
            Your smooth sailing starts from here
          </p>
          <p className="text-base tracking-normal text-gray-700 mb-3">
            Create an account or sign in. By continuing, you agree to our{" "}
            <span className="text-[#00A264]">Terms of Use</span> and acknowledge
            our <span className="text-[#00A264]">Privacy Policy.</span>
          </p>
        </div>

        <div className="mb-4 flex justify-evenly items-center">
          <button
            type="button"
            className="text-black bg-white border border-[#00A264] hover:bg-[#00A264] focus:ring-1 focus:outline-none focus:ring-[#00A264] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2 w-full lg:w-auto"
          >
            <Image
              src="/google.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="w-5 h-5 me-2"
            />
            Sign in with Google
          </button>

          <button
            type="button"
            className="text-black bg-white hover:bg-[#00A264] focus:ring-1 focus:outline-none focus:ring-[#00A264] font-medium border border-[#00A264] rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2 w-full lg:w-auto"
          >
            <Image
              src="/facebook.png"
              alt="Facebook Logo"
              width={20}
              height={20}
              className="w-5 h-5 me-2"
            />
            Sign in with Facebook
          </button>
        </div>

        <div>
          <hr className="border-1 border-black mb-3 w-full" data-content="OR" />
        </div>

        <div className="p-2">
          <form
            className="flex flex-col lg:flex-row justify-evenly items-center space-y-4 lg:space-y-0 lg:space-x-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-[60%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              style={{ minHeight: "2.5rem" }} // Ensures consistent height
            />
            <button
              type="submit"
              className="w-full text-sm lg:w-[40%] bg-[#00A264] text-white rounded-lg hover:bg-[#00A264] py-2 px-1 text-center"
              style={{ minHeight: "2.5rem" }} // Ensures consistent height
            >
              Continue with Email
            </button>
          </form>
        </div>

        <div className="flex lg:flex-row justify-evenly items-center mt-4 space-y-0 lg:space-y-0 lg:space-x-4">
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
              className="w-auto lg:w-40 h-[3rem]"
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
              className="w-auto lg:w-40 h-[3rem]"
            />
          </Link>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="flex-1 flex items-center justify-center mb-5 lg:mb-0 w-500 h-400   ">
        <img
          src="/sign1.png" // Replace with your image path
          alt="Left Image"
          // Ensure the aspect ratio is consistent
          className="object-cover w-500 h-400 "
        />
      </div>
    </div>
  );
};

export default Signup;
