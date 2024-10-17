"use client";
import React from "react";

export default function TransactionViewTable() {
  const transactions = [
    {
      id: 1,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "-",
      paymentStatus: "Pending",
      amountPaid: "$35.00",
    },
    {
      id: 2,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "Ship 2",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 3,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "Ship 2",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 4,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "-",
      paymentStatus: "Done",
      amountPaid: "$50.00",
    },
    {
      id: 5,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "Ship 1",
      paymentStatus: "Pending",
      amountPaid: "$35.00",
    },
    {
      id: 6,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "-",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 7,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "-",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 8,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 25, 2024",
      shipName: "Ship 1",
      paymentStatus: "Done",
      amountPaid: "$50.00",
    },
    {
      id: 9,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "Ship 2",
      paymentStatus: "Done",
      amountPaid: "$35.00",
    },
    {
      id: 10,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "Ship 1",
      paymentStatus: "Done",
      amountPaid: "$35.00",
    },
    {
      id: 11,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "Ship 1",
      paymentStatus: "Pending",
      amountPaid: "$35.00",
    },
    {
      id: 12,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 5, 2024",
      shipName: "-",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 13,
      item: "EMS Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "-",
      paymentStatus: "Done",
      amountPaid: "$70.00",
    },
    {
      id: 14,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 25, 2024",
      shipName: "Ship 1",
      paymentStatus: "Done",
      amountPaid: "$50.00",
    },
    {
      id: 15,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "Ship 2",
      paymentStatus: "Done",
      amountPaid: "$35.00",
    },
    {
      id: 16,
      item: "WSG Subscription",
      category: "Subscription",
      date: "March 24, 2024",
      shipName: "Ship 1",
      paymentStatus: "Done",
      amountPaid: "$35.00",
    },
  ];

  return (
    <div
      className="overflow-hidden 
     "
    >
      {" "}
      {/* Prevents scrollbar on the main screen */}
      <div className=" mt-5">
        <div className="max-h-[451px] overflow-y-auto">
          {" "}
          {/* Scrollable table */}
          <table className="min-w-full text-center border-collapse border border-[#00A264]">
            <thead className="bg-[#00A264] text-white sticky top-0">
              <tr className="bg-[#00A264] text-white">
                <th className="border-b border-[#00A264] p-2">S. No.</th>
                <th className="border-b border-[#00A264] p-2">Item</th>
                <th className="border-b border-[#00A264] p-2">Item Category</th>
                <th className="border-b border-[#00A264] p-2">
                  Date of Transaction
                </th>
                <th className="border-b border-[#00A264] p-2">Ship Name</th>
                <th className="border-b border-[#00A264] p-2">
                  Payment Status
                </th>
                <th className="border-b border-[#00A264] p-2">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="bg-white">
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.id}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.item}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.category}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.date}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.shipName}
                  </td>
                  <td className="border-b border-[#00A264] p-2">
                    {transaction.paymentStatus}
                  </td>
                  <td className="border-b border-[#00A264] text-[#00A264] p-2">
                    {transaction.amountPaid}
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
