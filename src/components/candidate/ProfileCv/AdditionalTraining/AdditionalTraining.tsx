"use client";
import Link from "next/link";
import { useState } from "react";

const AdditionalTraining = () => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [trainingCenter1, setTrainingCenter1] = useState("");
  const [result, setResult] = useState("");

  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");

  //   const handleFileChange = (event: any) => {
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

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option4">
            Certification
          </label>
          <select
            id="option4"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Certification
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>

        <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="trainingC1"
            >
              Training Center
            </label>
            <input
              id="trainingC1"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>


          <div className=" ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="options1">
          Issuing Country
          </label>
          <select
            id="options1"
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
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="number1">
            Enter Number
          </label>
          <input
            id="number1"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>

       

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue3">
            Issue Date
          </label>
          <input
            id="issue3"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
      {/* </div> */}

      <div className="">
        <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  " htmlFor="expiryDate3">
          Expiry Date
        </label>
        <div className="flex items-center gap-4 ">
          <input
            id="expiryDate3"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={exdate}
            onChange={(e) => setExDate(e.target.value)}
          />
          </div>
          </div>
          {/* <div className="flex items-center gap-4">

          <input
            id="neverExpires1"
            type="checkbox"
            className="border focus:ring-[#00A264]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            htmlFor="neverExpires1"
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
<div className="grid col-span-2">
      <div className="flex gap-6 items-center justify-center">
        <label
          htmlFor="file-upload3"
          className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
        >
          Attachment Document
        </label>
        <input
          id="file-upload3"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {/* {selectedFile && (
          <p className="mt-4 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            File Selected: {selectedFile.name}
          </p>
        )} */}
         {selectedFiles ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFiles.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
            )}
      </div>
      </div>

      {/* second section */}
      {/* <div className=" flex flex-col items-center"> */}
        {/* <h1 className="font-bold">ECDIS</h1> */}

        {/* <div className="grid grid-cols-2 gap-4"> */}

{/* </div> */}

{/* PROFESSIONAL KNOWLEDGE TEST  */}


        <div className="grid col-span-2 "> 
            <h1 className="text-center font-bold">PROFESSIONAL KNOWLEDGE TEST</h1>
            </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option2">
             Capacity
            </label>
            <select
              id="option2"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Capacity
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>


          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="level">
             Level
            </label>
            <select
              id="level"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
            Level
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="trainingCe"
            >
              Training Center
            </label>
            <input
              id="trainingCe"
              type="text"
              value={trainingCenter1}
              onChange={(e) => setTrainingCenter1(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="typeoftest">
             Type of Test
            </label>
            <select
              id="typeoftest"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Type of Test
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>


          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="result"
            >
              Result
            </label>
            <input
              id="result"
              type="text"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>
         

          <div className=" ">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="optionT1">
              Issuing Country
            </label>
            <select
              id="optionT1"
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
              htmlFor="proNumber1"
            >
              Enter Number
            </label>
            <input
              id="proNumber1"
              type="number"
              value={eCDISNumber}
              onChange={(e) => setECDISNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue2">
              Issue Date
            </label>
            <input
              id="issue2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  "
              htmlFor="expiryDate2"
            >
              Expiry Date
            </label>

            <input
              id="expiryDate2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate1}
              onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
          <div className=" flex items-center justify-center gap-4">
            <input
              id="neverExpires2"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
              htmlFor="neverExpires2"
            >
              Never Expires
            </label>
          </div>
      <div className="grid col-span-2">
          <div className="flex gap-4 items-center justify-center ">
            <label
              htmlFor="file-upload2"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px] font-[openSans]  focus:outline-none focus:ring-2 "
            >
              Attach Docoment
            </label>
            <input
              id="file-upload2"
              type="file"
              className="hidden"
              onChange={handleFileChanges}
            />
            {selectedFiles ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFiles.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
            )}
          </div>
        </div>
        </div>
      {/* </div> */}

      {/* Third section */}

      <div className="flex gap-2 mb-4 mt-4">
        <Link
          href="#"
          className="border text-[14px] leading-[19.07px] font-[openSans]  border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
        >
          Save
        </Link>
        <Link
          href="#"
          className="border border-[#00A264]  p-2 rounded-lg px-8 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default AdditionalTraining;
