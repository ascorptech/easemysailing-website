"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiLineVertical } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="border-b border-gray-300  items-center sticky z-20 top-0">
      <nav className="bg-white border-white-200 dark:bg-white-900 dark:border-black-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <p>
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
                  EaseMy
                </span>
                <span className="text-green-500 font-bold text-xl">
                  Sailing
                </span>
              </p>
            </Link>
          </div>

          <div>
            <ul className="flex items-center flex-col font-medium  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <div>
                <div className="relative inline-block text-left group ">
                  <button className="inline-flex justify-center w-full  shadow-sm px-2 py-2 bg-white text-sm font-small dark:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Jobs
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 011.414 0 1 1 0 010 1.415l-4 4.125a1 1 0 01-1.414 0l-4-4.125a1 1 0 010-1.415z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Jobs & Career Advise
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Resource
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Podcast & Interviews
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative inline-block text-left group">
                  <button className="inline-flex justify-center w-full  shadow-sm px-2 py-2 bg-white text-sm font-medium dark:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Trainings
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 011.414 0 1 1 0 010 1.415l-4 4.125a1 1 0 01-1.414 0l-4-4.125a1 1 0 010-1.415z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Jobs & Career Advise
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Resource
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Podcast & Interviews
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>

                <li className="relative inline-block text-left group ">
                  <a
                    href="#"
                    className="block text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                  {/* Icon or button to trigger dropdown */}
                  <button
                    className="text-[3rem] flex justify-self-center text-center font-bold text-green-700  relative "
                    type="button"
                  >
                    <HiOutlineDotsHorizontal className="w-15 h-10" />
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div
                      className="absolute  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48"
                      id="dropdownHover"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <Link
                            href="/p4mentoring"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Jobs & Career Advise
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/p7resource"
                            className="block px-4 py-1 hover:bg-white hover:text-green-800"
                          >
                            Resource
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/p5podcast"
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
                    className="block text-sm py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                    className="block pt-6 px-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Manning Agent Zone
                  </a>
                </li>
              </div>

              <div className="flex relative items-center h-2 mt-2 ">
                <button
                  type="button"
                  className="h-8 w-20.5 flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-transparent focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-green-700"
                >
                  <span className="pr-2">
                    <CiSearch />
                  </span>
                  Seafarers Login
                </button>
                <button
                  type="button"
                  className=" h-8 w-21  text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Post a Job
                </button>
              </div>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
