"use client";
import Link from "next/link";

import { useState } from "react";
const AcademicDetails = () => {

    const [degree, setDegree] = useState("");
    const [percentage, setPercentage] = useState("");

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  

const [selectedFile, setSelectedFile] = useState<File | null>(null);

  



  const handleFileChange = (event:any) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setSelectedFile(file);
    }
  };



  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
         {/* <div className=" flex flex-col items-center"> */}
         <h1 className="font-bold text-center">Qualification</h1>
      <div className="grid grid-cols-2 gap-4">

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Degree       </label>
          <input
            
            type="number"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="number">
          Percentage       </label>
          <input
            id="number"
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>
        </div>
        
        {/* <div className=""> */}

       
        <h1 className="font-bold text-center mt-3">Passing Year </h1>
        <div className="grid grid-cols-2 gap-4">

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue">
          Start Date
          </label>
          <input
            id="issue"
            type="date"
            className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-9 rounded-md border-[#00A264]"
            value={startdate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
     

      

      <div className="">
        <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  " htmlFor="expiryDate">
          End Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border focus:outline-green-300 w-full text-[14px] leading-[19.07px] font-[openSans] text-[#333333] h-9 rounded-md border-[#00A264]"
            value={enddate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {/* </div> */}
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
       
      </div>
      {selectedFile ? (
              <p className="mt-4 text-gray-700">
              File Selected: {selectedFile.name}
            </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
            )}
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

export default AcademicDetails ;
