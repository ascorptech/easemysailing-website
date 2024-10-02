"use client";
import { useState } from 'react';
import TransactionViewTable from './TransactionViewTable';

export default function TransactionView() {
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
            className=" text-white bg-[#00A264] rounded-lg p-2"
          />

          {/* Dropdown */}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border bg-[#00A264] text-white  rounded-lg p-2"
          >
            <option value="">Status</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

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
          <TransactionViewTable/>
      </div>
    </div>
  );
}
