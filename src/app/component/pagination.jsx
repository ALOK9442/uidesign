import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      
    <div className="flex items-center justify-between space-x-12">
      <button
        className={`font-mono px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-700' : 'bg-[#f05222] text-white'}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        {'< Prev'}
      </button>
      <div className="flex space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-mono rounded ${
              currentPage === index + 1 ? 'bg-[#f05222] text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={`font-mono px-4 py-2 rounded ${
          currentPage === totalPages ? 'bg-gray-200 text-gray-700' : 'bg-[#f05222] text-white'
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        {'Next >'}
      </button>
    </div>
    </div>
  );
};

export default Pagination;
