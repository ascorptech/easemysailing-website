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
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


interface sidebarProps {
  sidebarToggle: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {

  const pathname = usePathname();
  console.log("path", pathname);
  const onLogout =()=>{
    localStorage.clear();
    document.cookie=`token=${''}; path=/candidate`
  }
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block "
      } w-64 bg-gray-100 fixed h-full`}
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

      <ul className="m-6 font-bold text-sm">
        {/* <li
          className={
            pathname === "/candidate/dashboard"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/candidate/dashboard" className="">
            <MdDashboard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px]  " />
            My Dashboard
          </Link>
        </li> */}
        <li
          className={
            pathname === "/candidate/profilecv"
              ? "mb-2 rounded py-2 bg-green-600  text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/candidate/profilecv">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Profile/CV
          </Link>
        </li>
        {/* <li
          className={
            pathname === "/candidate/jobbyems"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/candidate/jobbyems">
            <IoBag className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " /> Jobs
            By EMS
          </Link>
        </li> */}
        {/* <li
          className={
            pathname === "#"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="#">
            <PiShoppingBagOpenFill className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            My Job Applicatins
          </Link>
        </li> */}
        {/* <li
          className={
            pathname === "#"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="#">
            <MdMenuBook className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            EduEMS
          </Link>
        </li> */}
        {/* <li
          className={
            pathname === "/admin/resource-management"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="#">
            <SiElementor className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Mentoring
          </Link>
        </li> */}

        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            My Subscription
          </Link>
        </li> */}

        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <MdMapsHomeWork className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Market Place
          </Link>
        </li> */}

        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <MdOutlineCardGiftcard className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Refer and Earn
          </Link>
        </li> */}

        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <FaFileLines className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Career testimonial
          </Link>
        </li> */}

        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <RiExchangeDollarLine className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            My Transactions
          </Link>
        </li> */}
        {/* <li className="mb-3 rounded py-2">
          <Link href="#">
            <RiContactsBook3Line className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Contact Us
          </Link>
        </li> */}
        
        <li className="mb-2 rounded py-2">
          <Link href="/candidate" onClick={onLogout}>
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Logout
          </Link>
        </li>
      </ul>

      {/* <div className="w-32 h-16 border-2 border-red-300">
        <Image
        priority
          src="/Images/google-play-store.jpg"
          alt="images not found"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div> */}
    </div>
  );
};

export default Sidebar;
