"use client";
import {
  AddReferencesData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect } from "react";
import moment from "moment";

import { useState } from "react";
import { toast } from "react-toastify";
import { countryCodeDrop } from "@/constants/constants";

type RefrencesComplete = {
  percentage: number;
  color: string;
};
type Props = {
  refrencesComplete: RefrencesComplete;
  setRefrencesComplete: React.Dispatch<React.SetStateAction<RefrencesComplete>>;
  userDetail: any;
  refrencesDetail: any;
  criminal: any;
};

const Refrences = ({
  refrencesComplete,
  setRefrencesComplete,
  userDetail,
  refrencesDetail,
  criminal,
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

  const [countryCode1, setCountryCode1] = useState("+91");
  // const [ document2, setDocument2] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFile1, setSelectedFile1] = useState<any>(null);

  const [disabled, setDisabled] = useState(true);

  const [issueDate1, setIssueDate1] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  // const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    // GetDropdownDetails("countryCode", (res: any) => {
    //   // console.log('County',res?.data)
    //   setCountryCodeDrop(res?.data?.values);
    // });
  }, []);

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
    selectedFile1,
  ].filter(Boolean).length;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setRefrencesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile(byteArray);
      };

      reader.readAsDataURL(file);
    }
    // const file = event.target.files?.[0];
    // if (file) {
    //   setSelectedFile(file);
    // }
  };

  const handleFileChange1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile1(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log("refrencesDetail", refrencesDetail);
    if (refrencesDetail) {
      setCompanyName(refrencesDetail?.vesselOrCompanyName);
      setCompanyName1(refrencesDetail?.referenceCompany);
      setFirstName(refrencesDetail?.referenceFirstName);
      setLastName(refrencesDetail?.referenceLastName);
      setPhoneNumber(refrencesDetail?.referencePhoneNumber);
      setEmail(refrencesDetail?.referenceEmail);
      setConsentGiven(refrencesDetail?.consentGiven ? "Yes" : "No");
      setCountryCode1(refrencesDetail?.referenceCountryCode);
      // setSelectedFile(refrencesDetail?.)
      // setSelectedFile1(refrencesDetail?.)
      setIssueDate1(
        moment(refrencesDetail?.criminalRecordIssueDate).format("YYYY-MM-DD")
      );
      setDate(moment(refrencesDetail?.issueDate).format("YYYY-MM-DD"));
      setIssued(moment(refrencesDetail?.issuedBy).format("YYYY-MM-DD"));
      setIssuingCountry(refrencesDetail?.issuingCountry);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let formData = new FormData();

      formData.append("issueDate", date);
      formData.append("vesselOrCompanyName", companyName);
      formData.append("referenceCompany", companyName1);
      formData.append("referenceFirstName", firstName);
      formData.append("referenceLastName", lastName);
      formData.append("referencePhoneNumber", phoneNumber);
      formData.append("referenceEmail", email);

      formData.append("issuedBy", issued);
      formData.append("issuingCountry", issuingCountry);
      formData.append("referenceCountryCode", countryCode1);
      formData.append("criminalRecordIssueDate", issueDate1);
      formData.append("documentUrl", selectedFile);
      formData.append("criminalRecordDocumentUrl", selectedFile1);

      formData.append("color", color);
      formData.append("completed", percentage);

      AddReferencesData(
        userDetail?.userId,
        consentGiven == "Yes" ? true : false,
        formData,
        AddReferencesDataCB
      );
    }
  };

  const AddReferencesDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Refrences submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Refrences  not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

  };

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
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="issued"
                >
                  Issued
                </label>
                <select
                  id="issued"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={issued}
                  onChange={(e) => setIssued(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled>
                  SELECT
                  </option>
                  <option value="maile1">2</option>
                  <option value="maile2">5</option>
                  <option value="maile3">8</option>
                </select>
              </div>

              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Issue Date"
                  disabled={disabled}
                />
                {/* </div> */}
              </div>

              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="vessel"
                >
                  Vessel/Company Name
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  id="vessel"
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase();
                    setCompanyName(value);
                  }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Vessel/Company Name"
                  disabled={disabled}
                />
              </div>

              <div className="grid col-span-3">
                {isHideShow && (
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
                        disabled={disabled}
                      />
                    </div>
                    <div>
                      {selectedFile ? (
                        <p className=" text-gray-700">
                          File Selected: {selectedFile.name}
                        </p>
                      ) : (
                        <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                          No File Selected
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="font-bold my-2">Criminal Record </h1>

            <div className="grid grid-cols-2 gap-4  ">
              <div className="  ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 "
                  htmlFor="issuingcountry1"
                >
                  Issuing Country
                </label>
                <select
                  id="issuingcountry1"
                  className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={issuingCountry}
                  onChange={(e) => setIssuingCountry(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled>
                   SELECT
                  </option>
                  {countryDrop &&
                    countryDrop?.map((country: any, index: number) => (
                      <option key={index} value={country}>
                        {country?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>

              <div className="">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Issue Date"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="grid col-span-2 ">
                {isHideShow && (
                  <div className="flex gap-4  my-4">
                    <div className="  ">
                      <label
                        htmlFor="file-uploadsu"
                        className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                      >
                        Attachment Document
                      </label>
                      <input
                        id="file-uploadsu"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange1}
                        disabled={disabled}
                      />
                    </div>
                    <div>
                      {selectedFile1 ? (
                        <p className=" text-gray-700">
                          File Selected: {selectedFile1.name}
                        </p>
                      ) : (
                        <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                          No File Selected
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="font-bold my-2">Reference Contacts</h1>

            {/* third section start*/}
            <div className="grid grid-cols-3 gap-4">
              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase();
                    setFirstName(value);
                  }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter First Name"
                  disabled={disabled}
                />
              </div>

              <div className="">
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
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase();
                    setLastName(value);
                  }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter  Last Name"
                  disabled={disabled}
                />
              </div>
              <div className="">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="street1"
                >
                  Company
                </label>
                <input
                  id="street1"
                  type="text"
                  value={companyName1}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase();
                    setCompanyName1(value);
                  }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter  Company"
                  disabled={disabled}
                />
                {/* </div> */}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3  my-3 ">
              <div className="w-[50%]  ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2  "
                  htmlFor="countryCode1"
                >
                  Country Code
                </label>
                <select
                  id="countryCode1"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={countryCode1}
                  onChange={(e) => setCountryCode1(e.target.value)}
                  disabled={disabled}
                >
                  <option value="" disabled>
                    SELECT
                  </option>
                  {countryCodeDrop &&
                    countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>
                        {code?.flag + "" + code?.phoneCode}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-full ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2  "
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="number"
                    type="text"
                    value={phoneNumber}
                    maxLength={14} // Maximum 12 digits
                    onChange={(e) => {
                      // Allow only numeric input
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) { // Regex to allow only digits
                        setPhoneNumber(value.trimStart());
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value.length < 7) {
                        toast.error("Phone number must be at least 7 digits long");
                      }
                    }}
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Phone Number"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="w-[80%] ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2  "
                  htmlFor="email"
                >
                  Email
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\s+/g, ''); // Removes all spaces
                    // Allow only alphanumeric characters, ".", "@", and "-"
                    value = value.replace(/[^a-zA-Z0-9@.-]/g, ''); 
                    setEmail(value?.trim());
                  }}
                  onBlur={(e) => {
                    // Basic email validation
                    if (!e.target.validity.valid) {
                      toast.error("Please enter a valid email address.");
                    }
                  }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Email"
                  disabled={disabled}
                />
                {/* </div> */}
              </div>
            </div>

            <div className="flex items-center justify-between mt-2  ">
              <div className="w-full  ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="inumber"
                >
                  ConsentGiven
                </label>
                <div className="relative flex items-center  ">
                  <select
                    id="inumber"
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled>
                      SELECT
                    </option>
                    <option value="Yes" disabled>
                      YES
                    </option>
                    <option value="No" disabled>
                      NO
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-4 mt-4 ">
            <button
              type="submit"
              className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
            >
              Save
            </button>
            <Link
            href={"#"}
            onClick={handleEdit}
            className={`border p-2 rounded-lg px-8 ${
              isEditing
                ? "border-red-500 text-red-500" 
                : "border-[#00A264] text-[#00A264]"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"} {/* Conditional rendering */}
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Refrences;
