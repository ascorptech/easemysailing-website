

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
import Image from "next/image";
import { usePathname } from "next/navigation";

interface sidebarProps {
  sidebarToggle: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {
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
            priority
            src="/images/logo_1.png"
            alt="EaseMySailing Logo"
            className="object-contain h-full w-full "
            width={800}
            height={800}
          />
        </Link>
      </div>

      <ul className="ml-3 mt-[1px] font-bold text-sm ">
        <li
          className={
            pathname === "/recruiter/dashboard"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
        >
          <Link href="/recruiter/dashboard" className="">
            <MdDashboard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Dashboard
          </Link>
        </li>
        <li
          className={
            pathname === "/recruiter/profile"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
        >
          <Link href="/recruiter/profile">
            <IoBag className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />{" "}
            Company Profile
          </Link>
        </li>
        <li
          className={
            pathname === "/recruiter/subscription"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
        >
          <Link href="/recruiter/subscription">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Subscription
          </Link>
        </li>

        <li className={
            pathname === "/recruiter/jobposting"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
          >
          <Link href="/recruiter/jobposting">
            <PiShoppingBagOpenFill className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Job Posting
          </Link>
        </li>
        <li className={
            pathname === "/recruiter/ship"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
          >
          <Link href="/recruiter/ship">
            <MdMenuBook className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Ships
          </Link>
        </li>
        <li
          className={
            pathname === "/recruiter/wsg"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
        >
          <Link href="/recruiter/wsg">
            <SiElementor className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            WSG
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-[#00A264] hover:text-white">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Candidates Listing
          </Link>
        </li>
        <li className={
            pathname === "/recruiter/emsmatch"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }>
          <Link href="/recruiter/emsmatch">
            <MdMapsHomeWork className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMS Matches
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-[#00A264] hover:text-white">
          <Link href="#">
            <MdOutlineCardGiftcard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </Link>
        </li>
       
        <li className="mb-2 rounded py-2  hover:bg-[#00A264] hover:text-white">
          <Link href="#">
            <RiExchangeDollarLine className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Downloadded CV
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-[#00A264] hover:text-white">
          <Link href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMSRecruit
          </Link>
        </li>
        <li className={
            pathname === "/recruiter/transaction"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }>
          <Link href="/recruiter/transaction">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Transactions
          </Link>
        </li>
        <li
          className={
            pathname === "/recruiter/contactus"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }
        >
          <Link href="/recruiter/contactus">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Contact Us
          </Link>
        </li>
        <li className={
            pathname === "/recruiter/logout"
              ? "mb-2 rounded py-2 bg-[#00A264] text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-[#00A264] hover:text-white"
          }>
          <Link href="/recruiter/logout" >
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 mt-[-5px] " />
            Logout
          </Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
