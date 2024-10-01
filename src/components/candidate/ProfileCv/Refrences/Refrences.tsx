"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";

type RefrencesComplete = {
  percentage: number;
  color: string;
};
type Props = {
  refrencesComplete: RefrencesComplete;
  setRefrencesComplete: React.Dispatch<React.SetStateAction<RefrencesComplete>>;
  userDetail: any;
};

const Refrences = ({
  refrencesComplete,
  setRefrencesComplete,
  userDetail,
}: Props) => {
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyName1, setCompanyName1] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [indNumber, setIndNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [issued, setIssued] = useState("");
  const [document1, setDocument1] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [ nearestAirport, setNearestAirport] = useState("");
  const [ countryCode1, setCountryCode1] = useState("");
  const [ document2, setDocument2] = useState("");

  const [ issueDate1, setIssueDate1] = useState("");


  const totalFields = 19;
  const filledFields = [
    date,
    companyName,
    companyName1,
    firstName,
    lastName,
    addInfo,
    postalCode,
    state,
    phoneNumber,
    email,
    indNumber,
    cityName,
    issued,
    document1,
    issuingCountry,
    countryCode,
    country,
    nearestAirport,
     countryCode1,
     document2,
     issueDate1
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div className="">
        <div className="text-center my-4">
          <h1 className="font-bold">
            EVALUATION REPORT AND REFERENCE/RECOMMENDATION LETTERS
          </h1>
        </div>
        <div className=" flex flex-col  px-4  gap-4">
          <div className="flex items-center justify-between gap-2  ">
            <div className=" w-[25%]">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="issued"
              >
                Issued
              </label>
              <select
                id="issued"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issued}
                onChange={(e) => setIssued(e.target.value)}
              >
                <option value="maile1">2</option>
                <option value="maile2">5</option>
                <option value="maile3">8</option>
              </select>
            </div>

            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="issuedate1"
              >
                Issue Date
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="issuedate1"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              </div>
            </div>

            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="vessel"
              >
                Vessel/Company Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="vessel"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="document1"
              >
                Document
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="document1"
                  type="text"
                  value={document1}
                  onChange={(e) => setDocument1(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <h1 className="text-center font-bold my-4">CRIMINAL RECORD</h1>

          <div className="flex items-center justify-between gap-2  ">
            <div className="flex flex-col w-full  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="issuingcountry1">
                Issuing Country
              </label>
              <select id="issuingcountry1" className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]" 
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)} >
                <option value="india">India</option>
                <option value="Austrelia">Austrelia</option>
                <option value="england">England</option>
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
                  value={issueDate1}
                  onChange={(e) => setIssueDate1(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="document2"
              >
                Document
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="document2"
                  type="text"
                  value={document2}
                  onChange={(e) => setDocument2(e.target.value)}
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="w-[25%] ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="street1"
              >
                Vessel/Company Name
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="street1"
                  type="text"
                  value={companyName1}
                  onChange={(e) => setCompanyName1(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-[25%]  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="contryCode">
                Country Code
              </label>
              <select id="countryCode" className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]" value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)} >
                <option value="45440">45440</option>
                <option value="02458">02458</option>
                <option value="02453">010203</option>
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-[50%]">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="postalcode">
                Postal Code/ZIP Code
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="postalcode"
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
                className="blocktext-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName1"
              >
                City
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="cityName1"
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%]  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="country">
                Country
              </label>{" "}
              <select id="country" className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                <option value="maile1">India</option>
                <option value="maile2">Austrelia</option>
                <option value="maile3">England</option>
              </select>
            </div>
          </div>

          {/* airport  */}

          <div className="flex flex-col">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
              Nearest Airport
            </label>
            <select id="NearestAirport" className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"   
            value={nearestAirport}
                  onChange={(e) => setNearestAirport(e.target.value)}>
              <option value="maile1">India</option>
              <option value="maile2">Austrelia</option>
              <option value="maile3">England</option>
            </select>
          </div>

          {/* counstry and city section start*/}

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex flex-col  ">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="countryCode1">
                Country Code
              </label>
              <select id="countryCode1" className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"   value={countryCode1}
                  onChange={(e) => setCountryCode1(e.target.value)}>
                <option value="maile1">+91</option>
                <option value="maile2">+50</option>
                <option value="maile3">+08</option>
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
