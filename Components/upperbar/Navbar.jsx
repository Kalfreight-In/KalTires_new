// import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Link as SLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
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
  const AboutusRef = useRef();
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/#AboutUs_Section') {
    }
  }, [AboutusRef]);
  return (
    <nav className="bg-white sticky top-navbargap z-10 shadow-xl">
      <div className="flexBetween z-10 mx-12  flex-row">
        <div className="ml-8 hidden flex-row justify-start items-center cursor-pointer lg:flex">
          <Link href="/">
            <div
              className={`group border-solid  border-x 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
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
          <Link href="/#AboutUs_Section">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/#AboutUs_Section' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/#AboutUs_Section'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                About Us
              </div>
            </div>
          </Link>
          <Link href="/tires-services">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/tires-services' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/tires-services'
                    ? 'text-white  font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Tires & Services
              </div>
            </div>
          </Link>

          <Link href="/24X7-roadside-assistance">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/24X7-roadside-assistance'
                  ? 'bg-red-500'
                  : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/24X7-roadside-assistance'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500 '
                }  `}
              >
                Roadside Assistance
              </div>
            </div>
          </Link>
          <Link href="/locations">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/locations' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/locations'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Locations
              </div>
            </div>
          </Link>
          {/* <a href="/credit-application">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/credit-application' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/credit-application'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Credit Application
              </div>
            </div>
          </a> */}
          <Link href="/careers">
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/careers' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black  2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/careers'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Careers
              </div>
            </div>
          </Link>
        </div>
        {/* <MobileIcon onClick={toggle} className="absolute z-30">
          <FaBars color="#fff" />
          <SidebarFr />
        </MobileIcon> */}
      </div>
    </nav>
  );
};

export default Navbar;
