"use client";

import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import CircularProgress from "./CircularProgress";
import { useState } from "react";
import MyJobRequirements from "./MyJobRequirements/MyJobRequirements";

const MyJob = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle collapse
  const [isOpens, setIsOpens] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle open/close
  };

  const hendletoggle = () => {
    setIsOpens(!isOpens);
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
            <div className=" h-screen overflow-y-scroll scroll scroll-smooth snap-x snap-mandatory ">
              {isOpen && <MyJobRequirements />}


              <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3  "
                onClick={hendletoggle}
              >
                <Link href="#" className="">
                  Personal Details
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <span className="ml-2 cursor-pointer">
                      {isOpens ? (
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
                  </Link>
                  <CircularProgress percentage={100} color="#00A264" />
                </div>
              </div>

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <Link href="#" className="">
                  Address Details
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <RiArrowDownSLine className="text-2xl " />
                  </Link>
                  <CircularProgress percentage={100} color="#FF0000" />
                </div>
              </div>

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3">
                <Link href="#" className="">
                  Pre Sea Training Details
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <RiArrowDownSLine className="text-2xl " />
                  </Link>
                  <CircularProgress percentage={90} color="#FF9900" />
                </div>
              </div>

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
                <Link href="#" className="">
                  References
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <RiArrowDownSLine className="text-2xl " />
                  </Link>
                  <CircularProgress percentage={100} color="#00A264" />
                </div>
              </div>

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <Link href="#" className="">
                  Authorized Documents
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <RiArrowDownSLine className="text-2xl " />
                  </Link>
                  <CircularProgress percentage={20} color="#FF0000" />
                </div>
              </div>

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3">
                <Link href="#" className="">
                  Ease My Sailing Assessment and Verification
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <Link href="#">
                    <RiArrowDownSLine className="text-2xl " />
                  </Link>
                  <CircularProgress percentage={100} color="#FF9900" />
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="  w-[48%]">
          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] ">
            <Link href="#" className="">
              Certificates of Competency & Endorsements{" "}
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={82} color="#FF9900" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
            <Link href="#" className="">
              Modular Courses Details
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={100} color="#00A264" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
            <Link href="#" className="">
              Additional Certificates & Trainings
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={20} color="#FF0000" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
            <Link href="#" className="">
              Medical Certificates
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={90} color="#00A264" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3">
            <Link href="#" className="">
              Sea Going Service
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={82} color="#FF9900" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
            <Link href="#" className="">
              Offshore Requirements
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={15} color="#FF0000" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
            <Link href="#" className="">
              Family Details (NOK)
            </Link>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
              <CircularProgress percentage={99} color="#00A264" />
            </div>
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
