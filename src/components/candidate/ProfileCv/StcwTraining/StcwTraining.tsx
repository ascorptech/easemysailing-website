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

type StcwTrainingForm = {
  number: any;
  issuedate: string;
  exdate: string;
  issuingCountry: string;
  training: string;
  neverExpires: any;
  selectedFile: File | null;
};

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


  const [disabled,setDisabled] = useState(true)

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
  let color = "";

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
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

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile(file);
  //   }
  // };

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

    let formData = new FormData();
    stcwTraining.forEach((element:any) => {
      formData.append("document", element?.selectedFile);
      formData.append("trainingName", element?.training);
      formData.append("issuingCountry", element?.trainingCountry);
      formData.append("certificateNumber", element?.number);
      formData.append("issueDate", element?.issuedate);
      formData.append("expiryDate", element?.exdate);

    })
   

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

  const handleFileChange = (index: number, event: any) => {
    const updatedForms = [...stcwTraining];
    updatedForms[index].selectedFile = event.target.files?.[0] || null;
    setStcwTraining(updatedForms);
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
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center my-2">
            <h1 className="text-left font-bold">STCW Training</h1>
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
          </div>

          {stcwTraining.map((field, index) => (
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
                      Select
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
                      Select
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
                    onChange={(e) =>
                      handleFormChange(index, "number", e.target.value)
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
                  href={'#'}
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

export default StcwTraining;
