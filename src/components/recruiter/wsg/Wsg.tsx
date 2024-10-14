"use client";
import Image from "next/image";
import React, { useState } from "react";

function Wsg() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);

  return (
    <div>
      {/* **********Token************/}
      <div className="px-4 pt-4  ">
        <div
          className="flex h-10 p-3 rounded-sm justify-between bg-[#00965C] items-center cursor-pointer"
          onClick={toggleDropdown1}
        >
          <span className="text-base text-white font-medium">
            Token For Gratitude
          </span>
          {/* Dropdown arrow icon */}
          <svg
            className={`w-4 h-4 text-white transform ${
              isOpen1 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen1 && (
          <div className="mt-2 p-2">
            {/* Dropdown content in a separate div */}
            <div>
              <p className="text-justify text-[#4E4E4E] text-[15px] leading-[22.5px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem{" "}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option className="" value="student">
                        Ship1{" "}
                      </option>
                      <option value="teacher">Ship2</option>
                      <option value="admin">Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option className="bg-[#00a264]" value="ship1">
                        Select Ship1{" "}
                      </option>
                      <option value="ship2">Select Ship2</option>
                      <option value="ship3">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* second section */}
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className=" border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      {/* <div className="flex items-center "> */}

                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">Birthday </option>
                        <option value="teacher">Birthday </option>
                        <option value="admin">Birthday </option>
                      </select>

                      <div className=" absolute right-8  cursor-auto  ">
                        <Image
                          src="/images/requiter-img/birthday.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                        />
                      </div>
                      {/* </div> */}

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={30}
                        height={30}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">New Year Eve </option>
                        <option value="teacher">New Year Eve2</option>
                        <option value="admin">New Year Eve3</option>
                      </select>

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">SSelect Event </option>
                      <option value="teacher">Select Event</option>
                      <option value="admin">Select Event</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* third section */}
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                      <input 
    type="text" 
    placeholder="$100" 
    className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  "/>

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                      <input 
    type="text" 
    placeholder="$100" 
    className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  "/>
                        

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/doller.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                <div className="flex ">
                  <div
                    className="w-full border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[3px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/doller1.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className=" rounded-md flex items-center  ">
                      <input
                      type="text"
                      placeholder=" Enter Incentive Amount"
                       className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  "
                      />
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                <div className="flex ">
                  <div
                    className="w-full border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[3px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/doller1.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className=" rounded-md flex items-center  ">
                    <input
                      type="text"
                      placeholder=" Enter Incentive Amount"
                       className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  "
                      />
                    </div>
                  </div>

                  <div className="flex p-2 rounded ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                <div className="flex ">
                  <div
                    className="w-full border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[3px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/doller1.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className=" rounded-md flex items-center  ">
                    <input
                      type="text"
                      placeholder=" Enter Incentive Amount"
                       className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  "
                      />
                    </div>
                  </div>

                  <div className="flex p-2 rounded ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* *******Game********* */}

      <div className="px-4 pt-2">
        <div
          className="flex h-10 p-3 rounded-sm  justify-between bg-[#00965C] items-center cursor-pointer"
          onClick={toggleDropdown2}
        >
          <span className="text-base text-white font-medium">Game</span>
          {/* Dropdown arrow icon */}
          <svg
            className={`w-4 h-4 text-white transform ${
              isOpen2 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen2 && (
          <div className="mt-2 p-2">
            {/* Dropdown content in a separate div */}
            <div>
              <p className="text-justify text-[#4E4E4E] text-[15px] leading-[22.5px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem{" "}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Ship1 </option>
                      <option value="teacher">Ship2</option>
                      <option value="admin">Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* second section */}
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className=" border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      {/* <div className="flex items-center "> */}

                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">Birthday </option>
                        <option value="teacher">Birthday </option>
                        <option value="admin">Birthday </option>
                      </select>

                      <div className=" absolute right-8  cursor-auto  ">
                        <Image
                          src="/images/requiter-img/birthday.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                        />
                      </div>
                      {/* </div> */}

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={30}
                        height={30}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">New Year Eve </option>
                        <option value="teacher">New Year Eve2</option>
                        <option value="admin">New Year Eve3</option>
                      </select>

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">SSelect Event </option>
                      <option value="teacher">Select Event</option>
                      <option value="admin">Select Event</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* third section */}

              <div className="space-y-2 bg-[#D1EFE4] px-4 py-4 rounded-lg">
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="$100"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                {/* fourth sect of doller */}
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* **********Seafarer Health*******      */}
      <div className="px-4 pt-2">
        <div
          className="flex h-10 p-3 rounded-sm  justify-between bg-[#00965C] items-center cursor-pointer"
          onClick={toggleDropdown3}
        >
          <span className="text-base text-white font-medium">Seafarer Health</span>
          {/* Dropdown arrow icon */}
          <svg
            className={`w-4 h-4 text-white transform ${
              isOpen3 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen3 && (
          <div className="mt-2 p-2">
            {/* Dropdown content in a separate div */}
            <div>
              <p className="text-justify text-[#4E4E4E] text-[15px] leading-[22.5px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem{" "}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Ship1 </option>
                      <option value="teacher">Ship2</option>
                      <option value="admin">Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* second section */}
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className=" border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      {/* <div className="flex items-center "> */}

                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">Birthday </option>
                        <option value="teacher">Birthday </option>
                        <option value="admin">Birthday </option>
                      </select>

                      <div className=" absolute right-8  cursor-auto  ">
                        <Image
                          src="/images/requiter-img/birthday.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                        />
                      </div>
                      {/* </div> */}

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={30}
                        height={30}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">New Year Eve </option>
                        <option value="teacher">New Year Eve2</option>
                        <option value="admin">New Year Eve3</option>
                      </select>

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">SSelect Event </option>
                      <option value="teacher">Select Event</option>
                      <option value="admin">Select Event</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* third section */}

              <div className="space-y-2 bg-[#D1EFE4] px-4 py-4 rounded-lg">
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="$100"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                {/* fourth sect of doller */}
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* **********Engagement Programs******** */}
      <div className="px-4 pt-2">
        <div
          className="flex h-10 p-3 rounded-sm  justify-between bg-[#00965C] items-center cursor-pointer"
          onClick={toggleDropdown4}
        >
          <span className="text-base text-white font-medium">Engagement Programs</span>
          {/* Dropdown arrow icon */}
          <svg
            className={`w-4 h-4 text-white transform ${
              isOpen4 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen4 && (
          <div className="mt-2 p-2">
            {/* Dropdown content in a separate div */}
            <div>
              <p className="text-justify text-[#4E4E4E] text-[15px] leading-[22.5px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem{" "}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Ship1 </option>
                      <option value="teacher">Ship2</option>
                      <option value="admin">Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className=" border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/ship1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Ship1 </option>
                      <option value="teacher">Select Ship2</option>
                      <option value="admin">Select Ship3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* second section */}
              <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className=" border rounded-md cursor-pointer flex  items-center bg-white "
                    // onClick={toggleDropdownitem1}
                  >
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      {/* <div className="flex items-center "> */}

                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">Birthday </option>
                        <option value="teacher">Birthday </option>
                        <option value="admin">Birthday </option>
                      </select>

                      <div className=" absolute right-8  cursor-auto  ">
                        <Image
                          src="/images/requiter-img/birthday.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                        />
                      </div>
                      {/* </div> */}

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        priority
                        src="/images/requiter-img/shipbag.png"
                        alt=""
                        width={30}
                        height={30}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                      <select className="bg-white w-full h-full  px-1   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        <option value="student">New Year Eve </option>
                        <option value="teacher">New Year Eve2</option>
                        <option value="admin">New Year Eve3</option>
                      </select>

                      {/* Custom dropdown icon */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        <svg
                          className="w-6 h-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">Select Event </option>
                      <option value="teacher">Select Event2</option>
                      <option value="admin">Select Event3</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      priority
                      src="/images/requiter-img/shipbag.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className="relative w-full h-[49px] rounded-md flex items-center  ">
                    <select className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      <option value="student">SSelect Event </option>
                      <option value="teacher">Select Event</option>
                      <option value="admin">Select Event</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                      <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* third section */}

              <div className="space-y-2 bg-[#D1EFE4] px-4 py-4 rounded-lg">
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="$100"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
                {/* fourth sect of doller */}

                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>

                {/* fourth sect of doller */}
                <div className="flex">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                      <div className="flex gap-2 items-center p-[9px] bg-[#00A264] rounded-md">
                        <Image
                          priority
                          src="/images/requiter-img/doller1.png"
                          alt=""
                          width={40}
                          height={40}
                          className=" bg-[#00A264]"
                        />
                      </div>
                      <div className=" w-full  rounded-md flex items-center  ">
                        <input
                          type="text"
                          placeholder="Amount"
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />

                        <div className="   ">
                          <Image
                            priority
                            src="/images/requiter-img/birthday.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className=" border rounded-md cursor-pointer flex  items-center bg-white "
                      // onClick={toggleDropdownitem1}
                    >
                      <div className="w-full rounded-md flex items-center">
                        <input
                          type="datetime-local"
                        
                          className="bg-white w-full h-full px-2 rounded-md appearance-none text-[#4E4E4E] text-[15px] leading-[22.5px]"
                        />
                        <div className="mr-3">
                          {/* <Image
                            priority
                            src="/calender.png"
                            alt="Calendar Icon"
                            width={25}
                            height={25}
                          /> */}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 rounded  ">
                    <label className="inline-flex items-center  cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wsg;
