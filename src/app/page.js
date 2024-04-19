'use client'

import React from 'react';
import { useState } from 'react';
import { dummyData } from './dummydata/dummydata';
import FileItem from './component/fileitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCheck, faCross, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import Pagination from './component/pagination';

const ITEMS_PER_PAGE = 3;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setItemsPerPage(selectedValue);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col justify-between mx-auto p-4 bg-white rounded-lg w-[98%] shadow-2xl shadow-slate-300 text-black h-[660px] mt-2">
      <div>
        <div className='flex justify-center '>
          <h1 className="text-2xl font-bold mb-4 ml-[35%]">Recently Generated Reports</h1>
          <p className='flex space-x-3 ml-auto'>
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon icon={faXmarkSquare} />
          </p>
        </div>
        <div className='font-mono flex items-center justify-between text-gray-500 bg-[#f5f5f5]'>
          <h3>Date</h3>
          <h3>Report Generated</h3>
          <h3>Download</h3>
        </div>
        <div className="flex flex-col justify-between items-center">
          {paginatedData.map((item) => (
            <FileItem key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
        <div className='flex items-center justify-center space-x-2'>
          <h3> Rows Per Page</h3>
          <select
            className="px-2 py-1 border border-gray-300 rounded-md"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
