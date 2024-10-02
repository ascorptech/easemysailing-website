"use client";

import Link from "next/link";
import CircularProgress from "./CircularProgress";
import { useEffect, useState } from "react";
import MyJobRequirements from "./MyJobRequirements/MyJobRequirements";
import PersonalDetails from "./PersonalDetalis/PersonalDetalis";
import Refrences from "./Refrences/Refrences";
import PreSeaTrainigDetails from "./PreSeaTrainigDetails/PreSeaTrainigDetails";
import AdditionalTraining from "./AdditionalTraining/AdditionalTraining";
import MedicalCertificates from "./MedicalCertificates/MedicalCertificates";
import AuthorizedDocuments from "./TravelDocuments/TravelDocuments";
import SeaGoingService from "./SeaGoingService/SeaGoingService";
import NextOfKinDetails from "./NextOfKinDetails/NextOfKinDetails";
import AboutMe from "./AboutMe/AboutMe";
import Languages from "./Languages/Languages";
import ContactDetails from "./ContactDetails/ContactDetails";
import OnlinePresence from "./OnlinePresence/OnlinePresence";
import TravelDocuments from "./TravelDocuments/TravelDocuments";
import Licenses from "./Licenses/Licenses";
import StcwTraining from "./StcwTraining/StcwTraining";
import Ecdis from "./Ecdis/Ecdis";
import Education from "./Education/Education";
import AcademicDetails from "./AcademicDetails/AcademicDetails";
import ProfessionalSkills from "./ProfessionalSkills/ProfessionalSkills";
import VettingServices from "./VettingServices/VettingServices";
import { GetProfileDetail,GetMyjob } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import { FaPercentage } from "react-icons/fa";



const MyJob = () => {
  const [profileDetail,setProfileDetail] = useState<any>()

  const [isOpen, setIsOpen] = useState(false); // State to toggle
  const [pDOpen, setPDOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [oPOpen, setOPOpen] = useState(false);
  const [licensesOpen, setLicensesOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [mjrComplete, setMjrComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [personalComplete, setPersonalComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [nextofComplete, setNextOfComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [languageComplete, setLanguageComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [onlinePresenceComplete, setOnlinePresenceComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [licensesComplete, setLicensesComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [aboutMeComplete, setAboutMeComplete] = useState<any>(
    {
      percentage: 0,
      color: '#FF0000'
    }
  )
  const [contactComplete, setContactComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [travelComplete, setTravelComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )

  const [sTCWComplete, setSTCWComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [eCDISComplete, setECDISComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [medicalComplete, setMedicalComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [additionalComplete, setAdditionalComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [educationComplete, setEducationComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [academicComplete, setAcademicComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [professionalComplete, setProfessionalComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
  )
  const [seaGoingServiceComplete, setSeaGoingServiceComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
    
  )

  const [refrencesComplete, setRefrencesComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
    
  )
  const [preSeaTrainigComplete, setPreSeaTrainigComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
    
  )
  const [vettingServicesComplete, setVettingServicesComplete] = useState<any> (
    {
      percentage: 0,
      color:'#FF0000'
    }
    
  )


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

  useEffect(() => {
    fetchDetails()
  }, [])

  const fetchDetails = async()=>{
    let id = await localStorage.getItem('id')
    GetProfileDetail(id,(res:any)=>{
      if (res?.status==200) {
        setProfileDetail(res?.data)
      }else{
        toast.error('No data found')
      }
      console.log('data here iam',res)

    })
  }

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
      <div className=" flex justify-between">
        
        <div className=" w-[50%] ">
          <div className="">
            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${mjrComplete?.color}]`}>

              <h2 className=""> My Job Requirements</h2>{" "}
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
                <CircularProgress percentage={Math.round(mjrComplete?.percentage)} color={mjrComplete.color} />
              </div>
            </div>
            <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
              {isOpen && <MyJobRequirements mjrComplete={mjrComplete} setMjrComplete={setMjrComplete} userDetail={profileDetail} />}

              {/* PersonalDetails start */}

              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2   border-r-8 border-[${nextofComplete?.color}] mt-3`}>
                <h1 className="">
                  Next Of Kin Details
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
                  <CircularProgress percentage={Math.round(nextofComplete?.percentage)} color={nextofComplete?.color} />
                </div>
              </div>
              {/* {nKOpen && <NextOfKinDetails />} */}
              {nKOpen && <NextOfKinDetails personalComplete={nextofComplete} setPersonalComplete={setNextOfComplete} userDetail={profileDetail}/>}

              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${languageComplete?.color}] mt-3`}>
                <h2 className="">
                  Languages
                </h2>
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
                  <CircularProgress percentage={Math.round(languageComplete?.percentage)} color={languageComplete.color} />
                </div>
              </div>

              {languageOpen && <Languages  languageComplete={languageComplete}
              setLanguageComplete={setLanguageComplete}
              userDetail={profileDetail}/>}

              {/* OnlinePresence start */}
              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${onlinePresenceComplete?.color}] mt-3`}>
                <h1 className="">Online Presence</h1>
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
                  <CircularProgress percentage={Math.round(onlinePresenceComplete?.percentage)} color={onlinePresenceComplete.color} />
                </div>
              </div>

              {oPOpen && <OnlinePresence onlinePresenceComplete={onlinePresenceComplete} setOnlinePresenceComplete={setOnlinePresenceComplete} userDetail={profileDetail}/>}
              {/* OnlinePresence end */}

              {/* OnlinePresence start */}
              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${licensesComplete?.color}] mt-3`}>
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
                  <CircularProgress percentage={Math.round(licensesComplete?.percentage)} color={licensesComplete.color} />
                </div>
              </div>

              {licensesOpen && <Licenses  licensesComplete={licensesComplete} setLicensesComplete={setLicensesComplete} userDetail={profileDetail}/>}


              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${eCDISComplete?.color}] mt-3`}>
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
                  <CircularProgress percentage={Math.round(eCDISComplete?.percentage)} color={eCDISComplete.color} />
                </div>
              </div>

              {eCDISOpen && <Ecdis eCDISComplete={eCDISComplete} setECDISComplete={setECDISComplete} userDetail={profileDetail} />}

              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${medicalComplete?.color}] mt-3`}>
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
                  <CircularProgress percentage={Math.round(medicalComplete?.percentage)} color={medicalComplete.color} />
                </div>
              </div>

              {madicalOpen && <MedicalCertificates medicalComplete={medicalComplete} setMedicalComplete={setMedicalComplete} userDetail={profileDetail}/>}

              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${academicComplete?.color}] mt-3`}>
                <h2 className="">Academic Details</h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer" onClick={() => setAcademicOpen(!academicOpen)}>
                    {!academicOpen ? (
                      <svg
                        className="w-6 h-6 transform  transition-transform"
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
                        className="w-6 h-6 rotate-180 transition-transform"
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
                  <CircularProgress percentage={Math.round(academicComplete?.percentage)} color={academicComplete.color} />
                </div>
              </div>

              {academicOpen && <AcademicDetails academicComplete={academicComplete} setAcademicComplete={setAcademicComplete}  userDetail={profileDetail} />}

              <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${seaGoingServiceComplete?.color}] mt-3`}>
                <h2 className="">SeaGoing Experience </h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer" onClick={handleSea}>
                    {!seaOpen ? (
                      <svg
                        className="w-6 h-6 transform  transition-transform"
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
                        className="w-6 h-6 transition-transform rotate-180"
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
                  <CircularProgress percentage={Math.round(seaGoingServiceComplete?.percentage)} color={seaGoingServiceComplete.color} />
                </div>
              </div>

              {seaOpen && <SeaGoingService seaGoingServiceComplete={seaGoingServiceComplete} setSeaGoingServiceComplete={setSeaGoingServiceComplete}  userDetail={profileDetail} />}

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
              {pDOpen && <PersonalDetails />} */}
              {/* PersonalDetails end */}

              {/*Address Details start */}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${preSeaTrainigComplete?.color}] mt-3`}
               
              >
                <h2  className="">
                  Off Shore Requirements
                </h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer"  onClick={handlePreSeaDetails}>
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
                  <CircularProgress percentage={Math.round( preSeaTrainigComplete?.percentage)} color={ preSeaTrainigComplete.color}  />
                </div>
              </div>

              {preOpen && <PreSeaTrainigDetails  preSeaTrainigComplete={ preSeaTrainigComplete} setPreSeaTrainigComplete={setPreSeaTrainigComplete}  userDetail={profileDetail}/>}



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
              {easeOpen && <MyJobRequirements />} */}
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

          {/* PersonalDetails start */}

          <div
            className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${personalComplete?.color}]`}
           
          >
            <h2 className="">Personal Details</h2>
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

              <CircularProgress percentage={Math.round(personalComplete?.percentage)} color={personalComplete?.color} />
            </div>
          </div>
          <div className=" h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            {pDOpen && <PersonalDetails personalComplete={personalComplete} setPersonalComplete={setPersonalComplete} userDetail={profileDetail}/>}
            {/* PersonalDetails end */}

            {/* Aboutme  start*/}

            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${aboutMeComplete?.color}] mt-3`}>
              <h2 className="">About Me</h2>
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
                <CircularProgress  percentage={Math.round(aboutMeComplete?.percentage)} color={aboutMeComplete?.color}  />
              </div>
            </div>
            {aboutMeOpen && <AboutMe aboutMeComplete={aboutMeComplete} setAboutMeComplete={setAboutMeComplete} userDetail={profileDetail}/>}
            {/* about me end */}

            {/* conatact Details start */}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${contactComplete?.color}] mt-3`}
             
            >
              <h2  className="">
                Contact Details
              </h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer"  onClick={hendleContactDetails}>
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
                <CircularProgress percentage={Math.round(contactComplete?.percentage)} color={contactComplete.color} />
              </div>
            </div>

            {cDOpen && <ContactDetails  contactComplete={contactComplete} setContactComplete={setContactComplete} userDetail={profileDetail}/>}
            {/* constact details end */}

            {/* travel documents */}
            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${travelComplete?.color}] mt-3`}>
              <h1 className="">Travel Documents</h1>
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
                <CircularProgress percentage={Math.round(travelComplete?.percentage)} color={travelComplete.color} />
              </div>
            </div>
            {authOpen && <TravelDocuments travelComplete={travelComplete} setTravelComplete={setTravelComplete}  userDetail={profileDetail}/>}


            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${sTCWComplete?.color}] mt-3`}>
              <h1 className="">STCW Training</h1>
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
                <CircularProgress percentage={Math.round(sTCWComplete?.percentage)} color={sTCWComplete.color}/>
              </div>
            </div>

            {sTCWOpen && <StcwTraining sTCWComplete={sTCWComplete} setSTCWComplete={setSTCWComplete}  userDetail={profileDetail}/>}

            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${additionalComplete?.color}] mt-3`}>
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
                <CircularProgress percentage={Math.round(additionalComplete?.percentage)} color={additionalComplete.color}/>
              </div>
            </div>

            {aCOpen && <AdditionalTraining additionalComplete={additionalComplete} setAdditionalComplete={setAdditionalComplete}  userDetail={profileDetail} />}

            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${educationComplete?.color}] mt-3`}>
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
                <CircularProgress percentage={Math.round(educationComplete?.percentage)} color={educationComplete.color} />
              </div>
            </div>

            {educationOpen && <Education educationComplete={educationComplete} setEducationComplete={setEducationComplete}  userDetail={profileDetail}/>}

            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${professionalComplete?.color}] mt-3`}>
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
                <CircularProgress percentage={Math.round(professionalComplete?.percentage)} color={professionalComplete.color}  />
              </div>
            </div>

            {professionalOpen && <ProfessionalSkills professionalComplete={professionalComplete} setProfessionalComplete={setProfessionalComplete}  userDetail={profileDetail}/>}


            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${refrencesComplete?.color}] mt-3`}
              
            >
              <h2 className="">
                References
              </h2>
              <div className="flex items-center justify-center gap-1">
                <span className="ml-2 cursor-pointer" onClick={handleReferences}>
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
                <CircularProgress percentage={Math.round(refrencesComplete?.percentage)} color={refrencesComplete.color} />
              </div>
            </div>
            {refOpen && <Refrences refrencesComplete={refrencesComplete} setRefrencesComplete={setRefrencesComplete}  userDetail={profileDetail}/>}
           

            <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${vettingServicesComplete?.color}] mt-3`}>
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
                <CircularProgress percentage={Math.round(vettingServicesComplete?.percentage)} color={vettingServicesComplete.color}  />
              </div>
            </div>
            {mCOpen && <VettingServices vettingServicesComplete={vettingServicesComplete} setVettingServicesComplete={setVettingServicesComplete} userDetail={profileDetail}  />}







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

            {offshoreOpen && <MyJobRequirements />} */}

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
            {fDOpen && <MyJobRequirements />} */}
          </div>
        </div>
      </div>


    </div>
  );
};
export default MyJob;
