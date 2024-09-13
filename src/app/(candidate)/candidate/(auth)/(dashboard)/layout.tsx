"use client";
import React, {  useState } from "react";

import { Inter } from "next/font/google";
import "../../../../globals.scss";
import CandidateSidebar from "@/app/Shared/CandidateSidebar/CandidateSidebar";
import CandidateHeader from "@/app/Shared/CandidateHeader/CandidateHeader";

const inter = Inter({ subsets: ["latin"] });


type Props = {
  // sidebarToggle:any,
  // setSidebarToggle:any
  sidebarToggle: boolean; // Assuming this is a boolean for toggling the sidebar
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>; // Correct typing for a state setter
};

export default function RecruiterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
        <div className="flex h-screen scrollbar-hide overflow-x-auto  ">
          <CandidateSidebar sidebarToggle={sidebarToggle} />
          
          <div
            className={`${
              sidebarToggle ? "" : " ml-64 "
            } w-full scrollbar-hide overflow-x-auto`}
          >
            <CandidateHeader
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
            <div className="lg:h-[calc(100vh-4rem)] xxl:max-h-min overflow-auto scrollbar-hide overflow-x-auto">
             
              {children}
            </div>
          </div>
        </div>
  );
}
