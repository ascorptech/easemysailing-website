// import React from "react";

// // import Footer from "@/app/Shared/Footer/Footer";
// import { FiSend } from "react-icons/fi";

// const Footer1 = () => {
//   return (
//     // <footer className=" md:w-full ">
//     <footer className=" lg:mt-5 w-full md:m-0 lg:w-full">
//       {/* {/ Newsletter Section /} */}
//       <div className="bg-[#00A264] py-10 px-2 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-32 w-full ">
//         <div className="lg:w-[661px] lg:h-[118]  mb-6 lg:mb-0 ">
//           <h2 className="text-white text-[20px] lg:mb-3 lg:text-4xl md:text-4xl font-[600]">
//             Don't miss out! Subscribe to our
//           </h2>
//           <h2 className="text-white text-[20px] lg:text-4xl md:text-4xl font-[600]">
//             newsletter for exclusive content.
//           </h2>
//         </div>
//         <div className="lg:w-[470px]">
//           <div className="flex-row sm:flex-row gap-3">
//             <input
//               type="email"
//               placeholder="Enter your Email Address"
//               className="p-3 w-full lg:w-[85%] rounded-md lg:h-9 focus:outline-none mb-2"
//             />
//             <button className="w-full lg:w-[85%]  sm:w-auto bg-black text-white px-6 lg:h-9 py-3 rounded-md flex justify-center items-center">
//               Subscribe <span className="ml-2"><FiSend /></span>
//             </button>
//           </div>
//         </div>
//       </div>

//          </footer>
//   );
// };

// export default Footer1;
import React from "react";
import Image from "next/image";

const Footer1 = () => {
  return (
    <footer className="w-full bg-white">
      {/* Newsletter Section */}
      <div className="  lg:flex-row lg:justify-between lg:items-center  lg:flex    w-full">
        <div className="lg:flex lg:flex-col lg:px-5 lg:items-center  lg:w-[65%]  lg:justify-center ">
          <div className=" mb-6 lg:mb-0 py-8">
            <h2 className="text-black text-[20px] md:text-2xl lg:text-5xl font-extrabold mb-2">
              Don't miss out! Subscribe to our
            </h2>
            <h2 className="text-black text-[20px] md:text-2xl lg:text-5xl font-extrabold">
              newsletter for exclusive content.
            </h2>
          </div>
          <div className="lg:w-[570px] -ml-48 flex flex-col h-10 lg:mt-12 lg:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-2 w-full  border-2 border-[#00A264] rounded-3xl focus:outline-none"
            />
            <button className="w-full lg:w-44 text-sm bg-[#00A264] text-white px-6 py-2 rounded-3xl flex justify-center items-center">
              Subscribe
            </button>
          </div>
        </div>
        <div className="h-[420px] w-[35%]">
          <Image
            priority
            src="/ship3.png"
            alt=""
            width={470}
            height={380}
            className=" lg:h-full lg:w-full rounded-l-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
