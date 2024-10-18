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

type KycDetailsForm = {
  anyother: any;
  selectedFileany: any | null;
};

type KycDetailsComplete = {
  percentage: number;
  color: string;
};

type Props = {
  KycDetailsComplete: KycDetailsComplete; // mjrComplete is an object with percentage and color
  setKycDetailsComplete: React.Dispatch<
    React.SetStateAction<KycDetailsComplete>
  >;
  userDetail: any;
  sTCWDetail: any;
  criminal: any;
};

const KycDetails = ({
  KycDetailsComplete,
  setKycDetailsComplete,
  userDetail,
  criminal,
  sTCWDetail,
}: Props) => {
  const [KycDetails, setKycDetails] = useState<KycDetailsForm[]>([
    {
      anyother: "",
      selectedFileany: null,
    },
  ]);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [rplacement, setRplacement] = useState<any>("");
  const [rpName, setRpname] = useState("");
  const [anyName, setAnyname] = useState("");

  const [certi2015, setCerti2015] = useState<any>("");
  const [certi2018, setCerti2018] = useState<any>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  
  //   const [selectedFileany, setSelectedany] = useState<any>(null);

  const [sTCHTrainOption, setSTCHTrainOption] = useState<any>("");
  //   const [countryDrop, setCountryDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      //   setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 6;

  // Collect filled fields into an array
  const filledFields = [
    ...KycDetails.map((field) => [
      field.anyother,
      field.selectedFileany,
    ]).flat(),
    rplacement,
    certi2015,
    certi2018,
    rpName,
    anyName,
  ].filter(Boolean).length; // Count only filled (truthy) fields

  const percentage = (filledFields / (totalFields * KycDetails.length)) * 100;
  // let color = "";

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setKycDetailsComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setKycDetailsComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setKycDetailsComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleFileChange1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };


  const handleAddForm = () => {
    setKycDetails([
      ...KycDetails,
      {
        anyother: "",
        selectedFileany: null,
      },
    ]);
  };

  const handleRemoveForm = (index: number) => {
    const updatedForms = KycDetails.filter((_, i) => i !== index);
    setKycDetails(updatedForms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data: any = {
        id: userDetail?.userId,
        color: color,
        completed: percentage,
      };
      const stcwArray: any = [];

      KycDetails.forEach((element: any) => {
        stcwArray.push({
          //   documentUrl: element?.selectedFile,
          //   trainingName: element?.training,
          //   issuingCountry: element?.trainingCountry,
          //   certificateNumber: element?.number,
          //   issueDate: element?.issuedate,
          //   expiryDate: element?.exdate,
        });
      });
      data.KycDetailsDetails = stcwArray;

      // let finArry: any = [];
      // finArry.push(data);
      // console.log("fin", finArry);

      AddStcwData(data, AddStcwDataCB);
    }
  };

  const AddStcwDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Kyc Detail submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Kyc Detail not submited ");
    }
  };

  // add plus and minus symbole

  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...KycDetails];
      updatedForms[index].selectedFileany = byteArray;
      setKycDetails(updatedForms);
    };
    reader.readAsDataURL(file);

  };

  const handleFormChange = (
    index: number,
    field: keyof KycDetailsForm,
    value: any
  ) => {
    const updatedForms = [...KycDetails];
    updatedForms[index][field] = value;
    setKycDetails(updatedForms);
  };

  // const handleExtraFieldChange = (
  //   index: number,
  //   value: string,
  //   field: "field1" | "field2"
  // ) => {
  //   const updatedFields = [...extraFields];
  //   updatedFields[index][field] = value;
  //   setExtraFields(updatedFields);
  // };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center ">
            {/* <h1 className="text-left font-bold">STCW Training</h1> */}
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-4">
              {/* Recruitment & Placement License */}
              <div>
                <label className="text-[16px] font-bold leading-[19.07px] text-[#333333]">
                  Recruitment & Placement License
                </label>
              </div>
              <div className="">
                {/* Conditionally render the attachment section if "Yes" is selected */}
                {isHideShow && (
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-6 items-center">
                      <label
                        htmlFor={`file-upload_`}
                        className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]"
                      >
                        Attachment
                      </label>
                      <input
                        id={`file-upload_`}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange1}
                        disabled={disabled}
                      />
                      <div>
                        {selectedFile ? (
                          <p className=" text-gray-700">
                            File Selected: {selectedFile.name}
                          </p>
                        ) : (
                          <p className="text-[14px] leading-[19.07px] text-[#333333]">
                            No File Selected
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Show selected file name or "No File Selected" */}
                  </div>
                )}
              </div>
            </div>

            {/* Any other Relevant Certificate (Mulitple +) */}
            <div className="flex justify-between items-center mt-3">
              <h1 className="font-bold">Director Details</h1>
              {isHideShow && (
                <div className="flex gap-2 w-15 justify-end h-6">
                  <AiOutlinePlus
                    className="text-2xl cursor-pointer"
                    onClick={handleAddForm}
                  />
                  {KycDetails.length > 1 && (
                    <AiOutlineMinus
                      className="text-2xl cursor-pointer"
                      onClick={() => handleRemoveForm(KycDetails.length - 1)}
                    />
                  )}
                </div>
              )}
            </div>
            {KycDetails.map((field, index) => (
              <div key={index}>
                {/* Your dynamic fields here */}
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="">
                    <label className="text-[14px] leading-[19.07px] text-[#333333]">
                      Pan Card Number / taxation ID
                    </label>

                    <input
                      type="text"
                      id="pancard"
                      className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.anyother}
                      onChange={(e) =>
                        handleFormChange(index, "anyother", e.target.value)
                      }
                      placeholder="Enter Pan Card Number"
                      disabled={disabled}
                    />

                    {/* Conditionally render the attachment section if "Yes" is selected */}
                    <div className=" ">
                      {isHideShow && (
                        <div className="grid grid-cols-1">
                          <div className="flex gap-6 items-center mt-2">
                            <label
                              htmlFor={`file-uploadany${index}`}
                              className="cursor-pointer  bg-[#00A264] text-[14px] leading-[19.07px]   text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                            >
                              Attachment
                            </label>
                            <input
                              id={`file-uploadany${index}`}
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileChange(index, e)}
                              disabled={disabled}
                            />
                            <div>
                              {field.selectedFileany ? (
                                <p className="  leading-[19.07px]  text-[#333333]">
                                  File Selected: {field.selectedFileany.name}
                                </p>
                              ) : (
                                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                                  No File Selected
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="">
                    <label className="text-[14px] leading-[19.07px] text-[#333333]">
                      Unique Identification Number
                    </label>

                    <input
                      type="text"
                      id="pancard"
                      className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.anyother}
                      onChange={(e) =>
                        handleFormChange(index, "anyother", e.target.value)
                      }
                      placeholder="Enter Unique Identification Number"
                      disabled={disabled}
                    />
                  </div>
                </div>

                <div className=" mt-3">
                  <label className="text-[14px] leading-[19.07px] text-[#333333]">
                    Is there any history of defaults on crew wages by the
                    company or its Director?
                  </label>

                  <select
                    className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={certi2015}
                    onChange={(e) => setCerti2015(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mb-4 mt-4">
            <button
              type="submit"
              className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
            >
              Save
            </button>
            <Link
              href={"#"}
              className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
              onClick={handleEdit}
            >
              Edit
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KycDetails;
function setSelectedFile(file: any) {
  throw new Error("Function not implemented.");
}
