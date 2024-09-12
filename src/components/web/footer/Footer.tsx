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
import { FiSend } from "react-icons/fi";

const Footer1 = () => {
  return (
    <footer className="w-full lg:mt-5">
      {/* Newsletter Section */}
      <div className="bg-[#00A264] py-8 px-4 md:px-10 lg:flex lg:items-center flex-wrap lg:justify-between lg:px-24 w-full">
        <div className="lg:w-[661px] mb-6 lg:mb-0">
          <h2 className="text-white text-[20px] md:text-2xl lg:text-4xl font-semibold mb-2">
            Don't miss out! Subscribe to our
          </h2>
          <h2 className="text-white text-[20px] md:text-2xl lg:text-4xl font-semibold">
            newsletter for exclusive content.
          </h2>
        </div>
        <div className="lg:w-[470px] flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="p-2 w-full rounded-md focus:outline-none"
          />
          <button className="w-full bg-black text-white px-6 py-2 rounded-md flex justify-center items-center">
            Subscribe <FiSend className="ml-2" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
