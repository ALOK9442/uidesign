'use client'

import React from 'react';
import { useState } from 'react';
import Pagination from './component/Pagination';
import { dummyData } from './dummydata/dummydata';
import FileItem from './component/fileitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCheck, faCross, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 3;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col justify-between mx-auto p-4 bg-white rounded-lg w-[98%] shadow-2xl shadow-slate-300 text-black h-[660px] mt-2">
      <div>
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold mb-4">Recently Generated Reports</h1>
          <p className='flex space-x-3'>
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon icon={faXmarkSquare} />
          </p>
        </div>
        <div className='flex items-center justify-between bg-[#f5f5f5]'>
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
      <div className='flex flex-col items-center'>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
