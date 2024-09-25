"use client";
import Link from "next/link";

import { useState } from "react";
const TravelDocuments = () => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const [selectedFileVisa, setSelectedFileVisa] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  //   const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [permitNumber, setPermitNumber] = useState("");

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

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <h1 className="text-center">PASSPORT DETAILS</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
            htmlFor=""
          >
            Issuing Authority
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Passport
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            htmlFor="numberauth"
          >
            Passport Number
          </label>
          <input
            id="numberauth"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
            placeholder="Passport No"
            required
          />
        </div>

        {/* <div className=""> */}

        {/* </div> */}
        <div className="">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            htmlFor="issue"
          >
            Issue Date
          </label>
          <input
            id="issue"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
        {/* </div> */}

        {/* <div className="mt-2"> */}

        <div className="">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  "
            htmlFor="expiryDate"
          >
            Expiry Date
          </label>
          <input
            id="expiryDate"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={exdate}
            onChange={(e) => setExDate(e.target.value)}
          />

          {/* <input
            id="neverExpires"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="neverExpires"
          >
            Never Expires
          </label> */}
        </div>
        <div className=" ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
            htmlFor=""
          >
            Biometric
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Biometric
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="grid grid-cols-2 my-4">
          <div className="flex gap-6 items-center  ">
            <label
              htmlFor="file-uploadpassport1"
              className="cursor-pointer bg-[#00A264] text-[14px] leading-[19.07px] font-[openSans]  text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
            >
              Attachment Document
            </label>
            <input
              id="file-uploadpassport1"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {/* {selectedFile && (
          <p className="mt-4 text-gray-700">
            File Selected: {selectedFile.name}
          </p>
        )} */}
          </div>
        </div>

        <div>
          {selectedFile ? (
            <p className="mt-4 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              File Selected: {selectedFile.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              No file selected
            </p>
          )}
        </div>
      </div>

      {/* second section */}
      <div className=" flex flex-col items-center">
        <h1 className="font-bold">SEAMAN'S BOOK/ID</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor=""
            >
              Issuing Country/Flag State
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
                Flag State
              </option>
              <option value="">Flag State1</option>
              <option value="">Flag State2</option>
              <option value="">Flag State3</option>
            </select>
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="seamanbook"
            >
              Seaman Book No.
            </label>
            <input
              id="seamanbook"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor=""
            >
              Issue Date
            </label>
            <input
              type="date"
              className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor=""
            >
              Expiry Date
            </label>

            <input
              type="date"
              className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  h-11 rounded-md border-[#00A264]"
              value={exdate1}
              onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
          <div className=" flex items-center  gap-4">
            <input
              id="neverExpirespass"
              type="checkbox"
              className="border focus:ring-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]   checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor="neverExpirespass"
            >
              Never Expires
            </label>
          </div>
        </div>

        <div className="flex gap-6 items-center  my-6 ">
          <label
            htmlFor="file-uploadpassport"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px] font-[openSans]  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
          >
            Attach Docoment
          </label>
          <input
            id="file-uploadpassport"
            type="file"
            className="hidden"
            onChange={handleFileChanges}
          />
          {selectedFiles ? (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              File Selected: {selectedFiles.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              No file selected
            </p>
          )}
        </div>
      </div>

      {/* third section */}

      <div className=" flex flex-col items-center">
        <h1 className="font-bold my-4">VISA</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor=""
            >
              Country(Issue Authority)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
                Issue Authority
              </option>
              <option value="">Issue Authority1</option>
              <option value="">Issue Authority2</option>
              <option value="">Issue Authority3</option>
            </select>
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor="seamanVisa"
            >
              Visa Number
            </label>
            <input
              id="seamanVisa"
              type="text"
              value={visaNumber}
              onChange={(e) => setVisaNumber(e.target.value)}
              className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor=""
            >
              Issue Date
            </label>
            <input
              type="date"
              className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  h-11 rounded-md border-[#00A264]"
              //   value={issuedate1}
              //   onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  "
              htmlFor=""
            >
              Expiry Date
            </label>

            <input
              type="date"
              className="border focus:outline-green-300 w-full  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-11 rounded-md border-[#00A264]"
              //   value={exdate1}
              //   onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-6 items-center  my-6 ">
          <label
            htmlFor="file-uploadVisa"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px] font-[openSans]  focus:outline-none focus:ring-2 "
          >
            Attach Docoment
          </label>
          <input
            id="file-uploadVisa"
            type="file"
            className="hidden"
            onChange={handleFileChangeVisa}
          />
          {selectedFileVisa ? (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              File Selected: {selectedFileVisa.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              No file selected
            </p>
          )}
        </div>
      </div>

      {/* forth section */}

      <div className=" flex flex-col items-center">
        <h1 className="font-bold my-4">RESIDENCE PERMIT</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor=""
            >
              Issuing Country
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
                Issuing Country
              </option>
              <option value="">Issuing Country1</option>
              <option value="">Issuing Country2</option>
              <option value="">Issuing Country3</option>
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="seamanPermit"
            >
              Visa Number
            </label>
            <input
              id="seamanPermit"
              type="text"
              value={permitNumber}
              onChange={(e) => setPermitNumber(e.target.value)}
              className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor=""
            >
              Issue Date
            </label>
            <input
              type="date"
              className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-11 rounded-md border-[#00A264]"
              //   value={issuedate1}
              //   onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor=""
            >
              Expiry Date
            </label>

            <input
              type="date"
              className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  h-11 rounded-md border-[#00A264]"
              //   value={exdate1}
              //   onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-6 items-center  my-6 ">
          <label
            htmlFor="file-uploadpermit"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none text-[14px] leading-[19.07px] font-[openSans]  focus:ring-2 "
          >
            Attach Docoment
          </label>
          <input
            id="file-uploadpermit"
            type="file"
            className="hidden"
            onChange={handleFileChangeVisa}
          />
          {selectedFileVisa ? (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              File Selected: {selectedFileVisa.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              No file selected
            </p>
          )}
        </div>
      </div>

      {/* fifth section */}

      <div className="flex gap-2 mb-4 mt-4">
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
  );
};

export default TravelDocuments;
