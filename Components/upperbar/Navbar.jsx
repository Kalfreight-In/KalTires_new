// import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Navbar = () => {
  const router = useRouter();
  // console.log(`lolllllllllllllllll ${router.pathname}`);
  return (
    <nav className="bg-white">
      <div className="flexBetween z-10 mx-20  flex-row">
        <div className="ml-8 flex flex-row justify-start items-center cursor-pointer">
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
                  router.pathname === '/'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Home
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/AboutUs' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
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
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/WhatWeOffer' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
                  router.pathname === '/WhatWeOffer'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                What We Offer
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/Inventory' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
                  router.pathname === '/Inventory'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500'
                }  `}
              >
                Inventory
              </div>
            </div>
          </Link>
          <Link href="/RoadsideAssistance">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/RoadsideAssistance' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
                  router.pathname === '/RoadsideAssistance'
                    ? 'text-white font-bold group-hover:text-white'
                    : 'group-hover:text-red-500 '
                }  `}
              >
                Roadside Assistance
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/Locations' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`  ${
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
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/CreditApplication' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black  ${
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
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/career' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black  ${
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
      </div>
    </nav>
  );
};

export default Navbar;
