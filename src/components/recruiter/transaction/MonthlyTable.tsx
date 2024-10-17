"use client";
import React from "react";

export default function MonthlyTable() {
  const transactions = [
    {
      id: 1,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "16-May 2024",

    },
    {
      id: 2,
      source: "Engagement Fees",
      category: "One Time Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
    {
      id: 3,
      source: "Training",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "05-May 2024",

    },
    {
      id: 4,
      source: "Joining Expenses",
      category: "Flight",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "24-May 2024",

    },
    {
      id: 5,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "15-May 2024",

    },
    {
      id: 6,
      source: "Engagement Fees",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
    {
      id: 7,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "16-May 2024",

    },
    {
      id: 8,
      source: "Engagement Fees",
      category: "One Time Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
    {
      id: 9,
      source: "Training",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "05-May 2024",

    },
    {
      id: 10,
      source: "Joining Expenses",
      category: "Flight",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "24-May 2024",

    },
    {
      id: 11,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "15-May 2024",

    },
    {
      id: 12,
      source: "Engagement Fees",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
    {
      id: 13,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "16-May 2024",

    },
    {
      id: 14,
      source: "Engagement Fees",
      category: "One Time Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
    {
      id: 15,
      source: "Training",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "05-May 2024",

    },
    {
      id: 16,
      source: "Joining Expenses",
      category: "Flight",
      shipName: "Ship 1",
      rank: "Master",
      talent: "NB1",
      name:"Danny T",
      date: "24-May 2024",

    },
    {
      id: 17,
      source: "Manning Fees",
      category: "Monthly Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "15-May 2024",

    },
    {
      id: 18,
      source: "Engagement Fees",
      category: "Training Fees",
      shipName: "Ship 1",
      rank: "3rd ENG",
      talent: "NB1",
      name:"Danny T",
      date: "10-May 2024",

    },
  ];

  return (
    <div
      className="overflow-hidden 
     "
    >
      {" "}
      {/* Prevents scrollbar on the main screen */}
      <div className="overflow-x-auto mt-5">
        <div className="max-h-[451px] overflow-y-auto">
          {" "}
          {/* Scrollable table */}
          <table className="min-w-full text-center border-collapse border border-[#00A264]">
            <thead className="bg-[#00A264] text-white sticky top-0">
              <tr className="bg-[#00A264] text-white">
                <th className="border-b border-[#00A264] p-2">S. No.</th>
                <th className="border-b border-[#00A264] p-2">Source</th>
                <th className="border-b border-[#00A264] p-2">Category</th>
                <th className="border-b border-[#00A264] p-2">
                 Ship Name
                </th>
                <th className="border-b border-[#00A264] p-2">Rank</th>
                <th className="border-b border-[#00A264] p-2">
                  Talent ID
                </th>
                <th className="border-b border-[#00A264] p-2">Name</th>
                <th className="border-b border-[#00A264] p-2">Date</th>

              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="bg-white">
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.id}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.source}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.category}
                  </td>
                 
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.shipName}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.rank}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.talent}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.name}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
