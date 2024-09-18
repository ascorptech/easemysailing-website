"use client";
import Image from "next/image";
import React, { useState } from "react";

function Wsg() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 ">
      <div
        className="flex h-10 p-3  justify-between bg-[#00965C] items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-base text-white font-medium">
          Token For Gratitude
        </span>
        {/* Dropdown arrow icon */}
        <svg
          className={`w-4 h-4 text-white transform ${
            isOpen ? "rotate-180" : ""
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

      {isOpen && (
        <div className="mt-2 p-2">
          {/* Dropdown content in a separate div */}
          <div>
            <p className="text-justify text-[#4E4E4E] text-[15px] leading-[22.5px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem{" "}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="space-y-2 bg-[#D1EFE4] p-4 rounded-lg">
              {/* <div className="relative pl-8">
                <input
                 
                  type=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="ship 1"
                  required
                />

                <span className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-[#00A264] rounded-l-md">
                  <Image
                    src="/images/requiter-img/ship1.png"
                    alt=""
                    width={20}
                    height={20}
                    className=""
                  />
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  <svg
                    className={`w-4 h-4 text-white transform ${
                      isOpen ? "rotate-180" : ""
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
                </span>
              </div> */}

              <div className=" border rounded-md cursor-pointer flex  items-center bg-white ">
                <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                  <Image
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
                  {/* </div> */}

                  {/* <span className="ml-2 ">
                 {isOpenItem1 ? (
                   <svg
                     className="w-6 h-6 transform rotate-180 transition-transform"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M19 9l-7 7-7-7"
                     />
                   </svg>
                 ) : (
                   <svg
                     className="w-6 h-6 transition-transform"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M19 9l-7 7-7-7"
                     />
                   </svg>
                 )}
               </span> */}
                </div>
              </div>

              <div
                className=" border rounded-md cursor-pointer flex  items-center bg-white "
                // onClick={toggleDropdownitem1}
              >
                <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                  <Image
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
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        src="/images/requiter-img/doller1.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className=" w-full  rounded-md flex items-center  ">
                      <p className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        $100
                      </p>

                      <div className="   ">
                        <Image
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
                    <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                      <Image
                        src="/images/requiter-img/doller1.png"
                        alt=""
                        width={40}
                        height={40}
                        className=" bg-[#00A264]"
                      />
                    </div>
                    <div className=" w-full  rounded-md flex items-center  ">
                      <p className="bg-white w-full h-full  px-2   rounded-md appearance-none   text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                        $100
                      </p>

                      <div className="   ">
                        <Image
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
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      src="/images/requiter-img/doller1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className=" rounded-md flex items-center  ">
                    <p className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      Enter Incentive Amount
                    </p>
                  </div>
                </div>

                <div className="flex p-2 rounded  ">
                  <label className="inline-flex items-center  cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                  </label>
                </div>
              </div>

              <div className="flex ">
                <div
                  className="w-full border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      src="/images/requiter-img/doller1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className=" rounded-md flex items-center  ">
                    <p className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      Enter Incentive Amount
                    </p>
                  </div>
                </div>

                <div className="flex p-2 rounded ">
                  <label className="inline-flex items-center  cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                  </label>
                </div>
              </div>

              <div className="flex ">
                <div
                  className="w-full border rounded-md cursor-pointer flex  items-center bg-white "
                  // onClick={toggleDropdownitem1}
                >
                  <div className="flex gap-2 items-center p-[5px] bg-[#00A264] rounded-md">
                    <Image
                      src="/images/requiter-img/doller1.png"
                      alt=""
                      width={40}
                      height={40}
                      className=" bg-[#00A264]"
                    />
                  </div>
                  <div className=" rounded-md flex items-center  ">
                    <p className="px-2    text-[#4E4E4E] text-[15px] leading-[22.5px]  ">
                      Enter Incentive Amount
                    </p>
                  </div>
                </div>

                <div className="flex p-2 rounded ">
                  <label className="inline-flex items-center  cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-9 h-5  rounded-full  dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#00A264]"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wsg;
