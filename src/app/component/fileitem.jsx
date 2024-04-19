import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const FileItem = ({ id, name }) => {
  const currentDate = new Date();
  const date = currentDate.toDateString();
  const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}).toLowerCase(); 

  return (
    <div className="flex w-full justify-between items-center py-2">
      <div className='flex flex-col'>
        <p>{date}</p>
        <p className='text-xs'>{time}</p>
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
