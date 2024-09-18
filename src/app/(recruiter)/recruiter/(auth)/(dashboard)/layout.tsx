"use client";
import React, { lazy, Suspense, useState } from "react";
// import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "../../../../globals.scss";
import Sidebar from "@/app/Shared/Sidebar/Sidebar";
import Header from "@/app/Shared/Header/Header";
// import RecruiterHeader from "@/components/recruiter/RecruiterHeader/RecruiterHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

// export const metadata: Metadata = {
//     title: "Recruiter",
//     description: "This is recruiter page",
// };





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
    
      

    <div className={`${poppins.className} flex h-screen`}>
          <Sidebar sidebarToggle={sidebarToggle} />
          
          <div
          className={`${
            sidebarToggle ? "" : " ml-64 "
          } flex-auto relative overflow-hidden`}
        >
            <Header
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
          <div className="lg:h-[calc(100vh-4rem)] xxl:max-h-min scrollbar-hide overflow-auto">
             
              {children}
            </div>
          </div>
        </div>
      
  );
}
