import React, { useState } from "react";
import EmsCard from "./EmsCard";
import EmsDetail from "./EmsDetail";
import PaginationControls from "./PaginationControls/PaginationControls";

export default function EmsContain() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 6; // Number of items per page

  // Calculate total pages based on itemsPerPage
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle page navigation
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

  const onPageSelect = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex justify-between mx-5 gap-5">
        <div className="w-full">
          <EmsCard currentPage={currentPage} itemsPerPage={itemsPerPage} onTotalItems={setTotalItems} />
        </div>
        {/* right div */}
        <div className="border w-full shadow-2xl bg-white rounded-md">
          <EmsDetail />
        </div>
      </div>
      {/* Pagination controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        onPageSelect={onPageSelect}
      />
    </div>
  );
}
