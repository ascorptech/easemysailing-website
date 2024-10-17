"use client";

import Link from "next/link";
import CircularProgress from "@/components/candidate/ProfileCv/CircularProgress";
import { useEffect, useState } from "react";
import CompanyParticular from "./CompanyParticular/CompanyParticular";
import { toast } from "react-toastify";
import FleetForm from "./FleetDetails/FleetDetails";
import UserDetails from "./userdetails/UserDetails";
import Accred from "./accredation/Accred";
import KycDetails from "./kyc/KycDetails";
import OwnerCrew from "./ownerCrew/OwnerCrew";
const Form = () => {
  const [fleetDetail, setFleetDetail] = useState<any>({});
  const [userDetail, setUserDetail] = useState<any>({});
  const [accredDetail, setAccredDetail] = useState<any>({});
  const [kycDetail, setKycDetail] = useState<any>({});
  const [ownerDetail, setOwnerCrewDetail] = useState<any>({});
  const [companyParticular, setCompanyParticular] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [fleetComplete, setfleetComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [userComplete, setUserComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [accredComplete, setAccredComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [kycComplete, setKycComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [ownerComplete, setOwnerComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  // left side usestate
  const [isOpen, setIsOpen] = useState(false); // State to toggle
  const [accredationsOpen, setAccredationsOpen] = useState(false);
  const [ownerCrewOpen, setOwnerCrewOpen] = useState(false);

  // right side use usestate
  const [fleetDetailOpen, setFleetDetailOpen] = useState(false);
  const [kycDetailsOpen, setKycOpen] = useState(false);
  const [userDetailOpen, setUserDetailsOpen] = useState(false);

  const handlekyc = () => {
    setKycOpen(!kycDetailsOpen);
  };

  const handleownercrew = () => {
    setOwnerCrewOpen(!ownerCrewOpen);
  };

  const handleUser = () => {
    setUserDetailsOpen(!userDetailOpen);
  };

  const handleAccredations = () => {
    setAccredationsOpen(!accredationsOpen);
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle open/close
  };

  const hendleFleet = () => {
    setFleetDetailOpen(!fleetDetailOpen);
  };

  return (
    <div className=" mx-6 mt-4  ">
      <div className=" flex w-full flex-col justify-center lg:flex-row lg:justify-between lg:gap-4 ">
        <div className="w-full lg:w-[50%] ">
          <div className="    ">
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${companyParticular?.color}]`}
            >
              <h2 className=""> Company Particulars</h2>{" "}
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={toggleCollapse}>
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
                {/* <CircularProgress percentage={0}/> */}
                <CircularProgress
                  percentage={Math.round(companyParticular?.percentage)}
                  color={companyParticular.color}
                />
              </div>
            </div>{" "}
            <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
              {isOpen && (
                <CompanyParticular
                  companyParticular={companyParticular}
                  setCompanyParticular={setCompanyParticular}
                />
              )}

              {/* Accredations */}

              <div
                className={`mt-3 flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  accredDetail.color ? accredDetail.color : accredComplete.color
                }]`}
              >
                {" "}
                <h1 className="">Accredations</h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={handleAccredations}
                  >
                    {accredationsOpen ? (
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
                  <CircularProgress
                    percentage={Math.round(
                      accredComplete?.percentage
                        ? accredComplete?.percentage
                        : Number(accredDetail?.completed)
                    )}
                    color={
                      accredDetail.color
                        ? accredDetail.color
                        : accredComplete.color
                    }
                  />{" "}
                </div>
              </div>
              {accredationsOpen && (
                <Accred
                  AccredComplete={accredComplete}
                  setAccredComplete={setAccredComplete}
                  userDetail={undefined}
                  sTCWDetail={undefined}
                  criminal={undefined}
                />
              )}
              {/* Accred Form end */}

              {/* {Owner Specific Crew Training Requirements/>} */}

              <div
                className={`mt-3 flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  ownerDetail.color ? ownerDetail.color : ownerComplete.color
                }]`}
              >
                <h1 className=""> Owner Specific Crew Training Requirements</h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={handleownercrew}
                  >
                    {ownerCrewOpen ? (
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
                  <CircularProgress
                    percentage={Math.round(
                      ownerComplete?.percentage
                        ? ownerComplete?.percentage
                        : Number(ownerDetail?.completed)
                    )}
                    color={
                      ownerDetail.color
                        ? ownerDetail.color
                        : ownerComplete.color
                    }
                  />{" "}
                </div>
              </div>
              {ownerCrewOpen && (
                <OwnerCrew
                  OwnerCrewComplete={ownerComplete}
                  setOwnerCrewComplete={setOwnerComplete}
                  userDetail={undefined}
                  OwnerCrewDetail={undefined}
                  criminal={undefined}
                />
              )}

              {/* {languageOpen && <Languages />}  */}

              {/* OnlinePresence start */}
              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <h1 className="">Testimonials</h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={hendleOnlinePresence}
                  >
                    {oPOpen ? (
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
              </div> */}
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="w-full  lg:w-[50%] mt-4 lg:mt-0">
          <div className=" lg:h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            {/* Fleet Details*/}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                fleetDetail.color ? fleetDetail.color : fleetComplete.color
              }]`}
            >
              {" "}
              <h2 className="">Fleet Details and Crew Welfare</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={hendleFleet}>
                  {fleetDetailOpen ? (
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
                <CircularProgress
                  percentage={Math.round(
                    fleetComplete?.percentage
                      ? fleetComplete?.percentage
                      : Number(fleetDetail?.completed)
                  )}
                  color={
                    fleetDetail.color ? fleetDetail.color : fleetComplete.color
                  }
                />
              </div>
            </div>
            {fleetDetailOpen && (
              <FleetForm
                FleetComplete={fleetComplete}
                setFleetComplete={setfleetComplete}
                userDetail={undefined}
                sTCWDetail={undefined}
                criminal={undefined}
              />
            )}
            {/* Fleet Form end */}
            {/* Kyc Details */}
            <div
              className={`flex justify-between items-center rounded-md mt-3 bg-[#D6EEEE] p-2 border-r-8 border-[${
                kycDetail.color ? kycDetail.color : kycComplete.color
              }]`}
            >
              <h2 className="">KYC Details</h2>

              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handlekyc}>
                  {kycDetailsOpen ? (
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
                <CircularProgress
                  percentage={Math.round(
                    kycComplete?.percentage
                      ? kycComplete?.percentage
                      : Number(kycDetail?.completed)
                  )}
                  color={kycDetail.color ? kycDetail.color : kycComplete.color}
                />{" "}
              </div>
            </div>
            {kycDetailsOpen && (
              <KycDetails
                KycDetailsComplete={kycComplete}
                setKycDetailsComplete={setKycComplete}
                userDetail={undefined}
                sTCWDetail={undefined}
                criminal={undefined}
              />
            )}{" "}
            {/* kyc details end */}
            {/* User Details */}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] mt-3 p-2 border-r-8 border-[${
                userDetail.color ? userDetail.color : userComplete.color
              }]`}
            >
              {" "}
              <h1 className="">User Details</h1>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleUser}>
                  {userDetailOpen ? (
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
                <CircularProgress
                  percentage={Math.round(
                    userComplete?.percentage
                      ? userComplete?.percentage
                      : Number(userDetail?.completed)
                  )}
                  color={
                    userDetail.color ? userDetail.color : userComplete.color
                  }
                />{" "}
              </div>
            </div>
            {userDetailOpen && (
              <UserDetails
                UserComplete={userComplete}
                setUserComplete={setUserComplete}
                userDetail={undefined}
                sTCWDetail={undefined}
                criminal={undefined}
              />
            )}
            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
              <h1 className="">ITF and Other Accredations</h1>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => setSTCWOpen(!sTCWOpen)}
                >
                  {sTCWOpen ? (
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
