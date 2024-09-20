import Link from 'next/link';
import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function header() {
  return (
    <div className="flex flex-row justify-between items-center mx-5 my-3">
      <div className="text-xl font-bold">
        <h1>Jobs By EMS</h1>
      </div>
      <ul className="flex flex-row w-auto gap-3 text-sm">
        <li className=" ">
          <Link
            href="#"
            className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm  focus:outline-none"
          >
            All
            <FaChevronDown className="ml-2 h-4 w-4" />
          </Link>
        </li>
        <li className="  ">
          <Link
            href="#"
            className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm focus:outline-none"
          >
            Ranks
            <FaChevronDown className="ml-2 h-4 w-4" />
          </Link>
        </li>
        <li className="">
          <Link
            href="#"
            className="inline-flex justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm  focus:outline-none"
          >
            Ship Type
            <FaChevronDown className="ml-2 h-4 w-4" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
