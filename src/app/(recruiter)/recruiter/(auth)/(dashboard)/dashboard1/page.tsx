"use client";
import React from "react";
import Trending from "@/components/recruiter/Dashboard/CandidateByEMS/Trending";
import FreshTalent from "@/components/recruiter/Dashboard/FreshTalent/freshTalent";
import WsgMarksLine from "@/components/recruiter/dashboard1/WsgMarksLine";

const page = ({ sidebarToggle }: any) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  ml-64 " : ""
      }  flex flex-col scrollbar-hide overflow-x-auto`}
    >
      <WsgMarksLine/>
      <Trending />
      <FreshTalent />
    </div>
  );
};

export default page;
