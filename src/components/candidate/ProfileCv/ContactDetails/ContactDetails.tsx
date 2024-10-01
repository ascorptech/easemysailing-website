"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "../CircularProgress";

type ContactComplete = {
  percentage: number;
  color: string;
};
type Props={
  contactComplete: ContactComplete; // mjrComplete is an object with percentage and color
  setContactComplete: React.Dispatch<React.SetStateAction<ContactComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}


const ContactDetails = ({contactComplete, setContactComplete, userDetail}:Props) => {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [indNumber, setIndNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [rCountrycode, setRCountrycode] = useState("");
  const [mCountrycode, setMCountrycode] = useState("");
  const [country1, setCountry1] = useState("");
  const [nACountrycode, setNACountrycode] = useState("");

  const totalFields = 12;
  const filledFields = [
    address,
    number,
    addInfo,
    postalCode,
    state,
    phoneNumber,
    email,
    indNumber,
    cityName,
    phoneNumber1,
    nACountrycode,
    country1
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])

  const handlesubmit = async (e: React.FormEvent) => {
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
    };

    // console.log(data);
    // AddProfileData(data, AddaddressdataDB);
  };
  const AddaddressdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("address submited successfully");
    } else {
      toast.error("address not submited ");
    }
  };

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
                <select
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={country1}
                  onChange={(e) => setCountry1(e.target.value)}
                >
                  <option value="" disabled>
                    country
                  </option>
                  <option value="india">India</option>
                  <option value="austrelia">Austrelia</option>
                  <option value="england">England</option>
                </select>
              </div>
            </div>

            {/* airport  */}

            <div className="flex flex-col">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                Nearest Airport
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={nACountrycode}
                onChange={(e) => setNACountrycode(e.target.value)}
              >
                <option value="" disabled>
                  country
                </option>
                <option value="India">India</option>
                <option value="Austrelia">Austrelia</option>
                <option value="England">England</option>
              </select>
            </div>

            {/* counstry and city section start*/}

            <div className="grid col-span-2 text-center">
              <h1 className="font-bold">MOBILE PHONE</h1>
            </div>

            <div className="flex items-center justify-between gap-4 ">
              <div className="flex flex-col  ">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={mCountrycode}
                  onChange={(e) => setMCountrycode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+50">+50</option>
                  <option value="+08">+08</option>
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
            <div className="grid col-span-2 text-center">
              <h1 className="font-bold">DIRECT LINE</h1>
            </div>
            <div className="flex items-center justify-between gap-4  ">
              <div className="flex flex-col  ">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={rCountrycode}
                  onChange={(e) => setRCountrycode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+50">+50</option>
                  <option value="+08">+08</option>
                </select>
              </div>

              <div className="w-[75%] ">
                <label
                  className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                  htmlFor="phonenumber2"
                >
                  Phone Number
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="phonenumber2"
                    type="text"
                    value={phoneNumber1}
                    onChange={(e) => setPhoneNumber1(e.target.value)}
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
                  htmlFor="emails"
                >
                  Email
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="emails"
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
