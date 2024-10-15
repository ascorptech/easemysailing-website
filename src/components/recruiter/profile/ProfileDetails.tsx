"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { PiUploadSimpleBold } from "react-icons/pi";

const ProfileDetails = () => {
  const options = ["Ownership", "Ship Management", "Crew Management"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); 
  const [showPopup, setShowPopup] = useState(false); 
  const [showEditImagePopup, setShowEditImagePopup] = useState(false); 
  const [uploading, setUploading] = useState(false); 
  const [progress, setProgress] = useState(0); 
  const [fileName, setFileName] = useState(""); 
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState("/ml3x.png"); 

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    closeDropdown();
  };

  const openPopup = () => {
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
    setFilePreview(null); 
    setFileName(""); 
    setProgress(0); 
  };

  const openEditImagePopup = () => {
    setShowEditImagePopup(true); 
  };

  const closeEditImagePopup = () => {
    setShowEditImagePopup(false); 
    setFilePreview(null); 
    setFileName(""); 
    setProgress(0); 
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name); // Set file name

      const fileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      if (fileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string); 
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null); 
      }

      setUploading(true); 
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);  
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const triggerFileUpload = () => {
    document.getElementById("file-input")?.click();
  };

  const handleSubmitImageChange = () => {
    if (progress === 100 && filePreview) {
     
      setProfileImage(filePreview);

      
      closeEditImagePopup();
    }
  };

  const handleSubmit = () => {
    if (progress === 100 && fileName) {
     
      console.log("File submitted:", fileName);

      alert(`File "${fileName}" successfully uploaded.`);
      closePopup(); 
    }
  };

  return (
    <div className="w-[96%] justify-start items-center flex ml-7 my-5 border-2 shadow-lg rounded-lg">
      <div className=" h-28 w-36 border-2 items-center flex justify-center shadow-sm rounded-lg my-5 ml-6 p-1">
        <div className="relative h-24 w-32">
          <Image
            priority
            width={200}
            height={200}
            src={profileImage} 
            className="w-full h-full"
            alt={"Profile Image"}
          />
          {/* Edit profile image */}
          <div
            className="absolute ml-[6rem] top-0 right-0 cursor-pointer"
            onClick={openEditImagePopup} 
          >
            <Image
              priority
              width={20}
              height={20}
              src={"/edit.png"}
              className="w-6 h-6"
              alt={"Edit Image"}
            />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="flex flex-col ml-10 relative">
        <div className="flex">
          <div className="mt-[2px]">
            <Image
              priority
              width={20}
              height={20}
              src={"/bag.png"}
              className="w-5 h-5"
              alt={"Business Type"}
            />
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Business Type :</h3>
          </div>
          <div className="relative ml-2 inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 bg-[#00A264] text-sm font-medium text-white"
              id="options-menu"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              {selectedOption} 
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`} 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseLeave={closeDropdown}
              >
                <div className="py-1">
                  {options.map((option) => (
                    <a
                      key={option}
                      href="#"
                      onClick={() => handleOptionSelect(option)}
                      className="text-gray-700 hover:text-white block px-3 py-2 text-sm hover:bg-[#00A264]"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="mt-[2px]">
            <Image
              priority
              width={20}
              height={20}
              src={"/globe3.png"}
              className="w-5 h-5"
              alt={"Website"}
            />
          </div>
          <h3 className="ml-2 font-semibold">
            Website : <span className="font-normal">www.maerskline.com</span>
          </h3>
        </div>

        <div className="flex">
          <div className="mt-[2px]">
            <Image
              priority
              width={20}
              height={20}
              src={"/email.png"}
              className="w-5 h-5"
              alt={"Email"}
            />
          </div>
          <h3 className="ml-2 font-semibold">
            Email : <span className="font-normal">support@maerskline.com</span>
          </h3>
        </div>
      </div>
      {/* Upload Company Advertisement Button */}
      <div className="relative  right-0 ml-[32rem] p-2 mt-16 rounded-lg bg-[#00A264]">
        <button
          className="text-white flex items-center font-semibold"
          onClick={openPopup} 
        >
          <PiUploadSimpleBold className="mx-1" />
          Upload Company Advertisement
        </button>
      </div>

      {/* Upload Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-6 shadow-lg  w-[35rem]">
            <div className="text-right">
              <button className="text-[#00A264]" onClick={closePopup}>
                <IoIosCloseCircle className="w-8 h-8" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Upload Company Advertisement
            </h3>

            <div
              className="border-[#00A264] bg-[#E9FFF7] border-dashed flex flex-col justify-center items-center border-2 p-6 rounded-lg text-center cursor-pointer"
              onClick={triggerFileUpload}
            >
              <Image
                priority
                width={60}
                height={60}
                src={"/upload.png"}
                alt="Upload Icon"
              />
              <p className="text-gray-500 mt-3">Browse file to upload</p>

              <input
                type="file"
                className="hidden"
                id="file-input"
                onChange={handleFileUpload}
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-base font-semibold text-black">
                Only PDF, jpg, and image formats with max file size of 16MB
              </p>
            </div>

            {/* Show selected file name and preview */}
            {fileName && (
              <div className="mt-2 ">
                <p className="font-semibold">Selected File: <span className="font-normal">{fileName}</span></p>
                {filePreview && (
                  <div className="mt-2">
                    <Image
                      priority
                      height={20}
                      width={20}
                      src={filePreview}
                      alt="Selected Preview"
                      className="w-[10rem] h-[10rem] rounded-md"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Upload Progress Bar */}
            {uploading && (
              <div className=" flex justify-center items-center p-2 border bg-[#E9FFF7] shadow-md rounded-md">
                <div className="">
                    <Image
                      priority
                      height={20}
                      width={20}
                      src={"/file.png"}
                      alt="Selected Preview"
                      className="w-[10] h-[10] rounded-md"
                    />
                  </div>

                <div className="w-full mx-2 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#00A264] h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-600">{progress}%</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              className={`mt-6 w-full px-4 py-2 rounded-lg ${
                progress === 100 ? "bg-[#00A264]" : "bg-gray-400"
              } text-white font-semibold`}
              onClick={handleSubmit}
              disabled={progress !== 100}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Edit Image Popup */}
      {showEditImagePopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[35rem] flex flex-col justify-center items-center">
            <div className="ml-[32rem] -mt-4 ">
              <button className="text-[#00A264]" onClick={closeEditImagePopup}>
                <IoIosCloseCircle className="w-8 h-8" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Logo
            </h3>

            <div
              className="border-[#00A264] w-44 h-44 bg-[#E9FFF7] shadow-lg rounded-full flex flex-col justify-center items-center border-2 cursor-pointer overflow-hidden"
              onClick={triggerFileUpload}
            >
              {filePreview ? (
                <Image
                  priority
                  width={176} // To match the 44rem (44 * 4 = 176px)
                  height={176}
                  src={filePreview}
                  alt="Selected Preview"
                  className="object-fit w-full h-full rounded-full"
                />
              ) : (
                <div className="flex justify-center items-center relative">
                  <Image
                    priority
                    width={60}
                    height={60}
                    src={"/upload.png"}
                    alt="Upload Icon"
                    className="h-8 w-10 z-30"
                  />
                </div>
              )}
              <input
                type="file"
                className="hidden"
                id="file-input"
                onChange={handleFileUpload}
              />
            </div>

            {uploading && (
              <div className="mt-4 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#00A264] h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-600">{progress}%</p>
              </div>
            )}

            <button
              className={`mt-6 w-full px-4 py-2 rounded-lg ${
                progress === 100 ? "bg-[#00A264]" : "bg-gray-400"
              } text-white font-semibold`}
              onClick={handleSubmitImageChange}
              disabled={progress !== 100}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
