"use client";
import React, { useState } from "react";

export default function JobClosed() {
  const jobClosedData = [
    {
      id: 1,
      jobId: "BB 101",
      shipName: "Ship 1",
      rank: "Master",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by System",
      status: "---", 
    },
    {
      id: 2,
      jobId: "BB 102",
      shipName: "Ship 2",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "Will be available....", 
    },
    {
      id: 3,
      jobId: "BB 101",
      shipName: "Ship 3",
      rank: "Master",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "Because i was not....",  
    },
    {
      id: 4,
      jobId: "BB 102",
      shipName: "Ship 4",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by System",
      status: "----",  
    },
    {
      id: 5,
      jobId: "BB 101",
      shipName: "Ship 5",
      rank: "Master",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by System",
      status: "Because of my....",  
    },
    {
      id: 6,
      jobId: "BB 102",
      shipName: "Ship 6",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "The change in plan....",  
    },
    {
      id: 7,
      jobId: "BB 102",
      shipName: "Ship 7",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "----",  
    },
    {
      id: 8,
      jobId: "BB 101",
      shipName: "Ship 8",
      rank: "Master",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by System",
      status: "Because i was not.....",  
    },
    {
      id: 9,
      jobId: "BB 102",
      shipName: "Ship 9",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "----",  
    },
    {
      id: 10,
      jobId: "BB 101",
      shipName: "Ship 10",
      rank: "Master",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by User",
      status: "----",  
    },
    {
      id: 11,
      jobId: "BB 102",
      shipName: "Ship 11",
      rank: "Chief Officer",
      dateOfJoining: "2024-01-01",
      jobStatusTracking: "Closed by System",
      status: "----",  
    },
  ];

  const [jobs, setJobs] = useState(jobClosedData);

  return (
    <div className=" p-6 pt-2">
      <h1 className="text-xl font-bold mb-1">Job Listing</h1>{" "}
      {/* Prevents scrollbar on the main screen */}
      <div className="overflow-x-auto mt-2">
        <div className="max-h-[27.4rem] overflow-y-auto">
          {" "}
          {/* Scrollable table */}
          <table className="min-w-full text-center border-collapse border border-[#00A264]">
            <thead className="bg-[#00A264] text-white sticky top-0">
              <tr>
                <th className="py-2 px-4 border-b border-[#00A264]">S.No</th>
                <th className="py-2 px-4 border-b border-[#00A264]">Job ID</th>
                <th className="py-2 px-4 border-b border-[#00A264]">
                  Ship Name
                </th>
                <th className="py-2 px-4 border-b border-[#00A264]">Rank</th>
                <th className="py-2 px-4 border-b border-[#00A264]">
                  Closing Date
                </th>
                <th className="py-2 px-4 border-b border-[#00A264]">
                  Closed by
                </th>
                <th className="py-2 px-4 border-b border-[#00A264]">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id} className="bg-white text-base">
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {job.jobId}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264] text-[#00A264] underline cursor-pointer">
                    {job.shipName}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {job.rank}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {job.dateOfJoining}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {job.jobStatusTracking}
                  </td>
                  <td className="py-2 px-4 border-b border-[#00A264]">
                    {job.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
