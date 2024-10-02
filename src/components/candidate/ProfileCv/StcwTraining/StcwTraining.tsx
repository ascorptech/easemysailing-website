"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

type STCWComplete = {
  percentage: number;
  color: string;
};

type Props = {
  sTCWComplete: STCWComplete; // mjrComplete is an object with percentage and color
  setSTCWComplete: React.Dispatch<React.SetStateAction<STCWComplete>>;
  userDetail: any;
};

const StcwTraining = ({ sTCWComplete, setSTCWComplete, userDetail }: Props) => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [trainingCountry, setTrainingCountry] = useState("");
  const [training, setTraining] = useState("");
  const [neverExpires, setNeverExpires] = useState(false);

  const totalFields = 7;
  const filledFields = [
    number,
    issuedate,
    exdate,
    selectedFile,
    trainingCountry,
    training,
    neverExpires,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
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
      <h1 className="font-bold ">ECDIS</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333] "
            htmlFor="option"
          >
            Training
          </label>
          <select
            id="option"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
            value={training}
            onChange={(e) => setTraining(e.target.value)}
          >
            <option value="" disabled selected>
              Training
            </option>
            <option value="training">Training1</option>
            <option value="training">Training2</option>
            <option value="training">Training3</option>
          </select>
        </div>
        <div className=" ">
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333] "
            htmlFor="trainingcou"
          >
            Training Country
          </label>
          <select
            id="trainingcou"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
            value={trainingCountry}
            onChange={(e) => setTrainingCountry(e.target.value)}
          >

            <option value="" disabled selected>
              Issuing Country
            </option>
            <option value="India">India</option>
            <option value="Us">Us</option>
            <option value="England">England</option>
          </select>
        </div>

        <div className="">
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333] "
            htmlFor="number12"
          >
            Number
          </label>
          <input
            id="number12"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder=""
            required
          />
        </div>

        {/* </div> */}
        <div className="">
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333]"
            htmlFor="issuedate12"
          >
            Issue Date
          </label>
          <input
            id="issuedate12"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>

        <div className="">
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333]  "
            htmlFor="expiryDate12"
          >
            Expiry Date
          </label>
          {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate12"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={exdate}
            onChange={(e) => setExDate(e.target.value)}
          />
        </div>

        <div className=" flex items-center gap-3 ">
          <input
            id="neverExpires"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
            checked={neverExpires}
            onChange={(e) => setNeverExpires(!neverExpires)}
          />
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333]"
            htmlFor="neverExpires"
          >
            Never Expires
          </label>
        </div>
      </div>


      <div className="flex items-center justify-center gap-4 my-6">
        <div className="flex gap-6 items-center  ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
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
          <p className="text-[14px] leading-[19.07px]  text-[#333333]">
            No file selected
          </p>
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

export default StcwTraining;
