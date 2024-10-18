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
      }  flex flex-col scrollbar-hide overflow-x-auto overflow-y-scroll`}
    >
      <div className="fixed z-50 bg-white w-[82%] lg:w-[78%] xl:w-[82%] ">
      <ProfileCV/>
      </div>
      <div className="mt-40 ">
      <MyJob/>
      </div>
    </div>
  );
};

export default page;
