// import Link from "next/link";
// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// export default function header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpenRanks, setIsOpenRanks] = useState(false);

//   const [isOpenShip, setIsOpenShip] = useState(false);

//   // const handletoggle = () => {
//   //   setIsOpen(!isOpen);
//   // };

//   return (
//     <div className="flex  justify-between items-center mx-5 my-3">
//       <div className="text-xl font-bold">
//         <h1>Jobs By EMS</h1>
//       </div>
//       <ul className="flex flex-row w-auto gap-3 text-sm">
//         <li className=" ">
//           <p className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm  focus:outline-none">
//             All
//             <span className="ml-1 " onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? (
//                 <svg
//                   className="w-6 h-6 transform rotate-180 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               )}
//             </span>
//             {isOpen && (
//               <div className="fixed bg-black  bg-opacity-10 rounded-lg flex mt-36  items-center justify-start border-red-500 border z-50">
//                 <div className=" flex flex-col gap-y-2 border shadow-lg p-2 pl-3 rounded-lg bg-white text-[14px] leading-[20px] text-black border-red-500   ">
//                   <div className="flex items-center gap-2 ">
//                     <input
//                       type="checkbox"
//                       // checked={}
//                       className="border-[#green]"
//                     />
//                     <p> All</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       // checked={}
//                     />
//                     <p> Newest</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       // checked={}
//                     />
//                     <p>Oldest</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </p>
//         </li>
//         <li className="  ">
//           <Link
//             href="#"
//             className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm focus:outline-none"
//           >
//             Ranks
//             <span
//               className="ml-1 "
//               onClick={() => setIsOpenRanks(!isOpenRanks)}
//             >
//               {isOpenRanks ? (
//                 <svg
//                   className="w-6 h-6 transform rotate-180 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               )}
//             </span>
//           </Link>
//         </li>
//         <li className="">
//           <Link
//             href="#"
//             className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm  focus:outline-none"
//           >
//             Ship Type
//             <span className="ml-1 " onClick={() => setIsOpenShip(!isOpenShip)}>
//               {isOpenShip ? (
//                 <svg
//                   className="w-6 h-6 transform rotate-180 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               )}
//             </span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }


import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu/DropdownMenu";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRanks, setIsOpenRanks] = useState(false);
  const [isOpenShip, setIsOpenShip] = useState(false);

  const toggleMenu = (menuSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    menuSetter((prev) => !prev);
  };

  return (
    <div className="relative flex justify-between items-center mx-4 my-3 mr-12">
      <div className="text-xl font-bold">
        <h1>Jobs By EMS</h1>
      </div>

      <ul className="flex flex-row w-auto gap-3 text-sm relative">
        {/* All Dropdown */}
        <li className="relative">
          <button
            className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm focus:outline-none"
            onClick={() => toggleMenu(setIsOpen)}
          >
            All
            <FaChevronDown className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
          <DropdownMenu
            isOpen={isOpen}
            options={["All", "Newest", "Oldest"]}
            onToggle={() => setIsOpen(false)}
          />
        </li>

        {/* Ranks Dropdown */}
        <li className="relative">
          <Link href="#" className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm focus:outline-none" onClick={() => toggleMenu(setIsOpenRanks)}>
            Ranks
            <FaChevronDown className={`ml-1 transition-transform ${isOpenRanks ? "rotate-180" : ""}`} />
          </Link>
          <DropdownMenu
            isOpen={isOpenRanks}
            options={["Rank 1", "Rank 2", "Rank 3"]}
            onToggle={() => setIsOpenRanks(false)}
          />
        </li>

        {/* Ship Type Dropdown */}
        <li className="relative">
          <Link href="#" className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm focus:outline-none" onClick={() => toggleMenu(setIsOpenShip)}>
            Ship Type
            <FaChevronDown className={`ml-1 transition-transform ${isOpenShip ? "rotate-180" : ""}`} />
          </Link>
          <DropdownMenu
            isOpen={isOpenShip}
            options={["Cargo", "Tanker", "Cruise"]}
            onToggle={() => setIsOpenShip(false)}
          />
        </li>
      </ul>
    </div>
  );
}
