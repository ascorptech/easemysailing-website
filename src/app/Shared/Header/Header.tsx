"use client"

import { FaBars } from "react-icons/fa6";
import Link from "next/link";
// import { SiApollographql } from "react-icons/si";
import { RiExchangeDollarLine } from "react-icons/ri";
// import { MdNotificationAdd } from "react-icons/md";
// import { IoCart } from "react-icons/io5";

interface HeaderProps {
  sidebarToggle: boolean;
  setSidebarToggle: (toggle: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-3 shadow-md sticky top-0 z-50 ">
      <div className="ml-4">
        <FaBars
          className="text-2xl text-green-700 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </div>

      <div className="flex items-center p-[3px]">
        <div className="flex items-center gap-2 mr-9 font-semibold text-md">
          <div className="flex items-center gap-2 cursor-pointer">
            <RiExchangeDollarLine className="text-xl text-green-500 " />
            <Link href="#" className=" underline ">
              Subscription
            </Link>
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <RiExchangeDollarLine className="text-xl text-green-500 " />
            <Link href="#" className=" underline ">
              Rating By sailors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
