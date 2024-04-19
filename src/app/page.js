'use client'

import React from 'react';
import { useState } from 'react';
import Pagination from './component/Pagination';
import { dummyData } from './dummydata/dummydata';
import FileItem from './component/fileitem';

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dummy Data</h1>
      <div className="grid grid-cols-1 gap-4">
        {paginatedData.map((item) => (
          <FileItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
