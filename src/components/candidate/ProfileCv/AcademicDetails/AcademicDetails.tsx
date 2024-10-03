"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

type AcademicComplete = {
  percentage: number;
  color: string;
};
type Props={
  academicComplete: AcademicComplete; 
  setAcademicComplete: React.Dispatch<React.SetStateAction<AcademicComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const AcademicDetails = ({academicComplete, setAcademicComplete, userDetail}:Props) => {

    const [degree, setDegree] = useState("");
    const [percentage2, setPercentage2] = useState("");

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  

const [selectedFile, setSelectedFile] = useState<File | null>(null);

const totalFields = 5;
const filledFields = [
  degree,
  percentage2,
  startdate,
  enddate,
  selectedFile,
].filter(Boolean).length;

const percentage = (filledFields / totalFields) * 100;
// const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
let color;
useEffect(() => {
  console.log('user',userDetail)
  if (percentage <= 30) {
    setAcademicComplete((prevState) => ({
      ...prevState, // Spread the previous state to keep any other properties
      percentage: percentage, // Update the percentage field
      color: '#FF0000' // Update the color field
    }));
    color = "red"; 
  } else if (percentage <= 70) {
    setAcademicComplete((prevState) => ({
      ...prevState, // Spread the previous state to keep any other properties
      percentage: percentage, // Update the percentage field
      color: '#FF9900' // Update the color field
    }));
    color = "#FF9900"; 
  } else {
    setAcademicComplete((prevState) => ({
      ...prevState, // Spread the previous state to keep any other properties
      percentage: percentage, // Update the percentage field
      color: '#00A264' // Update the color field
    }));
    color = "green";
  }
}, [percentage,color])



  const handleFileChange = (event:any) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
        <form onSubmit={handleSubmit}>
         {/* <div className=" flex flex-col items-center"> */}
         <h1 className="font-bold ">Qualification</h1>
      <div className="grid grid-cols-2 gap-4">

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="">
          Degree       </label>
          <input
            
            type="number"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="number">
          Percentage       </label>
          <input
            id="number"
            type="number"
            value={percentage2}
            onChange={(e) => setPercentage2(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>
        </div>
        
        {/* <div className=""> */}

       
        <h1 className="font-bold  mt-3">Passing Year </h1>
        <div className="grid grid-cols-2 gap-4">

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]" htmlFor="issue">
          Start Date
          </label>
          <input
            id="issue"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={startdate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
     

      

      <div className="">
        <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  " htmlFor="expiryDate">
          End Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={enddate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {/* </div> */}
          </div>

          
        
      </div>
      {/* </div> */}


      <div className="flex items-center  gap-4 my-6">

      <div className="flex gap-6 items-center  ">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
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
              <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">No file selected</p>
            )}
      </div>
      


      
     

      {/* Third section */}

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

export default AcademicDetails ;
