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

type AccredForm = {
  anyother: any;
  anyname: any;
  selectedFileany: any | null;
};

type AccredComplete = {
  percentage: number;
  color: string;
};

type Props = {
  AccredComplete: AccredComplete; // mjrComplete is an object with percentage and color
  setAccredComplete: React.Dispatch<React.SetStateAction<AccredComplete>>;
  userDetail: any;
  sTCWDetail: any;
  criminal: any;
};

const Accred = ({
  AccredComplete,
  setAccredComplete,
  userDetail,
  criminal,
  sTCWDetail,
}: Props) => {
  const [Accred, setAccred] = useState<AccredForm[]>([
    {
      anyother: "",
      anyname: "",
      selectedFileany: null,
    },
  ]);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [rplacement, setRplacement] = useState<any>("");
  const [rpName, setRpname] = useState("");

  const [certi2015, setCerti2015] = useState<any>("");
  const [certi2018, setCerti2018] = useState<any>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFile1, setSelectedFile1] = useState<any>(null);
  const [selectedFile2, setSelectedFile2] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const totalFields = 7 + Accred.length * 3;

  // Collect filled fields into an array
  const filledFields = [
    ...Accred?.flatMap((field) => [
      field.anyother,
      field.selectedFileany,
      field.anyname,
    ]),
    rplacement,
    certi2015,
    certi2018,
    rpName,
    selectedFile,
    selectedFile1,
    selectedFile2,
  ].filter(Boolean).length; // Count only filled (truthy) fields
  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setAccredComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setAccredComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setAccredComplete((prevState) => ({
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

  const handleFileChange2 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile1(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChange3 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile2(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAddForm = () => {
    setAccred([
      ...Accred,
      {
        anyname: "",
        anyother: "",
        selectedFileany: null,
      },
    ]);
  };

  const handleRemoveForm = (index: number) => {
    const updatedForms = Accred.filter((_, i) => i !== index);
    setAccred(updatedForms);
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

      Accred.forEach((element: any) => {
        stcwArray.push({
          //   documentUrl: element?.selectedFile,
          //   trainingName: element?.training,
          //   issuingCountry: element?.trainingCountry,
          //   certificateNumber: element?.number,
          //   issueDate: element?.issuedate,
          //   expiryDate: element?.exdate,
        });
      });
      data.AccredDetails = stcwArray;

      // let finArry: any = [];
      // finArry.push(data);
      // console.log("fin", finArry);

      AddStcwData(data, AddStcwDataCB);
    }
  };

  const AddStcwDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Accredations submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Accredations not submited ");
    }
  };

  // add plus and minus symbole

  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...Accred];
      updatedForms[index].selectedFileany = byteArray;
      setAccred(updatedForms);
    };
    reader.readAsDataURL(file);
   
  };

  const handleFormChange = (
    index: number,
    field: keyof AccredForm,
    value: any
  ) => {
    const updatedForms = [...Accred];
    updatedForms[index][field] = value;
    setAccred(updatedForms);
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
          <div className="flex justify-between items-center ">
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-4">
              {/* Recruitment & Placement License */}
              <div>
                <label className="text-[14px] leading-[19.07px] text-[#333333]">
                  Recruitment & Placement License
                </label>
                <select
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={rplacement}
                  onChange={(e) => setRplacement(e.target.value)}
                  disabled={disabled}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="">
                {/* Conditionally render the attachment section if "Yes" is selected */}
                {rplacement === "Yes" && isHideShow && (
                  <div className="grid grid-cols-1 gap-4">
                    <div className="   ">
                      <label
                        className="text-[14px] leading-[19.07px]  text-[#333333] "
                        htmlFor="trainingC"
                      >
                        Issuing Authority
                      </label>
                      <input
                        id="trainingC"
                        type="text"
                        value={rpName}
                        onChange={(e) => setRpname(e.target.value)}
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                        placeholder="Issuing Authority"
                        disabled={disabled}
                        required
                      />
                    </div>
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
                        required
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

            <div className="grid grid-cols-2 gap-3">
              {/* Certificate ISO 9001:2015 */}
              <div className="mt-2">
                <label className="text-[14px]  leading-[19.07px] text-[#333333]">
                  Certificate ISO 9001:2015
                </label>
                <select
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={certi2015}
                  onChange={(e) => setCerti2015(e.target.value)}
                  disabled={disabled}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                {/* Conditionally render the attachment section if "Yes" is selected */}
                {certi2015 === "Yes" && isHideShow && (
                  <div className="flex items-center justify-start gap-4 my-6">
                    <div className="flex gap-6 items-center">
                      <label
                        htmlFor={`file-upload2`}
                        className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]"
                      >
                        Attachment
                      </label>
                      <input
                        id={`file-upload2`}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange2}
                        disabled={disabled}
                        required
                      />
                    </div>
                    {/* Show selected file name or "No File Selected" */}
                    {selectedFile1 ? (
                      <p className=" text-gray-700">
                        File Selected: {selectedFile1.name}
                      </p>
                    ) : (
                      <p className="text-[14px] leading-[19.07px] text-[#333333]">
                        No File Selected
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Certificate ISO 45001:2018  */}

              <div className="mt-2">
                <label className="text-[14px] leading-[19.07px] text-[#333333]">
                  Certificate ISO 45001:2018
                </label>
                <select
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={certi2018}
                  onChange={(e) => setCerti2018(e.target.value)}
                  disabled={disabled}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                {/* Conditionally render the attachment section if "Yes" is selected */}
                {certi2018 === "Yes" && isHideShow && (
                  <div className="flex items-center justify-start gap-4 my-6">
                    <div className="flex gap-6 items-center">
                      <label
                        htmlFor={`file-upload3`}
                        className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]"
                      >
                        Attachment
                      </label>
                      <input
                        id={`file-upload3`}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange3}
                        disabled={disabled}
                        required
                      />
                    </div>
                    {/* Show selected file name or "No File Selected" */}
                    {selectedFile2 ? (
                      <p className=" text-gray-700">
                        File Selected: {selectedFile2.name}
                      </p>
                    ) : (
                      <p className="text-[14px] leading-[19.07px] text-[#333333]">
                        No File Selected
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* Any other Relevant Certificate (Mulitple +) */}
            {isHideShow && (
              <div className="flex gap-2 w-15 justify-end h-6">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={handleAddForm}
                />
                {Accred.length > 1 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={() => handleRemoveForm(Accred.length - 1)}
                  />
                )}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              {Accred.map((field, index) => (
                <div key={index}>
                  {/* Your dynamic fields here */}
                  <div className="">
                    <label className="text-[14px] leading-[19.07px] text-[#333333]">
                      Any other Relevant Certificate
                    </label>
                    <select
                      className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.anyother}
                      onChange={(e) =>
                        handleFormChange(index, "anyother", e.target.value)
                      }
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>

                    {/* Conditionally render the attachment section if "Yes" is selected */}
                    <div className=" ">
                      {field.anyother === "Yes" && isHideShow && (
                        <div className="grid grid-cols-1">
                          <div className="   ">
                            <label
                              className="text-[14px] leading-[19.07px]  text-[#333333] "
                              htmlFor="trainingC"
                            >
                              Issuing Authority
                            </label>
                            <input
                              id="trainingC"
                              type="text"
                              value={field.anyname}
                              onChange={(e) =>
                                handleFormChange(
                                  index,
                                  "anyname",
                                  e.target.value
                                )
                              }
                              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                              placeholder="Issuing Authority"
                              disabled={disabled}
                              required
                            />
                          </div>
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
                              required
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
                </div>
              ))}
            </div>
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

export default Accred;
function setSelectedFile(file: any) {
  throw new Error("Function not implemented.");
}
