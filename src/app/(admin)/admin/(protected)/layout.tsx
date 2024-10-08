"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import ".../globals.scss";
import "../../../globals.scss";
import AdminSidebar from "@/app/Shared/AdminSidebar/AdminSidebar";
import AdminHeader from "@/app/Shared/AdminHeader/AdminHeader"
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
      <div className={`${poppins.className} flex h-screen`}>
        {" "}
        <aside>
          <AdminSidebar />
        </aside>
        <div
          className={`${
            sidebarToggle ? "" : " ml-64 "
          } flex-auto relative overflow-hidden`}
        >
          {/* <Header
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            /> */}

            <AdminHeader/>
          <div className="lg:h-[calc(100vh-4rem)] xxl:max-h-min scrollbar-hide overflow-auto">
            {" "}
            {children}
          </div>
        </div>
      </div>
    );
}