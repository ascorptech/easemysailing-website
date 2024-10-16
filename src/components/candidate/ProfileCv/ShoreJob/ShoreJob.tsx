"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

type ShorJobComplete = {
  percentage: number;
  color: string;
};

type OptionType = { label: string; value: string };

type Props = {
  shorJobComplete: ShorJobComplete;
  setShorJobComplete: React.Dispatch<React.SetStateAction<ShorJobComplete>>;
  userDetail: any;
  criminal:any;
  shorJobDetail:any;
};

const ShorJob = ({
  shorJobComplete,
  setShorJobComplete,
  userDetail,
  criminal,
  shorJobDetail
}: Props) => {
  const [areYouIntrested, setAreYouIntrested] = useState("");
  const [multipleSelection, setMultipleSelection] = useState<any>([]); // Updated to handle react-select's option type
  const [disabled, setDisabled] = useState(true);
  const [color, setColor] = useState("");


  // Adding 10 options for the multi-select dropdown
  const [countryDrop, setCountryDrop] = useState<any>([
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {
    }
  };

  const totalFields = 1;
  const filledFields = [areYouIntrested].filter(Boolean).length;
  const percentage = (filledFields / totalFields) * 100;
  // let color = "";

  useEffect(() => {
    if (percentage <= 30) {
      setShorJobComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setShorJobComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setShorJobComplete((prevState) => ({
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

  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold">Shore Job</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Are You Interested
            </label>
            <select
              className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={areYouIntrested}
              onChange={(e) => {
                setAreYouIntrested(e.target.value);
                if (e.target.value === "No") {
                  setMultipleSelection([]);
                }
              }}
              disabled={disabled}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {areYouIntrested === "Yes" && (
            <div className="mt-6">
              <Select
                isMulti
                options={countryDrop}
                value={multipleSelection}
                onChange={handleMultiSelectChange}
                isDisabled={disabled}
                closeMenuOnSelect={false}
              />
            </div>
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

export default ShorJob;
