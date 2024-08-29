"use client";
import Image from "next/image";
import react from "react";

const Signup = () => {
  const handleSubmit = () => {
    //  error.preventDefault();
    // Handle form submission
    alert("Form submitted!");
  };
  return (
    <div className=" flex items-center justify-between p-2 m-3 gap-5 bg-gray-100 border-2 border-grey ">
      {/* Left Image Container */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/sign2.png" // Replace with your image path
          alt="Left Image"
          width={500} // Set to match the height
          height={500} // Ensure the aspect ratio is consistent
          className="object-cover w-full"
        />
      </div>

      {/* Middle Content Container */}
      <div className=" m-2  justify-center text-center w-[33%]">
        <div>
          <p className="text-green-700 text-lg font-semibold mb-3">
            Your smooth salling starts from here
          </p>
          <p className="text-sm text-gray-700 mb-3 ">
            <span className="mt-3">
              Create an account or sign in, By contiuing,you agree to our
            </span>{" "}
            <span className="text-green-700">Terms of use</span> and acknowledge
            Our <span className="text-green-700">Privacy Policy.</span>
          </p>
        </div>

        <div>
          <button
            type="button"
            className="text-black bg-white border border-green-800 hover:bg-green-600 focus:ring-1 focus:outline-none focus:ring-green-8 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-800 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>

          <button
            type="button"
            className="text-black bg-white hover:bg-green-600 focus:ring-1 focus:outline-none focus:ring-green-8 font-medium border border-green-800 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-800 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Facebook
          </button>

          <div className="">
            <hr
              className=" border-1 mt-2 border-black mb-3 flex text-center items-center w-[95%] ml-1.5"
              data-content="OR"
            />
          </div>
          {/* <span className="relative mb-9">or</span> */}
          <div>
            <div className="  p-1 bg-white mt-2 mx-auto">
              <form
                className="flex items-center space-x-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" px-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className=" w-[11rem] h-[2.5rem] bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Continue with Email
                </button>
              </form>
            </div>

            <div className="flex space-x-4 justify-center mt-4">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  text-white rounded-lg shadow-md hover:bg-gray-900"
              ><img src="./play.png" alt="image not found" className="w-40 h-[2rem]]"/>
               
              </a>

              {/* App Store Button */}
              <a
                href="https://apps.apple.com/us/app/your-app-id"
                target="/play.png"
                rel="noopener noreferrer"
                className="flex items-center mr-2  text-white rounded-lg shadow-md hover:bg-gray-800"
              >
                <img src="./apple.png" alt="image not found" className="w-40 h-[3rem]"/>
                  
                
                
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="flex-1 flex items-center justify-center ">
        {" "}
        {/*border-2 border-red-500 w-full*/}
        <Image
          src="/sign1.png" // Replace with your image path
          alt="Right Image"
          width={500} // Set to match the height
          height={500} // Ensure the aspect ratio is consistent
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Signup;
