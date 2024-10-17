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
  personalComplete: PersonalComplete; 
  setPersonalComplete: React.Dispatch<React.SetStateAction<PersonalComplete>>;
  userDetail:any;
  criminal:any;
}

const PersonalDetails = ({personalComplete,setPersonalComplete,userDetail, criminal}:Props) => {
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
  const [disabled,setDisabled] = useState(true)
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [gender, setGender] = useState("");

  const [marital, setMarital] = useState("");

  const [nationality, setNationality] = useState("");
  const [color,setColor]=useState('')

  useEffect(() => {
    GetDropdownDetails('country', (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values)
    })
  }, [])

  const totalFields = 10;
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
      setReligionName(userDetail.religion);
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
  

  const percentage:any = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      setColor("#FF9900");
    } else {
      setPersonalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleSubmit = async (e: React.FormEvent) => {
    // try {
    e.preventDefault(); 
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {

    let formData = new FormData();
    // formData.append('userId',userDetail?.userId);
    formData.append('firstName',firstName);
    formData.append('middleName',middleName);
    formData.append('lastName',lastName);
    formData.append('dateOfBirth',date);
    formData.append('cityOfBirth',cityBirth);
    formData.append('religion',religionName);
    formData.append('countryOfBirth',countryOfBirth);
    formData.append('gender',gender);
    formData.append('maritalStatus',marital);
    formData.append('nationality',nationality);
    formData.append('color',color);
    formData.append('completed',percentage);
    AddProfileData(userDetail?.userId,formData, AddaddressdataDB);
  };
}
  const AddaddressdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("Personal detail submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      toast.error("Personal detail not submited ");
    }
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

  const handleEdit = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8  ">
      {/* <CircularProgress percentage={Math.round(percentage)} color={per} /> */}
      <h2 className="font-bold">Personal Details (As Per Passport)</h2>

      <form onSubmit={handleSubmit}>
        <div className="px-2">
          {/* <div className="flex gap-8 items-center justify-center mt-3 mb-6">
              <label
                htmlFor="medicalfile-upload3"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
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
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  File Selected: {selectedFile.name}
                </p>
              ) : (
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  No file selected
                </p>
              )}
            </div> */}
          {/* <div className="mb-4"> */}
          {/* <div className="flex gap-4 items-center justify-around mt-3 mb-6">
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
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-white rounded-full text-red-500 h-5 w-5  "
                  onClick={removeSelectedImage}
                >
                  <IoIosClose className="text-xl w-full h-full" />
                </button>
              </div>
            ) : (
              <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                No file selected
              </p>
            )}
          </div> */}

          <div className="grid grid-cols-2 gap-4    ">
            <div className="w-full ">
              <label
                className="blocktext-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter First Name"
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className="w-full ">
              <label
                className="block  text-[14px] leading-[19.07px]  text-[#333333]  mb-1"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Middle Name"
                disabled={disabled}
              />
              {/* </div> */}
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Last Name"
                disabled={disabled}
              />
              {/* </div> */}
            </div>

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2" htmlFor="Gender1">
                Gender
              </label>
              <select
              id="Gender1"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={disabled}
              >
                <option value="">Select</option>
                {genderDrop&& genderDrop?.map((gen:any,index:number)=>(
                <option key={index} value={gen}>{gen.toUpperCase()}</option>
              ))}
              </select>
            </div>
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 " htmlFor="DateofBirth">
                Date of Birth
              </label>
              <input
              id="DateofBirth"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                disabled={disabled}
              />
            </div>
            {/* </div> */}

            {/* counstry and city section start*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className="w-full">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2" htmlFor="CountryofBirth">
                Country of Birth
              </label>
              <select
              id="CountryofBirth"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={countryOfBirth}
                onChange={(e) => setCountryOfBirth(e.target.value)}
                disabled={disabled}
              >
                <option value="">Select</option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>{country?.toUpperCase()}</option>
                  ))}
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Your City"
                disabled={disabled}
              />
             
            </div>
           

            {/* counstry and city section end*/}

            {/* <div className="flex items-center justify-between gap-4  "> */}
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2" htmlFor="nationality">
                Nationality
              </label>
              <select
              id="nationality"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                disabled={disabled}
              >
                <option value="">Select</option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>{country?.toUpperCase()}</option>
                  ))}
              </select>
            </div>
            {/* Relision */}
            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Religion Name"
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2" htmlFor="meritalstatus">
                Marital Status
              </label>
              <select
              id="meritalstatus"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={marital}
                onChange={(e) => setMarital(e.target.value)}
                disabled={disabled}
              >
                <option value="">Select</option>
                {martialStatusDrop&& martialStatusDrop?.map((status:any,index:number)=>(
                <option key={index} value={status}>{status.toUpperCase()}</option>
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
            <Link
          href={'#'}
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
export default PersonalDetails;
