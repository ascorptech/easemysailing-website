"use client";
import {
  AddEcdisData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
type ECDISComplete = {
  percentage: number;
  color: string;
};

type Props = {
  eCDISComplete: ECDISComplete; // mjrComplete is an object with percentage and color
  setECDISComplete: React.Dispatch<React.SetStateAction<ECDISComplete>>;
  userDetail: any;
};

const Ecdis = ({ eCDISComplete, setECDISComplete, userDetail }: Props) => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [issuingCountry, setIssuingCountry] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [trainings, setTrainings] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [checkBox1, setCheckBox1] = useState<any>(false);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [trainDrop, setTrainDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setTrainDrop(res?.data?.values);
    });
  }, []);

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 8;
  const filledFields = [
    trainings,
    trainingCenter,
    issuingCountry,
    issuedate1,
    exdate1,
    checkBox1,
    selectedFiles,
    eCDISNumber,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setECDISComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setECDISComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setECDISComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFiles(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    let formData = new FormData();
    formData.append("trainingName", trainings);
    formData.append("trainingCenter", trainingCenter);
    formData.append("issuingCountry", issuingCountry);
    formData.append("certificateNumber", eCDISNumber);
    formData.append("issueDate", issuedate1);
    formData.append("expiryDate", exdate1);
    formData.append("neverExpires", checkBox1);

    formData.append("document", selectedFiles);

    AddEcdisData(userDetail?.userId, formData, AddEcdisdataDB);
  };

  const AddEcdisdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("ECDIS submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("ECDIS  detail not submited ");
    }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <h1 className="text-left font-bold">ECDIS</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainings"
              >
                Training
              </label>
              <select
                id="trainings"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={trainings}
                onChange={(e) => setTrainings(e.target.value)}
              >
                <option value="" disabled selected>
                  Training
                </option>
                {trainDrop &&
                  trainDrop?.map((train: any, index: number) => (
                    <option key={index} value={train}>
                      {train?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC"
              >
                Training Center
              </label>
              <input
                id="trainingC"
                type="text"
                value={trainingCenter}
                onChange={(e) => setTrainingCenter(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder=""
                required
              />
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="optionT"
              >
                Issuing Country
              </label>
              <select
                id="optionT"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={issuingCountry}
                onChange={(e) => setIssuingCountry(e.target.value)}
              >
                <option value="" disabled selected>
                  Issuing Country
                </option>
                {countryDrop &&
                  countryDrop?.map((country: any, index: number) => (
                    <option key={index} value={country}>
                      {country?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
            {/* <div className=""> */}

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="eCDISNumber"
              >
                Enter Number
              </label>
              <input
                id="eCDISNumber"
                type="number"
                value={eCDISNumber}
                onChange={(e) => setECDISNumber(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Number"
                required
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="issue1"
              >
                Issue Date
              </label>
              <input
                id="issue1"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issuedate1}
                onChange={(e) => setIssueDate1(e.target.value)}
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="expiryDate1"
              >
                Expiry Date
              </label>

              <input
                id="expiryDate1"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate1}
                onChange={(e) => setExDate1(e.target.value)}
              />
            </div>
            {/* <div className="flex  ">
            <input
              id="neverExpires"
              type="checkbox"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpires"
            >
              Never Expires
            </label>
          </div> */}
            <div className=" flex items-center  gap-4">
              <input
                id="neverExpires"
                type="checkbox"
                className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={checkBox1}
                onChange={(e) => setCheckBox1(!checkBox1)}
              />
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="neverExpires"
              >
                Never Expires
              </label>
            </div>
          </div>

          <div className="flex gap-6 items-center  my-6 ">
            <label
              htmlFor="file-upload1"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
            >
              Attachment Docoment
            </label>
            <input
              id="file-upload1"
              type="file"
              className="hidden"
              onChange={handleFileChanges}
            />
            {selectedFiles ? (
              <p className="text-gray-700">
                File Selected: {selectedFiles.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                No file selected
              </p>
            )}
          </div>
        </div>

        {/* Third section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href="#"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Ecdis;
