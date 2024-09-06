"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiLineVertical } from "react-icons/pi";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="  z-20 top-0 fixed w-full border-b">
      <nav className="bg-white border-white dark:bg-white dark:border-black-700   ">
        <div className="lg:w-full w-[98%] text-25px font-[700px] leading-[37.5px] flex flex-wrap items-center justify-between   px-[1rem] sm:px-[3rem] lg:px-[2rem] py-3">
          {/* <div className="flex items-center space-x-3 rtl:space-x-reverse"> */}
          {/* <Link href="/">
              <p className="cursor-pointer">
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
                  EaseMy
                </span>
                <span className="text-[#00A264] font-bold text-xl">
                  Sailing
                </span>
              </p>
            </Link> */}

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-44 h-12 sm:w-52 sm:h-[53px] ">
              <Link href="/">
                <Image
                  src="/images/Transparent Logo.png"
                  alt="EaseMySailing Logo"
                  className="object-cover h-full w-full "
                  width={800}
                  height={800}
                />
              </Link>
            </div>
          </div>

          <div className=" ">
            <ul className="hidden  lg:flex lg:items-center flex-col font-medium  p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white lg:dark:bg-white dark:border-gray-700">
              <div>
                <div className="relative inline-block px-3 text-left group ">
                  <li className="block  text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link href="/jobs">Jobs</Link>
                  </li>
                </div>

                <div className="relative inline-block pr-4 text-left group">
                  <li className="relative inline-block pr-4 text-left group  text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link href="/trainings">Trainings</Link>
                  </li>
                </div>

                <li className="relative inline-block text-left group ">
                  <Link
                    href="/ems"
                    className="block text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    EMS Plus
                  </Link>
                </li>
              </div>
              <div className=" flex items-center h-2">
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* {/ Icon or button to trigger dropdown /} */}
                  <button
                    className="text-[3rem] flex justify-self-center text-center font-bold text-green-700  relative "
                    type="button"
                  >
                    <HiOutlineDotsHorizontal className="w-15 h-10" />
                  </button>

                  {/* {/ Dropdown menu /} */}
                  {isOpen && (
                    <div
                      className="absolute  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48"
                      id="dropdownHover"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <Link
                            href="/mentoring-details"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Jobs & Career Advise
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/resource-details"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Resource
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/podcast-list"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Podcast & Interviews
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/about"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="block px-4 py-1 hover:bg-[#FFFFFF] hover:text-[#00A264]"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <li>
                  <Link
                    href="/recruiter"
                    className="block text-sm py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A264] md:p-0 dark:text-black md:dark:hover:text-[#00A264] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Recruiter Zone
                  </Link>
                </li>

                <span className="text-[1.3rem]  border-1 border-red-950 flex justify-self-center text-center font-[1000] text-green-700  relative ">
                  <PiLineVertical />
                </span>

                <li>
                  <Link
                    href="#"
                    className="block pt-6 px-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A264] md:p-0 dark:text-black md:dark:hover:text-[#00A264] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Manning Agent Zone
                  </Link>
                </li>
              </div>

              <div className="flex relative items-center h-2 mt-2 ">
                <Link
                  href={"/candidate"}
                  className="flex justify-center items-center mr-4 border border-[#00A264] text-[#00A264] p-2 rounded-full text-sm"
                >
                  <span className="pr-2">
                    {/* {/ <CiSearch /> /} */}
                    <Image
                      src={"/images/userlock.png"}
                      priority
                      width={16}
                      height={16}
                      alt="userlock"
                    />
                  </span>
                  Seafarers Login
                </Link>
                <Link
                  href="recruiter"
                  className=" h-8 w-21  text-[#FFFFFF] bg-[#00A264] hover:bg-[#00A264] focus:outline-none focus:ring-1 focus:ring-[#00A264] font-medium rounded-full text-sm px-5 py-5 text-center me-2  dark:bg-[#00A264]   flex justify-center items-center"
                >
                  Post a Job
                </Link>
              </div>
            </ul>
          </div>

          {/* mobile navbar   */}

          {/* Dropdown menu */}
          <div className="lg:hidden lg:max-w-screen-xl flex flex-wrap items-center justify-between ">
            <div className=" top-0 ">
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="flex items-center p-2 w-10 h-10 justify-center text-xl text-[#00A264] rounded-lg lg:hidden  focus:outline-none focus:ring-1 focus:ring-white hover:text-white hover:bg-[#00A264] "
                aria-controls="navbar-dropdown"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu} // Toggle menu on button click
              >
                {/* {/ <span className="">Open main menu</span> /} */}
                {isMenuOpen ? (
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21.32L21 3.32001"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 3.32001L21 21.32"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                )}
              </button>

              {/* {/ Conditionally render the menu based on isMenuOpen state /} */}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`lg:hidden w-full lg:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4   mt-1 border border-gray-100 rounded-lg bg-gray-100 md:border-0   dark:border-gray-700">
              <li>
                <Link
                  href="/jobs"
                  className="block py-2 px-3 text-[#FFFFFF]  rounded   dark:bg-[#00A264] text-xl"
                  aria-current="page"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/trainings"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Trainnigs
                </Link>
              </li>
              <li>
                <Link
                  href="/ems"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  EMS Plus
                </Link>
              </li>

              <li>
                <Link
                  href="/mentoring-details"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Jobs & Career Advise
                </Link>
              </li>
              <li>
                <Link
                  href="/resource-details"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Resource
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast-list"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Podcast & Interviews
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Contact Us
                </Link>
              </li>

              <li className="">
                <Link
                  href="/recruiter"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Recruiter Zone
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-[#00A264] rounded-lg hover:bg-[#00A264] mt-1  hover:text-[#FFFFFF] text-xl"
                >
                  Manning Agent Zone
                </Link>
              </li>
              <hr className="border border-[#00A264] "></hr>

              <li className="flex relative items-center gap-4 h-2 mt-7 ">
                <Link
                  href={"candidate"}
                  className="flex justify-center items-center mr-4 border border-[#00A264] text-[#00A264] p-2 rounded-full hover:bg-[#00A264] hover:text-[#FFFFFF]"
                >
                  <span className="pr-2">
                    {/* {/ <CiSearch /> /} */}
                    <Image
                      src={"/images/userlock.png"}
                      priority
                      width={10}
                      height={10}
                      alt="userlock"
                    />
                  </span>
                  Seafarers Login
                </Link>
                <Link
                  href="#"
                  className=" h-9 w-21  text-white bg-[#00A264] hover:bg-[#00A264] focus:outline-none focus:ring-1 focus:ring-[#00A264] font-medium rounded-full text-sm px-5 py-5 text-center me-2  dark:bg-[#00A264] dark:hover:bg-[#00A264] dark:focus:ring-[#00A264] flex justify-center items-center"
                >
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
