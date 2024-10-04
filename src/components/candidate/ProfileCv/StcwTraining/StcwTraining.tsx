"use client";
import {
  AddStcwData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React from "react";

type STCWComplete = {
  percentage: number;
  color: string;
};

type Props = {
  sTCWComplete: STCWComplete; // mjrComplete is an object with percentage and color
  setSTCWComplete: React.Dispatch<React.SetStateAction<STCWComplete>>;
  userDetail: any;
};

const StcwTraining = ({ sTCWComplete, setSTCWComplete, userDetail }: Props) => {
  const [extraFields, setExtraFields] = useState<
    { field1: string; field2: string }[]
  >([]);
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const [trainingCountry, setTrainingCountry] = useState("");
  const [training, setTraining] = useState("");
  const [neverExpires, setNeverExpires] = useState(false);
  const [sTCHTrainOption, setSTCHTrainOption] = useState<any>("");
  const [countryDrop, setCountryDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 6 + extraFields.length * 2;
  const filledFields = [
    number,
    issuedate,
    exdate || neverExpires ,
    selectedFile,
    trainingCountry,
    training,
   ,
    ...extraFields.flatMap((field) => [field.field1, field.field2]),
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setSTCWComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
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

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

    let formData = new FormData();
    formData.append("document", selectedFile);
    formData.append("trainingName", training);
    formData.append("issuingCountry", trainingCountry);
    formData.append("certificateNumber", number);
    formData.append("issueDate", issuedate);
    formData.append("expiryDate", exdate);

    AddStcwData(userDetail?.userId, neverExpires, formData, AddStcwDataCB);
  };

  const AddStcwDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("STCW Training submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("STCW Training not submited ");
    }
  };

  // add plus and minus symbole

  const addFieldPair = () => {
    setExtraFields([...extraFields, { field1: "", field2: "" }]);
  };

  const removeFieldPair = () => {
    if (extraFields.length > 0) {
      setExtraFields(extraFields.slice(0, -1));
    }
  };

  const handleExtraFieldChange = (
    index: number,
    value: string,
    field: "field1" | "field2"
  ) => {
    const updatedFields = [...extraFields];
    updatedFields[index][field] = value;
    setExtraFields(updatedFields);
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center my-2">
            {" "}
            <h1 className="text-left font-bold">STCW Training</h1>
            <div className="flex gap-2">
              <AiOutlinePlus
                className="text-2xl cursor-pointer"
                onClick={addFieldPair}
              />
              {extraFields.length > 0 && (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={removeFieldPair}
                />
              )}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="option"
                >
                  Training
                </label>
                <select
                  id="option"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  name="options"
                  value={training}
                  onChange={(e) => setTraining(e.target.value)}
                >
                  <option value="" disabled selected>
                    Training
                  </option>
                  {sTCHTrainOption &&
                    sTCHTrainOption?.map((stch: any, index: number) => (
                      <option key={index} value={stch}>
                        {stch?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>
              <div className=" ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="trainingcou"
                >
                  Issuing Country
                </label>
                <select
                  id="trainingcou"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  name="options"
                  value={trainingCountry}
                  onChange={(e) => setTrainingCountry(e.target.value)}
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

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="number12"
                >
                  Number
                </label>
                <input
                  id="number12"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder=""
                  required
                />
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor="issuedate12"
                >
                  Issue Date
                </label>
                <input
                  id="issuedate12"
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={issuedate}
                  onChange={(e) => setIssueDate(e.target.value)}
                />
              </div>

             {!neverExpires && ( <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]  "
                  htmlFor="expiryDate12"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate12"
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={exdate}
                  onChange={(e) => setExDate(e.target.value)}
                />
              </div>
              )}

              <div className=" flex items-center gap-2 mt-5 ">
                <input
                  id="neverExpires"
                  type="checkbox"
                  className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                  checked={neverExpires}
                  onChange={(e) => setNeverExpires(!neverExpires)}
                />
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor="neverExpires"
                >
                  Never Expires
                </label>
              </div>
              {/* add extra field */}

              {/* {extraFields.map((field, index) => (
                <React.Fragment key={index}>
                  <div className="w-full">
                    <label
                      className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                      htmlFor={`extraField1_${index}`}
                    >
                      Extra Field {index * 2 + 1}
                    </label>
                    <input
                      id={`extraField1_${index}`}
                      type="text"
                      value={field.field1}
                      onChange={(e) =>
                        handleExtraFieldChange(index, e.target.value, "field1")
                      }
                      className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                      // disabled={disabled}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                      htmlFor={`extraField2_${index}`}
                    >
                      Extra Field {index * 2 + 2}
                    </label>
                    <input
                      id={`extraField2_${index}`}
                      type="text"
                      value={field.field2}
                      onChange={(e) =>
                        handleExtraFieldChange(index, e.target.value, "field2")
                      }
                      className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                      // disabled={disabled}
                    />
                  </div>
                </React.Fragment>
              ))} */}
            </div>

            <div className="flex items-center justify-start gap-4 my-6">
              <div className="flex gap-6 items-center  ">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                >
                  Attachment Document
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {/* {selectedFile && (
          <p className="mt-4 text-gray-700">
            File Selected: {selectedFile.name}
          </p>
        )} */}
              </div>
              {selectedFile ? (
                <p className="mt-4 text-gray-700">
                  File Selected: {selectedFile.name}
                </p>
              ) : (
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  No file selected
                </p>
              )}
            </div>

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
          </div>
        </div>
      </form>
    </div>
  );
};

export default StcwTraining;
