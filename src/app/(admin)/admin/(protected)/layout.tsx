"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import ".../globals.scss";
import "../../../globals.scss";
import AdminSidebar from "@/app/Shared/AdminSidebar/AdminSidebar";
import { useState } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
});


export default function AdminInnerLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    return (
        <div className={`${poppins.className} w-full h-screen flex flex-col`}>
            <aside>
                <AdminSidebar/>
            </aside>
            <div
            className={`${
              sidebarToggle ? "" : " ml-64 "
            } w-full scrollbar-hide overflow-x-auto`}
          >
            {/* <Header
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            /> */}
            <div className="lg:h-[calc(100vh-4rem)] xxl:max-h-min overflow-auto scrollbar-hide overflow-x-auto">
             
              {children}
            </div>
          </div>
            
        </div>
    );
}