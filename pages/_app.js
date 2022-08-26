// import Script from 'next/script';
import React from 'react';
import { Navbar, Footer, TopUpbar, Topbar } from '../Components';
import '../styles/globals.css';
import '../styles/Home.scss';
import { StateContext } from '../context/StateContext';

const MyApp = ({ Component, pageProps }) => (
  <StateContext>
    <TopUpbar />
    <Topbar />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}
  </StateContext>
);

export default MyApp;
