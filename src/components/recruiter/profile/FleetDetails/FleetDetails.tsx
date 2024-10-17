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

type FleetDetails = {
  number: any;
  issuedate: string;
  exdate: string;
  issuingCountry: string;
  training: string;
  neverExpires: any;
  selectedFile: any | null;
};

type FleetComplete = {
  percentage: number;
  color: string;
};

type Props = {
  FleetComplete: FleetComplete; // mjrComplete is an object with percentage and color
  setFleetComplete: React.Dispatch<React.SetStateAction<FleetComplete>>;
  userDetail: any;
  sTCWDetail: any;
  criminal: any;
};

const FleetForm = ({
  FleetComplete,
  setFleetComplete,
  userDetail,
  criminal,
  sTCWDetail,
}: Props) => {
  const [extraFields, setExtraFields] = useState<
    { field1: string; field2: string }[]
  >([]);

  const [FleetForm, setFleetForm] = useState<FleetDetails[]>([
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

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 3;
  const filledFields = FleetForm.reduce(
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

  const percentage = (filledFields / (totalFields * FleetForm.length)) * 100;
  // let color = "";

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setFleetComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setFleetComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      setColor("#FF9900");
    } else {
      setFleetComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile(file);
  //   }
  // };

  const handleAddForm = () => {
    setFleetForm([
      ...FleetForm,
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
    const updatedForms = FleetForm.filter((_, i) => i !== index);
    setFleetForm(updatedForms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      //   let formData = new FormData();
      //   FleetForm.forEach((element: any) => {
      //     formData.append("document", element?.selectedFile);
      //     formData.append("trainingName", element?.training);
      //     formData.append("issuingCountry", element?.trainingCountry);
      //     formData.append("certificateNumber", element?.number);
      //     formData.append("issueDate", element?.issuedate);
      //     formData.append("expiryDate", element?.exdate);
      //   });
      //   let neverExpires = "";

      //   AddStcwData(userDetail?.userId, neverExpires, formData, AddStcwDataCB);
      // };

      let data: any = {
        userId: userDetail?.userId,
      };
      const stcwArray: any = [];

      FleetForm.forEach((element: any) => {
        stcwArray.push({
          document: element?.selectedFile,
          trainingName: element?.training,
          issuingCountry: element?.trainingCountry,
          certificateNumber: element?.number,
          issueDate: element?.issuedate,
          expiryDate: element?.exdate,
        });
      });
      data.stcwData = stcwArray;

      let finArry: any = [];
      finArry.push(data);
      console.log("fin", finArry);

      AddStcwData(finArry, AddStcwDataCB);
    }
  };

  const AddStcwDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Fleet Details submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Fleet Details not submited ");
    }
  };

  // add plus and minus symbole

  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...FleetForm];
      updatedForms[index].selectedFile = byteArray;
      setFleetForm(updatedForms);
    };
    reader.readAsDataURL(file);
    // const updatedForms = [...FleetForm];
    // updatedForms[index].selectedFile = event.target.files?.[0] || null;
    // setFleetForm(updatedForms);
  };

  const handleFormChange = (
    index: number,
    field: keyof FleetDetails,
    value: any
  ) => {
    const updatedForms = [...FleetForm];
    updatedForms[index][field] = value;
    setFleetForm(updatedForms);
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
          <div className="flex justify-between items-center my-2">
            {/* <h1 className="text-left font-bold">STCW Training</h1> */}
            {isHideShow && (
              <div className="flex gap-2">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={handleAddForm}
                />
                {FleetForm.length > 1 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={() => handleRemoveForm(FleetForm.length - 1)}
                  />
                )}
              </div>
            )}
          </div>

          {FleetForm.map((field, index) => (
            <div key={index} className="">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Number of Ship
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
                <div className=" ">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor="trainingcou"
                  >
                    Ship Type
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
                    Crew Training Matrix
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.number}
                    onChange={(e) =>
                      handleFormChange(index, "number", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    placeholder="Enter Training Matrix"
                    disabled={disabled}
                  />
                </div>

                {/* <div className="">
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
                </div> */}

                {/* {!field.neverExpires && (
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
                )} */}

                {/* <div className=" flex items-center gap-2 mt-5 ">
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
                </div> */}
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

export default FleetForm;
