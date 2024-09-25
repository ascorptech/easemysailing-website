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
        <div className="grid grid-cols-2  gap-4">
          {/* Current Position/Rank */}
          <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Current Position/Rank
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
            />
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

export default MyJobRequirements;

