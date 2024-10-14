"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "../CircularProgress";

type Fleetdetails = {
    percentage: number;
    color: string;
  };

  type Props = {
    fleetComplete: Fleetdetails; 
    setfleetComplete: React.Dispatch<React.SetStateAction<Fleetdetails>>;  
    userDetail: any
  };

const FleetDetails = ({fleetComplete, setfleetComplete,userDetail}:Props) => {
  const [nextKinName, setNextKinName] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [nextKinChildren, setNextKinChildren] = useState("");

  

  const totalFields = 4;
  const filledFields = [
    nextKinName,
    nextKinShip,
    nextKinAddre,
    nextKinChildren,
   
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 4 : 3;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  if (percentage <= 30) {
    color = "red";
  } else if (percentage <= 70) {
    color = "orange";
  } else {
    color = "green";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault(); 
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
    <CircularProgress percentage={Math.round(percentage)} color={color} /> 

      <form onSubmit={handleSubmit}>
        {/* next of kin details */}

        <div className="flex flex-col ">
          <h1 className="text-center font-semibold mb-2">
            NEXT OF KIN DETAILS
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="NextofKinName"
              >
               Next of Kin Name
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="NextofKinName"
                type="text"
                value={nextKinName}
                onChange={(e) => setNextKinName(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                required
              />
              {/* </div> */}
            </div>
            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="nextofkineship"
              >
                Next of Kin Relation Ship
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="nextofkineship"
                  type="text"
                  value={nextKinShip}
                  onChange={(e) => setNextKinShip(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="nextofkinaddres"
              >
                Next of Kin Address
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="nextofkinaddres"
                  type="text"
                  value={nextKinAddre}
                  onChange={(e) => setNextKinAddre(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>

            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="numberofchildren"
              >
                Number of Children
              </label>
              {/* <div className="relative flex items-center  "> */}
                <input
                  id="numberofchildren"
                  type="text"
                  value={nextKinChildren}
                  onChange={(e) => setNextKinChildren(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=""
                  required
                />
              {/* </div> */}
            </div>
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
export default FleetDetails;
