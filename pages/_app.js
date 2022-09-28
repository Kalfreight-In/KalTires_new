// import Script from 'next/script';
import React, { useRef, useState } from 'react';
import Head from 'next/head';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Navbar, Footer, TopUpbar, Topbar } from '../Components';

import '../styles/globals.css';
import '../styles/Home.scss';
import '../styles/Customswiper.css';
import { StateContext } from '../context/StateContext';

import Sidebar from '../Components/Sidebar';
import ErrorBoundary from '../Components/ErrorBoundary';
import useMediaQuery from '../Hooks/CustomMediaQuery';
import BottomBar from '../Components/Bottombar';

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [PcurrPos, setPcurrPos] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const rendersCount = useRef(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      setPcurrPos(currPos);
    },
    [hideOnScroll],
    false,
    false,
    200
  );

  const isDesktop = useMediaQuery('(min-width:1148px)');
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" />
      </Head>

      <StateContext>
        {isDesktop ? <TopUpbar /> : null}

        <ErrorBoundary>
          <Sidebar isOpen={isOpen} toggle={toggle} />
        </ErrorBoundary>

        <Topbar toggle={toggle} postion={PcurrPos} />
        <ErrorBoundary>
          {' '}
          <Navbar toggle={toggle} />
        </ErrorBoundary>

        <Component {...pageProps} />
        <Footer />
        <BottomBar />
        {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}
      </StateContext>
    </>
  );
};

export default MyApp;
