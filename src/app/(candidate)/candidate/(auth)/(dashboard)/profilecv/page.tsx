"use client";
import MyJob from "@/components/candidate/ProfileCv/MyJob";
import ProfileCV from "@/components/candidate/ProfileCv/Profile&CV";
// import ProfileCV from "@/components/candidate/Profile&CV/ProfileCV";
import React from "react";


const page = ({ sidebarToggle }:any) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  ml-64 " : ""
      }  flex flex-col scrollbar-hide overflow-x-auto `}
    >
      <ProfileCV/>
      <MyJob/>
     

      
     
    
      
      
    </div>
  );
};

export default page;
