"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {};
export default function CandiateListing(props: Props) {
  const tableData = [
    {
      sNo: 1,
      talentId: "NB 1",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 2,
      talentId: "NB 2",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 3,
      talentId: "NB 3",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 4,
      talentId: "NB 4",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 5,
      talentId: "NB 5",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 6,
      talentId: "NB 6",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 7,
      talentId: "NB 7",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 8,
      talentId: "NB 8",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 9,
      talentId: "NB 9",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 10,
      talentId: "NB 10",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 11,
      talentId: "NB 11",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 12,
      talentId: "NB 12",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
    {
      sNo: 13,
      talentId: "NB 13",
      nationality: "Canada",
      rank: "Captain",
      shiptype: "Bulker",
      rankexp: "30 Month",
      salaryexp: 4000,
      contract: " 4 Months",
      availability: "10 Jul 2024",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRankOption, setSelectedRankOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  //
  // Data for dropdowns
  const shipTypes = ["Bulk Carrier", "Container", "Tanker", "Chemical Tanker"];
  const rankTypes = ["Rank", "Rank2", "Rank3", "Rank4"];
  const exp = ["Option1", "Option2", "Option3"];
  const availability = ["Option1", "Option2", "Option3"];
  const nation = ["Option1", "Option2", "Option3"];
  const salary = ["Option1", "Option2", "Option3"];

  // Filtered dropdowns based on searchTerm
  const filteredShipTypes = shipTypes.filter((type) =>
    type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredRankTypes = rankTypes.filter((rank) =>
    rank.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredexp = exp.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredavailability = availability.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filterednation = nation.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredsalary = salary.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
    setSearchTerm("");
  };

  const selectShipType = (type: any) => {
    setSelectedOption(type);
    setOpenDropdown("");
  };

  const selectRankType = (rank: any) => {
    setSelectedRankOption(rank);
    setOpenDropdown("");
  };

  const selectOption1Type = (option: any) => {
    setSelectedOption1(option);
    setOpenDropdown("");
  };

  const selectOption2Type = (option: any) => {
    setSelectedOption2(option);
    setOpenDropdown("");
  };

  const selectOption3Type = (option: any) => {
    setSelectedOption3(option);
    setOpenDropdown("");
  };

  const selectOption4Type = (option: any) => {
    setSelectedOption4(option);
    setOpenDropdown("");
  };

  const resetDropdowns = () => {
    setSelectedOption("");
    setSelectedRankOption("");
    setSelectedOption1("");
    setSelectedOption2("");
    setSelectedOption3("");
    setSelectedOption4("");
    setSearchTerm(""); // Reset the search term as well
  };
  return (
    <div className="p-6 pt-2">
      <h1 className="text-3xl font-bold mb-4">
        Explore Our expert Maritime Candidate Database for Seamless Crewing!
      </h1>

      {/* Dropdowns */}
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap mb-3 space-x-3">
          {/* Ship Type Dropdown */}
          <div className="w-[185px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("shipType")}
              className="inline-flex justify-between w-full items-center rounded-md border border-gray-300  bg-white"
            >
              <span className="px-1 py-1">{selectedOption || "Ship Type"}</span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "shipType" && (
              <div className="absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredShipTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedOption === type}
                        onChange={() => selectShipType(type)}
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Rank Dropdown */}
          <div className="w-[175px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("rankType")}
              className="inline-flex justify-between w-full rounded-md border border-gray-300  bg-white"
            >
              <span className="px-2 py-1">
                {selectedRankOption || "Rank Type"}
              </span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "rankType" && (
              <div className="absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredRankTypes.map((rank) => (
                    <label
                      key={rank}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedRankOption === rank}
                        onChange={() => selectRankType(rank)}
                      />
                      <span className="ml-2">{rank}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Experience Dropdown */}
          <div className="w-[185px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("option1Type")}
              className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white"
            >
              <span className="px-2 py-1">
                {selectedOption1 || "Experience"}
              </span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "option1Type" && (
              <div className="absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredexp.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedOption1 === option}
                        onChange={() => selectOption1Type(option)}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Availability Dropdown */}
          <div className="w-[185px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("option2Type")}
              className="inline-flex justify-between w-full rounded-md border border-gray-300  bg-white"
            >
              <span className="px-6 py-1">
                {selectedOption2 || "Availability"}
              </span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "option2Type" && (
              <div className="absolute mt-2 z-50 w-56 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredavailability.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedOption2 === option}
                        onChange={() => selectOption2Type(option)}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Nationality Dropdown */}
          <div className="w-[185px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("option3Type")}
              className="inline-flex justify-between w-full rounded-md border border-gray-300  bg-white"
            >
              <span className="px-6 py-1">
                {selectedOption3 || "Nationality"}
              </span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "option3Type" && (
              <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filterednation.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedOption3 === option}
                        onChange={() => selectOption3Type(option)}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Salary Dropdown */}
          <div className="w-[185px] relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("option4Type")}
              className="inline-flex justify-between w-full rounded-md border border-gray-300  bg-white"
            >
              <span className="px-6 py-1">{selectedOption4 || "Salary"}</span>
              <div className="h-9 w-8 flex justify-center items-center rounded-r-md bg-[#00A264]">
                <IoIosArrowDown className=" text-2xl  text-white" />
              </div>
            </button>
            {openDropdown === "option4Type" && (
              <div className="absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredsalary.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#00A264]"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={selectedOption4 === option}
                        onChange={() => selectOption4Type(option)}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className="mb-3 space-x-3">
          <Link
            href="#"
            className="bg-[#00A264] px-6 text-white py-2 -ml-7 rounded-md "
          >
            Submit
          </Link>
          <Link
            href="#"
            onClick={resetDropdowns} // Attach reset functionality here
            className="bg-[#00A264] px-6 text-white py-2 -ml-7 rounded-md "
          >
            Reset
          </Link>
        </div>
      </div>

      {/* table content */}
      <div className="border h-[28rem] border-[#00A264] rounded-lg overflow-x-auto">
        <table className="min-w-full text-center border-collapse border border-[#00A264]">
          <thead className="bg-[#00A264] text-white sticky top-0">
            <tr className="bg-[#00A264] border-b border-[#00A264] text-white">
              <th className="px-4 py-2 border-b border-[#00A264]">S.no</th>
              <th className="px-4 py-2 border-b border-[#00A264]">Talent Id</th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Nationality
              </th>
              <th className="px-4 py-2 border-b border-[#00A264]">Rank</th>
              <th className="px-4 py-2 border-b border-[#00A264]">Ship Type</th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Rank experience
              </th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Salary experience
              </th>
              <th className="px-4 py-2 border-b border-[#00A264]">
                Contract Duration
              </th>

              <th className="px-4 py-2 border-b border-[#00A264]">
                Availability
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
                <td
                  key={row.talentId}
                  className="px-4 py-2 border-b underline border-[#00A264] text-[#00A264] cursor-pointer"
                >
                  <Link
                    href={`/recruiter/candidatelisting/talent/${row.talentId.replace(
                      " ",
                      ""
                    )}`}
                  >
                    {row.talentId}
                  </Link>
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.nationality}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.rank}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.shiptype}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264] ">
                  {row.rankexp}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.salaryexp}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.contract}
                </td>
                <td className="px-4 py-2 border-b border-[#00A264]">
                  {row.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* three box */}
      <div className="flex justify-between items-center mt-5">
        <div className="w-[25rem] h-[120px] bg-[#D1EFE4] border-2 shadow-md rounded-bl-[33px] rounded-tr-[33px] flex">
          <div className="mt-4 ml-5">
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/brai.png"}
              alt="not found"
              className="w-20 h-20"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="px-10 w-[18rem] py-2  font-semibold">
              One Click Recruitment{" "}
            </h2>
            <Link
              href="#"
              className="bg-[#00A264] px-4 text-white py-2 -ml-7 rounded-md "
            >
              EMS matches
            </Link>
          </div>
        </div>

        <div className="w-[25rem] bg-[#D1EFE4] h-[120px] border-2 shadow-md rounded-bl-[33px] rounded-tr-[33px] flex">
          <div className="mt-4 ml-5">
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/hands.png"}
              alt="not found"
              className="w-20 h-20"
            />
          </div>

          <div className="flex flex-col justify-center ml-20 items-center">
            <h2 className=" py-2  font-semibold">WSG Offerings </h2>
            <Link
              href="#"
              className="bg-[#00A264] px-5 text-white py-2 rounded-md "
            >
              View More
            </Link>
          </div>
        </div>

        <div className="w-[25rem] bg-[#D1EFE4] h-[120px] border-2 shadow-md rounded-bl-[33px] rounded-tr-[33px] flex">
          <div className="mt-4 ml-5">
            <Image
              priority
              height={100}
              width={100}
              src={"/recruiter/ltr.png"}
              alt="not found"
              className="w-20 h-20 "
            />
          </div>

          <div className="flex flex-col justify-center ml-20 items-center">
            <h2 className=" py-2  font-semibold">Subscriptions</h2>
            <Link
              href="#"
              className="bg-[#00A264] px-5 text-white py-2 rounded-md "
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* {isPopupOpen && (
                  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                      <h2 className="text-xl">Talent ID: {} </h2>
                      <p>Details about the talent can go here...</p>
                      <button
                        onClick={handleClosePopup}
                        className="mt-4 bg-[#00A264] text-white px-4 py-2 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )} */
}
// const [isPopupOpen, setIsPopupOpen] = useState(false);

// const handleTalentIdClick = () => {
//   setIsPopupOpen(true);
// };

// const handleClosePopup = () => {
//   setIsPopupOpen(false);
// };
