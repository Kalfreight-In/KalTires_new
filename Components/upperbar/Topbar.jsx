import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaSearch } from 'react-icons/fa';
import Navlogo from '../../Assets/Images/NavLogo.png';
import call from '../../Assets/Icons/call.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { MobileIcon } from './Navbar';
import { findMyLocation } from '../../HelpFunctions/findMyLocation';
import { useStateContext } from '../../context/StateContext';

const Topbar = ({ toggle }) => {
  const { setUserLocation } = useStateContext();
  useEffect(() => {
    findMyLocation(setUserLocation);
  }, []);
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div className={`bg-black ${isDesktop ? '' : 'fixed z-30 w-full'}`}>
      <div className=" xl:mx-12 mx-8  flexBetween z-10   p-3 flex-row">
        <div className=" ml-0 flex-1 flex flex-row justify-start items-center ">
          <Image
            src={Navlogo}
            alt="place"
            objectFit="contain"
            className="cursor-pointer"
            height={55}
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
          <a
            className="text-white flex-1 justify-end hidden lg:flex "
            href="tel:8009770010"
          >
            <div className="pr-2 flex flexCenter">
              <Image
                src={call}
                alt="call"
                objectFit="contain"
                className="cursor-pointer"
                height={30}
              />
              {/* <MdOutlineMessage size={50} className="-rotate-180" color="red" /> */}
            </div>
            <div>
              <div className="font-bold">Toll Free</div>
              <div className=""> 800-808-0025</div>
            </div>
          </a>
          {/* <div className="text-white">Search</div> */}
        </div>
      </div>
      <MobileIcon onClick={toggle} className="absolute z-30">
        <FaBars color="#fff" />
        {/* <SidebarFr /> */}
      </MobileIcon>
    </div>
  );
};

export default Topbar;
