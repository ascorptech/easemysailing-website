"use client";
import {
  AddShoreJobData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

type OwnerCrewComplete = {
  percentage: number;
  color: string;
};

type OptionType = { label: string; value: string };

type Props = {
  OwnerCrewComplete: OwnerCrewComplete;
  setOwnerCrewComplete: React.Dispatch<React.SetStateAction<OwnerCrewComplete>>;
  userDetail: any;
  criminal: any;
  OwnerCrewDetail: any;
};

const OwnerCrew = ({
  OwnerCrewComplete,
  setOwnerCrewComplete,
  userDetail,
  criminal,
  OwnerCrewDetail,
}: Props) => {
  const [areYouIntrested, setAreYouIntrested] = useState("");
  const [multipleCrewSelection, setMultipleCrewSelection] = useState<any>([]); // Updated to handle react-select's option type
  const [multipleSelection, setMultipleSelection] = useState<any>([]); // Updated to handle react-select's option type
  const [disabled, setDisabled] = useState(true);
  const [color, setColor] = useState("");

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
    // { label: "Option 5", value: "5" },
    // { label: "Option 6", value: "6" },
    // { label: "Option 7", value: "7" },
    // { label: "Option 8", value: "8" },
    // { label: "Option 9", value: "9" },
    // { label: "Option 10", value: "10" },
  ]);
  //   useEffect(() => {
  //     GetDropdownDetails("shorejobinterest", (res: any) => {
  //       // console.log('County',res?.data)

  //       let tempArray = res?.data?.values.map((element: any) => ({
  //         label: element?.toUpperCase(),
  //         value: element,
  //       }));
  //     //   setCrewDrop(tempArray);
  //     });
  //   }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data = {
        id: userDetail?.userId,
        interested: areYouIntrested == "Yes" ? true : false,
        color: color,
        completed: percentage?.toString(),
        jobOption: multipleSelection,
      };
      AddShoreJobData(data, (result: any) => {
        if (result?.status == 200 || result?.status == 201) {
          toast.success("Owner Crew submited successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Owner Crew not submited ");
        }
      });
    }
  };

  const totalFields = 1;
  const filledFields = [multipleSelection].filter(Boolean).length;
  const percentage = (filledFields / totalFields) * 100;
  // let color = "";

  useEffect(() => {
    if (percentage <= 30) {
      setOwnerCrewComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setOwnerCrewComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setOwnerCrewComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage]);

  const handleEdit = () => {
    setDisabled(!disabled);
  };

  const handleMultiSelectChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setMultipleSelection(selectedOptions);
    }
  };

  const handleMultiCrewChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setMultipleCrewSelection(selectedOptions);
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        {/* <h1 className="font-bold">Shore Job</h1> */}
        <div className="grid grid-cols-2 gap-4">
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

          <div className=" ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="trainingcou"
                >
                 Trainings
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
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OwnerCrew;
