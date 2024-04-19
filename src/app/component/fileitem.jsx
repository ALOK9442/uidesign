import React from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const FileItem = ({ id, name }) => {

  return (
    <div className="flex w-full justify-between items-center py-2">
      <div className='flex flex-col'>
        <p>
          {new Date().toDateString()}
        </p>
        <p className='text-xs'>
          {new Date().toLocaleTimeString()}
        </p>
      </div>
      <div className="flex items-center">
        <span className="mr-32">{name}</span>
      </div>
      <button className='mr-8'>
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </div>
  );
};

export default FileItem;
