"use client";
import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";

import { act, useEffect, useState } from "react";
import { toast } from "react-toastify";

type CompanyComplete = {
  percentage: number;
  color: string;
};

type Props = {
  companyParticular: CompanyComplete; 
  setCompanyParticular: React.Dispatch<React.SetStateAction<CompanyComplete>>;
  // userDetail: any;
};

const CompanyParticular = ({
  companyParticular,
  setCompanyParticular,
}: Props) => {
  const [cmpName, setCmpname] = useState("");
  const [cmpType, setCmpType] = useState("");
  const [cmpLogo, setCpmLogo] = useState<any>(null);
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [personPhone, setPersonPhone] = useState("");
  const [cmpSite, setCmpSite] = useState("");
  const [cmpTel, setCmpTel] = useState("");
  const [address, setAddress] = useState("");
  const [gstNum, setGstNum] = useState("");
  const [numOfUser, setNumOfUser] = useState("");
  const [numOfShip, setNumOfShip] = useState("");
  const [typeShip, setTypeShip] = useState("");
  const [shipType, setShipType] = useState("");
  const [crewNational, setCrewNational] = useState("");
  const [crewMatrix, setCrewMatrix] = useState("");
  const [crewWelfare, setCrewWelfare] = useState("");
  const [cmpAdd, setCpmAdd] = useState<any>(null);
  const [licence, setLicence] = useState("");
  const [isoCerti, setIsoCerti] = useState<any>(null);
  const [bankName, setBankName] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [acType, setAcType] = useState("");
  const [iFSC, setIfsc] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  const [mCountrycode, setMCountrycode] = useState("+91");
  const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);

  const [mCountryTel, setMCountryTel] = useState("+91");
  const [countryCodeTel, setCountryCodeTel] = useState<any>([]);

  // const [exdate1, setExDate1] = useState("");
  // const [checkBox1, setCheckBox1] = useState<any>(false);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  // const [trainDrop, setTrainDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("countryCode", (res: any) => {
      // console.log('County',res?.data)
      setCountryCodeDrop(res?.data?.values);
      setCountryCodeTel(res?.data?.values);

    });
  }, []);

  // useEffect(() => {
  //   GetDropdownDetails("country", (res: any) => {
  //     // console.log('County',res?.data)
  //     setCountryDrop(res?.data?.values);
  //   });
  //   GetDropdownDetails("country", (res: any) => {
  //     // console.log('County',res?.data)
  //     // setTrainDrop(res?.data?.values);
  //   });
  // }, []);

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 25;
  const filledFields = [
    cmpName,
    cmpType,
    cmpLogo,
    contactPerson,
    contactPersonEmail,
    personPhone,
    cmpSite,
    cmpTel,
    address,
    gstNum,
    numOfUser,
    numOfShip,
    typeShip,
    shipType,
    crewNational,
    crewMatrix,
    crewWelfare,
    cmpAdd,
    licence,
    isoCerti,
    bankName,
    acNumber,
    acType,
    iFSC,
    swiftCode,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    // console.log("user", userDetail);
    if (percentage <= 30) {
      setCompanyParticular((prevState) => ({
        ...prevState,  
        percentage: percentage,  
        color: "#FF0000",  
      }));
      color = "red";
    } else if (percentage <= 70) {
      setCompanyParticular((prevState) => ({
        ...prevState,  
        percentage: percentage,  
        color: "#FF9900",  
      }));
      color = "#FF9900";
    } else {
      setCompanyParticular((prevState) => ({
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
      setCpmAdd(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setCpmLogo(file);
    }
  };

  const handleIsoChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsoCerti(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("trainingName", trainings);
    // formData.append("trainingCenter", trainingCenter);
    // formData.append("issuingCountry", issuingCountry);
    // formData.append("certificateNumber", eCDISNumber);
    // formData.append("issueDate", issuedate1);
    // formData.append("expiryDate", exdate1);
    // formData.append("neverExpires", checkBox1);

    // formData.append("document", selectedFiles);

    // AddEcdisData(userDetail?.userId, formData, AddEcdisdataDB);
  };

  // const AddEcdisdataDB = (result: any) => {
  //   console.log(result);
  //   if (result?.status == 200) {
  //     toast.success("ECDIS submited successfully");
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   } else {
  //     toast.error("ECDIS  detail not submited ");
  //   }
  // };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <h1 className="text-left font-bold">Company Particulars</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC"
              >
                Company Name
              </label>
              <input
                id="trainingC"
                type="text"
                value={cmpName}
                onChange={(e) => setCmpname(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Company Name"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainings"
              >
                Company Type
              </label>
              <select
                id="trainings"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={cmpType}
                onChange={(e) => setCmpType(e.target.value)}
              >
                <option value="" disabled selected>
                  Company
                </option>
                {/* {trainDrop &&
                  trainDrop?.map((train: any, index: number) => (
                    <option key={index} value={train}>
                      {train?.toUpperCase()}
                    </option>
                  ))} */}
              </select>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC"
              >
                Company Logo
              </label>
              <div className="flex gap-6 items-center  ">
                <label
                  htmlFor="logo-upload1"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                >
                  Upload photo
                </label>
                <input
                  id="logo-upload1"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanges}
                />
                {cmpLogo ? (
                  <p className="text-gray-700">File Selected: {cmpLogo.name}</p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="person"
              >
                Contact Person
              </label>
              <input
                id="person"
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Person"
                required
              />
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="mail"
              >
                Contact Person Email
              </label>
              <input
                id="mail"
                type="text"
                value={contactPersonEmail}
                onChange={(e) => setContactPersonEmail(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Email Id"
                required
              />
            </div>

            {/* <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="contactNo"
              >
                Contact Person Phone Number
              </label>
              <input
                id="contactNo"
                type="number"
                value={personPhone}
                onChange={(e) => setPersonPhone(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Phone No."
                required
              />
            </div> */}
            <div className="flex items-center justify-between gap-4 ">
              <div className="flex flex-col  ">
                <label className="text-[11.6px] leading-[22.07px]  text-[#333333] ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-[37px]  px-2    text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={mCountrycode}
                  onChange={(e) => setMCountrycode(e.target.value)}
                >
                  {countryCodeDrop &&
                    countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code}>
                        {code?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-[75%] ">
                <label
                  className="text-[13.7px] leading-[19.07px]  text-[#333333] "
                  htmlFor="contactNo"
                >
                  Contact Person Phone Number
                </label>
                <input
                  id="contactNo"
                  type="number"
                  value={personPhone}
                  onChange={(e) => setPersonPhone(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Phone No."
                  required
                />
              </div>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19px]  text-[#333333] "
                htmlFor="website"
              >
                Company Website
              </label>
              <input
                id="website"
                type="text"
                value={cmpSite}
                onChange={(e) => setCmpSite(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="website"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4 ">
              <div className="flex flex-col  ">
              <label className="text-[11.6px] leading-[22.07px]  text-[#333333] ">
              Country Code
                </label>
                <select
                  className="border rounded-md w-full h-[37px]   px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={mCountryTel}
                  onChange={(e) => setMCountryTel(e.target.value)}
                >
                  {countryCodeTel &&
                    countryCodeTel?.map((code: any, index: number) => (
                      <option key={index} value={code}>
                        {code?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-[75%] ">
                <label
                  className="text-[13.7px] leading-[19.07px]  text-[#333333] "
                  htmlFor="telNo"
                >
                  Company Tel
                </label>
                <input
                  id="telNo"
                  type="number"
                  value={cmpTel}
                  onChange={(e) => setCmpTel(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Tel. no."
                  required
                />
              </div>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="address"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Address"
                required
              />
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="gstno"
              >
                GST Number or VAT or Other Taxes
              </label>
              <input
                id="gstno"
                type="text"
                value={gstNum}
                onChange={(e) => setGstNum(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Number"
                required
              />
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="userNo"
              >
                Number of User
              </label>
              <input
                id="userNo"
                type="text"
                value={numOfUser}
                onChange={(e) => setNumOfUser(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Number"
                required
              />
            </div>
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="shipname"
              >
                Number of Ships
              </label>
              <input
                id="shipname"
                type="text"
                value={numOfShip}
                onChange={(e) => setNumOfShip(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Number"
                required
              />
            </div>
            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="shipType"
              >
                Type of Ships
              </label>
              <select
                id="shipType"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={typeShip}
                onChange={(e) => setTypeShip(e.target.value)}
              >
                <option value="" disabled selected>
                  Ship Type
                </option>
                {/* {countryDrop &&
                  countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>
                      {country?.toUpperCase()}
                    </option>
                  ))} */}
              </select>
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="crewN"
              >
                Crew Nationality Preference
              </label>
              <select
                id="crewN"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={crewNational}
                onChange={(e) => setCrewNational(e.target.value)}
              >
                <option value="" disabled selected>
                  Country
                </option>
                {countryDrop &&
                  countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>
                      {country?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
            {/* <div className=""> */}

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="matrix"
              >
                Crew Training Matrix
              </label>
              <input
                id="matrix"
                type="number"
                value={crewMatrix}
                onChange={(e) => setCrewMatrix(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Number"
                required
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="crewW"
              >
                Crew Welfare Initiative
              </label>
              <input
                id="crewW"
                type="text"
                value={crewWelfare}
                onChange={(e) => setCrewWelfare(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Number"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="pdf-upload1"
              >
                Company Advertisement : Upload PDF
              </label>

              <div className="flex gap-6 items-center ">
                <label
                  htmlFor="pdf-upload1"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                >
                  Attach Docoment
                </label>
                <input
                  id="pdf-upload1"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {cmpAdd ? (
                  <p className="text-gray-700">File Selected: {cmpAdd.name}</p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="shipType"
              >
                Ship Type
              </label>
              <select
                id="shipType"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={shipType}
                onChange={(e) => setShipType(e.target.value)}
              >
                <option value="" disabled selected>
                  Ship
                </option>
                {/* {countryDrop &&
                  countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>
                      {country?.toUpperCase()}
                    </option>
                  ))} */}
              </select>
            </div>
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="licence"
              >
                Recruitment & Placement License
              </label>

              <input
                id="licence"
                type="text"
                value={licence}
                onChange={(e) => setLicence(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Licence"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="expiryDate1"
              >
                ISO Certificate : Upload attachment
              </label>

              <div className="flex gap-6 items-center   ">
                <label
                  htmlFor="iso-upload"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                >
                  Attach Docoment
                </label>
                <input
                  id="iso-upload"
                  type="file"
                  className="hidden"
                  onChange={handleIsoChanges}
                />
                {isoCerti ? (
                  <p className="text-gray-700">
                    File Selected: {isoCerti.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="bankName"
              >
                Bank Name
              </label>
              <select
                id="bankName"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              >
                <option value="" disabled selected>
                  Bank
                </option>
                {/* {countryDrop &&
                  countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>
                      {country?.toUpperCase()}
                    </option>
                  ))} */}
              </select>
            </div>
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="accountN"
              >
                A/C Number
              </label>

              <input
                id="accountN"
                type="number"
                value={acNumber}
                onChange={(e) => setAcNumber(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="A/C Number"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="setac"
              >
                A/C TYPE
              </label>

              <input
                id="setac"
                type="text"
                value={acType}
                onChange={(e) => setAcType(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Tpye"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="setifsc"
              >
                IFSC CODE
              </label>

              <input
                id="setifsc"
                type="text"
                value={iFSC}
                onChange={(e) => setIfsc(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Code"
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="swiftC"
              >
                SWIFT CODE
              </label>

              <input
                id="swiftC"
                type="text"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Code"
                required
              />
            </div>

            <div className="flex gap-2 mb-4 mt-5">
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

            {/* <div className="flex  ">
            <input
              id="neverExpires"
              type="checkbox"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpires"
            >
              Never Expires
            </label>
          </div> */}
            {/* <div className=" flex items-center  gap-4">
              <input
                id="neverExpires"
                type="checkbox"
                className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={checkBox1}
                onChange={(e) => setCheckBox1(!checkBox1)}
              />
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="neverExpires"
              >
                Never Expires
              </label>
            </div> */}
          </div>

          {/* <div className="flex gap-6 items-center  my-6 ">
            <label
              htmlFor="file-upload1"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
            >
              Attach Docoment
            </label>
            <input
              id="file-upload1"
              type="file"
              className="hidden"
              onChange={handleFileChanges}
            />
            {selectedFiles ? (
              <p className="text-gray-700">
                File Selected: {selectedFiles.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                No file selected
              </p>
            )}
          </div> */}
        </div>

        {/* Third section */}

        {/* <div className="flex gap-2 mb-4 mt-4">
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
        </div> */}
      </form>
    </div>
  );
};

export default CompanyParticular;
