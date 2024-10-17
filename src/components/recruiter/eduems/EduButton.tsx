"use client";
import Link from "next/link";
import React, { useState } from "react";
import EduContent from "./EduContent";
import EduAllocated from "./EduAllocated";

export default function EduButton() {
  const [activeTab, setActiveTab] = useState("Available");
  const [selectedOption, setSelectedOption] = useState("");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-4 ">
      <div className="flex bg-white justify-between items-center sticky top-0">
        {/* Tabs */}
        <div className="inline-flex my-3 rounded-md border-[#00A264] border p-1 shadow-sm">
          <Link
            href="#"
            aria-current="page"
            className={`px-10 py-2 ${
              activeTab === "Available"
                ? "bg-[#00A264] text-white" // Active state
                : "bg-white text-[#00A264] hover:bg-[#00A264] hover:text-white" // Inactive state
            } rounded-sm`}
            onClick={() => handleTabClick("Available")}
          >
            EduEMS Available
          </Link>
          <Link
            href="#"
            aria-current="page"
            className={`px-10 py-2 ml-2 ${
              activeTab === "Allocated"
                ? "bg-[#00A264] text-white" // Active state
                : "bg-white text-[#00A264] hover:bg-[#00A264] hover:text-white" // Inactive state
            } rounded-sm`}
            onClick={() => handleTabClick("Allocated")}
          >
            EduEMS Allocated
          </Link>
        </div>

        {/* Dropdown - Positioned to the right */}
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border bg-[#00A264] text-white rounded-lg px-3 py-2"
        >
          <option value="">Ranks</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Render TransactionView or Monthly based on active tab */}
      {activeTab === "Available" && <EduContent />}
      {activeTab === "Allocated" && <EduAllocated />}
    </div>
  );
}
