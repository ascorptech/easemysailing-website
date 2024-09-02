"use client";
import React, { lazy, Suspense, useState } from "react";
// import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "../globals.scss";
// import RecruiterHeader from "@/components/recruiter/RecruiterHeader/RecruiterHeader";
import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-full h-screen flex flex-col">
            <RecruiterHeader/>
            {children}
        </div> */}

        <div className="flex h-screen scrollbar-hide overflow-x-auto  ">
          <Sidebar sidebarToggle={sidebarToggle} />
          {/* <div className=" relative flex-auto overflow-hidden bg-backgroundColor"> */}
          <div
            className={`${
              sidebarToggle ? "" : " ml-64 "
            } w-full scrollbar-hide overflow-x-auto`}
          >
            <Header
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
            <div className="lg:h-[calc(100vh-4rem)] xxl:max-h-min overflow-auto scrollbar-hide overflow-x-auto">
              {/* <Outlet /> */}
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
