"use client";
import {
  AddStcwData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import Select from "react-select";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React from "react";



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
  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [multipleSelection, setMultipleSelection] = useState<any>([]);
  const [multipleCrewSelection, setMultipleCrewSelection] = useState<any>([]); // Updated to handle react-select's option type
  const [multipleNcrewSelection, setMultipleNcrewSelection] = useState<any>([]); // Updated to handle react-select's option type

  const [shipNumber, setShipNumber] = useState("");
  const [crewMatrix, setCrewMatrix] = useState("");

  const [sTCHTrainOption, setSTCHTrainOption] = useState<any>("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 5;
  const filledFields = [
    shipNumber,
    crewMatrix,
    multipleCrewSelection,
    multipleNcrewSelection,
    multipleNcrewSelection,
  ].filter(Boolean).length;

  // Adding 10 options for the multi-select dropdown
  const [shipType, setShipType] = useState<any>([
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
    { label: "Option 5", value: "5" },
    { label: "Option 6", value: "6" },
    { label: "Option 7", value: "7" },
    { label: "Option 8", value: "8" },
    { label: "Option 9", value: "9" },
    { label: "Option 10", value: "10" },
  ]);

  const [creWelfare, setCreWelfare] = useState<any>([
    { label: "Internet", value: "1" },
    { label: "Insurance", value: "2" },
    { label: " Rejoining Bonus", value: "3" },
    { label: "Seniority Allowance", value: "4" },
    
  ]);
  const percentage = (filledFields / (totalFields * FleetForm.length)) * 100;
  
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setFleetComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#FF0000", 
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setFleetComplete((prevState) => ({
        ...prevState, 
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setFleetComplete((prevState) => ({
        ...prevState,
        percentage: percentage, 
        color: "#00A264", 
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

 

  const handleMultiSelectChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setMultipleSelection(selectedOptions);
    }
  };

  const handleMultiNcrewChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setMultipleNcrewSelection(selectedOptions);
    }
  };

  const handleMultiCrewChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setMultipleCrewSelection(selectedOptions);
    }
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

      // FleetForm.forEach((element: any) => {
      //   stcwArray.push({
      // document: element?.selectedFile,
      // trainingName: element?.training,
      // issuingCountry: element?.trainingCountry,
      // certificateNumber: element?.number,
      // issueDate: element?.issuedate,
      // expiryDate: element?.exdate,
      //   });
      // });
      // data.stcwData = stcwArray;

      // let finArry: any = [];
      // finArry.push(data);
      // console.log("fin", finArry);

      // AddStcwData(finArry, AddStcwDataCB);
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
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_`}
                >
                  Number of Ship
                </label>
                <input
                  id={`number12_`}
                  type="text"
                  value={shipNumber}
                  onChange={(e) => setShipNumber(e.target.value)}
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
                <div>
                  <Select
                    isMulti
                    options={shipType}
                    value={multipleSelection}
                    onChange={handleMultiSelectChange}
                    isDisabled={disabled}
                    closeMenuOnSelect={false}
                  />
                </div>
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_`}
                >
                  Crew Training Matrix
                </label>
                <input
                  id={`number12_`}
                  type="text"
                  value={crewMatrix}
                  onChange={(e) => setCrewMatrix(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter Training Matrix"
                  disabled={disabled}
                />
              </div>

              <div className=" ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="trainingcou"
                >
                  Crew Nationality Preference
                </label>
                <div>
                  <Select
                    isMulti
                    options={shipType}
                    value={multipleNcrewSelection}
                    onChange={handleMultiNcrewChange}
                    isDisabled={disabled}
                    closeMenuOnSelect={false}
                  />
                </div>
              </div>

              <div className=" ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="trainingcou"
                >
                  Crew Welfare Initiative
                </label>
                <div>
                  <Select
                    isMulti
                    options={creWelfare}
                    value={multipleCrewSelection}
                    onChange={handleMultiCrewChange}
                    isDisabled={disabled}
                    closeMenuOnSelect={false}
                  />
                </div>
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

export default FleetForm;
