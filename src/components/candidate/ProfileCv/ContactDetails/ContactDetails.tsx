"use client";
import {
  AddContactData,
  AddProfileData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";
import { toast } from "react-toastify";

type ContactComplete = {
  percentage: number;
  color: string;
};
type Props = {
  contactComplete: ContactComplete; // mjrComplete is an object with percentage and color
  setContactComplete: React.Dispatch<React.SetStateAction<ContactComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail: any;
};

const ContactDetails = ({
  contactComplete,
  setContactComplete,
  userDetail,
}: Props) => {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [indNumber, setIndNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [rCountrycode, setRCountrycode] = useState("+91");
  const [mCountrycode, setMCountrycode] = useState("+91");
  const [country1, setCountry1] = useState("");
  const [nearestAirport, setNearestAirport] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("userDetail", userDetail);
    if (userDetail) {
      setEmail(userDetail?.email);
    }
  }, []);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("countryCode", (res: any) => {
      // console.log('County',res?.data)
      setCountryCodeDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 11;
  const filledFields = [
    address,
    number,
    addInfo,
    postalCode,
    state,
    phoneNumber,
    email,
    cityName,
    phoneNumber1,
    nearestAirport,
    country1,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setContactComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let data = {
      id: userDetail?.userId,
      street: "string",
      address: address,
      number: "string",
      additionalInfo: addInfo,
      postalCode: postalCode,
      zipcode: postalCode,
      city: cityName,
      state: state,
      country: country1,
      nearestAirport: nearestAirport,
      mobileCountryCode: mCountrycode,
      mobilePhoneNumber: phoneNumber,
      directLineCountryCode: rCountrycode,
      directLinePhoneNumber: phoneNumber1,
      emailAddress: email,
      // "indosNumber": indNumber
    };

    // console.log(data);
    AddContactData(data, AddaddressdataDB);
  };
  const AddaddressdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Contact submited successfully");
    } else {
      toast.error("Contact not submited ");
    }
  };
  const handleEdit = () => {
    setDisabled(!disabled);
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <h2 className="font-bold">Home Address</h2>
      <form onSubmit={handlesubmit}>
        <div className="">
          <div className=" flex flex-col  px-4 text-[14px] leading-[19.07px]  text-[#333333] gap-4">
            <div className="flex items-center justify-between gap-4  ">
              {" "}
              <div className="w-[50%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Street"
                  disabled={disabled}
                />
                {/* </div> */}
              </div>
              <div className="w-[50%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="number"
                >
                 Enter Number
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder=" Enter Number"
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>

            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Add. Info (c/o etc.)"
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col w-[50%]  ">
                <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 ">
                  Country
                </label>{" "}
                <select
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={country1}
                  onChange={(e) => setCountry1(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {countryDrop &&
                    countryDrop?.map((country: any, index: number) => (
                      <option key={index} value={country}>
                        {country?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-[50%]">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 "
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
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter  State/Province"
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>

            {/* state section */}

            <div className="flex items-center gap-4 w-full">
              <div className="w-[50%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter  City"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 ">
                  Postal Code/ZIP Code
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="addinfo"
                    type="number"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Postal Code/ZIP Code"
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>

            {/* airport  */}

            <div className="flex flex-col">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 "
                htmlFor="nearestAirport"
              >
                Nearest Airport
              </label>

              <div className="relative flex items-center  ">
                <input
                  id="nearestAirport"
                  type="text"
                  value={nearestAirport}
                  onChange={(e) => setNearestAirport(e.target.value)}
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Nearest Airport"
                  disabled={disabled}
                />
              </div>
              {/* <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={nACountrycode}
                onChange={(e) => setNACountrycode(e.target.value)}
              >
                <option value="" disabled>
                  country
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>{country?.toUpperCase()}</option>
                  ))}
              </select> */}
            </div>

            {/* counstry and city section start*/}

            <div className="grid col-span-2 ">
              <h1 className="font-bold">Mobile Phone</h1>
            </div>

            <div className="flex items-center justify-between gap-2 ">
              <div className="flex flex-col  ">
                <label className="text-[14px] leading-[19.07px]  text-[#333333]  ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={mCountrycode}
                  onChange={(e) => setMCountrycode(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {/* {countryCodeDrop &&
                    countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code}>
                        {code?.toUpperCase()}
                      </option>
                    ))} */}
                </select>
              </div>

              <div className="w-[78%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] "
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
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Phone Number"
                    disabled={disabled}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid col-span-2">
              <h1 className="font-bold">Direct Line</h1>
            </div>
            <div className="flex items-center justify-between gap-2  ">
              <div className="flex flex-col  ">
                <label className="text-[14px] leading-[19.07px]  text-[#333333]  ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={rCountrycode}
                  onChange={(e) => setRCountrycode(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {countryCodeDrop &&
                    countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code}>
                        {code?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-[78%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] "
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
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Phone Number"
                    disabled={disabled}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4  ">
              <div className="w-full ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 "
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
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Email Address"
                    disabled={disabled}
                    required
                  />
                </div>
              </div>

              {/* <div className="w-[50%] ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder=""
                    required
                  />
                </div>
              </div> */}
            </div>
          </div>

          <div className="flex gap-2 mb-4 mt-4 ml-3">
            <button
              type="submit"
              className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
            >
              Save
            </button>
            <Link
              href={"#"}
              onClick={handleEdit}
              className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
            >
              Edit
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactDetails;
