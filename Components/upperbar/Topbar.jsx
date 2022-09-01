import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Navlogo from '../../Assets/Images/NavLogo.png';
import call from '../../Assets/Icons/call.png';

const Topbar = () => (
  <div className="bg-black">
    <div className=" xl:mx-20 mx-8  flexBetween z-10   p-3 flex-row">
      <div className=" ml-0 flex-1 flex flex-row justify-start items-center ">
        <Image
          src={Navlogo}
          alt="place"
          objectFit="contain"
          className="cursor-pointer"
          height={70}
        />
        <div className="pt-2 relative ml-8 mx-auto text-gray-600 hidden lg:block">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-36 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <FaSearch color="red" />
          </button>
        </div>
        <div className="text-white flex-1 justify-end hidden lg:flex ">
          <div className="pr-2">
            <Image
              src={call}
              alt="call"
              objectFit="contain"
              className="cursor-pointer"
            />
            {/* <MdOutlineMessage size={50} className="-rotate-180" color="red" /> */}
          </div>
          <div>
            <div className="font-bold">TollFree Number </div>
            <div className=""> 800-808-0025</div>
          </div>
        </div>
        {/* <div className="text-white">Search</div> */}
      </div>
    </div>
  </div>
);

export default Topbar;
