"use client"
import { useState } from 'react';

export default function JobListing() {
  const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Job Listing</h1>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">S.No</th>
              <th className="py-3 px-4">Job ID</th>
              <th className="py-3 px-4">Ship Name</th>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Date of Joining</th>
              <th className="py-3 px-4">Job Status Tracking</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">BB 101</td>
              <td className="py-3 px-4 text-blue-500 underline cursor-pointer">Ship 1</td>
              <td className="py-3 px-4">Master</td>
              <td className="py-3 px-4">13 Feb 2024</td>
              <td className="py-3 px-4">10 Jul 2023</td>
              <td className="py-3 px-4">
                <div className="flex items-center space-x-2">
                  <button
                    className={`px-4 py-1 rounded-full font-semibold text-white ${
                      isActive ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={toggleStatus}
                    className={`px-4 py-1 rounded-full font-semibold text-white ${
                      isActive ? 'bg-red-500' : 'bg-gray-400'
                    }`}
                  >
                    Deactivate
                  </button>
                  <button className="px-4 py-1 rounded-full bg-gray-300 font-semibold">Close</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
