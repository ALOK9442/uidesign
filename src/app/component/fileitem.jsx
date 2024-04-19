import React from 'react';

const FileItem = ({ id, name }) => {

  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="w-full">
        <div>{new Date().toDateString()}</div>
        <div className="flex items-center">
          <span className="mr-2">{name}</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6a2 2 0 012-2h4.586a1 1 0 01.707.293l5.414 5.414a1 1 0 010 1.414l-5.414 5.414a1 1 0 01-1.414-1.414L8.586 9H5a1 1 0 01-1-1V6zm3-4a4 4 0 00-4 4v7a2 2 0 002 2h1a1 1 0 010 2H2a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4h-1a1 1 0 110-2h1a6 6 0 016 6v7a6 6 0 01-6 6H5a6 6 0 01-6-6V6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileItem;
