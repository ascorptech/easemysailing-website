"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/ProfileCVService";
import Link from "next/link";
import React from "react";

import { useState } from "react";
import { toast } from "react-toastify";

const ContactDetails = () => {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [indNumber, setIndNumber] = useState("");
  const [cityName, setCityName] = useState("");


 const  handlesubmit = async(e:React.FormEvent) => {
 
    e.preventDefault(); 
  let data = {
    address,
    number,
    addInfo,
    postalCode,
    state,
    phoneNumber,
    email,
    indNumber,
    cityName,

  }

  // console.log(data);
  AddProfileData(data, AddaddressdataDB)
};
const AddaddressdataDB = (result:any)=> {
  console.log(result)
  if(result?.status == 200){
    toast.success("address submited successfully")
  }else {

    toast.error('address not submited ')
  }
}




 

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handlesubmit}>
      <div className="">
        <div className=" flex flex-col  px-4 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] gap-4">
          <div className="flex items-center justify-between gap-4  ">
            {" "}
            <div className="w-[50%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street"
              >
                Street
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="street"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter your address"
                  required
                />
              {/* </div> */}
            </div>
            <div className="w-[50%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="number"
              >
                Number
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              </div>
            </div>
          </div>

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
                className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter ZipCode"
                  required
                />
              </div>
            </div>
            <div className="w-[50%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
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
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%]  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Country
              </label>{" "}
              <select className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]">
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
            <select className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]">
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
              <select className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]">
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex flex-col  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Country Code
              </label>
              <select className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]">
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4 mt-4 ml-3">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <button
            type="submit"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};
export default ContactDetails;
