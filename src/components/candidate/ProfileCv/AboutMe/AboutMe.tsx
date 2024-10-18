"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "../CircularProgress";
import { AddAboutMeData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import Link from "next/link";

type AboutMeComplete = {
  percentage: number;
  color: string;
};
type Props = {
  aboutMeComplete: AboutMeComplete;
  setAboutMeComplete: React.Dispatch<React.SetStateAction<AboutMeComplete>>;
  userDetail: any;
  aboutDetail: any;
  criminal: boolean; // Receive global criminal state
  setCriminal: React.Dispatch<React.SetStateAction<boolean>>; // Receive setter for global state
};

const AboutMe = ({
  aboutMeComplete,
  setAboutMeComplete,
  userDetail,
  aboutDetail,
  criminal,
  setCriminal,
}: Props) => {
  const [personality, setPersonality] = useState("");
  const [additional, setAdditional] = useState("");
  const [myFuture, setMyFuture] = useState("");

  // const [criminal, setCriminal] = useState<any>("");
  const [disabled, setDisabled] = useState(true);
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const totalFields = 4;
  const filledFields = [personality, additional, myFuture, criminal].filter(
    Boolean
  ).length;

  useEffect(() => {
    console.log("ab", aboutDetail);
    if (aboutDetail) {
      setPersonality(aboutDetail?.personalityAndProfessionalAttitude);
      setAdditional(aboutDetail?.additionalSeaServiceInfo);
      setMyFuture(aboutDetail?.futureAimsAndExpectations);
    }
  }, []);

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  // const percentage = (filledFields / totalFields) * 100;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setAboutMeComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setAboutMeComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setAboutMeComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("test", criminal);
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data = {
        id: userDetail?.userId,
        personalityAndProfessionalAttitude: personality,
        additionalSeaServiceInfo: additional,
        futureAimsAndExpectations: myFuture,
        employmentDeclaration: criminal,
        color: color,
        completed: percentage,
      };

      AddAboutMeData(data, AddAboutMeDataCB);
    }
  };

  const AddAboutMeDataCB = (result: any) => {
    console.log("res", result);
    if (result?.status == 200 || result?.status == 201) {
      console.log(result);
      toast.success("About me submited successfully");
      setDisabled(!disabled);
      setIsEditing((prev) => !prev);
    } else {
      console.log(result);
      toast.error("About me not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  const wordCount = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  const handleInputChange = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const words = wordCount(value);
    if (words <= 250) {
      setValue(value);
    } else {
      const trimmedWords = value.split(/\s+/).slice(0, 250).join(" ");
      setValue(trimmedWords);
    }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* next of About me */}

        <div>
          <div className="flex flex-col gap-4 ">
            <h1 className=" font-semibold mb-2">About Me</h1>

            <div className="flex flex-col gap-4">
              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="personality"
                >
                  My Personality And Professional Attitude
                </label>

                <input
                  id="personality"
                  type="text"
                  value={personality}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setPersonality)
                  }
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder=" My Personality And Professional Attitude"
                  disabled={disabled}
                />
              </div>
              <div className="">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="additional"
                >
                  Additional Information About My Past Sea Service
                </label>
                <input
                  id="additional"
                  type="text"
                  value={additional}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setAdditional)
                  }
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="  Additional Information About My Past Sea Service"
                  disabled={disabled}
                />
              </div>
              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="future"
                >
                  My Future Aims And Expectations
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="future"
                    type="text"
                    value={myFuture}
                    onChange={(e) =>
                      handleInputChange(e.target.value, setMyFuture)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="  My Future Aims And Expectations"
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="action"
                >
                  Criminal Action.
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="action"
                    type="text"
                    value={criminal}
                    onChange={(e) => setCriminal(e.target.value.slice(0, 25))} // Limit to 25 characters
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Yes/No"
                    disabled={disabled}
                  />
                </div>
              </div> */}

              <div className="flex gap-2 ">
                <div className="  ">
                  <input
                    id="action"
                    type="checkbox"
                    // value={criminal}
                    checked={criminal}
                    onChange={(e) => {
                      setCriminal(e.target.checked);
                    }}
                    className="border rounded-md w-full   px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    // placeholder="Yes/No"
                    disabled={disabled}
                  />
                </div>
                <div>
                  <label
                    className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                    htmlFor="action"
                  >
                    I declare that I was never dismissed by any of my former
                    employers because of drug or alcohol abuse, discrimination,
                    sexual abuse or any criminal action.
                  </label>
                </div>
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
      </form>
    </div>
  );
};
export default AboutMe;
