import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

import { GoLocation } from 'react-icons/go';
import { useStateContext } from '../../context/StateContext';

const TopUpbar = () => {
  const { location } = useStateContext();
  return (
    <div className="bg-tire-gray-3 ">
      <div className="flexBetween z-10 mx-20 p-3 flex-row">
        <Link href="/">
          <div className="flex flex-row flexCenter">
            <div className="text-white font-bold ml-8">
              {' '}
              {location.loaded
                ? JSON.stringify(location)
                : 'Location data not available yet.'}
            </div>
            <div className="ml-2 font-bold">
              <GoLocation color="white " />
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="text-white">Help</div>
        </Link>
      </div>
    </div>
  );
};

export default TopUpbar;
