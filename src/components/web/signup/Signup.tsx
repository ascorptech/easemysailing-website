import Image from "next/image";

const images = [
  "/bg/bg1.png",
  "/bg/bg2.png",
  "/bg/bg3.png",
  "/bg/bg4.png",
  "/bg/bg5.png",
  "/bg/bg6.png",
  "/bg/bg7.png",
  "/bg/bg2.png",
  "/bg/bg9.png",
  "/bg/bg10.png",
  "/bg/bg11.png",
  "/bg/bg12.png",
];

const GalleryBackground = () => {
  return (
    <div className=" absolute inset-0 mt-16 h-screen w-full z-0 grid grid-cols-4 grid-rows-3 ">
      {images.map((src, index) => (
        <div key={index} className="relative  w-full h-full">
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className=" lg:h-[330px]  lg:w-[481px]"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryBackground;

// "use client";
// import Image from "next/image";
// import react from "react";
// import Link from "next/link";

// const Signup = () => {
//   const handleSubmit = () => {
//     // Handle form submission
//     alert("Form submitted!");
//   };

//   return (
//     <div className=" flex flex-col  w-full lg:flex-row items-center justify-center   lg:mt-16 2xl:mt-16  mt-[57px] px-2 lg:px-0  ">
//       {/* Left Image Container */}
//       <div className="flex-1 flex items-center lg:ml-0 justify-center mb-3 lg:mb-0 w-full lg:w-[553px] lg:h-[366px]  ">
//         <Image
//           src="/left.png" // Replace with your image path
//           alt="Left Image"
//           width={800}
//           height={800}
//           // Ensure the aspect ratio is consistent
//           className="object-cover w-full h-full "
//         />
//       </div>

//       {/* Middle Content Container */}
//       <div className="w-full  lg:w-[35%] text-center px-4 lg:mb-7  flex flex-col items-center justify-center  ">
//         <div className="flex flex-col justify-center items-center ">
//           <h2 className="text-[#00A264] text-[24px] leading-[36px] font-[600] mb-1">
//             Your smooth sailing starts from here
//           </h2>
//           <p className="text-[13px] leading-[19.5px] font-[400px] text-gray-700 lg:text-center ">
//             Create an account or sign in. By continuing, you agree to our
//             <Link href="/terms">
//               <span className="text-[#00A264]"> Terms of Use </span>
//             </Link>
//              and acknowledge our
//             <Link href="/privacy-policy">
//               <span className="text-[#00A264]"> Privacy Policy.</span>
//             </Link>
//           </p>
//         </div>

//         <div className="-mb-2 flex justify-center items-center lg:mt-2  md:lg:h-[75px]  gap-2 w-full  ">
//           <Link
//             href="#"
//             className="text-black bg-white border border-[#181919]  focus:ring-1 focus:outline-none focus:ring-[#181c1a] font-medium rounded-lg text-[13px] px-2 py-2.5 inline-flex items-center mb-2 w-full lg:w-[220px] lg:h-[45px]"
//           >
//             <Image
//               src="/google.png"
//               alt="Google Logo"
//               width={20}
//               height={20}
//               className="w-[33px] h-[32.8px] me-2"
//             />
//             Continue with Google
//           </Link>

//           <Link
//             href="#"
//             className="text-black bg-white  focus:ring-1 focus:outline-none focus:ring-[#111312] font-medium border border-[#08100d] rounded-lg text-[13px] px-2 py-2.5 inline-flex items-center mb-2 w-full lg:w-[220px] lg:h-[45px] "
//           >
//             <Image
//               src="/facebook.png"
//               alt="Facebook Logo"
//               width={20}
//               height={20}
//               className="w-[33px] h-[32.8px] me-2"
//             />
//             Continue with Facebook
//           </Link>
//         </div>

//         <div className="w-full flex flex-row items-center flex-shrink-0 justify-center mt-4">
//           <hr
//             className="border-1 border-black mb-3 w-[150px] sm:w-[280px] lg:w-[209px]"
//             data-content="OR"
//           />

//           <span className="text-[14px] w-[17px] h-[21px] pb-8 mx-1">Or</span>
//           <hr
//             className="border-1 border-black mb-3 w-[150px] sm:w-[280px] lg:w-[209px]"
//             data-content="OR"
//           />
//         </div>

//         <div className="w-full lg:w-[94%] flex flex-row items-center  lg:mb-5 ">
//           <form
//             className="w-full  flex flex-col lg:flex-row justify-evenly items-center space-y-4 lg:space-y-0 md:lg:space-x-4"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className=" w-full px-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               style={{ minHeight: "2.5rem" }} // Ensures consistent height
//             />
//             <Link
//               href="#"
//               className="block w-full text-sm  bg-[#00A264] text-white rounded-lg hover:bg-[#00A264] px-1 py-3  text-center"
//               style={{ minHeight: "2.5rem" }} // Ensures consistent height
//             >
//               Continue with Email
//             </Link>
//           </form>
//         </div>

      //   <div className="flex lg:flex-row lg:w-[364px] lg:[53px] justify-center  items-center mt-4 lg:mt-1 space-y-0 lg:space-y-0 lg:space-x-1">
      //     {/* Google Play Button */}
      //     <Link
      //       href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       className="flex items-center justify-center text-white w-full lg:w-auto"
      //     >
      //       <img
      //         src="./play.png"
      //         alt="Google Play"
      //         className="w-auto lg:w-[178px] h-[53px]"
      //       />
      //     </Link>

      //     {/* App Store Button */}
      //     <Link
      //       href="https://apps.apple.com/us/app/your-app-id"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       className="flex items-center justify-center text-white  w-full lg:w-auto"
      //     >
      //       <img
      //         src="./apple.png"
      //         alt="App Store"
      //         className="w-[178px] h-[53px]"
      //       />
      //     </Link>
      //   </div>
      // </div>

//       {/* Right Image Container */}
//       <div className="flex-1 flex items-center lg:ml-0 justify-center mt-3 md:lg:mt-0 lg:mb-0 w-full lg:w-[553px] lg:h-[366px]">
//         <Image
//           src="/workerhome.png" // Replace with your image path
//           alt="worker Image"
//           width={800}
//           height={800}
//           // Ensure the aspect ratio is consistent
//           className="object-cover w-full h-full "
//         />
//       </div>
//     </div>
//   );
// };

// export default Signup;
