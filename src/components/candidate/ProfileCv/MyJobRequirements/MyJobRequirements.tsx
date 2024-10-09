"use client";
import {
  AddProfileData,
  GetDropdownDetails,
  AddMyJobData,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type MjrComplete = {
  percentage: number;
  color: string;
};

type Props = {
  mjrComplete: MjrComplete; // mjrComplete is an object with percentage and color
  setMjrComplete: React.Dispatch<React.SetStateAction<MjrComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail: any;
};

const MyJobRequirements = ({
  mjrComplete,
  setMjrComplete,
  userDetail,
}: Props) => {
  const [rankDrop, setRankDrop] = useState<any>([]);
  const [shipTypeDrop, setShipTypeDrop] = useState<any>([]);
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [alternatePosition, setAlternatePosition] = useState("");
  const [preferredVesselType, setPreferredVesselType] = useState("");
  const [alternateVesselType, setAlternateVesselType] = useState("");
  const [available, setAvailable] = useState("");
  const [salaryField, setSalaryField] = useState("");
  const [contractDuration, setContractDuration] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("userDetail", userDetail);
    if (userDetail) {
      setCurrentPosition(userDetail?.jobRequirements?.currentPosition);
      setAlternatePosition(userDetail?.jobRequirements?.alternatePosition);
      setPreferredVesselType(userDetail?.jobRequirements?.preferredVesselType);
      setAlternateVesselType(userDetail?.jobRequirements?.alternateVesselType);
      setAvailabilityDate(userDetail?.jobRequirements?.availabilityDate);
      setAvailable(!userDetail?.jobRequirements?.notAvailable ? "No" : "Yes");
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

  const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  // setMjrComplete({...mjrComplete,percentage:percentage})
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setMjrComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "#FF0000";
    } else if (percentage <= 70) {
      setMjrComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setMjrComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  useEffect(() => {
    GetDropdownDetails("rank", (res: any) => {
      setRankDrop(res?.data?.values);
    });
    GetDropdownDetails("shipType", (res: any) => {
      setShipTypeDrop(res?.data?.values);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !currentPosition ||
      !alternatePosition ||
      !preferredVesselType ||
      !alternateVesselType ||
      !available
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    let data: any = {
      id: userDetail?.userId,
      currentPosition: currentPosition,
      alternatePosition: alternatePosition,
      preferredVesselType: preferredVesselType,
      alternateVesselType: alternateVesselType,
      notAvailable: available == "yes" ? "true" : "false",
    };
    if (availabilityDate) {
      data.availabilityDate = availabilityDate ? availabilityDate : "";
    }

    AddMyJobData(data, AddmyJobdataDB);
  };

  const AddmyJobdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      console.log(result);
      toast.success("Job requirements submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      console.log(result);
      toast.error("Job requirements not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
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
              onChange={(e) => setCurrentPosition(e.target.value)}
              disabled={disabled}
              required
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
              {/* <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option> */}
            </select>
          </div>
          {currentPosition && (
            <div>
              <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                Alternate Position/Rank
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
                {/* <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option> */}
              </select>
            </div>
          )}

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
                Select
              </option>
              {shipTypeDrop &&
                shipTypeDrop?.map((ship: any, index: number) => (
                  <option key={index} value={ship}>
                    {ship?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div>
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
                Select
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
              required
            />
          </div>
          {/* )} */}

          <div>
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="salaryField"
            >
              Expected Salary (in USD)
            </label>
            {/* <select
              id="salaryField"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={salaryField}
              onChange={(e) => setSalaryField(e.target.value)}
              required
              disabled={disabled}
            >
              <option value="" disabled>
                USD
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select> */}
            <input
              id="salaryField"
              type="number"
              value={salaryField}
              onChange={(e) => setSalaryField(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
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
                Select
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
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MyJobRequirements;
