// pages/recruiter/Monthly.js

"use client";
import { useState } from 'react';
import MonthlyTable from './MonthlyTable';

export default function Monthly() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleDownload = () => {
    console.log('Download button clicked');
  };

  return (
    <div className="h-[35rem] flex  ">
      <div className="fixed right-8 top-[75px]">
      {/* Flex container for the inputs and button */}
        <div className="flex space-x-4">

          {/* Date Input */}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 text-white bg-[#00A264] rounded-lg p-2"
          />

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-[#00A264] text-white px-4 py-2 rounded-lg"
          >
            Download
          </button>
        </div>
      </div>
      {/* Table */}
      <div className='w-[100%] h-[40rem] '>
          <MonthlyTable/>
      </div>
    </div>
  );
}
