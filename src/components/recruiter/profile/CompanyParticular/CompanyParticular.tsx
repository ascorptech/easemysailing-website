"use client";
import { AddProfileData, GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "../CircularProgress";

type MjrComplete = {
  percentage: number;
  color: string;
};

type Props = {
  mjrComplete: MjrComplete; // mjrComplete is an object with percentage and color
  setMjrComplete: React.Dispatch<React.SetStateAction<MjrComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail: any
};

const CompanyParticular = ({ mjrComplete, setMjrComplete, userDetail }: Props) => {
  const [rankDrop, setRankDrop] = useState<any>([])
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [alternatePosition, setAlternatePosition] = useState("");
  const [preferredVesselType, setPreferredVesselType] = useState("");
  const [alternateVesselType, setAlternateVesselType] = useState("");
  const [available, setAvailable] = useState("");
  const [disabled, setDisabled] = useState(true)



  useEffect(() => {
    if (userDetail) {
      setCurrentPosition(userDetail?.jobRequirements?.currentPosition)
      setAlternatePosition(userDetail?.jobRequirements?.alternatePosition)
      setPreferredVesselType(userDetail?.jobRequirements?.preferredVesselType)
      setAlternateVesselType(userDetail?.jobRequirements?.alternateVesselType)
      setAvailabilityDate(userDetail?.jobRequirements?.availabilityDate)
      setAvailable(!userDetail?.jobRequirements?.notAvailable ? 'No' : 'Yes')
    }
  }, [])




  const filledFields = [
    currentPosition,
    alternatePosition,
    preferredVesselType,
    alternateVesselType,
    available,
    availabilityDate,
  ].filter(Boolean).length;

  const totalFields = available === "Yes" ? 6 : 5;


  const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  // setMjrComplete({...mjrComplete,percentage:percentage})
  useEffect(() => {
    console.log('user', userDetail)
    if (percentage <= 30) {
      setMjrComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "#FF0000";
    } else if (percentage <= 70) {
      setMjrComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900";
    } else {
      setMjrComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color])

  useEffect(() => {
    GetDropdownDetails('rank', (res: any) => {
      setRankDrop(res?.data?.values)
    })
  }, [])




  const handleSubmit = (e: React.FormEvent) => {
    // try {
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
    let formData = new FormData()
    // formData.append('userId', userDetail?.userId)

    // let data = {
    //   jobRequirements: {
    //     availabilityDate: availabilityDate ? availabilityDate : '',
    //     currentPosition: currentPosition,
    //     alternatePosition: alternatePosition,
    //     preferredVesselType: preferredVesselType,
    //     alternateVesselType: alternateVesselType,
    //     notAvailable: available == 'Yes' ? 'true' : 'false',
    //   }
    // };
    formData.append('currentPosition', currentPosition)
    formData.append('alternatePosition', alternatePosition)
    formData.append('preferredVesselType', preferredVesselType)
    formData.append('alternateVesselType', alternateVesselType)
    availabilityDate&&formData.append('availabilityDate', availabilityDate)
    formData.append('notAvailable', available=='Yes'?'true':'false')
    console.log(formData);
    AddProfileData(userDetail?.userId, formData, AddaddressdataDB);
  };

  const AddaddressdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("Job requirements submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      toast.error("Job requirements not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      {/* <MyJob percentage={percentage} color="#FF9900" /> */}
      {/* <CircularProgress percentage={percentage} /> */}
      {/* <CircularProgress percentage={Math.round(percentage)} />  */}
      {/* <CircularProgress percentage={Math.round(percentage)} color={color} />  */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  gap-4">
          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Current Position/Rank
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={currentPosition}
              onChange={(e) => setCurrentPosition(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Current Position/Rank
              </option>
              {rankDrop && rankDrop?.map((rank: any, index: number) => (
                <option key={index} value={rank}>{rank}</option>
              ))}
              {/* <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option> */}
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Alternate Position/Rank
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={alternatePosition}
              onChange={(e) => setAlternatePosition(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Alternate Position/Rank
              </option>
              {rankDrop && rankDrop?.map((rank: any, index: number) => (
                <option key={index} value={rank}>{rank}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Preferred Vessel Type
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={preferredVesselType}
              onChange={(e) => setPreferredVesselType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Preferred Vessel Type
              </option>
              {rankDrop && rankDrop?.map((rank: any, index: number) => (
                <option key={index} value={rank}>{rank}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Alternate Vessel Type
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Alternate Vessel Type
              </option>
              {rankDrop && rankDrop?.map((rank: any, index: number) => (
                <option key={index} value={rank}>{rank}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Availability
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                Availability
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {available === "Yes" && (
            <div>
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Availability Date
              </label>
              <input
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={availabilityDate}
                onChange={(e) => setAvailabilityDate(e.target.value)}
                disabled={disabled}
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
            href={'#'}
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

export default CompanyParticular;
