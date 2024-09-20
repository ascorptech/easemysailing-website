"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setmidddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [religionName, setReligionName] = useState("");
  
  const[nextKinName, setNextKinName] =useState("");
  const[nextKinShip, setNextKinShip] =useState("");
  const[nextKinAddre, setNextKinAddre] =useState("");
  const[nextKinChildren, setNextKinChildren] =useState("");
  const [personality, setPersonality] = useState("");
  const [additional, setAdditional] = useState("");
  const [myFuture, setMyFuture] = useState("");

  const [criminal, setCriminal] = useState("");



  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div className="px-2">
        <div className=" flex flex-col   text-[14px] leading-[19.07px] font-[openSans] text-[#333333] gap-4">
          <div className="flex items-center justify-between gap-4  ">
            {" "}
            <div className="w-full ">
              <label
                className="blocktext-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
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
                  className="border rounded-md w-full py-[8px] px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div className="w-full ">
              <label
                className="block  text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  mb-1"
                htmlFor="userName"
              >
                Middle Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="userName"
                  type="text"
                  value={middleName}
                  onChange={(e) => setmidddleName(e.target.value)}
                  className="border rounded-md w-full py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              </div>
            </div>
          </div>

          <div className="w-[80%] ">
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
                className="border rounded-md w-full py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#00A264]"
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4  ">
          <div className="flex flex-col w-full">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
              Gender
            </label>{" "}
            <select className="bg-white h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  border border-[#00A264] focus:outline-none rounded-md">
              <option value="maile">Male</option>
              <option value="maile">Female</option>
              <option value="maile">Other</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
              Date of Birth
            </label>
            <input
              type="date"
              className="border p-2 rounded-md border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          </div>
         

          

          {/* counstry and city section start*/}

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex flex-col w-[50%]">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Country of Birth
              </label>{" "}
              <select className=" bg-white h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full border border-[#00A264] focus:outline-none rounded-md">
                <option value="maile">India</option>
                <option value="maile">Austrelia</option>
                <option value="maile">England</option>
              </select>
            </div>

            <div className="w-[50%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                City of Birth
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="border rounded-md w-full py-[8px] px-2text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>
          </div>

          {/* counstry and city section end*/}

          <div className="flex items-center justify-between gap-4  ">

          <div className="flex flex-col w-full">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
              Nationality
            </label>
            <select className="bg-white h-9  border border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] rounded-md">
              <option value="maile">Indian</option>
              <option value="maile">Bangali</option>
              <option value="maile">English</option>
            </select>
          </div>

          {/* Relision */}
          <div className="w-full ">
            <label
              className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
              htmlFor="cityName"
            >
              Religion
            </label>
            <div className="relative flex items-center  ">
              <input
                id="cityName"
                type="text"
                value={religionName}
                onChange={(e) => setReligionName(e.target.value)}
                className="border rounded-lg w-full py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                placeholder="Enter Religion Name"
                required
              />
            </div>
          </div>

          </div>

         
        </div>

{/* next of kin details */}


        <div className="flex flex-col mt-4 ">
          <h1 className="text-center font-semibold mb-2">NEXT OF KIN DETAILS</h1>

          <div className="grid grid-cols-2 gap-4">
            
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Religion
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={nextKinName}
                  onChange={(e) => setNextKinName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Religion Name"
                  required
                />
              </div>
            </div>
            <div className="">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Religion
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={nextKinShip}
                  onChange={(e) => setNextKinShip(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Religion Name"
                  required
                />
              </div>
            </div>
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Religion
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={nextKinAddre}
                  onChange={(e) => setNextKinAddre(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Religion Name"
                  required
                />
              </div>
            </div>

            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Religion
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName"
                  type="text"
                  value={nextKinChildren}
                  onChange={(e) => setNextKinChildren(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Religion Name"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="flex flex-col mt-4 ">
          <h1 className="text-center font-semibold mb-2">ABOUT ME</h1>

          <div className="">
            
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="personality"
              >
                My Personality and professional Attitude
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="personality"
                  type="text"
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="additional"
              >
               Additional Information about my past Sea Service
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="additional"
                  type="text"
                  value={additional}
                  onChange={(e) => setAdditional(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="future"
              >
               My Future Aims and Expectations
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="future"
                  type="text"
                  value={myFuture}
                  onChange={(e) => setMyFuture(e.target.value)}
                  className="border rounded-md w-full py-[7px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="action"
              >
                Criminal action.
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="action"
                  type="text"
                  value={criminal}
                  onChange={(e) => setCriminal(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                  placeholder="Yes/No"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className="flex gap-2 mb-4 mt-4">
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
export default PersonalDetails;
