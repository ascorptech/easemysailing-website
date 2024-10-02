


"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
type EducationComplete = {
  percentage: number;
  color: string;
};
type Props={
  educationComplete: EducationComplete; 
  setEducationComplete: React.Dispatch<React.SetStateAction<EducationComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const Education = ({educationComplete, setEducationComplete, userDetail}:Props) => {
  const [university, setUniversity] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [percentage1, setPercentage1] = useState("");

  


  const totalFields = 5;
  const filledFields = [
    university,
    subject,
    city,
    selectedFile,
    percentage1
   
  ].filter(Boolean).length;


  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setEducationComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setEducationComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setEducationComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])



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


  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
      <h1 className="font-bold ">COMPUTER SKILLS</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="number"
          >
            School / College / University{" "}
          </label>
          <input
            id="number"
            type="number"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Enter Number"
            required
          />
        </div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="number"
          >
            Subject
          </label>
          <input
            id="number"
            type="number"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="number"
          >
            City{" "}
          </label>
          <input
            id="number"
            type="number"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="percentage"
          >
            Percentage{" "}
          </label>
          <input
            id="percentage"
            type="number"
            value={percentage1}
            onChange={(e) => setPercentage1(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 my-6">
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
        {/* <div> */}
        {selectedFile ? (
          <p className="mt-4 text-gray-700">
            File Selected: {selectedFile.name}
          </p>
        ) : (
          <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            No file selected
          </p>
        )}
        {/* </div> */}
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

export default Education;
