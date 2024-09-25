"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Languages = () => {
  // State for form fields
  const [nextKinName, setNextKinName] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [alternatePosition, setAlternatePosition] = useState("");
  const [preferredVesselType, setPreferredVesselType] = useState("");
  const [alternateVesselType, setAlternateVesselType] = useState("");
  const [available, setAvailable] = useState("");
  const [minTimeOnBoard, setMinTimeOnBoard] = useState("");
  const [maxTimeOnBoard, setMaxTimeOnBoard] = useState("");
  const [minTimeOnHome, setMinTimeOnHome] = useState("");
  const [maxTimeOnHome, setMaxTimeOnHome] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [contractTypeVoyage, setContractTypeVoyage] = useState(false);
  const [contractTypePermanent, setContractTypePermanent] = useState(false);

  // Salary expectation states
  const [voyageSalary, setVoyageSalary] = useState("");
  const [currencyVoyage, setCurrencyVoyage] = useState("");
  const [negotiableVoyage, setNegotiableVoyage] = useState(false);
  const [permanentSalary, setPermanentSalary] = useState("");
  const [currencyPermanent, setCurrencyPermanent] = useState("");
  const [negotiablePermanent, setNegotiablePermanent] = useState(false);
  const [tradingAreaExclusions, setTradingAreaExclusions] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

  // const AddaddressdataDB = (result:any)=> {
  //   console.log(result)

  // }

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  text-[14px] leading-[19.07px]  text-[#333333] gap-4"> */}
          {/* NATIVE LANGUAGE*/}
          <div className="mb-3">
            <h1 className="font-bold  text-center ">NATIVE LANGUAGE</h1>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Language
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                value={currentPosition}
                onChange={(e) => setCurrentPosition(e.target.value)}
              >
                <option value="" disabled>
                Language
                </option>
                <option value="Captain">Captain</option>
                <option value="Captain2">Captain2</option>
                <option value="Training3">Training3</option>
              </select>
            </div>
          </div>

          {/* Alternate Position/Rank */}
          <div className="mb-3"> <h1 className="font-bold text-center  ">ADDITIONAL LANGUAGE</h1>
          <div className="grid grid-cols-2 gap-4  "> 
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Language
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
              value={alternatePosition}
              onChange={(e) => setAlternatePosition(e.target.value)}
            >
              <option value="" disabled>
              Language
              </option>
              <option value="Chemical Tanker1">Chemical Tanker1</option>
              <option value="Chemical Tanker2">Chemical Tanker2</option>
              <option value="Chemical Tanker3">Chemical Tanker3</option>
            </select>
          </div>

          {/* Preferred Vessel Type */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Level
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
              value={preferredVesselType}
              onChange={(e) => setPreferredVesselType(e.target.value)}
            >
              <option value="" disabled>
              Level              </option>
              <option value="level1">Level1</option>
              <option value="level2">Level2</option>
              <option value="level3">Level3</option>
            </select>
          </div>
          </div></div>
          
         

          {/* Alternate Vessel Type */}
          <div className="mb-3"><h1 className="font-bold text-center ">ENGLISH LEVEL</h1>
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Level
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
            >
              <option value="" disabled>
              Level
              </option>
              <option value="Training1">Training1</option>
              <option value="Training2">Training2</option>
              <option value="Training3">Training3</option>
            </select>
          </div>
          </div>

          {/* LANGUAGE TESTS */}


          <div className="mb-3">
            <h1 className="text-center font-bold ">LANGUAGE TESTS</h1>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Language
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
            >
              <option value="" disabled>
              Language
              </option>
              <option value="Language1">Language1</option>
              <option value="Language2">Language2</option>
              <option value="Language3">Language3</option>
            </select>
          </div>

          <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
               Test Center
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={nextKinName}
                onChange={(e) => setNextKinName(e.target.value)}
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>
            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
                Type of Test
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="cityName"
                  type="text"
                  value={nextKinShip}
                  onChange={(e) => setNextKinShip(e.target.value)}
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Result
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="cityName"
                  type="text"
                  value={nextKinAddre}
                  onChange={(e) => setNextKinAddre(e.target.value)}
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>


          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Date of Test
            </label>
            <input
              type="date"
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
            />
          </div>
          

          {/* Available */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Issuing Country
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value="" disabled>
                Issuing Country
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          </div>

          </div>

          {/* Attachment Document */}

          <div className="flex gap-6 items-center  my-6 justify-center">
          <label
            htmlFor="medicalfile-upload3"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
          >
            Attachment Document
          </label>
          <input
            id="medicalfile-upload3"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {selectedFile ? (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">File Selected: {selectedFile.name}</p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">No file selected</p>
          )}
        </div>
        {/* </div> */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <button
            type="submit"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Languages;
