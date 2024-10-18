"use client";
import {
  AddEcdisData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import moment from "moment";
import Link from "next/link";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
type ECDISComplete = {
  percentage: number;
  color: string;
};

// type Props = {
//   criminal: boolean; // Receive the criminal state from the parent
// };
type Props = {
  eCDISComplete: ECDISComplete;
  setECDISComplete: React.Dispatch<React.SetStateAction<ECDISComplete>>;
  userDetail: any;
  ecdisDetail: any;
  criminal:any; 
};

const Ecdis = ({
  eCDISComplete,
  setECDISComplete,
  userDetail,
  ecdisDetail,
  criminal 
}: Props) => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [issuingCountry, setIssuingCountry] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [trainings, setTrainings] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [checkBox1, setCheckBox1] = useState<any>(false);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [trainDrop, setTrainDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);

  const [showFields, setShowFields] = useState(true);
  const [color, setColor] = useState("");
  const [isHideShow, setIsHideShow] = useState(false);

  useEffect(() => {
    console.log("userDetail", userDetail);
    if (ecdisDetail) {
      setTrainings(ecdisDetail?.trainingName);
      setTrainingCenter(ecdisDetail?.trainingCenter);
      setIssuingCountry(ecdisDetail?.issuingCountry);
      setECDISNumber(ecdisDetail?.certificateNumber);
      setIssueDate1(moment(ecdisDetail?.issueDate).format("YYYY-MM-DD"));
      setExDate1(moment(ecdisDetail?.expiryDate).format("YYYY-MM-DD"));
    }
  }, []);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("ecdisEquipment", (res: any) => {
      // console.log('County',res?.data)
      setTrainDrop(res?.data?.values);
    });
  }, []);

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 7;
  const filledFields = [
    trainings,
    trainingCenter,
    issuingCountry,
    issuedate1,
    exdate1 || checkBox1,
    selectedFiles,
    eCDISNumber,
  ].filter(Boolean).length;

  // const totalFields = checkBox1=== "false" ? 7 : 6;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setECDISComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setECDISComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setECDISComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFiles(byteArray);
      };

      reader.readAsDataURL(file);
    }
    // const file = event.target.files?.[0];
    // if (file) {
    //   setSelectedFiles(file);
    // }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {
   

    // try {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", userDetail?.userId);
    formData.append("trainingName", trainings);
    formData.append("trainingCenter", trainingCenter);
    formData.append("issuingCountry", issuingCountry);
    formData.append("certificateNumber", eCDISNumber);
    formData.append("issueDate", issuedate1);
    formData.append("expiryDate", exdate1);
    formData.append("neverExpires", checkBox1);
    formData.append("color", color);
    formData.append("completed", percentage);

    selectedFiles && formData.append("documentUrl", selectedFiles);
 

    AddEcdisData(formData, AddEcdisdataDB);
  }
  };

  const AddEcdisdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("ECDIS submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("ECDIS  detail not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  const handleValidationChange = (setValue: any) => (e: any) => {
    const value = e.target.value;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, ""); 
    const capitalizedValue =
      alphabeticValue.charAt(0).toUpperCase() + alphabeticValue.slice(1); 
    setValue(capitalizedValue);
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <h1 className="text-left font-bold">ECDIS</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainings"
              >
                Training
              </label>
              <select
                id="trainings"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={trainings}
                onChange={(e) => setTrainings(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled selected>
                  SELECT
                </option>
                {trainDrop &&
                  trainDrop?.map((train: any, index: number) => (
                    <option key={index} value={train}>
                      {train?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC"
              >
                Training Center
              </label>
              <input
                id="trainingC"
                type="text"
                value={trainingCenter}
                onChange={handleValidationChange(setTrainingCenter)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Training Center"
                disabled={disabled}
              />
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="optionT"
              >
                Issuing Country
              </label>
              <select
                id="optionT"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={issuingCountry}
                onChange={(e) => setIssuingCountry(e.target.value)}
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
            {/* <div className=""> */}

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="eCDISNumber"
              >
                Enter Certificate Number
              </label>
              <input
                id="eCDISNumber"
                type="text"
                value={eCDISNumber}
                onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "");  setECDISNumber(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Certificate Number"
                disabled={disabled}
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="issue1"
              >
                Issue Date
              </label>
              <input
                id="issue1"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issuedate1}
                onChange={(e) => setIssueDate1(e.target.value)}
                disabled={disabled}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            {!checkBox1 && (
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]  "
                  htmlFor="expiryDate1"
                >
                  Expiry Date
                </label>

                <input
                  id="expiryDate1"
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={exdate1}
                  onChange={(e) => setExDate1(e.target.value)}
                  disabled={disabled}
                  placeholder="Enter Expiry Date"
                />
              </div>
            )}
            {/* <div className="flex  ">
            <input
              id="neverExpires"
              type="checkbox"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              //   value={exdate}
              //   onChange={(e) => setExDate(e.target.value)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpires"
            >
              Never Expires
            </label>
          </div> */}
            <div className="grid col-span-2">
              <div className=" flex items-center  gap-2">
                <input
                  id="neverExpires"
                  type="checkbox"
                  className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                  checked={checkBox1}
                  onChange={(e) => setCheckBox1(!checkBox1)}
                  disabled={disabled}
                />
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor="neverExpires"
                >
                  Never Expires
                </label>
              </div>
            </div>
          </div>
          {isHideShow && (
            <div className="flex gap-6 items-center  my-6 ">
              <label
                htmlFor="file-upload1"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  text-[14px] leading-[19.07px]   hover:bg-[#04714e] focus:outline-none focus:ring-2 "
              >
                Attachment Docoment
              </label>
              <input
                id="file-upload1"
                type="file"
                className="hidden"
                onChange={handleFileChanges}
                disabled={disabled}
              />
              {selectedFiles ? (
                <p className="text-gray-700">
                  File Selected: {selectedFiles.name}
                </p>
              ) : (
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  No file selected
                </p>
              )}
            </div>
          )}
        </div>

        {/* Third section */}

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

export default Ecdis;
