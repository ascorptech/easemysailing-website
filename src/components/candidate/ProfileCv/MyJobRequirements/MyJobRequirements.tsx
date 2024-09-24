"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/ProfileCVService";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const MyJobRequirements = () => {
  // State for form fields
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

  const handleSubmit =  (e: React.FormEvent) => {
    // try {
      e.preventDefault(); // Prevent default form submission

      let formData = {
        availabilityDate,
        currentPosition,
        alternatePosition,
        preferredVesselType,
        alternateVesselType,
        available,
        minTimeOnBoard,
        maxTimeOnBoard,
        minTimeOnHome,
        contractTypeVoyage,
        contractTypePermanent,
        voyageSalary,
        currencyVoyage,
        negotiableVoyage,
        permanentSalary,
        currencyPermanent,
        negotiablePermanent,
        tradingAreaExclusions,

        // id: 0,
        // userId: 0,
        // firstName: "abht",
        // lastName: "string",
        // email: "string",
        // phoneNumber: "string",
        // country: "string",
        // rank: "string",
        // shipType: "string",
        // profilePhotoUrl: "string",
      };
      console.log(formData);
      AddProfileData(formData, AddaddressdataDB)
    };

    const AddaddressdataDB = (result:any)=> {
      console.log(result)
      if(result?.status == 200){
        toast.success("address submited successfully")
      }else {
    
        toast.error('address not submited ')
      }
    }

     

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] gap-4">
          {/* Current Position/Rank */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Current Position/Rank
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={currentPosition}
              onChange={(e) => setCurrentPosition(e.target.value)}
            >
              <option value="" disabled>
                Current Position/Rank
              </option>
              <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option>
            </select>
          </div>

          {/* Alternate Position/Rank */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Alternate Position/Rank
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={alternatePosition}
              onChange={(e) => setAlternatePosition(e.target.value)}
            >
              <option value="" disabled>
                Alternate Position/Rank
              </option>
              <option value="Chemical Tanker1">Chemical Tanker1</option>
              <option value="Chemical Tanker2">Chemical Tanker2</option>
              <option value="Chemical Tanker3">Chemical Tanker3</option>
            </select>
          </div>

          {/* Preferred Vessel Type */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Preferred Vessel Type
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={preferredVesselType}
              onChange={(e) => setPreferredVesselType(e.target.value)}
            >
              <option value="" disabled>
                Preferred Vessel Type
              </option>
              <option value="Training1">Training1</option>
              <option value="Training2">Training2</option>
              <option value="Training3">Training3</option>
            </select>
          </div>

          {/* Alternate Vessel Type */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Alternate Vessel Type
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
            >
              <option value="" disabled>
                Alternate Vessel Type
              </option>
              <option value="Training1">Training1</option>
              <option value="Training2">Training2</option>
              <option value="Training3">Training3</option>
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Availability
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value="" disabled>
              Availability
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* Availability Date */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Availability Date
            </label>
            <input
              type="date"
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
            />
          </div>

          {/* Available */}
          
        </div>

        {/* Rotation Expectation */}
        {/* <div className="my-4">
          <h1 className="text-[16px] leading-[24px] font-semibold">
            Rotation Expectation
          </h1>
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            For seafarers working in Offshore: Please consider as well the
            section “Offshore Requirements” below to enter your expectations and
            skills as per segment requirement.
          </p>
        </div> */}

        {/* Time on Board and Home */}
        {/* <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Min. Time on Board (months)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={minTimeOnBoard}
              onChange={(e) => setMinTimeOnBoard(e.target.value)}
            >
              <option value="" disabled>
                Min. Time on Board (months)
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Max. Time on Board (months)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={maxTimeOnBoard}
              onChange={(e) => setMaxTimeOnBoard(e.target.value)}
            >
              <option value="" disabled>
                Max. Time on Board (months)
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Min. Time on Home (months)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={minTimeOnHome}
              onChange={(e) => setMinTimeOnHome(e.target.value)}
            >
              <option value="" disabled>
                Min. Time on Home (months)
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Max. Time on Home (months)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={maxTimeOnHome}
              onChange={(e) => setMaxTimeOnHome(e.target.value)}
            >
              <option value="" disabled>
                Max. Time on Home (months)
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div> */}

        {/* Preferred Contract Type */}
        {/* <div className="my-5">
          <h1 className="mb-2">Preferred Contract Type</h1>
          <input
            type="checkbox"
            checked={contractTypeVoyage}
            onChange={() => setContractTypeVoyage(!contractTypeVoyage)}
          />
          <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Voyage
          </label>
          <input
            type="checkbox"
            checked={contractTypePermanent}
            onChange={() => setContractTypePermanent(!contractTypePermanent)}
            className="ml-4"
          />
          <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Permanent
          </label>
        </div> */}

        {/* Salary Expectation */}
        {/* <h1 className="mb-2 font-semibold text-[16px] leading-[24px]">
          Salary Expectation
        </h1> */}

        {/* <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Voyage (per month)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={voyageSalary}
              onChange={(e) => setVoyageSalary(e.target.value)}
            >
              <option value="" disabled>
                Voyage (per month)
              </option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Currency
              </label>
              <select
                className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
                value={currencyVoyage}
                onChange={(e) => setCurrencyVoyage(e.target.value)}
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Negotiable
              </label>
              <select
                className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
                value={negotiableVoyage ? "Yes" : "No"}
                onChange={(e) => setNegotiableVoyage(e.target.value === "Yes")}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Permanent (per Month)
            </label>
            <select
              className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
              value={permanentSalary}
              onChange={(e) => setPermanentSalary(e.target.value)}
            >
              <option value="" disabled>
                Permanent (per Month)
              </option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Currency
              </label>
              <select
                className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
                value={currencyPermanent}
                onChange={(e) => setCurrencyPermanent(e.target.value)}
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Negotiable
              </label>
              <select
                className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
                value={negotiablePermanent ? "Yes" : "No"}
                onChange={(e) =>
                  setNegotiablePermanent(e.target.value === "Yes")
                }
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="grid col-span-2 mb-3">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Trading Area Exclusions
              </label>
              <select
                className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
                value={tradingAreaExclusions}
                onChange={(e) => setTradingAreaExclusions(e.target.value)}
              >
                <option value="" disabled>
                  Trading Area Exclusions
                </option>
                <option value="Area1">Area1</option>
                <option value="Area2">Area2</option>
              </select>
            </div>
          </div>
        </div> */}

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

export default MyJobRequirements;

