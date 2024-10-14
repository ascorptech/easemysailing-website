"use client";
import { useState } from "react";

const data = [
  { talentId: "NB 1", candidate: "Ronny", rank: "Captain" },
  { talentId: "NB 2", candidate: "Danny", rank: "Captain" },
  { talentId: "NB 3", candidate: "Robin", rank: "Chief Engineer" },
  { talentId: "NB 4", candidate: "Wilson", rank: "Captain" },
  { talentId: "NB 5", candidate: "John", rank: "Second Engineer" },
  { talentId: "NB 6", candidate: "Smith", rank: "Second Engineer" },
  { talentId: "NB 7", candidate: "Nelson", rank: "Chief Engineer" },
  { talentId: "NB 8", candidate: "Collins", rank: "Second Engineer" },
  { talentId: "NB 9", candidate: "Robin", rank: "Captain" },
  { talentId: "NB 10", candidate: "Rocky", rank: "Captain" },
  { talentId: "NB 11", candidate: "Danny", rank: "Captain" },
  { talentId: "NB 12", candidate: "Robin", rank: "Chief Engineer" },
  { talentId: "NB 13", candidate: "Wilson", rank: "Second Engineer" },
  { talentId: "NB 14", candidate: "Rocky", rank: "Second Engineer" },
  { talentId: "NB 15", candidate: "John", rank: "Chief Engineer" },
  { talentId: "NB 16", candidate: "Smith", rank: "Second Engineer" },
  { talentId: "NB 17", candidate: "Rocky", rank: "Second Engineer" },
  { talentId: "NB 18", candidate: "Nelson", rank: "Second Engineer" },
  { talentId: "NB 19", candidate: "Collins", rank: "Captain" },
  { talentId: "NB 20", candidate: "Rocky", rank: "Captain" },
];

type SelectedShip = {
  [key: string]: string;
};
// Ships that can be selected in the dropdown
const ships = ["Ship A", "Ship B", "Ship C", "Ship D", "Multiple Ships"];

export default function Cv() {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedRank, setSelectedRank] = useState("");

    const [selectedShip, setSelectedShip] = useState<SelectedShip>(
    data.reduce((acc, curr) => {
      acc[curr.talentId] = "Multiple Ships"; // Default value
      return acc;
    }, {} as SelectedShip)
  );
  // Handle the change in selection
  const handleSelect = (id: string, ship: string) => {
    setSelectedShip((prevState) => ({
      ...prevState,
      [id]: ship,
    }));
  };

  return (
    <div className="overflow-x-auto p-6 pt-2">
        <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-1 mt-2">Candidate CV Downloaded</h1>
        </div>
        <div className="">
          {/* Flex container for the inputs and button */}
          <div className="flex space-x-3">
            {/* Dropdown */}
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="border bg-[#00A264] text-white  rounded-lg px-3 py-2"
            >
              <option value="">Ranks</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {/* Dropdown */}
            <select
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
              className="border bg-[#00A264] text-white  rounded-lg px-3 py-2"
            >
              <option value="">Ship Name</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
          </div>
        </div>
      </div>
      <div className="border h-[37.4rem] border-[#00A264] rounded-lg overflow-x-auto">
        <table className="min-w-full text-left border   border-gray-200">
          <thead className="bg-[#00A264] text-center sticky rounded-lg top-0 text-white">
            <tr>
              <th className="px-4 py-2">S.No</th>
              <th className="px-4 py-2">Talent ID</th>
              <th className="px-4 py-2">Candidates</th>
              <th className="px-4 py-2">Ranks</th>
              <th className="px-4 py-2">Ship Name</th>
              <th className="px-4 py-2">Downloaded CV</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((row, index) => (
              <tr key={row.talentId} className="border-b border-[#00A264] ">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 text-[#00A264]  hover:underline cursor-pointer">
                  {row.talentId}
                </td>
                <td className="px-4 py-2">{row.candidate}</td>
                <td className="px-4 py-2">{row.rank}</td>
                <td className="px-4 py-2">
                  <select
                    className="border border-gray-300 bg-[#00A264] text-white rounded p-1"
                    value={selectedShip[row.talentId]}
                    onChange={(e) => handleSelect(row.talentId, e.target.value)}
                  >
                    {ships.map((ship, shipIdx) => (
                      <option key={shipIdx} value={ship}>
                        {ship}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">
                  <a href="#" className="text-[#00A264] hover:underline">
                    View CV
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
