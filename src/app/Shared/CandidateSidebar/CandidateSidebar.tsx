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
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface sidebarProps {
  sidebarToggle: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {
  const navigate = useRouter()
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const pathname = usePathname();
  const onLogout = () => {
    localStorage.clear();
    document.cookie = `token=${""}; path=/candidate`;
    navigate.push('/candidate')
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true); 
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false); 
  };

  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block "
      } w-64 bg-[#EBEBEB] fixed h-full`}
    >
      <div className="w-44 h-12 sm:w-full sm:h-[50px] bg-white ">
        <Link href="#">
          <Image
            priority
            src="/images/logo_1.png"
            alt="EaseMySailing Logo"
            className="object-contain h-full w-full sm:w-52 ml-3"
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
        <li
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
        </li>
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
          <Link href="#" onClick={handleLogoutClick}>
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Logout
          </Link>
        </li>
      </ul>
      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
          <div className="bg-white py-4 h-[330px] rounded shadow-lg  w-80 flex flex-col items-center justify-center relative">
            <div
              className="absolute w-4 h-4 top-1 right-1 cursor-pointer"
              onClick={handleCloseModal}
            >
              <Image
                priority
                src="/images/candidate/profileCv/closeIcons.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-[#D1FEE4] w-20 h-20 rounded-full flex items-center justify-center">
              <div className="w-14 h-14 ">
                <Image
                  priority
                  src="/images/candidate/profileCv/logout.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="font-bold text-[34px] leading-[51px]">Logout</h1>
            <p className="mb-6 text-[16px] leading-[21px]">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-4">
            <Link
                href="/candidate"
                onClick={onLogout}
                className="  border border-[#00A264] w-24 py-1 rounded-md text-white bg-[#00A264] text-center"
              >
                Yes
              </Link>
              <button
                onClick={handleCloseModal}
                className="bg-[#D1FEE4] w-24 py-1 rounded-md hover:bg-[#00A264]hover:tex-white text-[#00A264] border border-[#00A264] hover:text-white hover:bg-[#00A264] text-center "
              >
                No
              </button>
              
            </div>
          </div>
        </div>
      )}

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
