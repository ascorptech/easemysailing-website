"use client";

import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


type LicensesComplete = {
  percentage: number;
  color: string;
};
type Props={
  licensesComplete: LicensesComplete; // mjrComplete is an object with percentage and color
  setLicensesComplete: React.Dispatch<React.SetStateAction<LicensesComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const Licenses = ({licensesComplete,setLicensesComplete,userDetail}:Props) => {
  // State for form fields
  const [number, setNumber] = useState("");
 
  const [idoNotACoC, setIdoNotACoC] = useState("");
  const [areaLimitation, setAreaLimitation] = useState("");
  const [capacity, setCapacity] = useState("");

  const [issuingOption, setIssuingOption] = useState("");
  const [typeOption, setTypeOption] = useState("");
  const [number1, setNumber1] = useState("");

  const [wRegulation, setWRegulation] = useState("");

  const [otherLimitation, setOtherLimitation] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  
  const [gMexpiryDate, setGMExpiryDate] = useState("");

  const [gMissueDate, setGMIssueDate] = useState("");

  

  const [issuingCountry, setIssuingCountry] = useState("");

  const [certificateNo, setCertificateNo] = useState("");
  const [issueAuthority, setIssueAuthority] = useState("");
  const [sTCWRegulation, setSTCWRegulation] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [separately, setSeparately] = useState("");

  const [sTCWRegulationOption, setSTCWRegulationOption] = useState("");
  const [capacityOption, setCapacityOption] = useState("");
  const [issueDateOption, setIssueDateOption] = useState("");
  const [expiryDateOption, setExpiryDateOption] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);

  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [capacityDrop, setCapacityDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails('capacity', (res: any) => {
      setCapacityDrop(res?.data?.values)
    })
    GetDropdownDetails('country', (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values)
    })
    // GetDropdownDetails('language', (res: any) => {
    //   // console.log('lang',res?.data)
    //   setLanguageDrop(res?.data?.values)
    // })
  }, [])

  // Salary expectation states

  const totalFields = 25;
  const filledFields = [
    number,
    idoNotACoC,
    areaLimitation,
    capacity,
    areaLimitation,
    issuingOption,
    typeOption,
    number1,
    wRegulation,
    otherLimitation,
    issueDate,
    expiryDate,
    issuingCountry,
    certificateNo,
    issueAuthority,
    sTCWRegulation,
    certificateType,
    separately,
    sTCWRegulationOption,
    capacityOption,
    issueDateOption,
    expiryDateOption,
    selectedFile,
    selectedFile1,
    selectedFile2,
    gMexpiryDate,
    gMissueDate
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setLicensesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setLicensesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setLicensesComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])



  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

  // const AddaddressdataDB = (result:any)=> {
  //   console.log(result)

  // }

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

  const handleFileChange2 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile2(file);
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <h1 className="font-bold  text-center ">CERTIFICATE OF COMPETENCY</h1>
         
          <div className="w-full ">
            <label
              className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
              htmlFor="cityName"
            >
              I do not have a CoC
            </label>
            {/* <div className="relative flex items-center  "> */}
            <input
              id="cityName"
              type="text"
              value={idoNotACoC}
              onChange={(e) => setIdoNotACoC(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
            {/* </div> */}
          </div>
        </div>

        {/* Alternate Position/Rank */}
        <div className="mb-3">
          
          <div className="grid grid-cols-2 gap-4  ">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Authority
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issueAuthority}
                onChange={(e) => setIssueAuthority(e.target.value)}
              >
                <option value="" disabled>
                  Issuing Country
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
                Certificate No
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={certificateNo}
                onChange={(e) => setCertificateNo(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Number"
                required
              />
              {/* </div> */}
            </div>

            {/* Preferred Vessel Type */}
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Certificate Type
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={certificateType}
                onChange={(e) => setCertificateType(e.target.value)}
              >
                <option value="" disabled>
                  Capacity{" "}
                </option>
                {capacityDrop && capacityDrop?.map((cap: any, index: number) => (
                <option key={index} value={cap}>{cap?.toUpperCase()}</option>
              ))}
              </select>
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                STCW Regulation
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={sTCWRegulation}
                onChange={(e) => setSTCWRegulation(e.target.value)}
              >
                <option value="" disabled>
                  STCW Regulation{" "}
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
              </select>
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Area Limitation
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={areaLimitation}
                onChange={(e) => setAreaLimitation(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Other Limitation
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={otherLimitation}
                onChange={(e) => setOtherLimitation(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Date
              </label>
              <input
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Expiry Date
              </label>
              <input
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
          </div>
          {/* Attachment Document */}
          <div className="flex gap-6 items-center  my-6 justify-center">
            <label
              htmlFor="medicalfile-upload3"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
            >
              Attachment Document
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
        </div>

        {/* Alternate Vessel Type */}

        {/* LANGUAGE TESTS */}

        <div className="mb-3">
          <h1 className="text-center font-bold ">
            GENERAL OPERATOR CERTIFICATE (GMDSS)
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issuing Country
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issuingCountry}
                onChange={(e) => setIssuingCountry(e.target.value)}
              >
                <option value="" disabled>
                  Issuing Country
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
                Number
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Capacity
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option value="" disabled>
                  Capacity
                </option>
                {capacityDrop && capacityDrop?.map((cap: any, index: number) => (
                <option key={index} value={cap}>{cap?.toUpperCase()}</option>
              ))}
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                STCW Regulation
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={wRegulation}
                onChange={(e) => setWRegulation(e.target.value)}
              >
                <option value="" disabled>
                  STCW Regulation
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Date
              </label>
              <input
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={gMissueDate}
                onChange={(e) => setGMIssueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Expiry Date
              </label>
              <input
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={gMexpiryDate}
                onChange={(e) => setGMExpiryDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-6 items-center  my-6 justify-center">
            <label
              htmlFor="medicalfile-upload3"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
            >
              Attachment Document
            </label>
            <input
              id="medicalfile-upload3"
              type="file"
              className="hidden"
              onChange={handleFileChange1}
            />
            {selectedFile1 ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFile1.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                No file selected
              </p>
            )}
          </div>

          <div className="mb-3">
            <h1 className="font-bold text-center ">ENDORSEMENTS</h1>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Not Issued Separately
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={separately}
                onChange={(e) => setSeparately(e.target.value)}
              >
                <option value="" disabled>
                  Not Issued Separately
                </option>
                {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Type
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={typeOption}
                  onChange={(e) => setTypeOption(e.target.value)}
                >
                  <option value="" disabled>
                    Type
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Issuing Country
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={issuingOption}
                  onChange={(e) => setIssuingOption(e.target.value)}
                >
                  <option value="" disabled>
                    Issuing Country
                  </option>
                  {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
                </select>
              </div>
              <div>
                <label
                  className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                  htmlFor=""
                >
                  Number
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  type="text"
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
                {/* </div> */}
              </div>

              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Capacity
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={capacityOption}
                  onChange={(e) => setCapacityOption(e.target.value)}
                >
                  <option value="" disabled>
                    Capacity
                  </option>
                  {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  STCW Regulation
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={sTCWRegulationOption}
                  onChange={(e) => setSTCWRegulationOption(e.target.value)}
                >
                  <option value="" disabled>
                    STCW Regulation
                  </option>
                  {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))}
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Issue Date
                </label>
                <input
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={issueDateOption}
                  onChange={(e) => setIssueDateOption(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={expiryDateOption}
                  onChange={(e) => setExpiryDateOption(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Attachment Document */}

          <div className="flex gap-6 items-center  my-6 justify-center">
            <label
              htmlFor="medicalfile-upload3"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
            >
              Attachment Document
            </label>
            <input
              id="medicalfile-upload3"
              type="file"
              className="hidden"
              onChange={handleFileChange2}
            />
            {selectedFile2 ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFile2.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                No file selected
              </p>
            )}
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
      </form>
    </div>
  );
};

export default Licenses;
