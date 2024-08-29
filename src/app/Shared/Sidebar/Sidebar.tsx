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
        <h1 className="text-2xl font-extrabold">
          EaseMy<span className="text-green-700">Sailing</span>
        </h1>
      </div>

      <ul className="ml-3 mt-[1px] font-bold text-sm ">
        <li className="mb-2 rounded py-2 bg-green-600 text-white font-semibold">
          <a href="#" className="">
            <MdDashboard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Dashboard
          </a>
        </li>
        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <IoBag className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />{" "}
            Company Profile
          </a>
        </li>
        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Subscription
          </a>
        </li>

        <li className="mb-1 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <PiShoppingBagOpenFill className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Job Posting
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <MdMenuBook className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Ships
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <SiElementor className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            WSG
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Candidates Listing
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <MdMapsHomeWork className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMS Matches
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <MdOutlineCardGiftcard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <RiExchangeDollarLine className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Downloadded CV
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EMSRecruit
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Transactions
          </a>
        </li>
        <li className="mb-2 rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Contact Us
          </a>
        </li>
        <li className=" rounded py-2  hover:bg-green-600 hover:text-white">
          <a href="#">
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 mt-[-5px] " />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
