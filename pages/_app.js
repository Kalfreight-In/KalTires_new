// import Script from 'next/script';
import React, { useState } from 'react';
import { Navbar, Footer, TopUpbar, Topbar } from '../Components';
import '../styles/globals.css';
import '../styles/Home.scss';
import { StateContext } from '../context/StateContext';
import Sidebar from '../Components/Sidebar';
import ErrorBoundary from '../Components/ErrorBoundary';

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StateContext>
      <TopUpbar />
      <ErrorBoundary>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </ErrorBoundary>

      <Topbar />
      <ErrorBoundary>
        {' '}
        <Navbar toggle={toggle} />
      </ErrorBoundary>

      <Component {...pageProps} />
      <Footer />
      {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}
    </StateContext>
  );
};

export default MyApp;
