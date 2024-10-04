"use client";
import {
  AddProfileData,
  AddVettingData,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type VettingServicesComplete = {
  percentage: number;
  color: string;
};

type Props = {
  vettingServicesComplete: VettingServicesComplete; // mjrComplete is an object with percentage and color
  setVettingServicesComplete: React.Dispatch<
    React.SetStateAction<VettingServicesComplete>
  >;
  userDetail: any;
};

const VettingServices = ({
  vettingServicesComplete,
  setVettingServicesComplete,
  userDetail,
}: Props) => {
  // State for form fields
  const [inProgress, setInProgress] = useState(false);
  const [done, setDone] = useState(false);
  const [notApplicable, setNotApplicable] = useState(false);

  const [inProgress1, setInProgress1] = useState(false);
  const [done1, setDone1] = useState(false);
  const [notApplicable1, setNotApplicable1] = useState(false);

  const [inProgress2, setInProgress2] = useState(false);
  const [done2, setDone2] = useState(false);
  const [notApplicable2, setNotApplicable2] = useState(false);

  const [inProgress3, setInProgress3] = useState(false);
  const [done3, setDone3] = useState(false);
  const [notApplicable3, setNotApplicable3] = useState(false);

  const [inProgress4, setInProgress4] = useState(false);
  const [done4, setDone4] = useState(false);
  const [notApplicable4, setNotApplicable4] = useState(false);

  const [inProgress5, setInProgress5] = useState(false);
  const [done5, setDone5] = useState(false);
  const [notApplicable5, setNotApplicable5] = useState(false);

  const [inProgress6, setInProgress6] = useState(false);
  const [done6, setDone6] = useState(false);
  const [notApplicable6, setNotApplicable6] = useState(false);

  const [inProgress7, setInProgress7] = useState(false);
  const [done7, setDone7] = useState(false);
  const [notApplicable7, setNotApplicable7] = useState(false);

  const [inProgress8, setInProgress8] = useState(false);
  const [done8, setDone8] = useState(false);
  const [notApplicable8, setNotApplicable8] = useState(false);

  const [inProgress9, setInProgress9] = useState(false);
  const [done9, setDone9] = useState(false);
  const [notApplicable9, setNotApplicable9] = useState(false);

  const [inProgress10, setInProgress10] = useState(false);
  const [done10, setDone10] = useState(false);
  const [notApplicable10, setNotApplicable10] = useState(false);

  // Optional fields
  const [optional, setOptional] = useState(false);
  const [optional1, setOptional1] = useState(false);
  const [optional2, setOptional2] = useState(false);
  const [optional3, setOptional3] = useState(false);
  const [optional4, setOptional4] = useState(false);

  const totalFields = 11; // Adjust if necessary
  const filledFields = [
    inProgress || done || notApplicable,
    inProgress1 || done1 || notApplicable1,
    inProgress2 || done2 || notApplicable2,
    inProgress3 || done3 || notApplicable3,
    inProgress4 || done4 || notApplicable4,
    inProgress5 || done5 || notApplicable5,
    inProgress6 || done6 || notApplicable6 || optional,
    inProgress7 || done7 || notApplicable7 || optional1,
    inProgress8 || done8 || notApplicable8 || optional2,
    inProgress9 || done9 || notApplicable9 || optional3,
    inProgress10 || done10 || notApplicable10 || optional4,
  ].filter(Boolean).length; // Count filled fields

  const percentage = (filledFields / totalFields) * 100;

  useEffect(() => {
    console.log("user", userDetail);
    let color;
    if (percentage <= 30) {
      color = "#FF0000"; // Red
    } else if (percentage <= 70) {
      color = "#FF9900"; // Orange
    } else {
      color = "#00A264"; // Green
    }

    setVettingServicesComplete((prevState) => ({
      ...prevState,
      percentage: percentage,
      color: color,
    }));
  }, [percentage, setVettingServicesComplete, userDetail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let data: any = {
      id: userDetail.userId,
      certificateAssessmentStatus: inProgress || done || notApplicable,
      cocAndGmdssVerificationStatus: inProgress1,
      medicalCertificateVerificationStatus: "",
      identityCheckStatus: "IN_PROGRESS",
      englishAssessmentStatus: "IN_PROGRESS",
      seagoingExperienceCheckStatus: "IN_PROGRESS",
      stcwTrainingVerificationStatus: "IN_PROGRESS",
      additionalTrainingVerificationStatus: "IN_PROGRESS",
      flagStateCertificateVerificationStatus: "IN_PROGRESS",
      ecdisTrainingVerificationStatus: "IN_PROGRESS",
      engineSpecificTrainingVerificationStatus: "IN_PROGRESS",
    };
    AddVettingData(data, AddVettingDataCB);
  };

  const AddVettingDataCB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      console.log(result);
      toast.success("Vetting data submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      console.log(result);
      toast.error("Vetting data not submited ");
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <h1 className="mb-2">
            Assessment of Completeness and Validity of Certificates legally
            required by Rank
          </h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress"
                name="status"
                checked={inProgress}
                onChange={() => {
                  setInProgress(true);
                  setDone(false);
                  setNotApplicable(false);
                }}
              />
              <label
                htmlFor="inProgress"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                checked={done}
                onChange={() => {
                  setInProgress(false);
                  setDone(true);
                  setNotApplicable(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable"
                name="status"
                checked={notApplicable}
                onChange={() => {
                  setInProgress(false);
                  setDone(false);
                  setNotApplicable(true);
                }}
              />
              <label
                htmlFor="notApplicable"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">
            Verification of COC and GMDSS (if applicable)
          </h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress1"
                name="verificationStatus" // Group name for radio buttons
                checked={inProgress1}
                onChange={() => {
                  setInProgress1(true);
                  setDone1(false);
                  setNotApplicable1(false);
                }}
              />
              <label
                htmlFor="inProgress1"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done1"
                name="verificationStatus"
                checked={done1}
                onChange={() => {
                  setInProgress1(false);
                  setDone1(true);
                  setNotApplicable1(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done1"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable1"
                name="verificationStatus"
                checked={notApplicable1}
                onChange={() => {
                  setInProgress1(false);
                  setDone1(false);
                  setNotApplicable1(true);
                }}
              />
              <label
                htmlFor="notApplicable1"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">
            Verification of medical certificates and/or medical centers
          </h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress2"
                name="medicalVerificationStatus" // Group name for radio buttons
                checked={inProgress2}
                onChange={() => {
                  setInProgress2(true);
                  setDone2(false);
                  setNotApplicable2(false);
                }}
              />
              <label
                htmlFor="inProgress2"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done2"
                name="medicalVerificationStatus" // Group name for radio buttons
                checked={done2}
                onChange={() => {
                  setInProgress2(false);
                  setDone2(true);
                  setNotApplicable2(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done2"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable2"
                name="medicalVerificationStatus" // Group name for radio buttons
                checked={notApplicable2}
                onChange={() => {
                  setInProgress2(false);
                  setDone2(false);
                  setNotApplicable2(true);
                }}
              />
              <label
                htmlFor="notApplicable2"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">Identity check via video call</h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress3"
                name="identityCheckStatus" // Group name for radio buttons
                checked={inProgress3}
                onChange={() => {
                  setInProgress3(true);
                  setDone3(false);
                  setNotApplicable3(false);
                }}
              />
              <label
                htmlFor="inProgress3"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done3"
                name="identityCheckStatus" // Group name for radio buttons
                checked={done3}
                onChange={() => {
                  setInProgress3(false);
                  setDone3(true);
                  setNotApplicable3(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done3"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable3"
                name="identityCheckStatus" // Group name for radio buttons
                checked={notApplicable3}
                onChange={() => {
                  setInProgress3(false);
                  setDone3(false);
                  setNotApplicable3(true);
                }}
              />
              <label
                htmlFor="notApplicable3"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">English level assessment via video call</h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress4"
                name="englishAssessmentStatus" // Group name for radio buttons
                checked={inProgress4}
                onChange={() => {
                  setInProgress4(true);
                  setDone4(false);
                  setNotApplicable4(false);
                }}
              />
              <label
                htmlFor="inProgress4"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done4"
                name="englishAssessmentStatus" // Group name for radio buttons
                checked={done4}
                onChange={() => {
                  setInProgress4(false);
                  setDone4(true);
                  setNotApplicable4(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done4"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable4"
                name="englishAssessmentStatus" // Group name for radio buttons
                checked={notApplicable4}
                onChange={() => {
                  setInProgress4(false);
                  setDone4(false);
                  setNotApplicable4(true);
                }}
              />
              <label
                htmlFor="notApplicable4"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">Plausibility check of Seagoing Experience</h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress5"
                name="seagoingExperienceStatus" // Group name for radio buttons
                checked={inProgress5}
                onChange={() => {
                  setInProgress5(true);
                  setDone5(false);
                  setNotApplicable5(false);
                }}
              />
              <label
                htmlFor="inProgress5"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done5"
                name="seagoingExperienceStatus" // Group name for radio buttons
                checked={done5}
                onChange={() => {
                  setInProgress5(false);
                  setDone5(true);
                  setNotApplicable5(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done5"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable5"
                name="seagoingExperienceStatus" // Group name for radio buttons
                checked={notApplicable5}
                onChange={() => {
                  setInProgress5(false);
                  setDone5(false);
                  setNotApplicable5(true);
                }}
              />
              <label
                htmlFor="notApplicable5"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">Verification of STCW Training Certificates</h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress6"
                name="stcwTrainingStatus" // Group name for radio buttons
                checked={inProgress6}
                onChange={() => {
                  setInProgress6(true);
                  setDone6(false);
                  setNotApplicable6(false);
                  setOptional(false); // Unselect optional if inProgress is selected
                }}
              />
              <label
                htmlFor="inProgress6"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done6"
                name="stcwTrainingStatus" // Group name for radio buttons
                checked={done6}
                onChange={() => {
                  setInProgress6(false);
                  setDone6(true);
                  setNotApplicable6(false);
                  setOptional(false); // Unselect optional if done is selected
                }}
                className="ml-4"
              />
              <label
                htmlFor="done6"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable6"
                name="stcwTrainingStatus" // Group name for radio buttons
                checked={notApplicable6}
                onChange={() => {
                  setInProgress6(false);
                  setDone6(false);
                  setNotApplicable6(true);
                  setOptional(false); // Unselect optional if not applicable is selected
                }}
              />
              <label
                htmlFor="notApplicable6"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="optional6"
                name="stcwTrainingStatus" // Group name for radio buttons
                checked={optional}
                onChange={() => {
                  setInProgress6(false);
                  setDone6(false);
                  setNotApplicable6(false);
                  setOptional(true);
                }}
                className="ml-4"
              />
              <label
                htmlFor="optional6"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Optional
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2">Verification of Additional Trainings</h1>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="inProgress7"
                name="additionalTrainingStatus"
                checked={inProgress7}
                onChange={() => {
                  setInProgress7(true);
                  setDone7(false);
                  setNotApplicable7(false);
                  setOptional1(false);
                }}
              />
              <label
                htmlFor="inProgress7"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done7"
                name="additionalTrainingStatus"
                checked={done7}
                onChange={() => {
                  setInProgress7(false);
                  setDone7(true);
                  setNotApplicable7(false);
                  setOptional1(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done7"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable7"
                name="additionalTrainingStatus"
                checked={notApplicable7}
                onChange={() => {
                  setInProgress7(false);
                  setDone7(false);
                  setNotApplicable7(true);
                  setOptional1(false);
                }}
              />
              <label
                htmlFor="notApplicable7"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="optional1"
                name="additionalTrainingStatus"
                checked={optional1}
                onChange={() => {
                  setInProgress7(false);
                  setDone7(false);
                  setNotApplicable7(false);
                  setOptional1(true);
                }}
                className="ml-4"
              />
              <label
                htmlFor="optional1"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Optional
              </label>
            </div>
          </div>
        </div>

        <div className="my-5 ">
          <h1 className="mb-2 ">Verification of Flag State Certificates</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="radio"
                id="inProgress8"
                name="flagStateCertificates"
                checked={inProgress8}
                onChange={() => {
                  setInProgress8(true);
                  setDone8(false);
                  setNotApplicable8(false);
                  setOptional2(false);
                }}
              />
              <label
                htmlFor="inProgress8"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done8"
                name="flagStateCertificates"
                checked={done8}
                onChange={() => {
                  setInProgress8(false);
                  setDone8(true);
                  setNotApplicable8(false);
                  setOptional2(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done8"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable8"
                name="flagStateCertificates"
                checked={notApplicable8}
                onChange={() => {
                  setInProgress8(false);
                  setDone8(false);
                  setNotApplicable8(true);
                  setOptional2(false);
                }}
              />
              <label
                htmlFor="notApplicable8"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="optional8"
                name="flagStateCertificates"
                checked={optional2}
                onChange={() => {
                  setInProgress8(false);
                  setDone8(false);
                  setNotApplicable8(false);
                  setOptional2(true);
                }}
                className="ml-4"
              />
              <label
                htmlFor="optional8"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Optional
              </label>
            </div>
          </div>
        </div>

        <div className="my-5 ">
          <h1 className="mb-2 ">
            Verification of ECDIS type specific trainings (if applicable)
          </h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="radio"
                id="inProgress9"
                name="ecdisTrainingStatus"
                checked={inProgress9}
                onChange={() => {
                  setInProgress9(true);
                  setDone9(false);
                  setNotApplicable9(false);
                  setOptional3(false);
                }}
              />
              <label
                htmlFor="inProgress9"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done9"
                name="ecdisTrainingStatus"
                checked={done9}
                onChange={() => {
                  setInProgress9(false);
                  setDone9(true);
                  setNotApplicable9(false);
                  setOptional3(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done9"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable9"
                name="ecdisTrainingStatus"
                checked={notApplicable9}
                onChange={() => {
                  setInProgress9(false);
                  setDone9(false);
                  setNotApplicable9(true);
                  setOptional3(false);
                }}
              />
              <label
                htmlFor="notApplicable9"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="optional9"
                name="ecdisTrainingStatus"
                checked={optional3}
                onChange={() => {
                  setInProgress9(false);
                  setDone9(false);
                  setNotApplicable9(false);
                  setOptional3(true);
                }}
                className="ml-4"
              />
              <label
                htmlFor="optional9"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Optional
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="mb-2 ">
            Verification of Engine specific trainings (if applicable)
          </h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="radio"
                id="inProgress10"
                name="engineTrainingStatus"
                checked={inProgress10}
                onChange={() => {
                  setInProgress10(true);
                  setDone10(false);
                  setNotApplicable10(false);
                  setOptional4(false);
                }}
              />
              <label
                htmlFor="inProgress10"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                In Progress
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="done10"
                name="engineTrainingStatus"
                checked={done10}
                onChange={() => {
                  setInProgress10(false);
                  setDone10(true);
                  setNotApplicable10(false);
                  setOptional4(false);
                }}
                className="ml-4"
              />
              <label
                htmlFor="done10"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Done
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="notApplicable10"
                name="engineTrainingStatus"
                checked={notApplicable10}
                onChange={() => {
                  setInProgress10(false);
                  setDone10(false);
                  setNotApplicable10(true);
                  setOptional4(false);
                }}
              />
              <label
                htmlFor="notApplicable10"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Not Applicable
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="optional4"
                name="engineTrainingStatus"
                checked={optional4}
                onChange={() => {
                  setInProgress10(false);
                  setDone10(false);
                  setNotApplicable10(false);
                  setOptional4(true);
                }}
                className="ml-4"
              />
              <label
                htmlFor="optional4"
                className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Optional
              </label>
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

export default VettingServices;
