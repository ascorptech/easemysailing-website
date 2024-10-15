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
import { FiMail } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface sidebarProps {
  sidebarToggle?: boolean;
}

const AdminSidebar: React.FC<sidebarProps> = ({ sidebarToggle }) => {
  const navigate = useRouter()
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogoutClick = () => {
    setShowLogoutModal(true); 
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false); 
  };

  const onLogout =()=>{
    console.log('i am clicked')
    localStorage.clear();
    document.cookie=`token=${''}; path=/admin`
    navigate.replace('/admin')
    setTimeout(() => {
      window.location.replace('/admin')
      // window.location.reload()
    }, 800);
    // window.location.replace('/admin')
  }
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
            priority
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
        <li
          className={
            pathname === "/admin/emails"
              ? "mb-2 rounded py-2 bg-green-600 text-white font-semibold"
              : "mb-1 rounded py-2  hover:bg-green-600 hover:text-white"
          }
        >
          <Link href="/admin/emails">
            <FiMail className="inline-block w-6 h-6 mr-1 ml-2 -mt-[5px] " />
            Emails
          </Link>
        </li>

       
        <li className=" rounded py-2  hover:bg-green-600 hover:text-white">
          <Link href="#" onClick={handleLogoutClick}>
            <FiLogOut className="inline-block w-6 h-6 mr-1 ml-2 mt-[-5px] " />
            Logout
          </Link>
        </li>
      </ul>
      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white py-4 h-[330px] rounded shadow-lg  w-80 flex flex-col items-center justify-center relative">
            <div
              className="absolute w-4 h-4 top-1 right-1 cursor-pointer"
              onClick={handleCloseModal}
            >
              <Image
                priority
                src="/images/candidate/profileCv/closeIcons.png"
                alt=""
                width={5000}
                height={5000}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-[#D1FEE4] w-20 h-20 rounded-full flex items-center justify-center">
              <div className="w-14 h-14 ">
                <Image
                  priority
                  src="/images/candidate/profileCv/logout.png"
                  alt=""
                  width={5000}
                  height={5000}
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
                href="#"
                onClick={onLogout}
                className="cursor-pointer  border border-[#00A264] w-24 py-1 rounded-md text-white bg-[#00A264] text-center"
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
    </div>
  );
};

export default AdminSidebar;
