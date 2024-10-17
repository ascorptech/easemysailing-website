"use client";
import React, { useEffect } from "react";
import {AddNextOfData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";

import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

type NextOfKinComplete = {
  percentage: number;
  color: string;
};

type Props = {
  nextOfKinComplete: NextOfKinComplete; // mjrComplete is an object with percentage and color
  setNextOfKinComplete: React.Dispatch<React.SetStateAction<NextOfKinComplete>>;
  userDetail: any;
  nextOfKinDetail:any;
  criminal:any;
};

const NextOfKinDetails = ({
  nextOfKinComplete,
  setNextOfKinComplete,
  userDetail,
  nextOfKinDetail,
  criminal
  
}: Props) => {
  const [nextKinName, setNextKinName] = useState("");
  const [nextKinShip, setNextKinShip] = useState("");
  const [nextKinAddre, setNextKinAddre] = useState("");
  const [nextKinChildren, setNextKinChildren] = useState("");
  const [sameAsAddress, setSameAsAddress] = useState<any>(false);
  const [disabled,setDisabled] = useState(true)
  const [color,setColor]=useState('')

  const totalFields = 5;
  const filledFields = [
    nextKinName,
    nextKinShip,
    nextKinAddre  ,
    nextKinChildren,
    sameAsAddress
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;

  const percentage:any = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setNextOfKinComplete((prevState) => ({
        ...prevState, 
        percentage: percentage,
        color: "#FF0000", 
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setNextOfKinComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setNextOfKinComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  useEffect(() => {
    if (nextOfKinDetail) {
      setNextKinName(nextOfKinDetail?.nextOfKinName);
      setNextKinShip(nextOfKinDetail?.nextOfKinRelationship);
      setNextKinAddre(nextOfKinDetail?.nextOfKinAddress);
      setNextKinChildren(nextOfKinDetail?.numberOfChildren);
      setSameAsAddress(nextOfKinDetail?.sameAddress)
      }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {
    if(
      !nextKinName ||
      !nextKinShip ||
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
      sameAddress:sameAsAddress,
      color: color,
      completed: percentage,
     
  };
  AddNextOfData(data, AddNextOfKindataDB);
}
  
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
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 -z-20">
      <form onSubmit={handleSubmit}>
        {/* next of kin details */}

        <div className="flex flex-col ">
          <h1 className=" font-semibold mb-2">
            Next of Kin Details
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1 "
                htmlFor="NextofKinName"
              >
                Next of Kin Name
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="NextofKinName"
                type="text"
                value={nextKinName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z ]/g, "");setNextKinName(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"                disabled={disabled}
                placeholder="Enter Next of Kin Name"
               
              />
              {/* </div> */}
            </div>
            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1 "
                htmlFor="nextofkineship"
              >
                Next of Kin Relationship
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="nextofkineship"
                type="text"
                value={nextKinShip}
                onChange={(e) =>{
                  const value = e.target.value.replace(/[^a-zA-Z ]/g, ""); setNextKinShip(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Next of Kin Relation Ship"
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                htmlFor="nextofkinaddres"
              >
                Next of Kin Address
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="nextofkinaddres"
                type="text"
                value={nextKinAddre}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z ]/g, "");setNextKinAddre(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Next of Kin Address"
                disabled={disabled}
              />
              {/* </div> */}
            </div>

            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                htmlFor="numberofchildren"
              >
                Number of Children
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="numberofchildren"
                type="text"
                value={nextKinChildren}
                onChange={(e) =>{
                  const value = e.target.value.replace(/[^0-9. ]/g, ""); setNextKinChildren(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Number of Children"
                disabled={disabled}
              />
              {/* </div> */}
             
            </div>
            <div className=" flex items-center gap-2  ">
                  <input
                    id="sameAsAddress"
                    type="checkbox"
                    className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                    checked={sameAsAddress}
                    onChange={(e) =>
                      setSameAsAddress(!sameAsAddress)}
                    
                    disabled={disabled}
                  />
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333]"
                    htmlFor="sameAsAddress"
                  >
                    Same As Contact Details Address
                  </label>
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
