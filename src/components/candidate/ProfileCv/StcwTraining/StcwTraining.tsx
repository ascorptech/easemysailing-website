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
import moment from "moment";

type StcwTrainingForm = {
  number: any;
  issuedate: string;
  exdate: string;
  issuingCountry: string;
  training: string;
  neverExpires: any;
  selectedFile: any | null;
};

type STCWComplete = {
  percentage: number;
  color: string;
};

type Props = {
  sTCWComplete: STCWComplete; // mjrComplete is an object with percentage and color
  setSTCWComplete: React.Dispatch<React.SetStateAction<STCWComplete>>;
  userDetail: any;
  sTCWDetail: any;
  criminal: any;
};

const StcwTraining = ({
  sTCWComplete,
  setSTCWComplete,
  userDetail,
  criminal,
  sTCWDetail,
}: Props) => {
  const [stcwTraining, setStcwTraining] = useState<StcwTrainingForm[]>([
    {
      number: "",
      issuedate: "",
      exdate: "",
      issuingCountry: "",
      training: "",
      neverExpires: "",
      selectedFile: null,
    },
  ]);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");

  const [sTCHTrainOption, setSTCHTrainOption] = useState<any>("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (sTCWDetail) {
      let combineLng = sTCWDetail?.stcwTrainingDetails?.length?sTCWDetail?.stcwTrainingDetails?.map((lang: any) => ({
        training: lang?.trainingName,
        number: lang?.certificateNumber,
        issuingCountry:lang?.issuingCountry,
        issuedate: moment(lang?.issueDate).format("YYYY-MM-DD"),
        exdate: moment(lang?.expiryDate).format("YYYY-MM-DD"),
        neverExpires: lang?.neverExpires,
        selectedFile: lang?.documentUrl,
      })):[
        {
          number: "",
          issuedate: "",
          exdate: "",
          issuingCountry: "",
          training: "",
          neverExpires: "",
          selectedFile: null,
        },
      ];
      setStcwTraining(combineLng)

  }
}, [sTCWDetail]);

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 6;
  const filledFields = stcwTraining.reduce(
    (acc, form) =>
      acc +
      [
        form.number,
        form.issuedate,
        form.exdate || form.neverExpires,
        form.issuingCountry,
        form.training,
        form.selectedFile,
      ].filter(Boolean).length,
    0
  );

  const percentage = (filledFields / (totalFields * stcwTraining.length)) * 100;
  // let color = "";

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setSTCWComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#FF0000", 
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setSTCWComplete((prevState) => ({
        ...prevState, 
        percentage: percentage,
        color: "#FF9900", 
      }));
      setColor("#FF9900");
    } else {
      setSTCWComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#00A264", 
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  

  const handleAddForm = () => {
    setStcwTraining([
      ...stcwTraining,
      {
        number: "",
        exdate: "",
        issuedate: "",
        issuingCountry: "",
        neverExpires: "",
        training: "",
        selectedFile: null,
      },
    ]);
  };

  const handleRemoveForm = (index: number) => {
    const updatedForms = stcwTraining.filter((_, i) => i !== index);
    setStcwTraining(updatedForms);
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

      stcwTraining.forEach((element: any) => {
        stcwArray.push({
          documentUrl: element?.selectedFile,
          trainingName: element?.training,
          issuingCountry: element?.issuingCountry,
          certificateNumber: element?.number,
          issueDate: element?.issuedate,
          expiryDate: element?.exdate,
        });
      });
      data.stcwTrainingDetails = stcwArray;

      

      AddStcwData(data, AddStcwDataCB);
    }
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

  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...stcwTraining];
      updatedForms[index].selectedFile = byteArray;
      setStcwTraining(updatedForms);
    };
    reader.readAsDataURL(file);
    
  };

  const handleFormChange = (
    index: number,
    field: keyof StcwTrainingForm,
    value: any
  ) => {
    const updatedForms = [...stcwTraining];
    updatedForms[index][field] = value;
    setStcwTraining(updatedForms);
  };

 

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center my-2">
            <h1 className="text-left font-bold">STCW Training</h1>
            {isHideShow && (
              <div className="flex gap-2">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={handleAddForm}
                />
                {stcwTraining.length > 1 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={() => handleRemoveForm(stcwTraining.length - 1)}
                  />
                )}
              </div>
            )}
          </div>

          {stcwTraining?.map((field, index) => (
            <div key={index} className="">
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
                    value={field.training}
                    onChange={(e) =>
                      handleFormChange(index, "training", e.target.value)
                    }
                    disabled={disabled}
                  >
                    <option value="" disabled selected>
                      SELECT
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
                    value={field.issuingCountry}
                    onChange={(e) =>
                      handleFormChange(index, "issuingCountry", e.target.value)
                    }
                    disabled={disabled}
                  >
                    <option value="" disabled selected>
                      SELECT
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
                    htmlFor={`number12_${index}`}
                  >
                    Enter Certificate Number
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.number}
                    onChange={(e) =>{
                      const value = e.target.value.replace(/[^0-9. ]/g, "");
                      handleFormChange(index, "number", value)}
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    placeholder="Enter Certificate Number"
                    disabled={disabled}
                  />
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333]"
                    htmlFor={`issuedate12_${index}`}
                  >
                    Issue Date
                  </label>
                  <input
                    id={`issuedate12_${index}`}
                    type="date"
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={field.issuedate}
                    onChange={(e) =>
                      handleFormChange(index, "issuedate", e.target.value)
                    }
                    disabled={disabled}
                  />
                </div>

                {!field.neverExpires && (
                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]  "
                      htmlFor="expiryDate12"
                    >
                      Expiry Date
                    </label>
                    <input
                      id={`expiryDate12`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.exdate}
                      onChange={(e) =>
                        handleFormChange(index, "exdate", e.target.value)
                      }
                      disabled={disabled}
                    />
                  </div>
                )}

                <div className=" flex items-center gap-2 mt-5 ">
                  <input
                    id={`neverExpires_${index}`}
                    type="checkbox"
                    className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                    checked={field.neverExpires}
                    onChange={(e) =>
                      handleFormChange(index, "neverExpires", e.target.checked)
                    }
                    disabled={disabled}
                  />
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333]"
                    htmlFor={`neverExpires_${index}`}
                  >
                    Never Expires
                  </label>
                </div>
              </div>
              {isHideShow && (
                <div className="flex items-center justify-start gap-4 my-6">
                  <div className="flex gap-6 items-center  ">
                    <label
                      htmlFor={`file-upload_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-upload_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(index, e)}
                      disabled={disabled}
                    />
                    {/* {selectedFile && (
          <p className="mt-4 text-gray-700">
            File Selected: {selectedFile.name}
          </p>
        )} */}
                  </div>
                  {field.selectedFile ? (
                    <p className="mt-4 text-gray-700">
                      File Selected: {field.selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-2 mb-4 mt-4">
            <button
              type="submit"
              className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
            >
              Save
            </button>
            <Link
            href={"#"}
            onClick={handleEdit}
            className={`border p-2 rounded-lg px-8 ${
              isEditing
                ? "border-red-500 text-red-500" 
                : "border-[#00A264] text-[#00A264]"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"} {/* Conditional rendering */}
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StcwTraining;
