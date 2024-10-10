"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

const ShipForm = () => {
  const [shipForms, setShipForms] = useState([1]); // Handles the tabs (form indexes)
  const [activeForm, setActiveForm] = useState(1); //
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const [showJobModal, setShowJobModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Control popup visibility for Company Advertisement
  const [progress, setProgress] = useState(0); // Simulated upload progress
  const [fileName, setFileName] = useState(""); // Store uploaded file name
  const [filePreview, setFilePreview] = useState<string | null>(null); // Store file preview
  const [uploading, setUploading] = useState(false); // For showing upload progress

  const [showJobPostings, setShowJobPostings] = useState(true);
  const [activeJobForm, setActiveJobForm] = useState("Manual Entry");
  // const addNewShip = () => {
  //   const newFormIndex = shipForms.length + 1;
  //   setShipForms((prev) => [...prev, newFormIndex]);
  //   setActiveForm(newFormIndex);
  // };
  const triggerFileUpload = () => {
    document.getElementById("file-input")?.click();
  };

  const openPopup = () => {
    setShowPopup(true); // Open the Company Advertisement popup
  };

  const simulateUpload = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false); // Hide upload progress after completion
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name); // Set file name

      // Only preview images (jpg, png, etc.)
      const fileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      if (fileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string); // Set file preview
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null); // Set null if the file is not an image
      }

      setUploading(true); // Start upload progress
      simulateUpload(); // Simulate upload progress
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
    setFilePreview(null); // Reset file preview on popup close
    setFileName(""); // Reset file name on popup close
    setProgress(0); // Reset progress
  };

  const handleJobClose = () => {
    setShowJobModal(false);
    setShowJobPostings(true);
    // setShowModal(true);
  };

  const handleJobModel = () => {
    setShowJobModal(true);
  };

  const addNewShip = () => {
    setShipForms([...shipForms, shipForms.length + 1]);
  };

  const deleteShip = (formIndex: number) => {
    setShipForms(shipForms.filter((_, index) => index !== formIndex));

    if (activeForm === formIndex && shipForms.length > 1) {
      setActiveForm(shipForms[0]);
    }
  };

  const handleTabClick = (formName: any) => {
    setActiveJobForm(formName);
  };

  const handleUpldSubmit = () => {
    if (progress === 100 && fileName) {
      console.log("File submitted:", fileName);

      alert(`File "${fileName}" successfully uploaded.`);
      closePopup(); // Close the popup after submission
    }
  };

  const handleSubmit = () => {
    // Hide the job postings section when submit is clicked
    setShowJobPostings(true);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowJobPostings(false);
  };

  const switchForm = (formIndex: SetStateAction<any>) => {
    setActiveForm(formIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      {/* Set up a 2-column grid layout */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left column: Ship form */}
        <div className="bg-white p-2 w-[115%] rounded-lg shadow-md">
          {/* Ship tabs */}
          <div className="flex space-x-2 mb-4 justify-between ">
            <div className="flex space-x-2 overflow-x-auto">
              {shipForms.map((formIndex) => (
                <div key={formIndex} className="flex items-center space-x-2">
                  <button
                    key={formIndex}
                    className={`px-2 py-2 border border-[#00A264] rounded-lg min-w-[90px] h-[40px] ${
                      activeForm === formIndex
                        ? "bg-[#00A264] text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => switchForm(formIndex)}
                  >
                    Ship {formIndex}
                  </button>
                  {/* Delete Button */}
                  {/* <button
                    className="px-2 py-2 text-white bg-red-500 rounded-lg h-[40px]"
                    onClick={() => deleteShip(formIndex)}
                  >
                    Delete
                  </button> */}
                </div>
              ))}
            </div>

            <div>
              <button
                className="flex items-center px-4 py-2 bg-[#00A264] text-white rounded-lg min-w-[170px] h-[40px]"
                onClick={addNewShip}
              >
                <IoIosAddCircleOutline className="text-white mr-1" />
                Add New Ship
              </button>
            </div>
          </div>

          {/* Active Ship Form */}
          {shipForms.map((formIndex) =>
            activeForm === formIndex ? (
              <div key={formIndex} className="p-4 bg-[#ABE0CC] rounded-lg">
                <h2 className="text-lg font-bold">Particular</h2>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  {/* Particular */}
                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="Ship 1"
                      required
                    />
                  </div>

                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="Bulker"
                      required
                    />
                  </div>

                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="Panama"
                      required
                    />
                  </div>

                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="90000"
                      required
                    />
                  </div>

                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="Worldwide"
                      required
                    />
                  </div>

                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="date"
                    >
                      {/* Select Date */}
                    </label>
                    <input
                      id="date"
                      type="date"
                      // value={selectedDate}
                      // onChange={(e) => setSelectedDate(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      required
                    />
                  </div>
                </div>

                {/* Machinery */}
                <h2 className="text-lg font-bold mt-3">Machinery</h2>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  {/* Particular */}
                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        ME Engine
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        B&W
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Yes
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Yanmar
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        No
                      </option>
                    </select>
                  </div>
                </div>

                {/* Cargo */}
                <h2 className="text-lg font-bold mt-3">Cargo</h2>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  {/* Particular */}
                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        N/A
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Bulk
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        No
                      </option>
                    </select>
                  </div>
                </div>

                {/* Ship's Manning */}

                <h2 className="text-lg font-bold mt-3">Ship's Manning</h2>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="   ">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainingC"
                    >
                      {/* Company Name */}
                    </label>
                    <input
                      id="trainingC"
                      type="text"
                      // value={cmpName}
                      // onChange={(e) => setCmpname(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                      placeholder="21"
                      required
                    />
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Indian
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        USA
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333] "
                      htmlFor="trainings"
                    >
                      {/* Company Type */}
                    </label>
                    <select
                      id="trainings"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      name="options"
                      // value={cmpType}
                      // onChange={(e) => setCmpType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Yes
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null
          )}

          <button
            onClick={handleSubmit}
            className="mt-6 w-[12rem] ml-[18rem] text-center bg-[#00A264] text-white p-3 rounded-lg"
          >
            Submit
          </button>

          {/* Modal for submission confirmation */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 flex flex-col items-center rounded-lg shadow-md text-center">
                {/* Close Button */}
                <button
                  className="absolute ml-[25rem] -mt-5 p-1"
                  onClick={handleClose}
                >
                  <IoIosCloseCircle className="w-6 text-[#00A264] h-6 " />
                </button>

                <Image
                  priority
                  height={1000}
                  width={1000}
                  src={"/rpopup.png"}
                  alt="image not found"
                  className="w-36 h-36 text-center mb-5"
                />
                <h2 className="text-2xl font-bold mb-4">Update Completed</h2>
                <p>You have successfully completed the ship details.</p>
                <p>Pleasee fill in the complement section.</p>

                <div className="mt-4">
                  <button
                    className="w-[25rem] text-lg py-2 bg-[#00A264] text-white rounded-md"
                    onClick={handleCloseModal}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Image section */}
        <div className="relative flex w-[82%] ml-32 items-center justify-center ">
          {/* <div className=" w-[100%] h-full border rounded-lg shadow-lg bg-white"> */}

          {/* Opacity div */}
          {showJobPostings && (
            <div
              className={`bg-[#D9D9D9BD] text-xl rounded-lg text-center flex justify-center items-center absolute h-full w-full`}
            >
              <h2 className="text-xl px-5 font-bold">
                Please complete the Ship details on the left to proceed with Job
                Postings
              </h2>
            </div>
          )}

          <div className=" w-[100%] h-full border  rounded-lg shadow-lg bg-white ">
            {/* Header */}
            <div className="  bg-[#00A264] text-white  py-2 rounded-t-lg">
              <h1 className="text-lg text-center font-semibold">
                SHIP 1 - Job Postings
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex justify-between">
              <div className="flex space-x-2  p-2 rounded-b-lg">
                <button
                  className={`${
                    activeJobForm === "Specific Crew"
                      ? "bg-[#00A264] text-white"
                      : "bg-white text-[#00A264]"
                  } border border-[#00A264] px-3 py-1 rounded`}
                  onClick={() => handleTabClick("Specific Crew")}
                >
                  Specific Crew
                </button>

                <button
                  className={`${
                    activeJobForm === "Full Crew"
                      ? "bg-[#00A264] text-white"
                      : "bg-white text-[#00A264]"
                  } border border-[#00A264] px-3 py-1 rounded`}
                  onClick={() => handleTabClick("Full Crew")}
                >
                  Full Crew
                </button>

                <button
                  className={`${
                    activeJobForm === "Manual Entry"
                      ? "bg-[#00A264] text-white"
                      : "bg-white text-[#00A264]"
                  } border border-[#00A264] px-3 py-1 rounded`}
                  onClick={() => handleTabClick("Manual Entry")}
                >
                  Manual Entry
                </button>
              </div>

              <div className="flex space-x-2  p-2 rounded-b-lg">
                <button
                  onClick={openPopup}
                  className="bg-white flex justify-center  items-center border border-[#00A264] px-1 py-1 rounded text-[#00A264]"
                >
                  <FiUpload className="mr-1" />
                  IMO Crew List
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
                      onClick={triggerFileUpload} // Trigger file input when icon is clicked
                    >
                      <Image
                        priority
                        width={60}
                        height={60}
                        src={"/upload.png"}
                        alt="Upload Icon"
                      />
                      <p className="text-gray-500 mt-3">
                        Browse file to upload
                      </p>

                      <input
                        type="file"
                        className="hidden"
                        id="file-input"
                        onChange={handleFileUpload}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-base font-semibold text-black">
                        Only PDF, jpg, and image formats with max file size of
                        16MB
                      </p>
                    </div>

                    {/* Show selected file name and preview */}
                    {fileName && (
                      <div className="mt-2 ">
                        <p className="font-semibold">
                          Selected File:{" "}
                          <span className="font-normal">{fileName}</span>
                        </p>
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
                        <p className="text-sm mt-1 text-gray-600">
                          {progress}%
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      className={`mt-6 w-full px-4 py-2 rounded-lg ${
                        progress === 100 ? "bg-[#00A264]" : "bg-gray-400"
                      } text-white font-semibold`}
                      onClick={handleUpldSubmit}
                      disabled={progress !== 100}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="overflow-y-auto max-h-[622px]  mx-1 ">
              {/* Specific Crew Form */}
              {activeJobForm === "Specific Crew" && (
                <div>
                  <table className="w-full table-auto border-collapse  border-[#00A264] border">
                    <thead>
                      <tr className="bg-[#ABE0CC] text-center ">
                        <th className="p-2 border-b border-[#00A264]">
                          Publish Job
                        </th>
                        <th className="p-2 border-b border-[#00A264]">Rank</th>
                        <th className="p-2 border-b border-[#00A264]">
                          Joining Date
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Array(15)
                        .fill("")
                        .map((_, index) => (
                          <tr
                            key={index}
                            className="hover:bg-green-50 border-[#00A264] border"
                          >
                            <td className="p-2 border-b  border-[#00A264] text-center">
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-[#00A264]"
                              />
                            </td>
                            <td className="p-2 text-center border-b border-[#00A264]">
                              <select className="form-select   border border-green-300 rounded">
                                <option>Select</option>
                                {/* Add other options here */}
                              </select>
                            </td>
                            <td className="p-2 border-b border-[#00A264] text-center">
                              <input
                                type="date"
                                className="form-input  border border-green-300 rounded"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Full Crew form */}
            <div className="overflow-y-auto max-h-[622px]  mx-1 ">
              {activeJobForm === "Full Crew" && (
                <div>
                  <table className="w-full table-auto border-collapse  border-[#00A264] border">
                    <thead>
                      <tr className="bg-[#ABE0CC] text-center ">
                        <th className="p-2 border-b border-[#00A264]">
                          Publish Job
                        </th>
                        <th className="p-2 border-b border-[#00A264]">Rank</th>
                        <th className="p-2 border-b border-[#00A264]">
                          Joining Date
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Array(15)
                        .fill("")
                        .map((_, index) => (
                          <tr
                            key={index}
                            className="hover:bg-green-50  border-[#00A264] border"
                          >
                            <td className="p-2 border-b border-[#00A264] text-center">
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-[#00A264]"
                              />
                            </td>
                            <td className="p-2 text-center border-b border-[#00A264]">
                              <select className="form-select   border border-green-300 rounded">
                                <option>Select</option>
                                {/* Add other options here */}
                              </select>
                            </td>
                            <td className="p-2 border-b border-[#00A264] text-center">
                              <input
                                type="date"
                                className="form-input  border border-green-300 rounded"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Manual Entry Form */}
            <div className="overflow-y-auto max-h-[622px]  mx-1 ">
              {activeJobForm === "Manual Entry" && (
                <div>
                  <table className="w-full table-auto border-collapse  border-[#00A264] border">
                    <thead>
                      <tr className="bg-[#ABE0CC] text-center ">
                        <th className="p-2 border-b border-[#00A264]">
                          Publish Job
                        </th>
                        <th className="p-2 border-b border-[#00A264]">Rank</th>
                        <th className="p-2 border-b border-[#00A264]">
                          Joining Date
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Array(15)
                        .fill("")
                        .map((_, index) => (
                          <tr
                            key={index}
                            className="hover:bg-green-50  border-[#00A264] border"
                          >
                            <td className="p-2 border-b border-[#00A264] text-center">
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-[#00A264]"
                              />
                            </td>
                            <td className="p-2 text-center border-b border-[#00A264]">
                              <select className="form-select   border border-green-300 rounded">
                                <option>Select</option>
                                {/* Add other options here */}
                              </select>
                            </td>
                            <td className="p-2 border-b border-[#00A264] text-center">
                              <input
                                type="date"
                                className="form-input  border border-green-300 rounded"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center my-4">
              <button
                onClick={handleJobModel}
                className="mt-2 w-[12rem] ml-[1rem] text-center bg-[#00A264] text-white p-3 rounded-lg"
              >
                Submit
              </button>

              {/* Modal for submission confirmation */}
              {showJobModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 flex flex-col items-center rounded-lg shadow-md text-center">
                    {/* Close Button */}
                    <button
                      className="absolute ml-[25rem] -mt-5 p-1"
                      onClick={handleJobClose}
                    >
                      <IoIosCloseCircle className="w-6 text-[#00A264] h-6 " />
                    </button>

                    <Image
                      priority
                      height={1000}
                      width={1000}
                      src={"/rpopup.png"}
                      alt="image not found"
                      className="w-36 h-36 text-center mb-5"
                    />
                    <h2 className="text-2xl font-bold mb-4">
                      Update Completed
                    </h2>
                    <p>You have successfully completed the ship details.</p>
                    <p>Pleasee fill in the complement section.</p>

                    <div className="mt-4">
                      <button
                        className="w-[25rem] text-lg py-2 bg-[#00A264] text-white rounded-md"
                        onClick={handleJobClose}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipForm;
