"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const ProfileCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
  });


  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddClick = () => {
    setIsPopupOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update state or send to backend)
    console.log("Form Submitted:", formData);
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
                <div className="border shadow-lg p-2 rounded-lg">
                  <p>On board</p>
                  <p>On leave</p>
                  <p>Ready for joining</p>
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] h-[500px]">
            <h2 className="text-xl font-bold mt-6 mb-4">Add Podcast</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter image URL"
                />
              </div> */}
              <div className="mb-4 ">
                {/* <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter title"
                /> */}
              </div>
              <div className="mb-4">
                {/* <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 h-36 border border-gray-300 rounded"
                  placeholder="Enter video link"
                /> */}
              </div>
              <div className="flex justify-end space-x-4">
                <Link
                  href={"#"}
                  type="button"
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </Link>
                <Link
                  href={"#"}
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded "
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
