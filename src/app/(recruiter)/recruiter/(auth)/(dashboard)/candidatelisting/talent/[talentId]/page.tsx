"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { IoArrowBackCircle } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
export default function TalentPage() {
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter(); // Access useRouter
  const params = useParams();
  const { talentId } = params;

  const handleButtonClick = () => {
    setShowPopup(!showPopup); // Toggle the popup visibility
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <button className="mt-[2px] ml-8" onClick={() => router.back()}>
            <IoArrowBackCircle className="text-center text-[#00A264]  text-3xl" />
          </button>
          <h1 className="py-3 px-2 font-semibold text-2xl">
            Experience Summary
          </h1>
          <h1 className="p-3 font-semibold text-2xl">
            Candidate - <span className="text-[#00A264]"> {talentId}</span>
          </h1>
        </div>
        <div className="mr-10 mt-3">
          <button
            className="text-white p-2 rounded-md bg-[#00A264]  flex items-center font-semibold"
            onClick={handleButtonClick}
          >
            <FiDownload className="mx-1" />
            Download CV
          </button>
        </div>

        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-6 relative shadow-md w-[300px]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-[#00A264] hover:text-green-800"
              onClick={handleClosePopup}
            >
              <IoCloseCircleSharp  size={25} />
            </button>

            {/* Icon and Success Message */}
            <div className="flex flex-col items-center">
              <Image
              priority
              width={500}
              height={500}
              src={"/recruiter/cvimg.png"}
              alt="image not found"
              className="w-28 h-28"
              />
              {/* <AiOutlineFileDone size={50} className="text-green-600 mb-4" /> */}
              <h2 className="text-lg font-bold my-4  text-center">
                CV Download Successful
              </h2>

              {/* Ok Button */}
              <button
                className="bg-[#00A264] text-white px-8 py-2 rounded-md font-semibold"
                onClick={handleClosePopup}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Table content */}
      <div className="px-8 pt-3">
        <div className="grid grid-cols-3 gap-10">
          {/* Sailing Experience Summary */}
          <div className=" rounded-lg shadow  text-center">
            <h2 className="bg-[#00A264] p-3 text-white  text-lg font-bold  ">
              Sailing Experience Summary
            </h2>
            <div className="h-[26rem] overflow-y-auto">
              {" "}
              {/* Wrap the table in a scrollable div */}
              <table className="w-full">
                <thead>
                  <tr className="sticky top-0">
                    <th className=" bg-[#D1EFE4] p-3">Ship Type</th>
                    <th className=" bg-[#D1EFE4] p-3">Total Experience</th>
                  </tr>
                </thead>
                <tbody className="overflow-y-auto h-[10rem] ">
                  {[
                    ["Bulker", "4M 5D"],
                    ["Tanker", "1M 15D"],
                    ["Container", "6M 5D"],
                    ["DP1", "5M 5D"],
                    ["Ship 1", "1M 1D"],
                    ["Ship 2", "4M"],
                    ["Ship 3", "7M"],
                    ["Ship 4", "6M 5D"],
                    ["Ship 5", "4M 5D"],
                    ["Ship 6", "5M 5D"],
                  ].map(([shipType, experience], index) => (
                    <tr key={index}>
                      <td className=" py-2 px-3">{shipType}</td>
                      <td className=" py-2 px-3">{experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Operational & Equipment Exp. */}
          <div className=" rounded-lg shadow  text-center">
            <h2 className="text-lg font-bold   bg-[#00A264] p-3 text-white ">
              Operational & Equipment Exp.
            </h2>
            <div className="h-[26rem] overflow-y-auto">
              {" "}
              {/* Wrap the table in a scrollable div */}
              <table className="w-full">
                <thead>
                  <tr className="sticky top-0">
                    <th className="  bg-[#D1EFE4] p-3">Equipment</th>
                    <th className="  bg-[#D1EFE4] p-3">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Framo/ Marflex", "✅"],
                    ["Cranes", "❌"],
                    ["Chemical Cargoes", "❌"],
                    ["Four Stroke ME", "✅"],
                    ["Two Stroke ME", "✅"],
                    ["Dual Fuel", "❌"],
                    ["US Visa", "❌"],
                    ["Europe Visa", "✅"],
                    ["Flag State Document", "✅"],
                    ["OPS4", "✅"],
                  ].map(([equipment, experience], index) => (
                    <tr key={index}>
                      <td className=" py-2 px-3">{equipment}</td>
                      <td className=" py-2 px-3">{experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sea Service Summary */}
          <div className=" rounded-lg shadow  text-center">
            <h2 className="bg-[#00A264] p-3 text-white text-lg font-bold  ">
              Sea Service Summary
            </h2>
            <div className="h-[26rem] overflow-y-auto">
              {" "}
              {/* Wrap the table in a scrollable div */}
              <table className="w-full">
                <thead>
                  <tr className="sticky top-0">
                    <th className=" bg-[#D1EFE4] p-3">Ship Type</th>
                    <th className="  bg-[#D1EFE4] p-3">Deadweight</th>
                    <th className="  bg-[#D1EFE4] p-3">Engine KW.</th>
                    <th className="  bg-[#D1EFE4] p-3">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bulker", "180,000", "500", "4M 5D"],
                    ["Tanker", "270,000", "1000", "1M 15D"],
                    ["Container", "52,000", "500", "6M 5D"],
                    ["DP1", "2589 TEU", "500", "5M 5D"],
                    ["Ship 1", "3200 TEU", "1000", "1M 1D"],
                    ["Ship 2", "3200", "1000", "4M"],
                    ["Ship 3", "98,000", "2500", "7M"],
                    ["Ship 4", "180,000", "1000", "6M 5D"],
                    ["Ship 5", "52,000", "500", "4M 5D"],
                    ["Ship 6", "3200 TEU", "1000", "5M 5D"],
                  ].map(([shipType, deadweight, engineKw, duration], index) => (
                    <tr key={index}>
                      <td className=" py-2 px-3 ">{shipType}</td>
                      <td className=" py-2 px-3">{deadweight}</td>
                      <td className=" py-2 px-3">{engineKw}</td>
                      <td className=" py-2 px-3">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* three box */}
      <div className="flex justify-between gap-x-14 items-center mt-8 mx-8">
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
            <h2 className="px-5 w-[15rem] py-2  font-semibold">
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
