"use client";
import EmsContent from "@/components/candidate/jobbyems/ems/EmsContent";
import Header from "@/components/candidate/jobbyems/header/Header";
import React from "react";

const page = ({ sidebarToggle }: any) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  ml-64 " : ""
      }  flex flex-col scrollbar-hide overflow-x-auto `}
    >
      <Header/>
      <EmsContent/>
    </div>
  );
};

export default page;
