import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

import Navlogo from '../../Assets/Images/NavLogo.png';
import LiveChat from '../../Assets/Icons/live_chat-icon.png';

const Topbar = () => (
  <div className="bg-black">
    <div className="flexBetween z-10 mx-20 p-3 flex-row">
      <div className="ml-8 flex-1 lg:flex flex-row justify-start items-center hidden">
        <Image
          src={Navlogo}
          alt="place"
          objectFit="contain"
          className="cursor-pointer"
        />
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <FaSearch color="red" />
          </button>
        </div>
        {/* <div className="text-white">Search</div> */}
      </div>

      <div className="text-white flex flex-1 justify-end">
        <div className="pr-2">
          <Image
            src={LiveChat}
            alt="LiveChat"
            objectFit="contain"
            className="cursor-pointer"
          />
          {/* <MdOutlineMessage size={50} className="-rotate-180" color="red" /> */}
        </div>
        <div>
          <div className="font-bold">Live Chat</div>
          <div className="">Chat with experts</div>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
