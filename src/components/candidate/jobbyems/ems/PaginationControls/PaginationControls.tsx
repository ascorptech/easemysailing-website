import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onPageSelect: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
  onPageSelect,
}) => {
  const pagesToShow = 5; // How many pages to show at a time
  const currentRangeStart =
    Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const currentRangeEnd = Math.min(
    currentRangeStart + pagesToShow - 1,
    totalPages
  );

  const pageRange = (from: number, to: number) => {
    const range = [];
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
    return range;
  };

  const pageNumbers = pageRange(currentRangeStart, currentRangeEnd);

  return (
    <div className="flex justify-center items-center text-sm mt-5 mb-4">
      {/* Previous Button */}
      <button
        onClick={onPreviousPage}
        className={`px-2 py-1 mr-2 rounded-lg ${
          currentPage === 1
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-green-600 text-white"
        }`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageSelect(page)}
          className={`px-3 py-1  mx-2 rounded-md border border-[#00A264] ${
            page === currentPage
              ? "bg-[#00A264] text-white"
              : "bg-white text-[#00A264] "
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={onNextPage}
        className={`px-2 py-1 ml-2 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-green-600 text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
