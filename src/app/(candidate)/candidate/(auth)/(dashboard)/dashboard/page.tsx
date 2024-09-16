"use client";
import React from "react";

import LevelProgression from "@/components/candidate/Dashboard/LevelProgression/LevelProgression";
import ProfileStatus from "@/components/candidate/Dashboard/ProfileStatus/ProfileStatus";
import NewVacancies from "@/components/candidate/Dashboard/NewVacancies/NewVacancies";
import TrainingCourses from "@/components/candidate/Dashboard/TrainingCourses/TrainingCourses";
import RequirmentCompanies from "@/components/candidate/Dashboard/RequirmentCompanies/RequirmentCompanies";




const page = ({ sidebarToggle }:any) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  ml-64 " : ""
      }  flex flex-col scrollbar-hide overflow-x-auto`}
    >
      
     
      <LevelProgression/>
      <ProfileStatus/>
      <NewVacancies/>
      <TrainingCourses/>
      <RequirmentCompanies/>

      
      
    </div>
  );
};

export default page;
