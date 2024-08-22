"use client";
// /components/MentoringList.tsx
import React, { useState } from "react";

interface VideoProps {
  id: string;
}

const PodcastList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per pag

  // Array of YouTube video IDs
  const videoData: VideoProps[] = [
    { id: "lm6CLMLSZBc" },
    { id: "WovyjecUtaU" },
    { id: "E7wJTI-1dvQ" },
    { id: "ZjAqacIC_3c" },
    { id: "kVddMV-TrSw" },
    { id: "FmerxXWD66g" },
    { id: "N4-EkNJ6RFM" },
    { id: "Vn4p4K6_M44" },
    { id: "yE_y4EBq-EA" },
    { id: "TVAF5Fr_2QA" },
    { id: "lm6CLMLSZBc" },
    { id: "WovyjecUtaU" },
    { id: "E7wJTI-1dvQ" },
    { id: "ZjAqacIC_3c" },
    { id: "kVddMV-TrSw" },
    { id: "FmerxXWD66g" },
    { id: "N4-EkNJ6RFM" },
    { id: "Vn4p4K6_M44" },
    { id: "yE_y4EBq-EA" },
    { id: "TVAF5Fr_2QA" },
    // Add more video IDs here...
  ];

  // Calculate total pages
  const totalPages = Math.ceil(videoData.length / itemsPerPage);

  // Get items for the current page
  const currentItems = videoData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-4 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="w-full border-4 rounded-lg border-black mb-8 h-[200px]"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.id}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="flex justify-center my-1">
              Cruise ship Interviews questions & answers !
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center text-sm mt-4 mb-4">
        <button
          onClick={handlePreviousPage}
          className="px-2 py-1 mr-2 bg-green-600 text-white rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-green-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          className="px-2 py-1 ml-2 bg-green-600 text-white rounded-lg"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PodcastList;
