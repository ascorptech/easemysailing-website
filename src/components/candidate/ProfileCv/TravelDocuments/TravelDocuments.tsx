"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import CircularProgress from "../CircularProgress";
import {
  AddTravelDocumentData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";

type TravelDocumentsComplete = {
  percentage: number;
  color: string;
};
type Props = {
  travelComplete: TravelDocumentsComplete; // mjrComplete is an object with percentage and color
  setTravelComplete: React.Dispatch<
    React.SetStateAction<TravelDocumentsComplete>
  >; // setMjrComplete is a function to update mjrComplete
  userDetail: any;
};

const TravelDocuments = ({
  travelComplete,
  setTravelComplete,
  userDetail,
}: Props) => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [isssueAuthority, setIsssueAuthority] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [issueDate2, setIssueDate2] = useState("");
  const [expDate2, setExpDate2] = useState("");

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);
  const [selectedFileVisa, setSelectedFileVisa] = useState<any>(null);
  const [selectedFileResidence, setSelectedFileResidence] = useState<any>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [permitNumber, setPermitNumber] = useState("");
  const [issuingAuthority, setIssuingAuthority] = useState("");
  const [biometric, setBiometric] = useState("");
  const [flagState, setFlagState] = useState("");
  const [issueDateVisa, setIssueDateVisa] = useState("");
  const [expryDateVisa, setExpryDateVisa] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 22;
  const filledFields = [
    number,
    issuedate,
    exdate,
    checkBox,
    isssueAuthority,
    issuingCountry,
    issueDate2,
    expDate2,
    selectedFile,
    selectedFileVisa,
    selectedFiles,
    trainingCenter,
    issuedate1,
    exdate1,
    visaNumber,
    permitNumber,
    issuingAuthority,
    biometric,
    flagState,
    selectedFileResidence,
    issueDateVisa,
    expryDateVisa,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setTravelComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setTravelComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setTravelComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  //   const handleFileChange = (event: any) => { visaNumber
  //     setSelectedFile(event.target.files[0]);
  //   };

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFiles(file);
    }
  };
  const handleFileChangeVisa = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileVisa(file);
    }
  };

  const handleFileChangeResidence = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileResidence(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

    let formData = new FormData();
    formData.append("passportNumber", number);
    formData.append("passportIssuingCountry", issuingAuthority);
    formData.append("passportIssueDate", issuedate);
    formData.append("passportExpiryDate", exdate);
    formData.append("seamansBookNumber", trainingCenter);
    formData.append("seamansBookIssuingCountry", flagState);
    formData.append("seamansBookIssueDate", issuedate1);
    formData.append("seamansBookExpiryDate", exdate1);
    formData.append("visaIssuingCountry", isssueAuthority);
    formData.append("visaNumber", visaNumber);
    formData.append("visaIssueDate", issueDateVisa);
    formData.append("visaExpiryDate", expryDateVisa);
    formData.append("residencePermitIssuingCountry", issuingCountry);
    formData.append("residencePermitNumber", permitNumber);
    formData.append("residencePermitIssueDate", issueDate2);
    formData.append("residencePermitExpiryDate", expDate2);
    formData.append("passportDocument", selectedFile);
    formData.append("seamansBookDocument", selectedFiles);
    formData.append("visaDocument", selectedFileVisa);
    formData.append("residencePermitDocument", selectedFileResidence);

    AddTravelDocumentData(
      userDetail?.userId,
      biometric,
      checkBox,
      formData,
      AddTravelDocumentDataCB
    );
  };

  const AddTravelDocumentDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Travel document submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Travel document not submited ");
    }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-bold">PASSPORT DETAILS</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="IssuingAuthority1"
            >
              Issuing Authority
            </label>
            <select
              id="IssuingAuthority1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingAuthority}
              onChange={(e) => setIssuingAuthority(e.target.value)}
            >
              <option value="" disabled selected>
                Passport
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
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="passportnumber"
            >
              Passport Number
            </label>
            <input
              id="passportnumber"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Passport No"
              required
            />
          </div>

          {/* <div className=""> */}

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issue"
            >
              Issue Date
            </label>
            <input
              id="issue"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
          {/* </div> */}

          {/* <div className="mt-2"> */}

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
            />
          </div>
          <div className="grid col-span-2 ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="biometric"
            >
              Biometric
            </label>
            <select
              id="biometric"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={biometric}
              onChange={(e) => setBiometric(e.target.value)}
            >
              <option value="" disabled selected>
                Biometric
              </option>
              {/* {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))} */}
              <option value="yes">Yes</option>
              <option value="No">Yes</option>
            </select>
          </div>

          <div className="grid col-span-2 my-4">
            <div className="flex gap-4 items-center  ">
              <div>
                <label
                  htmlFor="file-uploadpassport1"
                  className="cursor-pointer bg-[#00A264] text-[14px] leading-[19.07px]   text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                >
                  Attachment Document
                </label>
                <input
                  id="file-uploadpassport1"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                {selectedFile ? (
                  <p className="mt-4 text-[14px] leading-[19.07px]  text-[#333333]">
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

          {/* second section */}
          <div className=" grid col-span-2 ">
            <h1 className="font-bold ">SEAMAN'S BOOK/ID</h1>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issingcountry"
            >
              Issuing Country/Flag State
            </label>
            <select
              id="issingcountry"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={flagState}
              onChange={(e) => setFlagState(e.target.value)}
            >
              <option value="" disabled selected>
                Flag State
              </option>
              {countryDrop &&
                countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="seamanbook"
            >
              Seaman Book No.
            </label>
            <input
              id="seamanbook"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedate"
            >
              Issue Date
            </label>
            <input
              id="issuedate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="expdate"
            >
              Expiry Date
            </label>

            <input
              id="expdate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate1}
              onChange={(e) => setExDate1(e.target.value)}
            />
          </div>

          <div className=" flex items-center  gap-4">
            <input
              id="neverExpires"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              // value={checkBox}
              //  onChange={(e) => (true)}
              checked={checkBox}
              onChange={() => setCheckBox(!checkBox)}
            />
            <label
              className="text-[14px] leading-[19.07px] text-[#333333]"
              htmlFor="neverExpires"
            >
              Never Expires
            </label>
          </div>

          <div className="grid col-span-2 my-4">
            <div className="flex gap-4 items-center  ">
              <div>
                <label
                  htmlFor="file-uploadpassport"
                  className="cursor-pointer bg-[#00A264] text-[14px] leading-[19.07px]  text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  "
                >
                  Attachment Document
                </label>
                <input
                  id="file-uploadpassport"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanges}
                />
              </div>
              <div>
                {selectedFiles ? (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    File Selected: {selectedFiles.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* third section */}

          <div className=" grid col-span-2  my-2">
            <h1 className="font-bold ">VISA</h1>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="countryissue"
            >
              Country(Issue Authority)
            </label>
            <select
              id="countryissue"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={isssueAuthority}
              onChange={(e) => setIsssueAuthority(e.target.value)}
            >
              <option value="" disabled selected>
                Issue Authority
              </option>
              {countryDrop &&
                countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="visanumber01"
            >
              Visa Number
            </label>
            <input
              id="visanumber01"
              type="text"
              value={visaNumber}
              onChange={(e) => setVisaNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issueDatevisa"
            >
              Issue Date
            </label>
            <input
              id="issueDatevisa"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issueDateVisa}
              onChange={(e) => setIssueDateVisa(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expdateVisa"
            >
              Expiry Date
            </label>

            <input
              id="expdatVisa"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={expryDateVisa}
              onChange={(e) => setExpryDateVisa(e.target.value)}
            />
          </div>

          <div className="grid col-span-2 my-4">
            <div className="flex gap-4 items-center  ">
              <div>
                <label
                  htmlFor="file-uploadVisa"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px]   focus:outline-none focus:ring-2 "
                >
                  Attachment Document
                </label>
                <input
                  id="file-uploadVisa"
                  type="file"
                  className="hidden"
                  onChange={handleFileChangeVisa}
                />
              </div>
              <div>
                {selectedFileVisa ? (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    File Selected: {selectedFileVisa.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* forth section */}

          <div className="grid col-span-2 ">
            <h1 className="font-bold ">RESIDENCE PERMIT</h1>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="issuingcou"
            >
              Issuing Country
            </label>
            <select
              id="issuingcou"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Issuing Country
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="seamanPermit"
            >
              Number
            </label>
            <input
              id="seamanPermit"
              type="text"
              value={permitNumber}
              onChange={(e) => setPermitNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedate11"
            >
              Issue Date
            </label>
            <input
              id="issuedate11"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issueDate2}
              onChange={(e) => setIssueDate2(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="expidate11"
            >
              Expiry Date
            </label>

            <input
              id="expidate11"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={expDate2}
              onChange={(e) => setExpDate2(e.target.value)}
            />
          </div>
          {/* </div> */}

          <div className="col-span-2 ">
            <div className="flex gap-6 items-center   my-6 ">
              <div>
                <label
                  htmlFor="file-uploadpermit"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px]   focus:outline-none focus:ring-2  "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadpermit"
                  type="file"
                  className="hidden"
                  onChange={handleFileChangeResidence}
                />
              </div>
              <div>
                {selectedFileResidence ? (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    File Selected: {selectedFileResidence.name}
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

        {/* fifth section */}

        <div className="flex gap-2 mb-4 mt-4">
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
      </form>
    </div>
  );
};

export default TravelDocuments;
