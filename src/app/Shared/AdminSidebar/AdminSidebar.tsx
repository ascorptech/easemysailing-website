"use client";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { SiElementor } from "react-icons/si";
import { MdMapsHomeWork } from "react-icons/md";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface sidebarProps {
  sidebarToggle?: boolean;
}

const AdminSidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {
  const pathname = usePathname();
  console.log("path", pathname);
  return (
    <div
      className={`${
        sidebarToggle ? " hidden " : " block "
      } w-64  bg-gray-100 fixed top-0  h-screen `}
    >
      

      <div className="w-44 h-12 sm:w-52 sm:h-[53px] ml-3 ">
        <Link href="#">
          <Image
            src="/images/logo_1.png"
            alt="EaseMySailing Logo"
            className="object-contain h-full w-full "
            width={800}
            height={800}
          />
        </Link>
      </div>

      <ul className="ml-3 mt-[12px] font-bold text-sm ">
        <li
          className={
            pathname === "/admin/dashboard"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/admin/dashboard" className="">
            <MdDashboard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Dashboard
          </Link>
        </li>
        <li
          className={
            pathname === "/admin/resource-management"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/admin/resource-management">
            <IoBag className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />{" "}
            Resources Management
          </Link>
        </li>
        <li
          className={
            pathname === "/admin/podcast-management"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/admin/podcast-management">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Podcast Management
          </Link>
        </li>

       
        <li className=" rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="/admin">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 mt-[-5px] " />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
