"use client";
import Link from "next/link";
import React from "react";

import { useState } from "react";

const Refrences = () => {
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



  const [addInfo, setAddInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [indNumber, setIndNumber] = useState("");
  const [cityName, setCityName] = useState("");
  

  

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div className="">
        <div className="text-center my-4"><h1 className="font-bold">EVALUATION REPORT AND REFERENCE/RECOMMENDATION LETTERS</h1></div>
        <div className=" flex flex-col  px-4 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] gap-4">
          <div className="flex items-center justify-between gap-2  ">
            
            <div className=" w-[25%]">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Issued
              </label>
              <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  border border-[#00A264] focus:outline-none rounded-lg w-full">
                <option value="maile">2</option>
                <option value="maile">5</option>
                <option value="maile">8</option>
              </select>
            </div>


            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="number"
              >
                Issue Date
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="number"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              </div>
            </div>

            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Vessel/Company Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="street"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Document
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="street"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <h1 className="text-center font-bold my-4">CRIMINAL RECORD</h1>



          <div className="flex items-center justify-between gap-2  ">
            
            <div className="flex flex-col w-full  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Issuing Country
              </label>
              <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  border border-[#00A264] focus:outline-none rounded-lg">
                <option value="maile">India</option>
                <option value="maile">Austrelia</option>
                <option value="maile">England</option>
              </select>
            </div>


            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="number"
              >
                Issue Date
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="number"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              </div>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Document
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="street"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <h1 className="text-center font-bold my-4">REFERENCE CONTACTS</h1>




        {/* third section start*/}
        <div className="flex items-center justify-between gap-2  ">
            {" "}
            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div className="w-[25%] ">
            <label
              className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="relative flex items-center  ">
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#00A264]"
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>

          <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Vessel/Company Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="street"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-[25%]  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
               Country Code
              </label>
              <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg">
                <option value="maile">45440</option>
                <option value="maile">02458</option>
                <option value="maile">010203</option>
              </select>
            </div>


         

           
          
          </div>


        {/* third section end */}




          <div className=" ">
            <label
              className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
              htmlFor="addinfo"
            >
              Add. Info (c/o etc.)
            </label>
            <div className="relative flex items-center  ">
              <input
                id="addinfo"
                type="text"
                value={addInfo}
                onChange={(e) => setAddInfo(e.target.value)}
                className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#00A264]"
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-[50%]">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Postal Code/ZIP Code
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="addinfo"
                  type="number"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#00A264]"
                  placeholder="Enter ZipCode"
                  required
                />
              </div>
            </div>
            <div className="w-[50%] ">
              <label
                className="blocktext-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                City
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>
          </div>

          {/* state section */}

          <div className="flex items-center gap-4 w-full">
            <div className="w-[50%]">
              <label
                className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 "
                htmlFor="state"
              >
                State/Province
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#82908b]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%]  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Country
              </label>{" "}
              <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  border border-[#00A264] focus:outline-none rounded-lg">
                <option value="maile">India</option>
                <option value="maile">Austrelia</option>
                <option value="maile">England</option>
              </select>
            </div>
          </div>

          {/* airport  */}

          <div className="flex flex-col">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
              Nearest Airport
            </label>
            <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full border border-[#00A264] focus:outline-none rounded-lg">
              <option value="maile">India</option>
              <option value="maile">Austrelia</option>
              <option value="maile">England</option>
            </select>
          </div>

          {/* counstry and city section start*/}

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex flex-col  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Country Code
              </label>
              <select className=" bg-white h-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg">
                <option value="maile">+91</option>
                <option value="maile">+50</option>
                <option value="maile">+08</option>
              </select>
            </div>

            <div className="w-[75%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="number"
              >
                Phone Number
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="number"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex flex-col w-[50%] ">
              <label
                className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 "
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="w-[50%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="inumber"
              >
                INDoS Number
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="inumber"
                  type="text"
                  value={indNumber}
                  onChange={(e) => setIndNumber(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4 mt-4 ml-3">
          <Link
            href="#"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </Link>
          <Link
            href="#"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Refrences;
