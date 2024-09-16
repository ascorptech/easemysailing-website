"use client";
import React, { useState } from "react";

function Wsg() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 ">
      <div
        className="flex h-10 p-3  justify-between bg-[#00965C] items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-base text-white font-medium">
          Token For Gratitude
        </span>
        {/* Dropdown arrow icon */}
        <svg
          className={`w-4 h-4 text-white transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="mt-2 p-2">
          {/* Dropdown content in a separate div */}
          <div>
            <p className="text-sm text-justify text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.<br/> Lorem
              Ipsum has been the industry's standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wsg;
// "use client";
// import React, { useState } from "react";

// function Wsg() {
//   const [openDropdowns, setOpenDropdowns] = useState({
//     main: false,
//     item1: false,
//     item2: false,
//     item3: false,
//     item4: false,
//     item5: false,
//     item9: false,
//   });

//   const toggleDropdown = (key) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   return (
//     <div className="p-4">
//       <div
//         className="flex h-10 p-3 justify-between bg-[#00965C] items-center cursor-pointer"
//         onClick={() => toggleDropdown("main")}
//       >
//         <span className="text-base text-white font-medium">
//           Token For Gratitude
//         </span>
//         <svg
//           className={`w-5 h-5 text-white transform ${
//             openDropdowns.main ? "rotate-180" : ""
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>

//       {openDropdowns.main && (
//         <div className="mt-2 p-2">
//           <div>
//             <p className="text-sm text-justify text-gray-600">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s.
//               <br />
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s.
//             </p>
//           </div>
//           <div className="grid grid-cols-3 gap-4 p-4">
//             {/* First Column */}
//             <div className="border p-4 rounded-md space-y-4">
//               {[1, 2, 3, 4].map((index) => (
//                 <div
//                   key={index}
//                   className="p-4 border bg-[#00965C] rounded-md cursor-pointer flex justify-between items-center"
//                   onClick={() => toggleDropdown(`item${index}`)}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-lg">
//                       {index === 1
//                         ? "🌟"
//                         : index === 2
//                         ? "🔥"
//                         : index === 3
//                         ? "💎"
//                         : "⚡"}
//                     </span>
//                     <span className="text-base font-medium">Title {index}</span>
//                   </div>
//                   <svg
//                     className={`w-4 h-4 text-white transform ${
//                       openDropdowns[`item${index}`] ? "rotate-180" : ""
//                     }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               ))}
//             </div>

//             {/* Second Column */}
//             <div className="border p-4 rounded-md space-y-4">
//               {[5, 6, 7, 8].map((index) => (
//                 <div
//                   key={index}
//                   className="p-4 border bg-[#00965C] rounded-md cursor-pointer flex justify-between items-center"
//                   onClick={() => toggleDropdown(`item${index}`)}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-lg">
//                       {index === 5
//                         ? "🌟"
//                         : index === 6
//                         ? "🔥"
//                         : index === 7
//                         ? "💎"
//                         : "⚡"}
//                     </span>
//                     <span className="text-base font-medium">Title {index}</span>
//                   </div>
//                   <svg
//                     className={`w-4 h-4 text-white transform ${
//                       openDropdowns[`item${index}`] ? "rotate-180" : ""
//                     }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               ))}
//             </div>

//             {/* Third Column */}
//             <div className="border p-4 rounded-md space-y-4">
//               {[9, 10, 11, 12].map((index) => (
//                 <div
//                   key={index}
//                   className="p-4 border bg-[#00965C] rounded-md cursor-pointer flex justify-between items-center"
//                   onClick={() => toggleDropdown(`item${index}`)}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-lg">
//                       {index === 9
//                         ? "🌟"
//                         : index === 10
//                         ? "🔥"
//                         : index === 11
//                         ? "💎"
//                         : "⚡"}
//                     </span>
//                     <span className="text-base font-medium">Title {index}</span>
//                   </div>
//                   <svg
//                     className={`w-4 h-4 text-white transform ${
//                       openDropdowns[`item${index}`] ? "rotate-180" : ""
//                     }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wsg;
