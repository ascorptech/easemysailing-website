"use client";
import Link from "next/link";

import { useState } from "react";
const StcwTraining = () => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");


const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");

//   const handleFileChange = (event: any) => {
//     setSelectedFile(event.target.files[0]);
//   };

  const handleFileChange = (event:any) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChanges = (event:any) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setSelectedFiles(file);
    }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
         {/* <div className=" flex flex-col items-center"> */}
         <h1 className="font-bold text-center">ECDIS</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option">
            Training
          </label>
          <select
            id="option"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Training
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className=" ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="options">
            Training Country
          </label>
          <select
            id="options"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Issuing Country
            </option>
            <option value="">India</option>
            <option value="">Us</option>
            <option value="">England</option>
          </select>
        </div>
        {/* <div className=""> */}

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="number">
            Enter Number
          </label>
          <input
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
            placeholder="Enter Number"
            required
          />
        </div>

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue">
            Issue Date
          </label>
          <input
            id="issue"
            type="date"
            className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-11 rounded-md border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2">
        <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  " htmlFor="expiryDate">
          Expiry Date
        </label>
        <div className="flex items-center gap-4 mt-2">
          <input
            id="expiryDate"
            type="date"
            className="border focus:outline-green-300 w-[65%] text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-11 rounded-md border-[#00A264]"
            value={exdate}
            onChange={(e) => setExDate(e.target.value)}
          />

          <input
            id="neverExpires"
            type="checkbox"
            className="border focus:ring-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            htmlFor="neverExpires"
          >
            Never Expires
          </label>
        </div>
      </div>
      {/* </div> */}


      <div className="flex items-center justify-center gap-4 my-6">

      <div className="flex gap-6 items-center  ">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
        >
          Attachment Document
        </label>
        <input
          id="file-upload"
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
      {/* <div> */}
      {selectedFile ? (
              <p className="mt-4 text-gray-700">
              File Selected: {selectedFile.name}
            </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
            )}
      {/* </div> */}
      </div>
      


      
     

      {/* Third section */}

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

export default StcwTraining;
