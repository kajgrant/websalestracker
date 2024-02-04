import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { selectUpdateStatus } from '../../slices/apiSlice';
import { useAppSelector } from '../../hooks';

function Status() {
  const updated = useAppSelector(selectUpdateStatus);

  return (
    <>
      <div className="flex flex-row ml-auto mr-0">
        <IconContext.Provider value={{ color: updated ? 'green' : 'red', className: 'global-class-name' }}>
          <div className="inline-flex items-baseline">
            <FaCircle />
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Status;