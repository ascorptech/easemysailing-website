"use client";

import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import CircularProgress from "./CircularProgress";
import { useState } from "react";
import MyJobRequirements from "./MyJobRequirements/MyJobRequirements";
import PersonalDetails from "./PersonalDetalis/PersonalDetalis";
import AddressDetails from "./AddressDetails/AddressDetails";
import Refrences from "./Refrences/Refrences";

const MyJob = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle
  const [pDOpen, setPDOpen] = useState(false);
  const [aDOpen, setADOpen] = useState(false);
  const [preOpen, setPreOpen] = useState(false);
  const [refOpen, setRefOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [easeOpen, setEaseOpen] = useState(false);

  // right side use usestate
  const [isOpenright, setIsOpenRight] = useState(false);
  const [mCOpen, setMCOpen] = useState(false);
  const [aCOpen, setACOpen] = useState(false);
  const [madicalOpen, setMadicalOpen] = useState(false);
  const [seaOpen, setSeaOpen] = useState(false);
  const [offshoreOpen, setOffshoreOpen] = useState(false);
  const [fDOpen, setFDOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle open/close
  };

  const hendletoggle = () => {
    setPDOpen(!pDOpen);
  };

  const hendleAdressDetails = () => {
    setADOpen(!aDOpen);
  };
  const handlePreSeaDetails = () => {
    setPreOpen(!preOpen);
  };

  const handleReferences = () => {
    setRefOpen(!refOpen);
  };

  const handleAuthorized = () => {
    setAuthOpen(!authOpen);
  };

  const handleEase = () => {
    setEaseOpen(!easeOpen);
  };
  // right toggle button
  const toggleright = () => {
    setIsOpenRight(!isOpenright); // Toggle open/close
  };

  const hendleModular = () => {
    setMCOpen(!mCOpen);
  };

  const hendleAdditional = () => {
    setACOpen(!aCOpen);
  };
  const handleMedical = () => {
    setMadicalOpen(!madicalOpen);
  };

  const handleSea = () => {
    setSeaOpen(!seaOpen);
  };

  const handleOffshore = () => {
    setOffshoreOpen(!offshoreOpen);
  };

  const handleFamily = () => {
    setFDOpen(!fDOpen);
  };
  return (
    <div className=" mx-6 mt-4  ">
      <div className=" flex justify-between     ">
        <div className=" w-[50%] ">
          <div className="    ">
            <div
              className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900]"
              onClick={toggleCollapse}
            >
              {" "}
              <h2 className="">My Job Requirements</h2>{" "}
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer">
                  {isOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={70} color="#FF9900" />
              </div>
            </div>{" "}
            <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
              {isOpen && <MyJobRequirements />}

              {/* PersonalDetails start */}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-2"
                onClick={hendletoggle}
              >
                <h2 className="">Personal Details</h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {pDOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>

                  <CircularProgress percentage={100} color="#00A264" />
                </div>
              </div>
              {pDOpen && <PersonalDetails />}

              {/*Address Details start */}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3"
                onClick={hendleAdressDetails}
              >
                <Link href="#" className="">
                  Address Details
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {aDOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <CircularProgress percentage={100} color="#FF0000" />
                </div>
              </div>

              {aDOpen && <AddressDetails />}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3"
                onClick={handlePreSeaDetails}
              >
                <Link href="#" className="">
                  Pre Sea Training Details
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {preOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <CircularProgress percentage={90} color="#FF9900" />
                </div>
              </div>

              {preOpen && <MyJobRequirements />}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3"
                onClick={handleReferences}
              >
                <Link href="#" className="">
                  References
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {refOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <CircularProgress percentage={100} color="#00A264" />
                </div>
              </div>
              {refOpen && <Refrences />}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3"
                onClick={handleAuthorized}
              >
                <Link href="#" className="">
                  Authorized Documents
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {authOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <CircularProgress percentage={20} color="#FF0000" />
                </div>
              </div>
              {authOpen && <MyJobRequirements />}

              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3"
                onClick={handleEase}
              >
                <Link href="#" className="">
                  Ease My Sailing Assessment and Verification
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer">
                    {easeOpen ? (
                      <svg
                        className="w-6 h-6 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <CircularProgress percentage={100} color="#FF9900" />
                </div>
              </div>
              {easeOpen && <MyJobRequirements />}
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="  w-[48%]">
          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900]  ">
            <h2 className="">Certificates of Competency & Endorsements </h2>
            <div className="flex items-center justify-center gap-1">
              <span className="ml-2 cursor-pointer" onClick={toggleright}>
                {isOpenright ? (
                  <svg
                    className="w-6 h-6 transform rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
              <CircularProgress percentage={82} color="#FF9900" />
            </div>
          </div>

          <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            {isOpenright && <MyJobRequirements />}
            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Modular Courses Details</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={hendleModular}>
                  {mCOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={100} color="#00A264" />
              </div>
            </div>
            {mCOpen && <MyJobRequirements />}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
              <h2 className="">Additional Certificates & Trainings</h2>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={hendleAdditional}
                >
                  {aCOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={20} color="#FF0000" />
              </div>
            </div>

            {aCOpen && <MyJobRequirements />}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Medical Certificates</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleMedical}>
                  {madicalOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={90} color="#00A264" />
              </div>
            </div>

            {madicalOpen && <MyJobRequirements />}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3">
              <h2 className="">Sea Going Service</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleSea}>
                  {seaOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={82} color="#FF9900" />
              </div>
            </div>

            {seaOpen && <MyJobRequirements />}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
              <h2 className="">Offshore Requirements</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleOffshore}>
                  {offshoreOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={15} color="#FF0000" />
              </div>
            </div>

            {offshoreOpen && <MyJobRequirements />}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Family Details (NOK)</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleFamily}>
                  {fDOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <CircularProgress percentage={99} color="#00A264" />
              </div>
            </div>
            {fDOpen && <MyJobRequirements />}
          </div>
        </div>
      </div>

      {/* <div className="flex gap-2 mt-4">
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
      </div> */}
      {/* </div> */}
    </div>
  );
};
export default MyJob;
