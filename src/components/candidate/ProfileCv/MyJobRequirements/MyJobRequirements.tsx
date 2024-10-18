"use client";
import {
  AddProfileData,
  GetDropdownDetails,
  AddMyJobData,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

type MjrComplete = {
  percentage: number;
  color: string;
};

// type mjrDelcearation = {
//   criminal:any;
// }
type Props = {
  mjrComplete: MjrComplete;
  setMjrComplete: React.Dispatch<React.SetStateAction<MjrComplete>>;
  userDetail: any;
  jobDetail: any;
  criminal: any;
};

const MyJobRequirements = ({
  mjrComplete,
  setMjrComplete,
  userDetail,
  jobDetail,
  criminal,
}: // mjrDelcearation,
Props) => {
  const [rankDrop, setRankDrop] = useState<any>([]);
  const [shipTypeDrop, setShipTypeDrop] = useState<any>([]);
  const [shipTypeDrop1, setShipTypeDrop1] = useState<any>([]);

  const [availabilityDate, setAvailabilityDate] = useState("");
  const [primaryRank, setPrimaryRank] = useState("");

  const [currentPosition, setCurrentPosition] = useState("");
  const [alternatePosition, setAlternatePosition] = useState("");
  const [preferredVesselType, setPreferredVesselType] = useState("");
  const [alternateVesselType, setAlternateVesselType] = useState("");
  const [available, setAvailable] = useState("");
  const [salaryField, setSalaryField] = useState("");
  const [contractDuration, setContractDuration] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [color, setColor] = useState("");
  const [multipleSelection, setMultipleSelection] = useState<any>([]);
  // const [criminal, setCriminal] = useState<any>("");

  useEffect(() => {
    if (jobDetail) {
      setCurrentPosition(jobDetail?.currentPosition);
      setPrimaryRank(jobDetail?.primaryRankChoice);
      setAlternatePosition(jobDetail?.alternatePosition);
      setPreferredVesselType(jobDetail?.preferredVesselType);
      setAlternateVesselType(jobDetail?.alternateVesselType);
      setAvailabilityDate(
        moment(jobDetail?.availabilityDate).format("YYYY-MM-DD")
      );
      setAvailable(!jobDetail?.notAvailable ? "No" : "Yes");
      setSalaryField(jobDetail.expectedSalary);
      setContractDuration(jobDetail.contractDuration);
    }
  }, []);

  const totalFields = 7;
  const filledFields = [
    currentPosition,
    alternatePosition,
    preferredVesselType,
    alternateVesselType,
    salaryField,
    availabilityDate,
    contractDuration,
  ].filter(Boolean).length;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  // setMjrComplete({...mjrComplete,percentage:percentage})
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setMjrComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setMjrComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setMjrComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  useEffect(() => {
    GetDropdownDetails("rank", (res: any) => {
      setRankDrop(res?.data?.values);
    });
    GetDropdownDetails("shipType", (res: any) => {
      setShipTypeDrop(res?.data?.values);
      let tempArray = res?.data?.values.map((element: any) => ({
        label: element?.toUpperCase(),
        value: element,
      }));
      setShipTypeDrop1(tempArray);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      if (
        !currentPosition ||
        !alternatePosition ||
        !preferredVesselType ||
        !alternateVesselType ||
        !available ||
        !salaryField ||
        !contractDuration
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }

      let data: any = {
        id: userDetail?.userId,
        currentPosition: currentPosition,
        alternatePosition: alternatePosition,
        primaryRankChoice: primaryRank,
        preferredVesselType: preferredVesselType,
        alternateVesselType: alternateVesselType,
        notAvailable: available == "yes" ? "true" : "false",
        color: color,
        completed: percentage,
        expectedSalary: salaryField,
        contractDuration: contractDuration,
      };
      if (availabilityDate) {
        data.availabilityDate = availabilityDate ? availabilityDate : "";
      }

      AddMyJobData(data, AddmyJobdataDB);
    }
  };

  const AddmyJobdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      console.log(result);
      toast.success("Job requirements submited successfully");
      setDisabled(!disabled);
      setIsEditing((prev) => !prev);
      setDisabled(!disabled);
      setIsEditing((prev) => !prev);
    } else {
      console.log(result);
      toast.error("Job requirements not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsEditing((prev) => !prev);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  // useEffect(() => {
  //   GetDropdownDetails("shorejobinterest", (res: any) => {
  //     // console.log('County',res?.data)

  //     let tempArray = res?.data?.values.map((element: any) => ({
  //       label: element?.toUpperCase(),
  //       value: element,
  //     }));
  //     setAlternate(tempArray);
  //   });
  // }, []);

  const [alternate, setAlternate] = useState<any>([
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
  const handleMultiSelectChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 4) {
      setAlternateVesselType(selectedOptions);
    }
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 -z-30">
      <h2 className="font-bold my-3"> My Job Requirements</h2>
      {/* <MyJob percentage={percentage} color="#FF9900" /> */}
      {/* <CircularProgress percentage={percentage} /> */}
      {/* <CircularProgress percentage={Math.round(percentage)} />  */}
      {/* <CircularProgress percentage={Math.round(percentage)} color={color} />  */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  gap-4">
          <div>
            <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Current Position/Rank
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={currentPosition}
              onChange={(e) => {
                setCurrentPosition(e.target.value);
                setPrimaryRank(e.target.value);
              }}
              disabled={disabled}
              required
            >
              <option value="" disabled>
                SELECT
              </option>
              {rankDrop &&
                rankDrop?.map((rank: any, index: number) => (
                  <option key={index} value={rank}>
                    {rank?.toUpperCase()}
                  </option>
                ))}
              {/* <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option> */}
            </select>
          </div>
          {/* {currentPosition && (
            <div>
              <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Primary Rank Choice
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={currentPosition}
                onChange={(e) => setCurrentPosition(e.target.value)}
                disabled
              >
                <option value="" disabled>
                  Select
                </option>
                {rankDrop &&
                  rankDrop?.map((rank: any, index: number) => (
                    <option key={index} value={rank}>
                      {rank?.toUpperCase()}
                    </option>
                  ))}
                
              </select>
            </div>
          )} */}

          <div>
            <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Primary Rank Choice
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={primaryRank}
              onChange={(e) => setPrimaryRank(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                SELECT
              </option>
              {rankDrop &&
                rankDrop?.map((rank: any, index: number) => (
                  <option key={index} value={rank}>
                    {rank?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Alternate Position/Rank
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={alternatePosition}
              onChange={(e) => setAlternatePosition(e.target.value)}
              disabled={disabled}
              required
            >
              <option value="" disabled>
                SELECT
              </option>
              {rankDrop &&
                rankDrop?.map((rank: any, index: number) => (
                  <option key={index} value={rank}>
                    {rank?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="preferredVesselType"
            >
              Preferred Vessel Type
            </label>
            <select
              id="preferredVesselType"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={preferredVesselType}
              onChange={(e) => setPreferredVesselType(e.target.value)}
              disabled={disabled}
              required
            >
              <option value="" disabled>
                SELECT
              </option>
              {shipTypeDrop &&
                shipTypeDrop?.map((ship: any, index: number) => (
                  <option key={index} value={ship}>
                    {ship?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          {/* <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="alternateVesselType"
            >
              Alternate Vessel Type
            </label>
            <select
              id="alternateVesselType"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                SELECT
              </option>
              {shipTypeDrop &&
                shipTypeDrop?.map((ship: any, index: number) => (
                  <option key={index} value={ship}>
                    {ship?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div> */}

          <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="alternateVesselType"
            >
              Alternate Vessel Type
            </label>
            <Select
              id="alternateVesselType"
              isMulti
              options={shipTypeDrop1}
              value={alternateVesselType}
              onChange={handleMultiSelectChange}
              isDisabled={disabled}
              closeMenuOnSelect={false}
              placeholder="SELECT"
            />
          </div>

          {/* <div>
            <label className="text-[14px] leading-[19.07px]  text-[#333333]">
              Availability
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={available}
              // onChange={(e) => setAvailable(e.target.value)}
              onChange={(e) => {
                setAvailable(e.target.value);
                if (e.target.value === "No") {
                  setAvailabilityDate(""); // Clear availability date if "No" is selected
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
          </div> */}
          {/* {available === "Yes" && ( */}
          <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="availabilityDate"
            >
              Availability Date
            </label>
            <input
              id="availabilityDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
              disabled={disabled}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="salaryField"
            >
              Expected Salary (in USD/Month)
            </label>
           
            <input
              id="salaryField"
              type="text"
              value={salaryField}
              onChange={(e) => {
                const inputValue = e.target.value.replace(/[^0-9 ]/g, "");
                if (!isNaN(Number(inputValue)) && Number(inputValue) >= 0) {
                  if (/^\d*$/.test(inputValue)) {

                    if (inputValue.length <= 6) {
                      setSalaryField(inputValue);
                    } else {
                      toast.error("Salary cannot be more than 6 digits");
                    }
                  } else {
                    toast.error("Please enter a valid positive number");
                  }
                }
              }}
              onBlur={(e) => {
                if (e.target.value.length > 6) {
                  toast.error("Salary can not be more than 6 digits");
                }
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Expected Salary"
              disabled={disabled}
              required
            />
          </div> */}
          <div>
            <label
              className="text-[14px] leading-[19.07px] text-[#333333]"
              htmlFor="salaryField"
            >
              Expected Salary (in USD/Month)
            </label>

            <input
              id="salaryField"
              type="text"
              value={salaryField}
              onChange={(e) => {
                const inputValue = e.target.value.replace(/[^0-9]/g, "");

                if (
                  inputValue === "" ||
                  (!/^0\d+$/.test(inputValue) && inputValue.length <= 6)
                ) {
                  setSalaryField(inputValue);
                } else if (inputValue.length < 2) {
                  toast.error("Salary cannot be less than 2 digits");
                }
                else if (inputValue.length > 6) {
                  toast.error("Salary cannot be more than 6 digits");
                }
              }}
              onBlur={(e) => {
                if (e.target.value.length > 6) {
                  toast.error("Salary cannot be more than 6 digits");
                }
              }}
              className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Expected Salary"
              disabled={disabled}
              required
            />
          </div>

          {/* <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="contractDuration"
            >
              Contract Duration (in Months)
            </label>
            <input
              id="contractDuration"
              type="number"
              value={contractDuration}
              onChange={(e) => setContractDuration(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Contract Duration"
              disabled={disabled}
              required
            />
          </div> */}
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="contractDuration"
            >
              Contract Duration (in Months)
            </label>
            <select
              id="contractDuration"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={contractDuration}
              onChange={(e) => setContractDuration(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
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
      </form>
    </div>
  );
};

export default MyJobRequirements;
