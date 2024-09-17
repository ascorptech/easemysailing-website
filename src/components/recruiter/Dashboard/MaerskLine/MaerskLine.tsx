"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

type Ship = {
  id: number;
  name: string;
  rank: string;
  dueDate: string;
  status: "overdue" | "lessThan30Days" | "30DaysPlus";
};

interface ShipStatus {
  name: string;
  status: {
    days30plus: number;
    lessThan30Days: number;
    overdue: number;
  };
}

const ships: Ship[] = [
  {
    id: 1,
    name: "Ship 1",
    rank: "Captain",
    dueDate: "Feb 7, 2024",
    status: "30DaysPlus",
  },
  {
    id: 2,
    name: "Ship 2",
    rank: "Captain",
    dueDate: "Feb 7, 2024",
    status: "overdue",
  },
  {
    id: 3,
    name: "Ship 3",
    rank: "Chief Engineer",
    dueDate: "Feb 7, 2024",
    status: "lessThan30Days",
  },
  {
    id: 4,
    name: "Ship 4",
    rank: "first Engineer",
    dueDate: "Feb 7, 2024",
    status: "30DaysPlus",
  },
  {
    id: 5,
    name: "Ship 5",
    rank: "Chief Engineer",
    dueDate: "Feb 7, 2024",
    status: "overdue",
  },
  {
    id: 6,
    name: "Ship 6",
    rank: "Second Engineer",
    dueDate: "Feb 7, 2024",
    status: "lessThan30Days",
  },
  {
    id: 7,
    name: "Ship 7",
    rank: "Captain",
    dueDate: "Feb 7, 2024",
    status: "30DaysPlus",
  },
  {
    id: 8,
    name: "Ship 8",
    rank: "Captain",
    dueDate: "Feb 7, 2024",
    status: "overdue",
  },
];
const ship: ShipStatus[] = [
  {
    name: "Ship 1",
    status: { days30plus: 10, lessThan30Days: 10, overdue: 5 },
  },
  { name: "Ship 2", status: { days30plus: 15, lessThan30Days: 5, overdue: 5 } },
  {
    name: "Ship 3",
    status: { days30plus: 10, lessThan30Days: 5, overdue: 10 },
  },
  {
    name: "Ship 4",
    status: { days30plus: 5, lessThan30Days: 10, overdue: 10 },
  },
  {
    name: "Ship 5",
    status: { days30plus: 10, lessThan30Days: 10, overdue: 5 },
  },
];

const MaerskLine: React.FC = () => {
  return (
    <div className=" mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:grid-cols-3 lg:gap-12">
      {/* Profile Status Card */}

      <div className="grid row-span-1 grid-rows-2 gap-5 md:grid-rows-1 ">
        <div className=" grid row-span-1 md:grid-cols-1 bg-gray-100 shadow-inner shadow-slate-400  gap-5 rounded-[40px] p-2    ">
          <div className="flex items-center justify-around ml-2  pb-1">
            <div className=" relative  text-center h-[74px] w-[74px] ">
              <Image
                src="/images/MaerskLine.jpeg"
                alt="Avatar"
                width={500}
                height={500}
                className="w-full h-full rounded-full border-[#00A264] border-[2px] mt-[11px] ml-[11px]"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-12">
                <svg className=" absolute top-0 left-0 w-full h-full ">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="46%"
                    stroke="#FFFFFF"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#22C55E" // Green stroke color
                    strokeWidth="7"
                    strokeDasharray="120 60"
                    fill="transparent"
                  />
                </svg>
              </div>

              <div className=" w-32 mt-5   ">
                <h3 className="text-[#00A264] underline font-semibold text-lg mr-6">
                  Maersk Line
                </h3>
              </div>
            </div>

            <div>
              <div className="w-[103px] h-[103px]">
                <Image
                  src="/images/Premium.png"
                  alt="Avatar"
                  width={500}
                  height={500}
                  className="w-full h-full rounded-full mt-[20px]"
                  priority
                />
                <h3 className="font-semibold text-lg ml-5 mt-2">Premium</h3>
              </div>
            </div>
          </div>

          <div className=" flex   m-3 h-12 mt-12 ">
            <button className="rounded-lg bg-green-200 text-green-700 border-2 border-[#00A264]  w-36  font-bold mr-8">
              Upgrade
            </button>
            <button className="rounded-lg bg-[#00A264] text-white border-2 border-[#00A264]  w-36  font-bold">
              Recharge CVs
            </button>
          </div>
        </div>

        {/* second  division */}

        <div className="grid row-span-1   mt-5 ">
          <div className=" bg-gray-100 shadow-slate-600 shadow-inner  rounded-[50px] p-4  ">
            <div className="flex justify-between items-center text-white font-semibold text-lg bg-[#00A264] rounded-lg w-full p-2 mt-4">
              <div className="flex items-center ">
                <img
                  src="../Images/artificial.png"
                  alt="image not found"
                  className="w-12 h-12 "
                ></img>
                <h3 className="underline ml-2">EMS Matches</h3>
              </div>
              <p className="font-extrabold">59</p>
            </div>

            <div className=" flex justify-between items-center  font-semibold text-lg bg-white rounded-lg w-full p-2 mt-5">
              <div className="flex items-center ">
                <img
                  src="../Images/Customer.png"
                  alt="image not found"
                  className="w-12 h-12 "
                ></img>
                <h3 className=" ml-2 text-red-600">
                  You are missing
                  <p className="text-[#00A264] underline font-semibold mt-[-4px]">
                    Saving Potential
                  </p>
                </h3>
              </div>
              <p className="font-extrabold">$150K</p>
            </div>
          </div>
        </div>
      </div>

      {/* second section company profile visitor  */}
      <div className="grid row-span-1 ">
        <div className=" bg-gray-100 p-5  shadow-inner shadow-slate-600  rounded-[40px] text-center  ">
          <div className="space-y-4 ">
            <div className="flex justify-between items-center  bg-[#D3EAEA] p-[10px] rounded-lg">
              <div className="flex items-center space-x-2">
                <img
                  src="../images/visitor.png"
                  alt="Salary Icon"
                  className="w-6 h-6"
                />
                <span className="font-semibold text-[#00A264] underline">
                  Company Profile Visitor
                </span>
              </div>
              <span className="font-extrabold text-lg">$500</span>
            </div>

            <div className="flex justify-between items-center   bg-[#D3EAEA] p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <img
                  src="../Images/jobOffer.png"
                  alt="Rank Icon"
                  className="w-6 h-6"
                />
                <span className="font-semibold underline text-[#00A264]">
                  Job Posted
                </span>
              </div>
              <span className="font-extrabold text-lg">36</span>
            </div>

            <div className="flex justify-between items-center   bg-[#D3EAEA] p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <img
                  src="../Images/Resume.png"
                  alt="Ship Type Icon"
                  className="w-6 h-6"
                />
                <span className="font-semibold underline text-[#00A264]">
                  Job Applications
                </span>
              </div>
              <span className="font-extrabold text-lg">150</span>
            </div>

            <div className="flex justify-between items-center   bg-[#D3EAEA]  p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <img
                  src="../Images/attachment.png"
                  alt="Rank Icon"
                  className="w-6 h-6"
                />
                <span className="font-semibold underline text-[#00A264]">
                  Downloaded CVs
                </span>
              </div>
              <span className="font-extrabold text-lg">200</span>
            </div>

            <div className="flex justify-between items-center  bg-[#D3EAEA]  p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <img
                  src="../Images/EDUEms.png"
                  alt="Rank Icon"
                  className="w-6 h-6"
                />
                <span className="font-semibold underline text-[#00A264]">
                  EduEMS Allocations
                </span>
              </div>
              <span className="font-extrabold text-lg">30</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-5">
            <h3 className="text-md font-bold ">Recruitment Pipeline</h3>
            <button className=" bg-[#00A264] text-white p-2 rounded-lg font-semibold">
              Interview Schedule
            </button>
          </div>

          <div className="relative mt-16">
            <div className=" absolute flex  items-center justify-between text-xs font-semibold">
              <h3 className="relative mt-[-30px]">Job Previewed</h3>
              <h3 className="absolute mb-[-62px] ml-[5.6rem]">Applicant</h3>
              <h3 className="relative mt-[-1.5rem] ml-[5rem]">CV Downloaded</h3>
              <h3 className="absolute flex w-20 mb-[-4rem] ml-[16rem]">
                Job Offers
              </h3>
            </div>
            <div className="flex  mt-6 text-white text-end ">
              <div className="bg-green-900 w-[82px] h-6  pr-1">10</div>
              <div className="bg-green-700 w-[82px] h-6 pr-1">8</div>
              <div className="bg-[#00A264] w-[82px] h-6 pr-1">20</div>
              <div className="bg-green-300 w-[82px] h-6 pr-1">5</div>
            </div>
          </div>
        </div>
      </div>

      {/* WSG-Wellness Social Governance Card */}
      <div className="grid relative items-center justify-center row-span-2 ml-2  ">
        <div className="max-w-md mx-auto bg-[#D3EAEA] shadow-inner shadow-black rounded-[40px] p-5 ">
          <div className=" flex items-center justify-between mt-2 mb-5">
            <h3 className="text-lg font-bold ">Repatriation Status</h3>
            <button className="bg-[#00A264] text-white p-1  w-20 rounded-lg flex items-center justify-around ">
              All <ChevronDown />
            </button>
          </div>

          <div className="flex justify-between items-center mb-4  font-bold text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#00A264] "></span>
              <span className=" text-gray-600 ">30 Days+</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#FF9900] "></span>
              <span className=" text-gray-600">Less than 30 days</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#FF0000] "></span>
              <span className=" text-gray-600">Overdue</span>
            </div>
          </div>

          <div className="space-y-3">
            {ships.map((ship) => (
              <div
                key={ship.id}
                className={`flex items-center p-3 bg-white rounded-lg shadow-md border-r-4  ${
                  ship.status === "overdue"
                    ? "border-[#FF0000]"
                    : ship.status === "lessThan30Days"
                    ? "border-[#FF9900]"
                    : "border-[#00A264]"
                }`}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <img
                    src="./Images/ship-user.png"
                    className=" text-[#00A264]"
                  ></img>
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-bold text-gray-800 ">
                    {ship.name}
                  </h3>
                  <p className="text-sm text-gray-600 ">
                    <span className="font-bold">Rank :</span> {ship.rank}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">Due Date : </span>
                    {ship.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Satus section*/}

      <div className=" grid col-span-2  mt-2 ">
        <div className="bg-gray-200 flex items-center justify-around p-1 pr-[56px] ">
          <h1 className="text-lg font-bold text-right mr-8 ">Ship Name</h1>

          <div className="flex justify-between items-center  font-bold text-xs gap-10 ">
            <h3 className="text-lg ">Status</h3>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#00A264] "></span>
              <span className=" text-gray-600 ">30 Days+</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-500 "></span>
              <span className=" text-gray-600">Less than 30 days</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 "></span>
              <span className=" text-gray-600">Overdue</span>
            </div>
          </div>
        </div>

        <div className=" text-white text-end  ">
          {ship.map((ship, index) => (
            <div key={index} className=" flex  justify-between mb-2">
              <Link
                href="#"
                className="underline text-[#00A264] font-semibold ml-11 mt-3"
              >
                {ship.name}
              </Link>

              <div className="flex ">
                <div
                  className="bg-[#00A264] pr-2 mt-3"
                  style={{ width: `${ship.status.days30plus * 22}px` }}
                >
                  <span className="text-white ">{ship.status.days30plus}</span>
                </div>
                <div
                  className="bg-orange-400 pr-2 mt-3"
                  style={{ width: `${ship.status.lessThan30Days * 22}px` }}
                >
                  <span className="text-white">
                    {ship.status.lessThan30Days}
                  </span>
                </div>
                <div
                  className="bg-red-600 pr-2 mt-3"
                  style={{ width: `${ship.status.overdue * 22}px` }}
                >
                  <span className="text-white">{ship.status.overdue} </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-2">
          <nav>
            <ul className="flex space-x-2">
              <li>
                <Link
                  href="#"
                  className="px-3 py-2  text-[#00A264] rounded font-semibold hover:bg-[#00A264] hover:text-white"
                >
                  Prev
                </Link>
              </li>
              {[1, 2, 3, 4, 5].map((page, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`px-3 py-2 ${
                      index === 0
                        ? "bg-[#00A264] text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="px-3 py-2  text-[#00A264] rounded font-semibold  hover:bg-[#00A264] hover:text-white"
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MaerskLine;
