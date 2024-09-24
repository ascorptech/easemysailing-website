"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Licenses = () => {
  // State for form fields
  const [number, setNumber] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [idoNotACoC, setIdoNotACoC] = useState("");
  const [areaLimitation, setAreaLimitation] = useState("");
  const [capacity, setCapacity] = useState("");

  const [issuingOption, setIssuingOption] = useState("");
  const [typeOption, setTypeOption] = useState("");
  const [number1, setNumber1] = useState("");

  const [wRegulation, setWRegulation] = useState("");

  const [otherLimitation, setOtherLimitation] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [issuingCountry, setIssuingCountry] = useState("");

  const [availabilityDate, setAvailabilityDate] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [issueAuthority, setIssueAuthority] = useState("");
  const [sTCWRegulation, setSTCWRegulation] = useState("");
  const [alternateVesselType, setAlternateVesselType] = useState("");
  const [available, setAvailable] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [separately, setSeparately] = useState("");

  const [sTCWRegulationOption, setSTCWRegulationOption] = useState("");
  const [capacityOption, setCapacityOption] = useState("");
  const [issueDateOption, setIssueDateOption] = useState("");
  const [expiryDateOption, setExpiryDateOption] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);

  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);

  // Salary expectation states

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

  const handleFileChange1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile1(file);
    }
  };

  const handleFileChange2 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile2(file);
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  text-[14px] leading-[19.07px]  text-[#333333] gap-4"> */}
        {/* NATIVE LANGUAGE*/}
        <div className="mb-3">
          <h1 className="font-bold  text-center ">CERTIFICATE OF COMPETENCY</h1>
          {/* <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              I do not have a CoC
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
            </div> */}
          <div className="w-full ">
            <label
              className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
              htmlFor="cityName"
            >
              I do not have a CoC
            </label>
            {/* <div className="relative flex items-center  "> */}
            <input
              id="cityName"
              type="text"
              value={idoNotACoC}
              onChange={(e) => setIdoNotACoC(e.target.value)}
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
              placeholder=""
              required
            />
            {/* </div> */}
          </div>
        </div>

        {/* Alternate Position/Rank */}
        <div className="mb-3">
          
          <div className="grid grid-cols-2 gap-4  ">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Authority
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                value={issueAuthority}
                onChange={(e) => setIssueAuthority(e.target.value)}
              >
                <option value="" disabled>
                  Issuing Country
                </option>
                <option value="Chemical Tanker1">Chemical Tanker1</option>
                <option value="Chemical Tanker2">Chemical Tanker2</option>
                <option value="Chemical Tanker3">Chemical Tanker3</option>
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
                Certificate No
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={certificateNo}
                onChange={(e) => setCertificateNo(e.target.value)}
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                placeholder="Number"
                required
              />
              {/* </div> */}
            </div>

            {/* Preferred Vessel Type */}
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Certificate Type
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                value={certificateType}
                onChange={(e) => setCertificateType(e.target.value)}
              >
                <option value="" disabled>
                  Capacity{" "}
                </option>
                <option value="level1">Level1</option>
                <option value="level2">Level2</option>
                <option value="level3">Level3</option>
              </select>
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                STCW Regulation
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                value={sTCWRegulation}
                onChange={(e) => setSTCWRegulation(e.target.value)}
              >
                <option value="" disabled>
                  STCW Regulation{" "}
                </option>
                <option value="level1">Level1</option>
                <option value="level2">Level2</option>
                <option value="level3">Level3</option>
              </select>
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                htmlFor="cityName"
              >
                Area Limitation
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={areaLimitation}
                onChange={(e) => setAreaLimitation(e.target.value)}
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
                Other Limitation
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={otherLimitation}
                onChange={(e) => setOtherLimitation(e.target.value)}
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Date
              </label>
              <input
                type="date"
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Expiry Date
              </label>
              <input
                type="date"
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
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
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFile.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                No file selected
              </p>
            )}
          </div>
        </div>

        {/* Alternate Vessel Type */}

        {/* LANGUAGE TESTS */}

        <div className="mb-3">
          <h1 className="text-center font-bold ">
            GENERAL OPERATOR CERTIFICATE (GMDSS)
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issuing Country
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={issuingCountry}
                onChange={(e) => setIssuingCountry(e.target.value)}
              >
                <option value="" disabled>
                  Issuing Country
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
                Number
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Capacity
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option value="" disabled>
                  Capacity
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                STCW Regulation
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={wRegulation}
                onChange={(e) => setWRegulation(e.target.value)}
              >
                <option value="" disabled>
                  STCW Regulation
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Issue Date
              </label>
              <input
                type="date"
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Expiry Date
              </label>
              <input
                type="date"
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
          </div>

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
              onChange={handleFileChange1}
            />
            {selectedFile1 ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFile1.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                No file selected
              </p>
            )}
          </div>

          <div className="mb-3">
            <h1 className="font-bold text-center ">ENDORSEMENTS</h1>
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Not Issued Separately
              </label>
              <select
                className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-lg"
                value={separately}
                onChange={(e) => setSeparately(e.target.value)}
              >
                <option value="" disabled>
                  Not Issued Separately
                </option>
                <option value="Training1">Training1</option>
                <option value="Training2">Training2</option>
                <option value="Training3">Training3</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Type
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={typeOption}
                  onChange={(e) => setTypeOption(e.target.value)}
                >
                  <option value="" disabled>
                    Type
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Issuing Country
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={issuingOption}
                  onChange={(e) => setIssuingOption(e.target.value)}
                >
                  <option value="" disabled>
                    Issuing Country
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1 "
                  htmlFor=""
                >
                  Number
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  type="text"
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  placeholder=""
                  required
                />
                {/* </div> */}
              </div>

              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Capacity
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={capacityOption}
                  onChange={(e) => setCapacityOption(e.target.value)}
                >
                  <option value="" disabled>
                    Capacity
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  STCW Regulation
                </label>
                <select
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={sTCWRegulationOption}
                  onChange={(e) => setSTCWRegulationOption(e.target.value)}
                >
                  <option value="" disabled>
                    STCW Regulation
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Issue Date
                </label>
                <input
                  type="date"
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={issueDateOption}
                  onChange={(e) => setIssueDateOption(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
                  value={expiryDateOption}
                  onChange={(e) => setExpiryDateOption(e.target.value)}
                />
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
              onChange={handleFileChange2}
            />
            {selectedFile2 ? (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                File Selected: {selectedFile2.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                No file selected
              </p>
            )}
          </div>
        </div>

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

export default Licenses;
