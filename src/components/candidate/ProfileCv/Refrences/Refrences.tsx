"use client";
import { AddReferencesData, GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";
import { toast } from "react-toastify";

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
 
  // const [postalCode, setPostalCode] = useState("");
 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [consentGiven, setConsentGiven] = useState("");
  // const [cityName, setCityName] = useState("");
  const [issued, setIssued] = useState("");
  // const [document1, setDocument1] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [country, setCountry] = useState("");
 
  const [ countryCode1, setCountryCode1] = useState("");
  // const [ document2, setDocument2] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFile1, setSelectedFile1] = useState<any>(null);



  const [ issueDate1, setIssueDate1] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails('country', (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values)
    })
    GetDropdownDetails('countryCode', (res: any) => {
      // console.log('County',res?.data)
      setCountryCodeDrop(res?.data?.values)
    })
  }, [])


  const totalFields = 14;
  const filledFields = [
    date,
    companyName,
    companyName1,
    firstName,
    lastName,
    phoneNumber,
    email,
    consentGiven,
    issued,
    issuingCountry,
     countryCode1,
     issueDate1,
     selectedFile,
     selectedFile1
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

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChange1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile1(file);
    }
  };



  
  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
let formData = new FormData();
formData.append('issueDate',date)
formData.append('vesselOrCompanyName',companyName)
formData.append('referenceCompany',companyName1)
formData.append('referenceFirstName',firstName)
formData.append('referenceLastName',lastName)
formData.append('referencePhoneNumber',phoneNumber)
formData.append('referenceEmail',email)

formData.append('issuedBy',issued)
formData.append('issuingCountry',issuingCountry)
formData.append('referenceCountryCode',countryCode1)
formData.append('criminalRecordIssueDate', issueDate1)
formData.append('document', selectedFile)
formData.append('criminalRecordDocument',selectedFile1)
AddReferencesData(userDetail?.userId,consentGiven, formData, AddReferencesDataCB )
   
  };

  const AddReferencesDataCB = (result:any)=>{
    if (result?.status == 200||result?.status==201) {
      toast.success("Refrences submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      toast.error("Refrences  not submited ");
    }
  }

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">

<form onSubmit={handleSubmit}>
      <div className="">
        {/* <div className=" my-2"> */}
          <h1 className="font-bold">
          Appraisal/ Evaluation Report And Reference /Recommendation Letters
          </h1>
        {/* </div> */}
        <div className=" mt-4">
          <div className=" grid grid-cols-3 gap-4   ">
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="issued"
              >
                Issued
              </label>
              <select
                id="issued"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issued}
                onChange={(e) => setIssued(e.target.value)}
              >
                <option value="maile1">2</option>
                <option value="maile2">5</option>
                <option value="maile3">8</option>
              </select>
            </div>

            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="issuedate1"
              >
                Issue Date
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="issuedate1"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter middle Name"
                  required
                />
              {/* </div> */}
            </div>

            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="vessel"
              >
                Vessel/Company Name
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="vessel"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>
            
           

            <div className="grid col-span-3">
            <div className="flex items-center justify-start gap-4 my-6">
            <div className="  ">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
              >
                Attachment Document
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              
            </div>
            <div>
            {selectedFile ? (
              <p className="mt-4 text-gray-700">
                File Selected: {selectedFile.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                No file selected
              </p>
            )}
          </div>
          </div>
          </div>
          </div>

          <h1 className="font-bold my-2">Criminal Record </h1>

          <div className="grid grid-cols-2 gap-4  ">
            <div className="  ">
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-2 " htmlFor="issuingcountry1">
                Issuing Country
              </label>
              <select id="issuingcountry1" className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]" 
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)} >
               {countryDrop && countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>{country?.toUpperCase()}</option>
                  ))}
              </select>
            </div>

            <div className="">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>



             
            </div>
            <div className="grid col-span-2 ">
            <div className="flex gap-4  my-4">
            <div className="  ">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
              >
                Attachment Document
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange1}
              />
              
            </div>
            <div>
            {selectedFile1 ? (
              <p className="mt-4 text-gray-700">
                File Selected: {selectedFile1.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                No file selected
              </p>
            )}
          </div>
          </div>
              </div>

            </div>

            
          

          <h1 className="font-bold my-2">Reference Contacts</h1>

          {/* third section start*/}
          <div className="grid grid-cols-3 gap-4">
           
            <div className=" ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>

            <div className="">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>
            <div className="">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="street1"
              >
                Company 
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="street1"
                  type="text"
                  value={companyName1}
                  onChange={(e) => setCompanyName1(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>

          </div>

        

         

          <div className="flex items-center justify-between gap-4  my-3 ">
            <div className="w-[40%]  ">
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-2 " htmlFor="countryCode1">
                Country Code
              </label>
              <select id="countryCode1" className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"   value={countryCode1}
                  onChange={(e) => setCountryCode1(e.target.value)}>
                {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                    <option key={index} value={code}>{code?.toUpperCase()}</option>
                  ))}
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full ">
              <label
                className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-2 "
                htmlFor="email"
              >
                Email
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>


          </div>

          <div className="flex items-center justify-between mt-2  ">
           

            <div className="w-full  ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="inumber"
              >
                 ConsentGiven
              </label>
              <div className="relative flex items-center  ">
                <input
                  id="inumber"
                  type="text"
                  value={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="yes/No"
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
          <Link
            href="#"
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
export default Refrences;
