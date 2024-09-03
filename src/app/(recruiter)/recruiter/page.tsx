import React from "react";
import MaerskLine from "@/components/recruiter/Dashboard/MaerskLine/MaerskLine";
import Trending from "@/components/recruiter/Dashboard/CandidateByEMS/Trending";
import FreshTalent from "@/components/recruiter/Dashboard/FreshTalent/freshTalent";

// type DashboardProps= {
//   sidebarToggle?: boolean;
//   setSidebarToggle?: () => void;
// }

const page = ({ sidebarToggle }:any) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  ml-64 " : ""
      }  flex flex-col scrollbar-hide overflow-x-auto`}
    >
      
      <MaerskLine />
      <Trending />
      <FreshTalent />
      
    </div>
  );
};

export default page;
