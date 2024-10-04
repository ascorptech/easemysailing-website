"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "../CircularProgress";
import { AddAboutMeData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import { Link } from "lucide-react";

type AboutMeComplete = {
  percentage: number;
  color: string;
};
type Props={
  aboutMeComplete: AboutMeComplete; // mjrComplete is an object with percentage and color
  setAboutMeComplete: React.Dispatch<React.SetStateAction<AboutMeComplete>>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const AboutMe = ({aboutMeComplete, setAboutMeComplete, userDetail}: Props) => {
    const [personality, setPersonality] = useState("");
    const [additional, setAdditional] = useState("");
    const [myFuture, setMyFuture] = useState("");
  
    const [criminal, setCriminal] = useState("");
    const [disabled,setDisabled] = useState(true)


    const totalFields = 4;
  const filledFields = [
    personality, 
    additional,
    myFuture,
    criminal,
   
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setAboutMeComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setAboutMeComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setAboutMeComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault(); 

    let data = {
      "id": userDetail?.userId,
      "personalityAndProfessionalAttitude": personality,
      "additionalSeaServiceInfo": additional,
      "futureAimsAndExpectations": myFuture,
      "employmentDeclaration": criminal
    }

    AddAboutMeData(data,AddAboutMeDataCB)
  };

  const AddAboutMeDataCB = (result:any)=>{
    console.log('res',result)
    if (result?.status == 200||result?.status == 201) {
      console.log(result)
      toast.success("About me submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      console.log(result)
      toast.error("About me not submited ");
    }
  }

  const handleEdits = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
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
                    className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                    htmlFor="personality"
                  >
                    My Personality and professional Attitude
                  </label>
                 
                    <input
                      id="personality"
                      type="text"
                      value={personality}
                      onChange={(e) => setPersonality(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                
                </div>
                <div className="">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                    htmlFor="additional"
                  >
                    Additional Information about my past Sea Service
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="additional"
                      type="text"
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                  </div>
                </div>
                <div className=" ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                    htmlFor="future"
                  >
                    My Future Aims and Expectations
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="future"
                      type="text"
                      value={myFuture}
                      onChange={(e) => setMyFuture(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                  </div>
                </div>

                <div className=" ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                    htmlFor="action"
                  >
                    Criminal action.
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="action"
                      type="text"
                      value={criminal}
                      onChange={(e) => setCriminal(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Yes/No"
                      disabled={disabled}
                    />
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
          <button
            type="button"
            onClick={handleEdits}
           
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AboutMe;
