// import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
export const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 1024px) {
    display: block;

    position: absolute;
    right: 0;
    top: 0.5rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    /* background-color: #fff; */
    color: #000;
    &.active {
      color: #000;
    }
  }
`;
const Navbar = ({ toggle }) => {
  const router = useRouter();

  return (
    <nav className="bg-white">
      <div className="flexBetween z-10 mx-20  flex-row">
        <div className="ml-8 hidden flex-row justify-start items-center cursor-pointer lg:flex">
          <Link href="/">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/'
                    ? 'text-white  font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Home
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/AboutUs' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/AboutUs'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                About Us
              </div>
            </div>
          </Link>
          <Link href="/WhatWeOffer">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/WhatWeOffer' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/WhatWeOffer'
                    ? 'text-white  font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                What We Offer
              </div>
            </div>
          </Link>

          <Link href="/RoadsideAssistance">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/RoadsideAssistance' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/RoadsideAssistance'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500 '
                }  `}
              >
                Roadside Assistance
              </div>
            </div>
          </Link>
          <Link href="/location">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/Locations' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/Locations'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Locations
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/CreditApplication' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/CreditApplication'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Credit Application
              </div>
            </div>
          </Link>
          <Link href="/career">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-3 border-grey  ${
                router.pathname === '/career' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black  2xl:text-lg xl:text-md  lg:text-sm${
                  router.pathname === '/career'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Career
              </div>
            </div>
          </Link>
        </div>
        <MobileIcon onClick={toggle} className="">
          <FaBars color="#111" />
          {/* <SidebarFr /> */}
        </MobileIcon>
      </div>
    </nav>
  );
};

export default Navbar;
