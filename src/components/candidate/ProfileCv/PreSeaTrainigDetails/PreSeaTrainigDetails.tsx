"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

type PreSeaTrainigComplete = {
  percentage: number;
  color: string;
};

type Props = {
  preSeaTrainigComplete: PreSeaTrainigComplete; // mjrComplete is an object with percentage and color
  setPreSeaTrainigComplete: React.Dispatch<
    React.SetStateAction<PreSeaTrainigComplete>
  >;
  userDetail: any;
};
const PreSeaTrainigDetails = ({
  preSeaTrainigComplete,
  setPreSeaTrainigComplete,
  userDetail,
}: Props) => {
  const [permanect, setPermanect] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");

  const [salary, setSalary] = useState("");
  const [number, setNumber] = useState("");
  const [crewManager, setCrewManager] = useState("");
  const [technicalManager, setTechnicalManager] = useState("");
  const [operator, setOperator] = useState("");
  const [vesselType, setVesselType] = useState("");
  const [commercialSpecification, setCommercialSpecification] = useState("");
  const [designSpecification, setDesignSpecification] = useState("");
  const [dPHours, setDPHours] = useState("");
  const [numberOfrig, setNumberOfrig] = useState("");
  const [winchDrive, setWinchDrive] = useState("");
  const [tradingArea, setTradingArea] = useState("");
  const [waterDepth, setWaterDepth] = useState("");
  const [moveditem, setMoveditem] = useState("");
  const [rank, setRank] = useState("");

  const [vesselType1, setVesselType1] = useState("");
  const [pumpType, setPumpType] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [maxTimeonHome, setMaxTimeonHome] = useState("");
  const [certificate, setCertificate] = useState("");

  const [minTimeonHome, setMinTimeonHome] = useState("");
  const [maxTimeonBoard, setMaxTimeonBoard] = useState("");
  const [timeonBoard, setTimeonBoard] = useState("");
  const [currency, setCurrency] = useState("");

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 29;
  const filledFields = [
    permanect,
    issuedate,
    exdate,
    selectedFile,
    trainingCenter,
    salary,
    number,
    crewManager,
    technicalManager,
    operator,
    vesselType,
    commercialSpecification,
    designSpecification,
    dPHours,
    numberOfrig,
    winchDrive,
    tradingArea,
    waterDepth,
    moveditem,
    rank,
    vesselType1,
    pumpType,
    issuingCountry,
    certificate,
    maxTimeonHome,
    minTimeonHome,
    maxTimeonBoard,
    timeonBoard,
    currency,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setPreSeaTrainigComplete((prevState) => ({
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
        <h1 className=" font-bold">SALARY EXPECTATION</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="permanent"
            >
              Permanent (per day)
            </label>
            <input
              id="permanent"
              type="text"
              value={permanect}
              onChange={(e) => setPermanect(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="Currency"
            >
              Currency
            </label>
            <select
              id="Currency"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="" disabled selected>
                Currency
              </option>
              <option value="training1">Training1</option>
              <option value="training2">Training2</option>
              <option value="training3">Training3</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="salaryis"
            >
              Salary is Negotiable
            </label>
            <input
              id="salaryis"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Yes/No"
              required
            />
          </div>

          <div className="grid col-span-2">
            {" "}
            <h1 className=" font-bold">ROTATION EXPECTATION </h1>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="minBoard"
            >
              Min. Time on Board (weeks)
            </label>
            <select
              id="minBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={timeonBoard}
              onChange={(e) => setTimeonBoard(e.target.value)}
            >
              <option value="" disabled selected>
                Min. Time on Board (weeks)
              </option>
              <option value="india">India</option>
              <option value="us">Us</option>
              <option value="enland">England</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="maxBoard"
            >
              Max. Time on Board (weeks)
            </label>
            <select
              id="maxBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonBoard}
              onChange={(e) => setMaxTimeonBoard(e.target.value)}
            >
              <option value="" disabled selected>
                Max. Time on Board (weeks)
              </option>
              <option value="india">India</option>
              <option value="us">Us</option>
              <option value="england">England</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="minHome"
            >
              Min. Time at Home (weeks)
            </label>
            <select
              id="minHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={minTimeonHome}
              onChange={(e) => setMinTimeonHome(e.target.value)}
            >
              <option value="" disabled selected>
                Min. Time at Home (weeks)
              </option>
              <option value="1">India</option>
              <option value="23">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="maxHome"
            >
              Max. Time at Home (weeks)
            </label>
            <select
              id="maxHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonHome}
              onChange={(e) => setMaxTimeonHome(e.target.value)}
            >
              <option value="" disabled selected>
                Max. Time at Home (weeks)
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>
          {/* <div className=""> */}

          <div className="grid col-span-2">
            {" "}
            <h1 className="font-bold">OFFSHORE SPECIFIC TRAININGS</h1>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="certificate1"
            >
              Certificate
            </label>
            <select
              id="certificate1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
            >
              <option value="" disabled selected>
                Certificate
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="trainingCenter"
            >
              Training Center
            </label>
            <input
              id="trainingCenter"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="issuingCountry"
            >
              Issuing Country
            </label>
            <select
              id="issuingCountry"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Issuing Country
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="number01"
            >
              Number
            </label>
            <input
              id="number01"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="issue01"
            >
              Issue Date
            </label>
            <input
              id="issue01"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
          <div>
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  "
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            {/* <div className="flex items-center gap-4 "> */}
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
            />
            {/* </div> */}
          </div>

          <div className="">
            <input
              id="neverExpires01"
              type="checkbox"
              className="border focus:ring-[#00A264] text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="neverExpires01"
            >
              Never Expires
            </label>
          </div>

          <div className="grid col-span-2">
            <div className="flex gap-4 items-center justify-center ">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]"
              >
                Attachment Document
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            
              {/* </div> */}
              <div>
                {selectedFile ? (
                  <p className="mt-4 text-gray-700">
                    File Selected: {selectedFile.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid col-span-2 ">
            <h1 className="font-bold ">Company Name/Ship type</h1>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="pumpType"
            >
              Pump Type
            </label>
            <select
              id="pumpType"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={pumpType}
              onChange={(e) => setPumpType(e.target.value)}
            >
              <option value="" disabled selected>
                Pump Type
              </option>
              <option value="1">Training1</option>
              <option value="2">Training2</option>
              <option value="3">Training3</option>
            </select>
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Crew Manager
            </label>
            <input
              type="text"
              value={crewManager}
              onChange={(e) => setCrewManager(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Technical Manager
            </label>
            <input
              type="text"
              value={technicalManager}
              onChange={(e) => setTechnicalManager(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Operator
            </label>
            <input
              type="text"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="grid col-span-2">
            <h1 className="text-center font-bold">Company Name/Ship type</h1>
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Vessel Type
            </label>
            <input
              type="text"
              value={vesselType}
              onChange={(e) => setVesselType(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Vessel Type - Commercial Specification
            </label>
            <input
              type="text"
              value={commercialSpecification}
              onChange={(e) => setCommercialSpecification(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Vessel Type - Design Specification
            </label>
            <input
              type="text"
              value={designSpecification}
              onChange={(e) => setDesignSpecification(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">OFFSHORE SPECIFIC SKILLS</h1>

            <div className="   ">
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
                DP hours
              </label>
              <input
                type="text"
                value={dPHours}
                onChange={(e) => setDPHours(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Rig Move Experience</h1>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="vesseltype"
            >
              Vessel type
            </label>
            <select
              id="vesseltype"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={vesselType1}
              onChange={(e) => setVesselType1(e.target.value)}
            >
              <option value="" disabled selected>
                Vessel type
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="rank01"
            >
              Rank
            </label>
            <select
              id="rank01"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <option value="" disabled selected>
                Rank
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="numberOfrig"
            >
              Number of rig moves
            </label>
            <input
              id="numberOfrig"
              type="number"
              value={numberOfrig}
              onChange={(e) => setNumberOfrig(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="moveditem"
            >
              Moved item
            </label>
            <select
              id="moveditem"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={moveditem}
              onChange={(e) => setMoveditem(e.target.value)}
            >
              <option value="" disabled selected>
                Moved item
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor=" waterdepth"
            >
              Water depth
            </label>
            <select
              id="waterdepth"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={waterDepth}
              onChange={(e) => setWaterDepth(e.target.value)}
            >
              <option value="" disabled selected>
                Water depth
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="tradingarea"
            >
              Trading area
            </label>
            <select
              id="tradingarea"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tradingArea}
              onChange={(e) => setTradingArea(e.target.value)}
            >
              <option value="" disabled selected>
                Trading area
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>

          <div className="grid col-span-2 ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="winchDrive"
            >
              Winch Drive Experience
            </label>
            <select
              id="winchDrive"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={winchDrive}
              onChange={(e) => setWinchDrive(e.target.value)}
            >
              <option value="" disabled selected>
                Winch Drive Experience
              </option>
              <option value="1">India</option>
              <option value="2">Us</option>
              <option value="3">England</option>
            </select>
          </div>
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

export default PreSeaTrainigDetails;
