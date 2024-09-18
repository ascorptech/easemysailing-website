"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { X } from "lucide-react";
import { FaStar } from "react-icons/fa";

const ProfileCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [ratings, setRatings] = useState({
    teamCollaboration: 0,
    teamEnhancement: 0,
    problemResolution: 0,
    communication: 0,
    attitude: 0,
    acceptability: 0,
  });

  const [date, setDate] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleRating = (key: string, value: number) => {
    setRatings({ ...ratings, [key]: value });
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddClick = () => {
    setIsPopupOpen(true);
  };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update state or send to backend)
    console.log("Form Submitted:");
    setIsPopupOpen(false); // Close the popup after submission
  };



  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="   mt-3  px-9">
      <div className="flex  justify-between border-2 py-2 px-4">
        <div className="flex gap-2">
          <div className="w-[115.32px] h-[128.85px] border p-2">
            <Image
              src="/images/candidate/profileCv/profile.png"
              alt="image not found"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-semibold text-[24px] leading-[36px]">
              Robin Smith
            </h1>
            <p className="text-[#00A264] font-medium text-[16px] leading-[24px]">
              Captain
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/images/candidate/profileCv/user.png"
                alt="logo not found"
                width={30}
                height={30}
                className="object-contain w-[24px] h-[24px]"
              />
              <p className="font-semibold text-[15px] leading-[21px]">
                About :
                <span className="font-normal ml-1 text-[15px] leading-[21px]">
                  Lorem Ipsum is simply dummy text of
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/candidate/profileCv/vector1.png"
                alt="logo not found"
                width={30}
                height={30}
                className="object-contain w-[24px] h-[24px]"
              />
              <p className="font-semibold text-[15px] leading-[21px]">
                Email :
                <span className="ml-1 font-normal text-[15px] leading-[21px]">
                  Lorem Ipsum is simply dummy text of
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex  gap-2">
            {" "}
            <Image
              src="/images/candidate/profileCv/Vector.png"
              alt=""
              width={200}
              height={200}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              Availability :{" "}
              <span className="ml-1 font-normal text-[15px] leading-[21px]">
                Available
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <Image
              src="/images/candidate/profileCv/Group.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px]"
            />
            <div className="flex items-center justify-center ">
              <p className="font-semibold text-[15px] leading-[21px]">
                Current Status :
              </p>
              <p
                className="flex items-center justify-center ml-2 bg-[#00A264] p-1 px-2 rounded-lg text-white font-normal  text-[15px] leading-[18px] "
                onClick={handletoggle}
              >
                On Leave
                {/* <RiArrowDownSLine className="text-2xl " /> */}
                <span className="ml-2 ">
                  {isOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </p>

              {isOpen && (
                <div className="fixed bg-black  bg-opacity-10 rounded-lg flex mt-32 ml-28 justify-center items-center z-50">
                  <div className="border  shadow-lg p-2 pl-3 rounded-lg bg-white text-[14px] leading-[20px] ">
                    <p>On board</p>
                    <p>On leave</p>
                    <p>Ready for joining</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <Image
              src="/images/candidate/profileCv/zondicons_time.png"
              alt=""
              width={50}
              height={50}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              Total Seagoing Time(months) :{" "}
              <span className="font-normal text-[15px] leading-[18px] ">
                2 Months
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            {" "}
            <Image
              src="/images/candidate/profileCv/star-rate.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              3.6 |{" "}
              <span className="font-normal text-[15px] leading-[18px]">
                1K+ reviews
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <Link
            href="#"
            className="rounded-lg  bg-[#00A264] flex p-2 px-4 text-white"
          >
            <Image
              src="/images/candidate/profileCv/import-line.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px] "
            />{" "}
            Import CV
          </Link>

          <Link href="#"
            
            className="rounded-lg p-2 text-white bg-[#00A264] mt-2"
          onClick={handleAddClick} >
            Rate Employer
          </Link>
        </div>
      </div>



       {/* Popup Form */}
       {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px] ">
            <button className="absolute top-2 right-2 bg-[#00A264] text-white  rounded-full">
              <X size={20} onClick={handleClosePopup} />
            </button>
            <h2 className="text-center text-[24px] leading-[36px] font-bold mt-2 mb-4">
              Rate your previous employer
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-[16px] leading-[21.79px] font-semibold mb-2 ">
                  1. Enter your Signoff Date
                </label>
                <input
                  type="date"
                  className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                {[
                  {
                    label: "2. Please rate your Team Collaboration",
                    key: "teamCollaboration",
                  },
                  {
                    label: "3. Please rate your Team Enhancement",
                    key: "teamEnhancement",
                  },
                  {
                    label: "4. Please rate your Problem Resolution",
                    key: "problemResolution",
                  },
                  {
                    label: "5. Please rate your Effective Communication",
                    key: "communication",
                  },
                  { label: "6. Please rate your Attitude", key: "attitude" },
                  {
                    label:
                      "7. Please rate your Acceptability for next employment",
                    key: "acceptability",
                  },
                ].map(({ label, key }, index) => (
                  <div key={index} className="flex flex-col mb-1 ">
                    <label className="text-[16px] leading-[21.79px] font-semibold mb-2">
                      {label}
                    </label>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`cursor-pointer ${
                            ratings[key as keyof typeof ratings] > i
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => handleRating(key, i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Input */}
              <div className="flex flex-col mb-2 mt-2">
                {/* <label className="text-[16px] leading-[21.79px] font-semibold mb-2"></label> */}
                <textarea
                  className="border p-2 bg-[#DAFFF1] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[#333333]"
                  rows={2}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter your Feedback"
                />
              </div>
              <div className="mb-2  ">
                <Link
                  href={"#"}
                  type="submit"
                  className=" block w-full text-center px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCV;
