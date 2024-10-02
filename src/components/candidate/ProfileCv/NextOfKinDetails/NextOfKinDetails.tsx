"use client";
import React, { useEffect } from "react";
import { AddProfileData, GetDropdownDetails,AddNextOfData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";

import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

type PersonalComplete = {
  percentage: number;
  color: string;
};

type Props = {
  personalComplete: PersonalComplete; // mjrComplete is an object with percentage and color
  setPersonalComplete: React.Dispatch<React.SetStateAction<PersonalComplete>>;
  userDetail: any;
};

const NextOfKinDetails = ({
  personalComplete,
  setPersonalComplete,
  userDetail,
}: Props) => {
  const [nextKinName, setNextKinName] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [nextKinChildren, setNextKinChildren] = useState("");
  const [disabled,setDisabled] = useState(true)

  

  const totalFields = 4;
  const filledFields = [
    nextKinName,
    nextKinShip,
    nextKinAddre,
    nextKinChildren,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setPersonalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  useEffect(() => {
    if(userDetail){
      setNextKinName(userDetail.nextKinName);
      setNextKinAddre(userDetail.nextKinAddre);
      setNextKinChildren(userDetail.nextKinChildren);
      setNextKinShip(userDetail.nextKinShip)
      
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(
      
      !nextKinName ||
      !nextKinShip ||
      !nextKinAddre ||
      !nextKinChildren
    )
    {
      toast.error("Please fill in all required fields.");
      return;
    }
    let data:any = {
      id:userDetail?.userId,
      nextOfKinName:nextKinName ,
      nextOfKinRelationship: nextKinShip,
      nextOfKinAddress: nextKinAddre,
      numberOfChildren: nextKinChildren,
     
  };
  AddNextOfData(data, AddNextOfKindataDB);

  
  };
  const AddNextOfKindataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      console.log(result)
      toast.success("Next Of Kin Details submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      console.log(result)
      toast.error("Next Of Kin Details not submited ");
    }
  };
  


    // let formData= new FormData() 
    //   formData.append('nextKinName',nextKinName);
    //   formData.append('nextKinAddre', nextKinAddre);
    //   formData.append('nextKinShip', nextKinShip);
    //   formData.append('nextKinChildren',nextKinChildren);
    //   console.log(formData);
    //   AddProfileData(userDetail?.userId,formData, AddNextOfKinDetailsDB);
      // AddProfileData(data, AddNextKinDetailsDB)
  // };


  // const AddNextOfKinDetailsDB = (result: any) => {
  //   console.log(result);
  //   if (result?.status == 200) {
  //     toast.success("nextOfKin detail submited successfully");
  //     setTimeout(() => {
  //       window.location.reload()
  //     }, 1000);
  //   } else {
  //     toast.error("nextOfKin  detail not submited ");
  //   }
  // };
  // useEffect(() => {
  //   GetDropdownDetails('additionalLanguage', (res: any) => {
  //     setLanguageLevel(res?.data?.values)
  //   })
  //   GetDropdownDetails('shipType', (res: any) => {
  //     // setShipTypeDrop(res?.data?.values)
  //   })
  // }, [])

  // const AddNextKinDetailsDB = (result:any) => {
  //   console.log(result);
  //   if(result?.status == 200){
  //     toast.success("NextKin details submited")
  //   }
  // }


  const handleEdit = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* next of kin details */}

        <div className="flex flex-col ">
          <h1 className=" font-semibold mb-2">
            NEXT OF KIN DETAILS
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="NextofKinName"
              >
                Next of Kin Name
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="NextofKinName"
                type="text"
                value={nextKinName}
                onChange={(e) => setNextKinName(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
               
              />
              {/* </div> */}
            </div>
            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="nextofkineship"
              >
                Next of Kin Relation Ship
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="nextofkineship"
                type="text"
                value={nextKinShip}
                onChange={(e) => setNextKinShip(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="nextofkinaddres"
              >
                Next of Kin Address
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="nextofkinaddres"
                type="text"
                value={nextKinAddre}
                onChange={(e) => setNextKinAddre(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
              {/* </div> */}
            </div>

            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="numberofchildren"
              >
                Number of Children
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="numberofchildren"
                type="text"
                value={nextKinChildren}
                onChange={(e) => setNextKinChildren(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
              {/* </div> */}
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
export default NextOfKinDetails;
