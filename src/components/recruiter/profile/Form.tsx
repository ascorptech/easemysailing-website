"use client";

import Link from "next/link";
import CircularProgress from "@/components/candidate/ProfileCv/CircularProgress";
import { useEffect, useState } from "react";
import CompanyParticular from "./CompanyParticular/CompanyParticular";
import { GetProfileDetail } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import NextOfKinDetails from "@/components/candidate/ProfileCv/NextOfKinDetails/NextOfKinDetails";
import Languages from "@/components/candidate/ProfileCv/Languages/Languages";
import OnlinePresence from "@/components/candidate/ProfileCv/OnlinePresence/OnlinePresence";
import Licenses from "@/components/candidate/ProfileCv/Licenses/Licenses";
import AboutMe from "@/components/candidate/ProfileCv/AboutMe/AboutMe";
import ContactDetails from "@/components/candidate/ProfileCv/ContactDetails/ContactDetails";
import TravelDocuments from "@/components/candidate/ProfileCv/TravelDocuments/TravelDocuments";



const Form = () => {
  // const [profileDetail,setProfileDetail] = useState<any>()

  const [isOpen, setIsOpen] = useState(false); // State to toggle
  const [pDOpen, setPDOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [oPOpen, setOPOpen] = useState(false);
  const [licensesOpen, setLicensesOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  
  const [companyParticular, setCompanyParticular] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  // const [personalComplete, setPersonalComplete] = useState<any>(
  //   {
  //     percentage: 0,
  //     color: '#FF0000'
  //   }
  // )


  const [nKOpen, setNKOpen] = useState(false);
  const [cDOpen, setCDOpen] = useState(false);
  const [preOpen, setPreOpen] = useState(false);
  const [refOpen, setRefOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [easeOpen, setEaseOpen] = useState(false);

  const [eCDISOpen, setECDISOpen] = useState(false);


  // right side use usestate
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [isOpenright, setIsOpenRight] = useState(false);
  const [mCOpen, setMCOpen] = useState(false);
  const [aCOpen, setACOpen] = useState(false);
  const [madicalOpen, setMadicalOpen] = useState(false);
  const [seaOpen, setSeaOpen] = useState(false);
  const [offshoreOpen, setOffshoreOpen] = useState(false);
  const [fDOpen, setFDOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [professionalOpen, setProfessionalOpen] = useState(false);




  const [sTCWOpen, setSTCWOpen] = useState(false);

  // useEffect(() => {
  //   fetchDetails()
  // }, [])

  // const fetchDetails=async()=>{
  //   let id = await localStorage.getItem('id')
  //   GetProfileDetail(id,(res:any)=>{
  //     if (res?.status==200) {
  //       setProfileDetail(res?.data)
  //     }else{
  //       toast.error('No data found')
  //     }
  //     console.log('data here iam',res)

  //   })
  // }


  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle open/close
  };

  const hendletoggle = () => {
    setPDOpen(!pDOpen);
  };

  const hendleNextKinDetails = () => {
    setNKOpen(!nKOpen);
  };
  const hendlelanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const hendleOnlinePresence = () => {
    setOPOpen(!oPOpen);
  };
  const hendleLicenses = () => {
    setLicensesOpen(!licensesOpen);
  };


  const hendleContactDetails = () => {
    setCDOpen(!cDOpen);
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

  const hendleAboutMe = () => {
    setAboutMeOpen(!aboutMeOpen);
  };
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
            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${companyParticular?.color}]`}>

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
                <CircularProgress percentage={Math.round(companyParticular?.percentage)} color={companyParticular.color} />
              </div>
            </div>{" "}
            <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
              {isOpen && <CompanyParticular companyParticular={companyParticular} setCompanyParticular={setCompanyParticular} />}

              {/* Fleet Details */}

              <div className="flex justify-between items-center rounded-md   bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <h1 className="">
                Fleet Details
                </h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={hendleNextKinDetails}
                  >
                    {nKOpen ? (
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
              {/* {nKOpen && <NextOfKinDetails userDetail={undefined} />} */}
              {/* {nKOpen && <NextOfKinDetails />} */}

              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <Link href="#" className="">
                  Login Credentials
                </Link>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={hendlelanguage}
                  >
                    {languageOpen ? (
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

              {/* {languageOpen && <Languages />}  */}

              {/* OnlinePresence start */}
              <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
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
              </div>

              {/* {oPOpen && <OnlinePresence />} */}
              {/* OnlinePresence end */}

              {/* OnlinePresence start */}
              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <h1 className="">Licenses</h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={hendleLicenses}
                  >
                    {licensesOpen ? (
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

              {licensesOpen && <Licenses />} */}


              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
                <h1 className="">ECDIS</h1>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={() => setECDISOpen(!eCDISOpen)}
                  >
                    {eCDISOpen ? (
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

              {eCDISOpen && <Ecdis />}

              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
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

              {madicalOpen && <MedicalCertificates />} */}

              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
                <h2 className="">Academic Details</h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer" onClick={() => setAcademicOpen(!academicOpen)}>
                    {!academicOpen ? (
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

              {academicOpen && <AcademicDetails />} */}

              {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3">
                <h2 className="">SeaGoing Experience </h2>
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

              {seaOpen && <SeaGoingService />} */}

              {/* OnlinePresence end */}

              {/* <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] "
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
              {pDOpen && <ITF />} */}
              {/* ITF end */}

              {/*Address Details start */}

              {/* <div
                className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900] mt-3"
                onClick={handlePreSeaDetails}
              >
                <Link href="#" className="">
                  Off Shore Requirements
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

              {preOpen && <PreSeaTrainigDetails />} */}



              {/* <div
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
              {easeOpen && <CompanyParticular />} */}
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="  w-[48%]">
          {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF9900]  ">
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
          </div> */}

          {/* ITF start */}

         {/* <div
            // className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${personalComplete?.color}]`}

          >
            <h2 className="">ITF and Other Accredations</h2>
            <div className="flex items-center justify-center gap-1">
              <span className="ml-2 cursor-pointer"  onClick={hendletoggle}>
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
              {/* <CircularProgress percentage={Math.round(personalComplete?.percentage)} color={personalComplete?.color} /> */}
            {/* </div> */}
           {/* </div> */}
          <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            {/* {pDOpen && <ITFOther personalComplete={personalComplete} setPersonalComplete={setPersonalComplete} userDetail={profileDetail}/>} */}
            {/* ITF end */}

            {/* Aboutme  start*/}

            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] ">
              <h2 className="">Crew Recruitments</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={hendleAboutMe}>
                  {aboutMeOpen ? (
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
            {/* {aboutMeOpen && <AboutMe />} */}
            {/* about me end */}

            {/* conatact Details start */}
            <div
              className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3"
              onClick={hendleContactDetails}
            >
              <Link href="#" className="">
                Crew Training
              </Link>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer">
                  {cDOpen ? (
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

            {/* {cDOpen && <ContactDetails />} */}
            {/* constact details end */}

            {/* travel documents */}
            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
              <h1 className="">Crew Welfare Initiative</h1>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={handleAuthorized}
                >
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
            {/* {authOpen && <TravelDocuments />} */}


            <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
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
            </div>

            {/* {sTCWOpen && <StcwTraining />} */}

            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
              <h2 className="">Additional Trainings</h2>
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

            {aCOpen && <AdditionalTraining />} */}

            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Education</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={() => setEducationOpen(!educationOpen)}>
                  {educationOpen ? (
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

            {educationOpen && <Education />} */}

            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Professional SKills</h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={() => setProfessionalOpen(!professionalOpen)}>
                  {professionalOpen ? (
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

            {professionalOpen && <ProfessionalSkills />} */}


            {/* <div
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
            {refOpen && <Refrences />} */}

            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
              <h2 className="">Vetting Service</h2>
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
            {mCOpen && <VettingServices />} */}







            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#FF0000] mt-3">
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

            {offshoreOpen && <CompanyParticular />} */}

            {/* <div className="flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[#00A264] mt-3">
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
            {fDOpen && <CompanyParticular />} */}
          </div>
        </div>
      </div>


    </div>
  );
};
export default Form;
