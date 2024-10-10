"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

const jobData = [
  {
    id: 1,
    jobId: "BB 101",
    shipName: "Ship 1",
    rank: "Master",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: true,  
  },
  {
    id: 2,
    jobId: "BB 102",
    shipName: "Ship 2",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
  {
    id: 3,
    jobId: "BB 101",
    shipName: "Ship 3",
    rank: "Master",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: true,  
  },
  {
    id: 4,
    jobId: "BB 102",
    shipName: "Ship 4",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
  {
    id: 5,
    jobId: "BB 101",
    shipName: "Ship 5",
    rank: "Master",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: true,  
  },
  {
    id: 6,
    jobId: "BB 102",
    shipName: "Ship 6",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
  {
    id: 7,
    jobId: "BB 102",
    shipName: "Ship 7",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
  {
    id: 8,
    jobId: "BB 101",
    shipName: "Ship 8",
    rank: "Master",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: true,  
  },
  {
    id: 9,
    jobId: "BB 102",
    shipName: "Ship 9",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
  {
    id: 10,
    jobId: "BB 101",
    shipName: "Ship 10",
    rank: "Master",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: true,  
  },
  {
    id: 11,
    jobId: "BB 102",
    shipName: "Ship 11",
    rank: "Chief Officer",
    dateOfJoining: "2024-01-01",
    jobStatusTracking: "2024-01-01",
    status: false, 
  },
];

// Unified Modal Component
function JobModal({ isOpen, job, onClose, onSubmit, actionType }: any) {
  const [joiningDate, setJoiningDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white text-center p-6  relative rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col justify-center items-center">
          {/* Close Button */}
          <button className="absolute ml-[25rem] top-1 p-1" onClick={onClose}>
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
          <h2 className="text-xl font-bold text-center mb-4">
            {actionType === "activate"
              ? "Activating The Job"
              : "Deactivating the Job"}
          </h2>
        </div>

        {actionType === "activate" ? (
          <>
            <p className="mb-2">
              <span className="font-bold">{job.jobId}</span> Job will be marked
              as active.
            </p>
            <p className="mb-4">Kindly select the expected joining date.</p>
            <div className="mb-4">
              <input
                type="date"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </>
        ) : (
          <p className="mb-4">
            Are you sure you want to deactivate the job{" "}
            <span className="font-bold">{job.jobId}</span>?
          </p>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              if (actionType === "activate") {
                onSubmit(joiningDate);
              } else {
                onSubmit(); 
              }
            }}
            className="bg-[#00A264] text-white px-8 py-2 rounded-lg"
          >
            {actionType === "activate" ? "Submit" : "Yes"}
          </button>
          <button
            onClick={onClose}
            className="bg-[#D1EFE4] text-[#00A264] border border-[#00A264] px-8 py-2 rounded-lg"
          >
            {actionType === "activate" ? "Cancel" : "No"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JobListing() {
  const [jobs, setJobs] = useState(jobData);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<
    "activate" | "deactivate" | null
  >(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRank, setSelectedRank] = useState("");


  // for  Popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleCloseButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setReason(""); 
    setOtherReason(""); 
  };

  const handleSubmit = () => {
    console.log("Reason for closure:", reason);
    console.log("Other reason:", otherReason);
    setPopupOpen(false);
  };

  const openModalForActivation = (job: any) => {
    setSelectedJob(job);
    setActionType("activate");
    setIsModalOpen(true);
  };

  const openModalForDeactivation = (job: any) => {
    setSelectedJob(job);
    setActionType("deactivate");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setActionType(null);
  };

  const handleActivationSubmit = (joiningDate: string) => {
    if (selectedJob && selectedJob.id) {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === selectedJob.id
            ? { ...job, status: true, dateOfJoining: joiningDate }
            : job
        )
      );
    }
    closeModal();
  };

  const handleDeactivationSubmit = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (selectedJob && selectedJob.id) {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === selectedJob.id
            ? { ...job, status: false, jobStatusTracking: currentDate }
            : job
        )
      );
    }
    closeModal();
  };

  return (
    <div className="p-6 pt-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-1 mt-2">Job Listing</h1>
        </div>
        <div className="">
          {/* Flex container for the inputs and button */}
          <div className="flex space-x-3">
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
              <option value="">Date</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border h-[27.4rem] border-[#00A264] rounded-lg overflow-x-auto">
        <table className="min-w-full text-center border border-[#00A264] text-sm">
          <thead className="bg-[#00A264] text-white sticky top-0">
            <tr>
              <th className="py-2 px-4 border-b border-[#00A264]">S.No</th>
              <th className="py-2 px-4 border-b border-[#00A264]">Job ID</th>
              <th className="py-2 px-4 border-b border-[#00A264]">Ship Name</th>
              <th className="py-2 px-4 border-b border-[#00A264]">Rank</th>
              <th className="py-2 px-4 border-b border-[#00A264]">
                Date of Joining
              </th>
              <th className="py-2 px-4 border-b border-[#00A264]">
                Job Status Tracking
              </th>
              <th className="py-2 px-4 border-b border-[#00A264]">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="bg-white text-base">
                <td className="py-1 px-4 border-b border-[#00A264]">
                  {index + 1}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264]">
                  {job.jobId}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264] text-[#00A264] underline cursor-pointer">
                  {job.shipName}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264]">
                  {job.rank}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264]">
                  {job.dateOfJoining}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264]">
                  {job.jobStatusTracking}
                </td>
                <td className="py-1 px-4 border-b border-[#00A264]">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="border border-[#00A264] p-[1px] rounded-full">
                      <button
                        className={`px-7 py-[2px] rounded-full font-semibold transition-colors duration-300 ${
                          job.status
                            ? "bg-[#00A264] text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => openModalForActivation(job)}
                      >
                        Active
                      </button>

                      <button
                        className={`px-4 py-[2px] rounded-full font-semibold transition-colors duration-300 ${
                          !job.status
                            ? "bg-red-500 text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => openModalForDeactivation(job)}
                      >
                        Deactivate
                      </button>
                    </div>
                    <div>
                      <button
                        className="px-6 py-[4px] text-white rounded-full bg-[#00A264] font-semibold"
                        onClick={handleCloseButtonClick}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center text-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 flex flex-col justify-center items-center rounded shadow-lg w-[32rem]">
            {/* Close Button */}
            {/* <button className="absolute ml-[25rem] top-1 p-1" onClick={onClose}>
            <IoIosCloseCircle className="w-6 text-[#00A264] h-6 " />
          </button> */}

            <Image
              priority
              height={1000}
              width={1000}
              src={"/rpopup.png"}
              alt="image not found"
              className="w-36 h-36 text-center mb-5"
            />
            <h2 className="text-xl font-semibold">Marking Job Closed</h2>
            <p>
              The Job will be marked as closed and won’t be available for edits.
            </p>
            <p className="text-xl font-semibold">Reason for closure:</p>
            <div className="flex justify-center text-center items-center space-x-5">
              <label>
                <input
                  type="radio"
                  name="reason"
                  value="Job Filled by EMS"
                  checked={reason === "Job Filled by EMS"}
                  onChange={(e) => setReason(e.target.value)}
                />
                <span className=" ml-1  text-sm"> Job Filled by EMS</span>
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reason"
                  value="Job Filled by Other Sources"
                  checked={reason === "Job Filled by Other Sources"}
                  onChange={(e) => setReason(e.target.value)}
                />
                <span className="ml-1 text-sm">
                  Job Filled by Other Sources
                </span>
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reason"
                  value="Other"
                  checked={reason === "Other"}
                  onChange={(e) => setReason(e.target.value)}
                />
                <span className="text-sm ml-1">Other</span>
              </label>
            </div>
            {reason === "Other" && (
              <textarea
                placeholder="Enter The Reason"
                className="w-[95%] h-12   border bg-[#DAFFF1] border-green-300 rounded mt-3"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            )}
            <div className="flex justify-center items-center mt-4">
              <button
                className="px-9 py-2 text-white rounded mr-2 bg-[#00A264]"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="px-9 py-2 bg-[#D1EFE4] text-[#00A264] rounded border border-[#00A264]"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unified Modal */}
      {selectedJob && (
        <JobModal
          isOpen={isModalOpen}
          job={selectedJob}
          onClose={closeModal}
          onSubmit={
            actionType === "activate"
              ? handleActivationSubmit
              : handleDeactivationSubmit
          }
          actionType={actionType}
        />
      )}
    </div>
  );
}
