import Image from "next/image";
import React from "react";
import Link from "next/link";


const ProfileStatus: React.FC = () => {
  return (
    <div className="container  p-4 grid grid-cols-3 gap-4 mt-8 w-[96%] ml-3 ">
      {/* Profile Status Card */}
      <div className="col-span-1 bg-white shadow-black shadow-md  rounded-lg p-4">
        <h1 className="text-center font-bold text-xl">Profile Status</h1>
        <div className="flex items-center justify-center mb-4">
          <div className=" relative  text-center h-[92px] w-[92px] ">
            <Image
             priority
              src="/images/robin.png"
              alt="Avatar"
              width={800}
              height={800}
              className="w-full h-full rounded-full border-white border-[8px] mt-[2px] ml-[1px]"
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
            <div>
              <p className="text-xl font-bold flex gap-2 mt-3">
                Complete <span className="text-green-600">60%</span>
              </p>
              <p className="text-md mt-1 ">Robin Smith</p>
              <p className="text-md mt-1 text-green-600">Captain</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-evenly mt-32 p-[14px] items-center text-center">
          {/* first di cucle  */}
          <div className="text-center  ">
            <div className="relative text-center h-16 w-16 ml-5 ">
              <Image priority src="/images/candidate/group-coin.png" alt="image not found" width={50}
              height={50} className="absolute mt-2 ml-1 pt-2 pl-1" />

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-3">
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
                    stroke=" #ffcc00" // Green stroke color
                    strokeWidth="6"
                    strokeDasharray="100 0"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>
            <a className="text-sm underline text-green-600 text-center mt-2 pl-2 pr-3">
              Redeem EMS
              <br /> Coins
            </a>
          </div>

          {/* second  di cucle  */}

          <div className="text-center">
            <div className="relative text-center h-16 w-16 ml-4 ">
              <p className="  p-5 ">60%</p>

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-3">
                <svg className="absolute top-0 left-0 w-full h-full ">
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
                    stroke="#22C55E"
                    strokeWidth="6"
                    strokeDasharray="75 50"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>
            <a className="text-sm underline text-green-600 mt-2 pl-2 pr-3">
              Training
              <br /> Status
            </a>
          </div>

          {/* Third sercle cucle  */}
          <div className="text-center">
            <div className="relative text-center h-16 w-16 ml-2  ">
              <p className="  p-5 ">40%</p>

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-3">
                <svg className="absolute top-0 left-0 w-full h-full ">
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
                    stroke="#3333cc" // Green stroke color
                    strokeWidth="6"
                    strokeDasharray="50 90"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>
            <a className="text-sm underline text-green-600 mt-2 pl-2 pr-2">
              Mentoring <br /> Index
            </a>
          </div>
        </div>
      </div>

      {/* My job Requirement  */}
      <div>
        <div className="bg-green-600 text-white rounded-2xl p-3 shadow-lg text-center mb-3">
          <h3 className="text-xl font-bold mb-6">My Job Requirements</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white text-black p-[10px] rounded-lg">
              <div className="flex items-center space-x-2">
                <Image
                priority
                  src="/images/candidate/Salary.png"
                  alt="Salary Icon"
                  width={500}
                  height={500}
                  className="w-7 h-7"
                />
                <span className="font-semibold ">Salary</span>
              </div>
              <span className="font-semibold">$500</span>
            </div>

            <div className="flex justify-between items-center  bg-white text-black p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <Image
                priority
                  src="/images/candidate/rank.png"
                  alt="Rank Icon"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
                <span className="font-semibold">Rank</span>
              </div>
              <span className="font-semibold">Captain</span>
            </div>

            <div className="flex justify-between items-center  bg-white text-black p-[10px] rounded-lg">
              <div className="flex items-center space-x-2 ">
                <Image
                priority
                  src="/images/candidate/ship-boat.png"
                  alt="Ship Type Icon"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
                <span className="font-semibold">Ship Type</span>
              </div>
              <span className="font-semibold">Bulker</span>
            </div>
          </div>

          <button className="mt-6 w-[50%] bg-white text-black py-2 rounded-lg font-semibold">
            Edit/Update Profile
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-2xl text-center mt-3">
          <h3 className="text-xl font-bold mb-6">Recent Activities</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border  rounded-tl-2xl rounded-br-3xl">
              <div className=" bg-[#D8F2EA] flex items-center justify-center  rounded-tl-2xl rounded-br-2xl h-12 w-14">
                <Image priority src="/images/candidate/user.png" alt="image not found" width={500} height={500} className="p-2"/>
              </div>
              <div className=" flex items-center  flex-col space-x-2 rounded-l-xl  mr-7 ">
                <span className="text-xl font-bold ml-12 ">70</span>
                <span>Profile Views</span>
              </div>
            </div>

            <div className="flex justify-between items-center border  rounded-tl-2xl rounded-br-3xl">
              <div className=" bg-[#D8F2EA] flex items-center justify-center  rounded-tl-2xl rounded-br-2xl h-12 w-14">
              <Image priority src="/images/candidate/bag.png" alt="image not found" width={500} height={500} className="p-2"/>              </div>
              <div className=" flex items-center  flex-col space-x-2 rounded-l-xl  mr-7 ">
                <span className="text-xl font-bold ml-20">75</span>
                <span>Recommended Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WSG-Wellness Social Governance Card */}
      <div>
        <div className="col-span-1 bg-blue-100 shadow-2xl rounded-[28px] p-3 ">
          <h3 className="text-lg font-bold mb-4">
            WSG-Wellness Social Governance
          </h3>
          <div className="space-y-2 mb-5">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-lg">
              <div className="border shadow-lg w-[90px] h-[90px]">
                <Image
                priority
                  src="/images/wsg.png"
                  alt="imgage not found"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center font-bold">WSG Initiatives by Maersk</p>
              <Link
                href="#"
                className="bg-green-600 text-white py-3 px-2 rounded-lg w-32 "
              >
                View More
              </Link>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-lg">
              <div className="border shadow-lg w-[90px] h-[90px] p-2">
                <Image
                priority
                  src="/images/easymysailing.png"
                  alt="imgage not found"
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
              <p className="text-center font-bold">WSG Initiatives by EMS</p>
              <Link
                href="#"
                className="bg-green-600 text-white py-3 px-2 rounded-lg w-32 "
              >
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* Playdeck Card */}
        <div className="flex items-center justify-between bg-white shadow-lg rounded-2xl p-4 mt-5 gap-3">
          <div className="border shadow-lg w-[115px] h-[130px] ">
            <Image
            priority
              src="/images/playdeck.png"
              alt="images not found"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Playdeck</h3>
            <p className="pl-1 pr-1 mb-2">
              Lorem Ipsum is simply dummy text of the printing...
            </p>
            <Link
              href="#"
              className="mt-2 w-36 bg-green-600 text-white py-2 px-2 rounded-lg"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
