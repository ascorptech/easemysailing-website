"use client";

import Image from "next/image";
import { useState } from "react";

export default function EmsMatch() {
  const tableData = [
    {
      sNo: 1,
      jobId: "BB 101",
      ship: "Ship 1",
      rank: "Captain",
      candidate: "NB1",
      match: 30,
      savings: 4000,
    },
    {
      sNo: 2,
      jobId: "BB 1099",
      ship: "Ship 2",
      rank: "Ch.Off",
      candidate: "Multiple Candidates",
      match: 75,
      savings: 3500,
    },
    {
      sNo: 3,
      jobId: "BB 2022",
      ship: "Ship 1",
      rank: "2nd Off",
      candidate: "NB2",
      match: 70,
      savings: 500,
    },
    {
      sNo: 4,
      jobId: "BB 80999",
      ship: "Ship 1",
      rank: "3rd Off",
      candidate: "Multiple Candidates",
      match: 25,
      savings: 5000,
    },
    {
      sNo: 5,
      jobId: "AX 34567",
      ship: "Ship 2",
      rank: "3rd Off",
      candidate: "NB3",
      match: 90,
      savings: 3000,
    },
    {
      sNo: 6,
      jobId: "BB 1099",
      ship: "Ship 1",
      rank: "Cadet",
      candidate: "NB4",
      match: 64,
      savings: 500,
    },
    {
      sNo: 7,
      jobId: "BB 2022",
      ship: "Ship 1",
      rank: "Captain",
      candidate: "Multiple Candidates",
      match: 82,
      savings: 4000,
    },
    {
      sNo: 8,
      jobId: "BB 80999",
      ship: "Ship 2",
      rank: "Ch.Eng",
      candidate: "NB5",
      match: 20,
      savings: 3500,
    },
    {
      sNo: 9,
      jobId: "AX 34567",
      ship: "Ship 1",
      rank: "3rd Eng",
      candidate: "Multiple Candidates",
      match: 32,
      savings: 4000,
    },
    {
      sNo: 10,
      jobId: "AX 34567",
      ship: "Ship 1",
      rank: "3rd Eng",
      candidate: "NB6",
      match: 100,
      savings: 4000,
    },
    {
      sNo: 11,
      jobId: "BB 80999",
      ship: "Ship 2",
      rank: "Ch.Eng",
      candidate: "NB5",
      match: 20,
      savings: 3500,
    },
    {
      sNo: 12,
      jobId: "AX 34567",
      ship: "Ship 1",
      rank: "3rd Eng",
      candidate: "Multiple Candidates",
      match: 32,
      savings: 4000,
    },
    {
      sNo: 13,
      jobId: "AX 34567",
      ship: "Ship 1",
      rank: "3rd Eng",
      candidate: "NB6",
      match: 100,
      savings: 4000,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRank, setSelectedRank] = useState("");

  return (
    <div className="p-6 pt-2">
      {/* Drop down heading */}
      <div className="flex justify-between items-center mb-3 ">
        <div>
          <h1 className="text-xl font-bold mb-1 mt-2">Ems Matches</h1>
        </div>
        <div className="">
          {/* Flex container for the inputs and button */}
          <div className="flex space-x-3">
            {/* Dropdown */}
            <select
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
              className="border bg-[#00A264] text-white  rounded-lg px-1 py-1"
            >
              <option value="">Rank</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {/* Dropdown */}
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="border bg-[#00A264] text-white  rounded-lg px-1 py-1"
            >
              <option value="">Ship</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* table content */}
      <div className="border h-[28rem] border-[#00A264] rounded-lg overflow-x-auto">
        <table className="min-w-full text-center border-collapse border border-[#00A264]">
          <thead className="bg-[#00A264] text-white sticky top-0">
            <tr className="bg-[#00A264] border-b border-[#00A264] text-white">
              <th className="px-4 py-2 border-b border-[#00A264]">S.no</th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Job List Id
              </th>
              <th className="px-4 py-2 border-b border-[#00A264]">Ship</th>
              <th className="px-4 py-2 border-b border-[#00A264]">Rank</th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Recommended Candidates
              </th>
              <th className="px-4 py-2 border-b border-[#00A264]">Match %</th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Intelli Saving
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="bg-white text-center border-b border-[#00A264]"
              >
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.sNo}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264] text-[#00A264] cursor-pointer">
                  {row.jobId}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.ship}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.rank}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264] text-[#00A264] cursor-pointer">
                  {row.candidate}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  <div className="flex items-center">
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div
                        className={`h-2.5 rounded-full ${
                          row.match >= 80
                            ? "bg-green-500"
                            : row.match >= 50
                            ? "bg-yellow-400"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${row.match}%` }}
                      ></div>
                    </div>
                    <span>{row.match}%</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  ${row.savings}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* three box */}
      <div className="flex justify-between items-center mt-12">
        <div className="w-[25rem] border-2 shadow-2xl rounded-bl-[33px] rounded-tr-[33px] flex">
          <div>
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/doller.png"}
              alt="not found"
              className="w-28 h-28"
            />
          </div>
          <h2 className="px-10 w-[16rem] py-2 mt-3 font-semibold">
            Slash costs with the finesse of precision unions.
          </h2>
        </div>

        <div className="w-[25rem] border-2 shadow-2xl rounded-bl-[33px] rounded-tr-[33px] flex">
          <div className="relative">
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/blank.png"}
              alt="not found"
              className="w-28 h-28"
            />
            <div>
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/ai.png"}
              alt="not found"
              className="w-[70px] h-[70px] top-4 left-4 absolute"
            />
          </div>
          </div>
          <h2 className="px-10 w-[18rem] py-5  font-semibold">
            Unlock perfection with AI, tailoring candidates to your specs!
          </h2>
        </div>

        <div className="w-[25rem] border-2 shadow-2xl rounded-bl-[33px] rounded-tr-[33px] flex">
          <div>
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/man.png"}
              alt="not found"
              className="w-28 h-28"
            />
          </div>
          <h2 className="px-10 w-[20rem] pt-8 font-semibold">
            
            Effortless hiring, maximum impact
          </h2>
        </div>
      </div>
    </div>
  );
}
