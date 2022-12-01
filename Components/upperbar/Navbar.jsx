// import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Link as SLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
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
const Navbar = ({ toggle, postion }) => {
  const [HomeMenuBar, SetHomeMenuBar] = useState(false);
  const [query, Setquery] = useState(false);
  const AboutusRef = useRef();
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const router = useRouter();

  useEffect(() => {
    Setquery(window.location.hash);

    if (postion.y < -786 && postion.y > -1403) {
      SetHomeMenuBar(true);
    } else {
      SetHomeMenuBar(false);
    }

    // console.log(
    //   `change in true or false
    //     ${postion.y} < '-787' && ${postion.y} > '-1403'
    //    ${HomeMenuBar}`
    // );
    // if (router.pathname === '/#AboutUs_Section') {
    // }
  }, [AboutusRef, postion]);
  return (
    <nav
      className={`bg-white sticky top-navbargap z-10 shadow-xl ${
        isDesktop ? '-mt-6' : ''
      } `}
    >
      <div className="flexBetween z-10 mx-12  flex-row">
        <div className="ml-8 hidden flex-row justify-start items-center cursor-pointer lg:flex">
          <Link href="/" passHref>
            <div
              className={`group border-solid  border-x 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/' && !HomeMenuBar ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm  ${
                  router.pathname === '/' && !HomeMenuBar
                    ? 'text-white  font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Home
              </div>
            </div>
          </Link>
          <Link href="/#AboutUs_Section" passHref>
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                query === '#AboutUs_Section' && HomeMenuBar ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  query === '#AboutUs_Section' && HomeMenuBar
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                About Us
              </div>
            </div>
          </Link>
          <Link href="/tires-services" passHref>
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

          <Link href="/roadside-assistance" passHref>
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/roadside-assistance' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
                  router.pathname === '/roadside-assistance'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500 '
                }  `}
              >
                Roadside Assistance
              </div>
            </div>
          </Link>
          <Link href="/locations" passHref>
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
          <Link href="/careers" passHref>
            <div
              className={`group border-solid  border-r 2xl:px-10 xl:px-8 lg:px-4 md:px-2 py-2 border-grey  ${
                router.pathname === '/careers' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={` 2xl:text-lg xl:text-md  lg:text-sm ${
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
