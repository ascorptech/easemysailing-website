"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/ProfileCVService";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setmidddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [religionName, setReligionName] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [gender, setGender] = useState("");

  const [nextKinName, setNextKinName] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [nextKinChildren, setNextKinChildren] = useState("");
  const [personality, setPersonality] = useState("");
  const [additional, setAdditional] = useState("");
  const [myFuture, setMyFuture] = useState("");

  const [criminal, setCriminal] = useState("");
  const [nationality, setNationality] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission

    let formData = {
      firstName,
      middleName,
      lastName,
      date,
      cityName,
      religionName,
      nextKinName,
      nextKinShip,
      nextKinAddre,
      nextKinChildren,
      personality,
      additional,
      myFuture,
      criminal,
      countryOfBirth,
      gender,
    };
    console.log(formData);
    AddProfileData(formData, AddaddressdataDB);
  };
  const AddaddressdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("address submited successfully");
    } else {
      toast.error("address not submited ");
    }

    //   const data = await AddProfileData(formData);
    //   console.log("Success:", formData);
    //   toast.success(" PersonalDetails successfully");
    // } catch (error) {
    //   toast.error("PersonalDetails not updated");

    //   console.error("Error:", error);
    // }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className="px-2">
         
            <div className="flex gap-8 items-center justify-center mt-3 mb-6">
              <label
                htmlFor="medicalfile-upload3"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
              >
                Photo
              </label>
              <input
                id="medicalfile-upload3"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              {selectedFile ? (
                <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  File Selected: {selectedFile.name}
                </p>
              ) : (
                <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  No file selected
                </p>
              )}
            </div>
          
          
            <div className="grid grid-cols-2 gap-4    ">
             
              <div className="w-full ">
                <label
                  className="blocktext-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                {/* <div className="relative flex items-center  "> */}
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border rounded-md w-full h-9 py-[8px] px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                    placeholder="Enter First Name"
                    required
                  />
                {/* </div> */}
              </div>
              <div className="w-full ">
                <label
                  className="block  text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  mb-1"
                  htmlFor="userName"
                >
                  Middle Name
                </label>
                {/* <div className=" flex items-center  "> */}
                  <input
                    id="userName"
                    type="text"
                    value={middleName}
                    onChange={(e) => setmidddleName(e.target.value)}
                    className="border rounded-md w-full h-9 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                    placeholder="Enter middle Name"
                    required
                  />
                {/* </div> */}
              </div>
            

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded-md h-9 w-full py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline  border-[#00A264]"
                  placeholder="Enter Last Name"
                  required
                />
              {/* </div> */}
            </div>

            {/* <div className="flex items-center justify-between gap-4  "> */}
              <div className=" w-full">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2">
                  Gender
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=" w-full">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 ">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="border w-full p-2 h-9 rounded-md border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            {/* </div> */}

            {/* counstry and city section start*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
              <div className="w-full">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2">
                  Country of Birth
                </label>
                <select
                  className="bg-white h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full border border-[#00A264] focus:outline-none rounded-md"
                  value={countryOfBirth}
                  onChange={(e) => setCountryOfBirth(e.target.value)}
                  required
                >
                  <option value="">Select country</option>
                  <option value="india">India</option>
                  <option value="australia">Australia</option>
                  <option value="england">England</option>
                </select>
              </div>

              <div className="w-full ">
                <label
                  className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                  htmlFor="cityName"
                >
                  City of Birth
                </label>
                {/* <div className=" flex items-center  "> */}
                  <input
                    id="cityName"
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="border rounded-md w-full h-9 py-[8px] px-2text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                    placeholder="Enter your city"
                    required
                  />
                {/* </div> */}
              </div>
            {/* </div> */}

            {/* counstry and city section end*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
              <div className=" w-full">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2">
                  Nationality
                </label>
                <select
                  className="bg-white w-full h-9 border border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] rounded-md"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <option value="">Select nationality</option>
                  <option value="indian">Indian</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="english">English</option>
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
                {/* <div className="relative flex items-center  "> */}
                  <input
                    id="cityName"
                    type="text"
                    value={religionName}
                    onChange={(e) => setReligionName(e.target.value)}
                    className="border rounded-lg w-full h-9 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Religion Name"
                    required
                  />
                {/* </div> */}
              </div>
              <div className=" w-full">
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2">
                Marital Status
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          


        

          

          <div className="flex gap-2 mb-4 mt-4">
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
export default PersonalDetails;
