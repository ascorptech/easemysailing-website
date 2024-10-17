"use client";
import React from "react";

export default function EduAllocated() {
  const transactions = [
    {
      id: 1,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "16-May 2024",
    },
    {
      id: 2,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "10-May 2024",
    },
    {
      id: 3,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "05-May 2024",
    },
    {
      id: 4,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "24-May 2024",
    },
    {
      id: 5,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "15-May 2024",
    },
    {
      id: 6,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "10-May 2024",
    },
    {
      id: 7,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "16-May 2024",
    },
    {
      id: 8,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "10-May 2024",
    },
    {
      id: 9,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "05-May 2024",
    },
    {
      id: 10,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "24-May 2024",
    },
    {
      id: 11,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "15-May 2024",
    },
    {
      id: 12,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "10-May 2024",
    },
    {
      id: 13,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "16-May 2024",
    },
    {
      id: 14,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "10-May 2024",
    },
    {
      id: 15,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "05-May 2024",
    },
    {
      id: 16,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "24-May 2024",
    },
    {
      id: 17,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
      date: "15-May 2024",
    },
    {
      id: 18,
      training: "Alternate Fuel - Bunkering",

      proposer: "BB 01",
      cost: "$2500",
      talent: "NB1",
      name: "Danny T",
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
      <div className="overflow-x-auto mt-10">
        <div className="max-h-[451px] overflow-y-auto">
          {" "}
          {/* Scrollable table */}
          <table className="min-w-full text-center border-collapse border border-[#00A264]">
            <thead className="bg-[#00A264] text-white sticky top-0">
              <tr className="bg-[#00A264] text-white">
                <th className="border-b border-[#00A264] p-2">S. No.</th>
                <th className="border-b border-[#00A264] p-2">
                  Alternate Fuel - Bunkering Name
                </th>
                <th className="border-b border-[#00A264] p-2">Talent ID</th>
                <th className="border-b border-[#00A264] p-2">
                  Candidate name
                </th>
                <th className="border-b border-[#00A264] p-2">Proposer</th>
                <th className="border-b border-[#00A264] p-2">Cost</th>
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
                    {transaction.training}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.talent}
                  </td>

                  <td className="border-b border-[#00A264] p-2">
                    {transaction.name}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.proposer}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.cost}
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
