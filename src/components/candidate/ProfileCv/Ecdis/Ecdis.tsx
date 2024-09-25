"use client";
import Link from "next/link";

import { useState } from "react";
const Ecdis = () => {
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
     
      <div className=" flex flex-col items-center">
        <h1 className="font-bold">ECDIS</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
              Training
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="trainingC"
            >
              Training Center
            </label>
            <input
              id="trainingC"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Number"
              required
            />
          </div>

          <div className=" ">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="optionT">
              Issuing Country
            </label>
            <select
              id="optionT"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="eCDISNumber"
            >
              Enter Number
            </label>
            <input
              id="eCDISNumber"
              type="number"
              value={eCDISNumber}
              onChange={(e) => setECDISNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Number"
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue1">
              Issue Date
            </label>
            <input
              id="issue1"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  "
              htmlFor="expiryDate1"
            >
              Expiry Date
            </label>

            <input
              id="expiryDate1"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate1}
              onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
          {/* <div className="flex  ">
            <input
              id="neverExpires"
              type="checkbox"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor="neverExpires"
            >
              Never Expires
            </label>
          </div> */}
           <div className=" flex items-center  gap-4">
            <input
              id="neverExpires"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
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


          <div className="flex gap-6 items-center  my-6 ">
            <label
              htmlFor="file-upload1"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px] font-[openSans]  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
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
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
            )}
          </div>
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

export default Ecdis;
