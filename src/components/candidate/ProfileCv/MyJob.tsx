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
import AcademicDetails from "./AcademicDetails/AcademicDetails";
import ProfessionalSkills from "./ProfessionalSkills/ProfessionalSkills";
import VettingServices from "./VettingServices/VettingServices";
import {
  GetProfileDetail,
  GetMyjob,
  GetAboutMe,
  GetNextOfData,
  GetLanguageData,
  GetContact,
  GetEcdisData,
  GetLicencesData,
  GetTravelDocumentData,
  GetOnlinePresenceData,
  GetReferencesData,
  GetSeagoingData,
  GetStcwData,
  GetMedicalData,
  GetAdditonalData,
  GetSeaDetailsData,
  GetVettingData,
  GetProfessionalSkillData,
  GetAcademicData,
  GetShoreJobData,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import { FaPercentage } from "react-icons/fa";
import ShorJob from "./ShoreJob/ShoreJob";

const MyJob = () => {
  const [criminal, setCriminal] = useState(false); // Manage criminal checkbox state here

  const [profileDetail, setProfileDetail] = useState<any>({});
  const [myJobDetail, setMyJobDetail] = useState<any>({});
  const [aboutMeDetail, setAboutMeDetail] = useState<any>({});
  const [nextOfKinDetail, setNextOfKinDetail] = useState<any>({});
  const [languageDetail, setLanguageDetail] = useState<any>({});
  const [licencesDetail, setLicencesDetail] = useState<any>({});
  const [contactDetail, setContactDetail] = useState<any>({});
  const [travelDocumentsDetail, setTravelDocumentsDetail] = useState<any>({});
  const [ecdisDetail, setEcdisDetail] = useState<any>({});
  const [medicalDetail, setMedicalDetail] = useState<any>({});
  const [academicDetails, setAcademicDetails] = useState<any>({});
 
  const [offShoreDetail, setOffShoreDetail] = useState<any>({});

  const [professionalDetail, setprofessionalDetail] = useState<any>({});

  const [shoreJobDetail, setShoreJobDetail] = useState<any>({});
  const [verificationDetail, setVerificationDetail] = useState<any>({});

  const [sTCWDetail, setSTCWDetail] = useState<any>({});
  const [additionalDetail, setAdditionalDetail] = useState<any>({});
  const [onlinePresenseDetail, setOnlinePresenseDetail] = useState<any>({});

  const [refrencesDetail, setRefrencesDetail] = useState<any>({});
  const [seaGoingServiceDetail, setseaGoingServiceDetail] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false); // State to toggle
  const [pDOpen, setPDOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [oPOpen, setOPOpen] = useState(false);
  const [licensesOpen, setLicensesOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [mjrComplete, setMjrComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [personalComplete, setPersonalComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [nextOfComplete, setNextOfComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [languageComplete, setLanguageComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [onlinePresenceComplete, setOnlinePresenceComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [licensesComplete, setLicensesComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [aboutMeComplete, setAboutMeComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [contactComplete, setContactComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [travelComplete, setTravelComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [sTCWComplete, setSTCWComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [eCDISComplete, setECDISComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [medicalComplete, setMedicalComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [additionalComplete, setAdditionalComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  // const [educationComplete, setEducationComplete] = useState<any> (
  //   {
  //     percentage: 0,
  //     color:'#FF0000'
  //   }
  // )
  const [academicComplete, setAcademicComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [professionalComplete, setProfessionalComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [seaGoingServiceComplete, setSeaGoingServiceComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [shorJobComplete, setShorJobComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

  const [refrencesComplete, setRefrencesComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [preSeaTrainigComplete, setPreSeaTrainigComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });
  const [vettingServicesComplete, setVettingServicesComplete] = useState<any>({
    percentage: 0,
    color: "#FF0000",
  });

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
  // const [educationOpen, setEducationOpen] = useState(false);
  const [shorOpen, setShorOpen] = useState(false);

  const [professionalOpen, setProfessionalOpen] = useState(false);

  const [sTCWOpen, setSTCWOpen] = useState(false);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    let id = await localStorage.getItem("id");
    GetProfileDetail(id, (res: any) => {
      if (res?.status == 200) {
        setProfileDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetMyjob(id, (res: any) => {
      if (res?.status == 200) {
        setMyJobDetail(res?.data);
        localStorage.setItem("rank", res?.data?.currentPosition);
      } else {
        toast.error("No data found");
      }
    });
    GetAboutMe(id, (res: any) => {
      if (res?.status == 200) {
        setAboutMeDetail(res?.data);
        localStorage.setItem(
          "aboutMe",
          res?.data?.personalityAndProfessionalAttitude
        );
      } else {
        toast.error("No data found");
      }
    });
    GetNextOfData(id, (res: any) => {
      if (res?.status == 200) {
        setNextOfKinDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetOnlinePresenceData(id, (res: any) => {
      if (res?.status == 200) {
        setOnlinePresenseDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetLanguageData(id, (res: any) => {
      if (res?.status == 200) {
        setLanguageDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetLicencesData(id, (res: any) => {
      if (res?.status == 200) {
        setLicencesDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetAcademicData(id, (res: any) => {
      if (res?.status == 200) {
        setAcademicDetails(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetAdditonalData(id, (res: any) => {
      if (res?.status == 200) {
        setAdditionalDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetMedicalData(id, (res: any) => {
      if (res?.status == 200) {
        setMedicalDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetContact(id, (res: any) => {
      if (res?.status == 200) {
        setContactDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetTravelDocumentData(id, (res: any) => {
      if (res?.status == 200) {
        setTravelDocumentsDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetStcwData(id, (res: any) => {
      if (res?.status == 200) {
        setSTCWDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetReferencesData(id, (res: any) => {
      if (res?.status == 200) {
        setRefrencesDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetSeaDetailsData(id, (res: any) => {
      if (res?.status == 200) {
        setOffShoreDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetShoreJobData(id, (res: any) => {
      if (res?.status == 200) {
        setShoreJobDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetVettingData(id, (res: any) => {
      if (res?.status == 200) {
        setVerificationDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
    GetProfessionalSkillData(id, (res: any) => {
      if (res?.status == 200) {
        setprofessionalDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetSeagoingData(id, (res: any) => {
      if (res?.status == 200) {
        setseaGoingServiceDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });

    GetEcdisData(id, (res: any) => {
      if (res?.status == 200) {
        setEcdisDetail(res?.data);
      } else {
        toast.error("No data found");
      }
    });
  };

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

  return (
    <div className=" mx-6 mt-4   ">
      <div className=" flex w-full flex-col justify-center lg:flex-row lg:justify-between lg:gap-4 ">
        <div className="w-full lg:w-[50%] ">
          <div className=" lg:h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            <div className="">
              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${
                  myJobDetail.color ? myJobDetail.color : mjrComplete.color
                }]`}
              >
                <h2 className=""> My Job Requirements</h2>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={toggleCollapse}
                  >
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
                  <CircularProgress
                    percentage={Math.round(
                      mjrComplete?.percentage
                        ? mjrComplete?.percentage
                        : Number(myJobDetail?.completed)
                    )}
                    color={
                      myJobDetail.color ? myJobDetail.color : mjrComplete.color
                    }
                  />
                </div>
              </div>

              {isOpen && (
                <MyJobRequirements
                  mjrComplete={mjrComplete}
                  setMjrComplete={setMjrComplete}
                  userDetail={profileDetail}
                  jobDetail={myJobDetail}
                  criminal={criminal}
                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2  border-r-8 border-[${
                  profileDetail.color
                    ? profileDetail?.color
                    : personalComplete?.color
                }] mt-3`}
              >
                <h2 className="">Personal Details</h2>
                <div className="flex items-center justify-center gap-1">
                  <span className="ml-2 cursor-pointer" onClick={hendletoggle}>
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

                  <CircularProgress
                    percentage={
                      Math.round(personalComplete?.percentage)
                        ? Math.round(personalComplete?.percentage)
                        : Number(profileDetail?.completed)
                    }
                    color={
                      profileDetail.color
                        ? profileDetail?.color
                        : personalComplete?.color
                    }
                  />
                </div>
              </div>

              {pDOpen && (
                <PersonalDetails
                  personalComplete={personalComplete}
                  setPersonalComplete={setPersonalComplete}
                  userDetail={profileDetail}
                  criminal={criminal}
                />
              )}

              {/* PersonalDetails start */}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  languageDetail.color
                    ? languageDetail.color
                    : languageComplete.color
                }] mt-3`}
              >
                <h2 className="">Languages</h2>
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
                  <CircularProgress
                    percentage={Math.round(
                      languageComplete?.percentage
                        ? languageComplete?.percentage
                        : Number(languageDetail?.completed)
                    )}
                    color={
                      languageDetail.color
                        ? languageDetail.color
                        : languageComplete.color
                    }
                  />
                </div>
              </div>

              {languageOpen && (
                <Languages
                  languageComplete={languageComplete}
                  setLanguageComplete={setLanguageComplete}
                  userDetail={profileDetail}
                  languageDetail={languageDetail}
                  criminal={criminal}
                />
              )}

              {/* OnlinePresence start */}
              <div
                className={` mt-3 flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  onlinePresenseDetail.color
                    ? onlinePresenseDetail.color
                    : onlinePresenceComplete.color
                }]`}
              >
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

                  <CircularProgress
                    percentage={Math.round(
                      onlinePresenceComplete?.percentage
                        ? onlinePresenceComplete?.percentage
                        : Number(onlinePresenseDetail?.completed)
                    )}
                    color={
                      onlinePresenseDetail.color
                        ? onlinePresenseDetail.color
                        : onlinePresenceComplete.color
                    }
                  />
                </div>
              </div>

              {oPOpen && (
                <OnlinePresence
                  onlinePresenceComplete={onlinePresenceComplete}
                  setOnlinePresenceComplete={setOnlinePresenceComplete}
                  userDetail={profileDetail}
                  onlinePresenceDetail={onlinePresenseDetail}
                  criminal={criminal}
                />
              )}
              {/* OnlinePresence end */}

              {/* OnlinePresence start */}
              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8  border-[${
                  licencesDetail.color
                    ? licencesDetail.color
                    : licensesComplete.color
                }] mt-3`}
              >
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
                  <CircularProgress
                    percentage={Math.round(
                      licensesComplete?.percentage
                        ? licensesComplete?.percentage
                        : Number(licencesDetail?.completed)
                    )}
                    color={
                      licencesDetail.color
                        ? licencesDetail.color
                        : licensesComplete.color
                    }
                  />
                </div>
              </div>

              {licensesOpen && (
                <Licenses
                  licensesComplete={licensesComplete}
                  setLicensesComplete={setLicensesComplete}
                  userDetail={profileDetail}
                  licensesDetail={licencesDetail}
                  criminal={criminal}
                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  mt-3 bg-[#D6EEEE] p-2 border-r-8 border-[${
                  ecdisDetail.color ? ecdisDetail.color : eCDISComplete.color
                }]`}
              >
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
                  <CircularProgress
                    percentage={Math.round(
                      eCDISComplete?.percentage
                        ? eCDISComplete?.percentage
                        : Number(ecdisDetail?.completed)
                    )}
                    color={
                      ecdisDetail.color
                        ? ecdisDetail.color
                        : eCDISComplete.color
                    }
                  />
                </div>
              </div>

              {eCDISOpen && (
                <Ecdis
                  eCDISComplete={eCDISComplete}
                  setECDISComplete={setECDISComplete}
                  userDetail={profileDetail}
                  ecdisDetail={ecdisDetail}
                  criminal={criminal}
                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  medicalDetail.color
                    ? medicalDetail.color
                    : medicalComplete.color
                }] mt-3`}
              >
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
                  <CircularProgress
                    percentage={
                      Math.round(medicalComplete?.percentage)
                        ? Math.round(medicalComplete?.percentage)
                        : Number(medicalDetail?.completed)
                    }
                    color={
                      medicalDetail.color
                        ? medicalDetail?.color
                        : medicalComplete?.color
                    }
                  />
                </div>
              </div>

              {madicalOpen && (
                <MedicalCertificates
                  medicalComplete={medicalComplete}
                  setMedicalComplete={setMedicalComplete}
                  userDetail={profileDetail}
                  criminal={criminal}
                  medicalDetail={medicalDetail}
                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  academicDetails.color
                    ? academicDetails?.color
                    : academicComplete?.color
                }] mt-3`}
              >
                <h2 className="">Academic Details</h2>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={() => setAcademicOpen(!academicOpen)}
                  >
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
                  <CircularProgress
                    percentage={
                      Math.round(academicComplete?.percentage)
                        ? Math.round(academicComplete?.percentage)
                        : Number(academicDetails?.completed)
                    }
                    color={
                      academicDetails.color
                        ? academicDetails?.color
                        : academicComplete?.color
                    }
                  />
                </div>
              </div>

              {academicOpen && (
                <AcademicDetails
                  academicComplete={academicComplete}
                  setAcademicComplete={setAcademicComplete}
                  userDetail={profileDetail}
                  criminal={criminal}
                  academicDetail={academicDetails}

                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  seaGoingServiceDetail.color
                    ? seaGoingServiceDetail.color
                    : seaGoingServiceComplete.color
                }] mt-3`}
              >
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
                  <CircularProgress
                    percentage={Math.round(
                      seaGoingServiceComplete?.percentage
                        ? seaGoingServiceComplete?.percentage
                        : Number(seaGoingServiceDetail?.completed)
                    )}
                    color={
                      seaGoingServiceDetail.color
                        ? seaGoingServiceDetail.color
                        : seaGoingServiceComplete.color
                    }
                  />
                </div>
              </div>

              {seaOpen && (
                <SeaGoingService
                  seaGoingServiceComplete={seaGoingServiceComplete}
                  setSeaGoingServiceComplete={setSeaGoingServiceComplete}
                  userDetail={profileDetail}
                  seaGoingServiceDetail={seaGoingServiceDetail}
                  criminal={criminal}
                />
              )}

              <div
                className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                  offShoreDetail.color
                    ? offShoreDetail?.color
                    : preSeaTrainigComplete?.color
                }] mt-3`}
              >
                <h2 className="">Off Shore Requirements</h2>
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={handlePreSeaDetails}
                  >
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
                  <CircularProgress
                    percentage={
                      Math.round(preSeaTrainigComplete?.percentage)
                        ? Math.round(preSeaTrainigComplete?.percentage)
                        : Number(offShoreDetail?.completed)
                    }
                    color={
                      offShoreDetail.color
                        ? offShoreDetail?.color
                        : preSeaTrainigComplete?.color
                    }
                  />
                </div>
              </div>

              {preOpen && (
                <PreSeaTrainigDetails
                  preSeaTrainigComplete={preSeaTrainigComplete}
                  setPreSeaTrainigComplete={setPreSeaTrainigComplete}
                  userDetail={profileDetail}
                  criminal={criminal}
                  offShoreDetail={offShoreDetail}
                />
              )}
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="w-full  lg:w-[50%] mt-4 lg:mt-0">
          <div className=" lg:h-screen overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory ">
            {/* PersonalDetails end */}

            {/* Aboutme  start*/}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                aboutMeDetail.color
                  ? aboutMeDetail.color
                  : aboutMeComplete.color
              }]`}
            >
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
                <CircularProgress
                  percentage={Math.round(
                    aboutMeComplete?.percentage
                      ? aboutMeComplete?.percentage
                      : Number(aboutMeDetail?.completed)
                  )}
                  color={
                    aboutMeDetail.color
                      ? aboutMeDetail.color
                      : aboutMeComplete.color
                  }
                />
              </div>
            </div>
            {aboutMeOpen && (
              <AboutMe
                aboutMeComplete={aboutMeComplete}
                setAboutMeComplete={setAboutMeComplete}
                userDetail={profileDetail}
                aboutDetail={aboutMeDetail}
                criminal={criminal}
                setCriminal={setCriminal}
              />
            )}
            {/* about me end */}

            {/* conatact Details start */}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                contactDetail.color
                  ? contactDetail.color
                  : contactComplete.color
              }] mt-3`}
            >
              <h2 className="">Contact Details</h2>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={hendleContactDetails}
                >
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
                <CircularProgress
                  percentage={Math.round(
                    contactComplete?.percentage
                      ? contactComplete?.percentage
                      : Number(contactDetail?.completed)
                  )}
                  color={
                    contactDetail.color
                      ? contactDetail.color
                      : contactComplete.color
                  }
                />
                {/* <CircularProgress
                  percentage={Math.round(contactComplete?.percentage)}
                  color={contactComplete.color}
                /> */}
              </div>
            </div>

            {cDOpen && (
              <ContactDetails
                contactComplete={contactComplete}
                setContactComplete={setContactComplete}
                userDetail={profileDetail}
                contactDetail={contactDetail}
                criminal={criminal}
              />
            )}
            {/* constact details end */}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2   border-r-8 border-[${
                nextOfKinDetail.color
                  ? nextOfKinDetail.color
                  : nextOfComplete.color
              }] mt-3`}
            >
              <h1 className="">Next Of Kin Details</h1>
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
                {/* <CircularProgress
                  percentage={Math.round(nextofComplete?.percentage)}
                  color={nextofComplete?.color}
                /> */}
                <CircularProgress
                  percentage={Math.round(
                    nextOfComplete?.percentage
                      ? nextOfComplete?.percentage
                      : Number(nextOfKinDetail?.completed)
                  )}
                  color={
                    nextOfKinDetail?.color
                      ? nextOfKinDetail.color
                      : nextOfComplete.color
                  }
                />
              </div>
            </div>
            {/* {nKOpen && <NextOfKinDetails />} */}
            {nKOpen && (
              <NextOfKinDetails
                nextOfKinComplete={nextOfComplete}
                setNextOfKinComplete={setNextOfComplete}
                userDetail={profileDetail}
                nextOfKinDetail={nextOfKinDetail}
                criminal={criminal}
              />
            )}

            {/* travel documents */}
            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                travelDocumentsDetail.color
                  ? travelDocumentsDetail.color
                  : travelComplete.color
              }] mt-3`}
            >
              <h1 className="">Identity & Travel Documents</h1>
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
                <CircularProgress
                  percentage={Math.round(
                    travelComplete?.percentage
                      ? travelComplete?.percentage
                      : Number(travelDocumentsDetail?.completed)
                  )}
                  color={
                    travelDocumentsDetail.color
                      ? travelDocumentsDetail.color
                      : travelComplete.color
                  }
                />
              </div>
            </div>
            {authOpen && (
              <TravelDocuments
                travelComplete={travelComplete}
                setTravelComplete={setTravelComplete}
                userDetail={profileDetail}
                travelDocumentsDetails={travelDocumentsDetail}
                criminal={criminal}
              />
            )}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                sTCWDetail.color ? sTCWDetail.color : sTCWComplete.color
              }] mt-3`}
            >
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
                <CircularProgress
                  percentage={Math.round(
                    sTCWComplete?.percentage
                      ? sTCWComplete?.percentage
                      : Number(sTCWDetail?.completed)
                  )}
                  color={
                    sTCWDetail.color ? sTCWDetail.color : sTCWComplete.color
                  }
                />
              </div>
            </div>

            {sTCWOpen && (
              <StcwTraining
                sTCWComplete={sTCWComplete}
                setSTCWComplete={setSTCWComplete}
                userDetail={profileDetail}
                criminal={criminal}
                sTCWDetail={sTCWDetail}
              />
            )}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                additionalDetail.color
                  ? additionalDetail.color
                  : additionalComplete.color
              }] mt-3`}
            >
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
                <CircularProgress
                  percentage={Math.round(
                    additionalComplete?.percentage
                      ? additionalComplete?.percentage
                      : Number(additionalDetail?.completed)
                  )}
                  color={
                    additionalDetail.color
                      ? additionalDetail.color
                      : additionalComplete.color
                  }
                />
              </div>
            </div>

            {aCOpen && (
              <AdditionalTraining
                additionalComplete={additionalComplete}
                setAdditionalComplete={setAdditionalComplete}
                userDetail={profileDetail}
                criminal={criminal}
                additionalDetail={additionalDetail}
              />
            )}

            {/* <div className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${educationComplete?.color}] mt-3`}>
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

            {educationOpen && <Education educationComplete={educationComplete} setEducationComplete={setEducationComplete}  userDetail={profileDetail}/>} */}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                professionalDetail.color
                  ? professionalDetail.color
                  : professionalComplete.color
              }] mt-3`}
            >
              <h2 className="">Professional SKills</h2>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => setProfessionalOpen(!professionalOpen)}
                >
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
                <CircularProgress
                  percentage={Math.round(
                    professionalComplete?.percentage
                      ? professionalComplete?.percentage
                      : Number(professionalDetail?.completed)
                  )}
                  color={
                    professionalDetail.color
                      ? professionalDetail.color
                      : professionalComplete.color
                  }
                />
              </div>
            </div>

            {professionalOpen && (
              <ProfessionalSkills
                professionalComplete={professionalComplete}
                setProfessionalComplete={setProfessionalComplete}
                userDetail={profileDetail}
                criminal={criminal}
                professionalSkills={professionalDetail}
              />
            )}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                refrencesDetail.color
                  ? refrencesDetail.color
                  : refrencesComplete.color
              }] mt-3`}
            >
              <h2 className="">References</h2>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={handleReferences}
                >
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
                <CircularProgress
                  percentage={Math.round(
                    refrencesComplete?.percentage
                      ? refrencesComplete?.percentage
                      : Number(refrencesDetail?.completed)
                  )}
                  color={
                    refrencesDetail.color
                      ? refrencesDetail.color
                      : refrencesComplete.color
                  }
                />
              </div>
            </div>
            {refOpen && (
              <Refrences
                refrencesComplete={refrencesComplete}
                setRefrencesComplete={setRefrencesComplete}
                userDetail={profileDetail}
                refrencesDetail={refrencesDetail}
                criminal={criminal}
              />
            )}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                shoreJobDetail.color
                    ? shoreJobDetail?.color
                    : shorJobComplete?.color
                }] mt-3`}
            >
              <h2 className="">Shore Job</h2>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => setShorOpen(!shorOpen)}
                >
                  {shorOpen ? (
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
                    percentage={
                      Math.round(shorJobComplete?.percentage)
                        ? Math.round(shorJobComplete?.percentage)
                        : Number(shoreJobDetail?.completed)
                    }
                    color={
                      shoreJobDetail.color
                        ? shoreJobDetail?.color
                        : shorJobComplete?.color
                    }
                  />
              </div>
            </div>
            {shorOpen && (
              <ShorJob
                shorJobComplete={shorJobComplete}
                setShorJobComplete={setShorJobComplete}
                userDetail={profileDetail}
                criminal={criminal}
                shorJobDetail={shoreJobDetail}
              />
            )}

            <div
              className={`flex justify-between items-center rounded-md  bg-[#D6EEEE] p-2 border-r-8 border-[${
                professionalDetail.color
                  ? professionalDetail.color
                  : professionalComplete.color
              }] mt-3`}
            >
              <h2 className="">Verification Status</h2>
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
                <CircularProgress
                  percentage={Math.round(
                    vettingServicesComplete?.percentage
                      ? vettingServicesComplete?.percentage
                      : Number(verificationDetail?.completed)
                  )}
                  color={
                    verificationDetail.color
                      ? verificationDetail.color
                      : vettingServicesComplete.color
                  }
                />
              </div>
            </div>
            {mCOpen && (
              <VettingServices
                vettingServicesComplete={vettingServicesComplete}
                setVettingServicesComplete={setVettingServicesComplete}
                userDetail={profileDetail}
                criminal={criminal}
                vettingServices={verificationDetail}
              />
            )}

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
