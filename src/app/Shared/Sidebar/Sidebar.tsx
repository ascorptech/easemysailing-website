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

interface sidebarProps {
  sidebarToggle: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? " hidden " : " block "
      } w-64  bg-gray-100 fixed top-0  h-screen `}
    >
      {/* <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transition-transform duration-300 ${sidebarToggle ? 'translate-x-0' : '-translate-x-full'} w-64`}> */}
      <div className="bg-white  p-2 pl-5">
        <Link href="/" className="text-2xl font-extrabold">
          EaseMy<span className="text-green-700">Sailing</span>
        </Link>
      </div>

      <ul className="ml-3 mt-[1px] font-bold text-sm ">
        <li className="mb-2 rounded py-2 bg-green-600 text-white font-semibold">
          <Link href="#" className="">
            <MdDashboard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Dashboard
          </Link>
        </li>
        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <IoBag className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />{" "}
            Company Profile
          </Link>
        </li>
        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Subscription
          </Link>
        </li>

        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <PiShoppingBagOpenFill className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Job Posting
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <MdMenuBook className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Ships
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <SiElementor className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            WSG
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Candidates Listing
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <MdMapsHomeWork className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMS Matches
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <MdOutlineCardGiftcard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <RiExchangeDollarLine className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Downloadded CV
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMSRecruit
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Transactions
          </Link>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Contact Us
          </Link>
        </li>
        <li className=" rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 mt-[-5px] " />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
