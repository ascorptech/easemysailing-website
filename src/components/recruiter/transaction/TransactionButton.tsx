"use client";
import Link from "next/link";
import React, { useState } from "react";
import TransactionView from "./TransactionView"; // Ensure this path is correct
import Monthly from "./Monthly"; // Ensure this path is correct

export default function Transaction() {
  const [activeTab, setActiveTab] = useState("transactions");

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="m-4  h-[35rem]">
      <div className="inline-flex rounded-md border-[#00A264] border p-1 shadow-sm">
        <Link
          href="#"
          aria-current="page"
          className={`px-10 py-2 ${
            activeTab === "transactions"
              ? "bg-[#00A264] text-white" // Active state
              : "bg-white text-[#00A264] hover:bg-[#00A264] hover:text-white" // Inactive state
          } rounded-sm`}
          onClick={() => handleTabClick("transactions")}
        >
          Transactions
        </Link>
        <Link
          href="#"
          aria-current="page"
          className={`px-10 py-2 ml-2 ${
            activeTab === "billing"
              ? "bg-[#00A264] text-white" // Active state
              : "bg-white text-[#00A264] hover:bg-[#00A264] hover:text-white" // Inactive state
          } rounded-sm`}
          onClick={() => handleTabClick("billing")}
        >
          Monthly Billing
        </Link>
      </div>

      {/* Render TransactionView or Monthly based on active tab */}
      {activeTab === "transactions" && <TransactionView />}
      {activeTab === "billing" && <Monthly />}
    </div>
  );
}
