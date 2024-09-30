"use client";
import { AddProfileData, GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import CircularProgress from "../CircularProgress";

type PersonalComplete = {
  percentage: number;
  color: string;
};
type Props={
  personalComplete: PersonalComplete; // mjrComplete is an object with percentage and color
  setPersonalComplete: React.Dispatch<React.SetStateAction<PersonalComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const PersonalDetails = ({personalComplete,setPersonalComplete,userDetail}:Props) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setmidddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [cityBirth, setCityName] = useState("");
  const [religionName, setReligionName] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [image, setImage] = useState<any>(null);
  const [genderDrop,setGenderDrop] = useState<any>([])
  const [martialStatusDrop,setMartialStatusDrop] = useState<any>([])

  
  const [gender, setGender] = useState("");

  const [marital, setMarital] = useState("");

  const [nationality, setNationality] = useState("");

  const totalFields = 11;
  const filledFields = [
    firstName,
    middleName,
    lastName,
    date,
    cityBirth,
    countryOfBirth,
    selectedImage,
    gender,
    marital,
    nationality,
    religionName
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  useEffect(() => {
    if (userDetail) {
      setFirstName(userDetail.firstName);
      setmidddleName(userDetail.middleName);
      setLastName(userDetail.lastName);
      setDate(userDetail.dateOfBirth);
      setCityName(userDetail.cityOfBirth);
      setReligionName(userDetail.religionName);
      setCountryOfBirth(userDetail.countryOfBirth);
      setSelectedImage(userDetail.image);
      setGender(userDetail.gender);
      setMarital(userDetail.maritalStatus);
      setNationality(userDetail.nationality);
      }
  }, [])

  useEffect(() => {
    GetDropdownDetails('gender',(res:any)=>{
      setGenderDrop(res?.data?.values)
    })
    GetDropdownDetails('martialStatus',(res:any)=>{
      setMartialStatusDrop(res?.data?.values)
    })
  }, [])
  

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])

  const handleSubmit = async (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission

    let formData = {
      firstName,
      middleName,
      lastName,
      date,
      cityBirth,
      religionName,
      countryOfBirth,
      gender,
      marital,
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

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImage(e.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage(null); // Remove the selected image
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      {/* <CircularProgress percentage={Math.round(percentage)} color={per} /> */}

      <form onSubmit={handleSubmit}>
        <div className="px-2">
          {/* <div className="flex gap-8 items-center justify-center mt-3 mb-6">
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
            </div> */}
          {/* <div className="mb-4"> */}
          <div className="flex gap-4 items-center justify-around mt-3 mb-6">
            <div>
              {" "}
              <label
                htmlFor="photo"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]  "
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {selectedImage ? (
              <div className=" relative mt-4 h-24 w-24">
                <Image
                  width={500}
                  height={500}
                  src={selectedImage}
                  alt="Selected"
                  className="relative h-full w-full object-cover rounded-full border"
                />
                {/* Close button for removing the image */}
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-white rounded-full text-red-500 h-5 w-5  "
                  onClick={removeSelectedImage}
                >
                  <IoIosClose className="text-xl w-full h-full" />
                </button>
                {/* <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                     File Selected: {selectedImage}
                   </p> */}
              </div>
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Last Name"
                required
              />
              {/* </div> */}
            </div>

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2" htmlFor="Gender1">
                Gender
              </label>
              <select
              id="Gender1"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                {genderDrop&& genderDrop?.map((gen:any,index:number)=>(
                <option key={index} value={gen}>{gen}</option>
              ))}
              </select>
            </div>
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2 " htmlFor="DateofBirth">
                Date of Birth
              </label>
              <input
              id="DateofBirth"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* </div> */}

            {/* counstry and city section start*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className="w-full">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2" htmlFor="CountryofBirth">
                Country of Birth
              </label>
              <select
              id="CountryofBirth"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                htmlFor="cityBirth" 
              >
                City of Birth
              </label>
              {/* <div className=" flex items-center  "> */}
              <input
                id="cityBirth"
                type="text"
                value={cityBirth}
                onChange={(e) => setCityName(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter your city"
                required
              />
             
            </div>
           

            {/* counstry and city section end*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2" htmlFor="nationality">
                Nationality
              </label>
              <select
              id="nationality"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                htmlFor="relision"
              >
                Religion
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="relision"
                type="text"
                value={religionName}
                onChange={(e) => setReligionName(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Religion Name"
                required
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-2" htmlFor="meritalstatus">
                Marital Status
              </label>
              <select
              id="meritalstatus"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={marital}
                onChange={(e) => setMarital(e.target.value)}
                required
              >
                <option value="">Select Marital Status</option>
                {martialStatusDrop&& martialStatusDrop?.map((status:any,index:number)=>(
                <option key={index} value={status}>{status}</option>
              ))}
                {/* <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option> */}
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
