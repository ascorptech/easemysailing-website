"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiLineVertical } from "react-icons/pi";
// import { CiSearch } from "react-icons/ci";

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
    <div className="border-b border-gray-300   z-20 top-0 fixed w-full">
      <nav className="bg-white border-white dark:bg-white dark:border-black-700  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <p>
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
                  EaseMy
                </span>
                <span className="text-green-600 font-bold text-xl">
                  Sailing
                </span>
              </p>
            </Link>
          </div>

          <div className="">
            <ul className="hidden lg:flex lg:items-center flex-col font-medium  p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white lg:dark:bg-white dark:border-gray-700">
              <div>
                <div className="relative inline-block px-3 text-left group ">
                  <li className="block  text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Jobs
                  </li>
                </div>

                <div className="relative inline-block pr-4 text-left group">
                  <li className="relative inline-block pr-4 text-left group  text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Trainings
                  </li>
                </div>

                <li className="relative inline-block text-left group ">
                  <a
                    href="#"
                    className="block text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    EMS Plus
                  </a>
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
                            href="/mentoring_details"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Jobs & Career Advise
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/resource_details"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Resource
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/podcast_list"
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
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
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
                  <a
                    href="#"
                    className="block text-sm py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Recruiter Zone
                  </a>
                </li>

                <span className="text-[1.3rem]  border-1 border-red-950 flex justify-self-center text-center font-[1000] text-green-700  relative ">
                  <PiLineVertical />
                </span>

                <li>
                  <a
                    href="#"
                    className="block pt-6 px-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Manning Agent Zone
                  </a>
                </li>
              </div>

              <div className="flex relative items-center h-2 mt-2 ">
                <Link
                  href={"candidate"}
                  className="flex justify-center items-center mr-4 border border-[#00A264] text-[#00A264] p-2 rounded-full"
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
                  className=" h-8 w-21  text-white bg-[#00A264] hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center items-center"
                >
                  Post a Job
                </Link>
              </div>
            </ul>
          </div>
          <div>

            
            {/* {/ mobile navbar  /} */}

    
 
   
           
            {/* {/ <!-- Dropdown menu --> /} */}

            <div>
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu} // Toggle menu on button click
              >
                <span className="sr-only">Open main menu</span>
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
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              {/* {/ Conditionally render the menu based on isMenuOpen state /} */}

              <div
                className={`lg:hidden w-full lg:w-auto ${
                  isMenuOpen ? "" : "hidden"
                }`}
                id="navbar-dropdown"
              >
                <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 md:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white  rounded   dark:bg-green-600 lg:dark:bg-transparent"
                      aria-current="page"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Trainnigs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      EMS Plus
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Recruiter Zone
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent lg:border-0 md:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Manning Agent Zone
                    </Link>
                  </li>

                  <li className="flex relative items-center h-2 mt-2 ">
                    <Link
                      href={"candidate"}
                      className="flex justify-center items-center mr-4 border border-[#00A264] text-[#00A264] p-2 rounded-full"
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
                      className=" h-8 w-21  text-white bg-[#00A264] hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center items-center"
                    >
                      Post a Job
                    </Link>
                  </li>

                  <div className=" flex items-center h-2 mt-8 ">
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
                                href="/mentoring_details"
                                className="block px-4 py-1 hover:bg-white hover:text-green-800"
                              >
                                Jobs & Career Advise
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/resource_details"
                                className="block px-4 py-1 hover:bg-white hover:text-green-800"
                              >
                                Resource
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/podcast_list"
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
                                className="block px-4 py-1 hover:bg-white hover:text-green-800"
                              >
                                Contact Us
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
