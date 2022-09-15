import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Navlogo from '../../Assets/Images/NavLogo.png';
import call from '../../Assets/Icons/call.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { MobileIcon } from './Navbar';
import { findMyLocation } from '../../HelpFunctions/findMyLocation';
import { useStateContext } from '../../context/StateContext';

const Topbar = ({ toggle }) => {
  const { setUserLocation, setCurrentlatlong } = useStateContext();
  useEffect(() => {
    findMyLocation(setUserLocation, setCurrentlatlong);
  }, []);
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div
      className={`bg-black sticky top-0 z-10 ${
        isDesktop ? '' : 'fixed z-30 w-full'
      }`}
    >
      <div className=" xl:mx-2 mx-1  flexBetween z-10   p-3 flex-row">
        <div className=" ml-0 flex-1 flex flex-row justify-start items-center ">
          <Link href="/" passHref>
            <Image
              src={Navlogo}
              alt="place"
              objectFit="contain"
              className="cursor-pointer"
              height={55}
            />
          </Link>
          {/* <div className="pt-2 relative ml-8 mx-auto text-gray-600 hidden lg:block">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-36 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <FaSearch color="red" />
            </button>
          </div> */}
          <div
            className="text-white flex-1 justify-end hidden lg:flex "
            href="tel:800-808-0025"
          >
            <a
              href="tel:800-808-0025"
              className="pr-2 flex flexCenter cursor-pointer"
            >
              <Image src={call} alt="call" objectFit="contain" height={30} />

              {/* <MdOutlineMessage size={50} className="-rotate-180" color="red" /> */}
            </a>
            <a href="tel:800-808-0025" className="cursor-pointer pr-2">
              <div>
                <div className="font-bold">Toll Free</div>
                <div className=""> 800-808-0025</div>
              </div>
            </a>
          </div>
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
