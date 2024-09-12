import React, { useRef, useState } from "react";
import Head from "next/head";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";
import { Navbar, Footer, TopUpbar, Topbar } from "../Components";
import { StateContext } from "../context/StateContext";
import Sidebar from "../Components/Sidebar";
import ErrorBoundary from "../Components/ErrorBoundary";
import useMediaQuery from "../Hooks/CustomMediaQuery";
import { useWindowSize } from "../Hooks/WindowSize";
import BottomBar from "../Components/Bottombar";
import CookiePopup from "./CookiePopup";
import MaintenancePage from "../pages/MaintenancePage"; // Import the MaintenancePage component

import "../styles/globals.css";
import "../styles/Home.scss";
import "../styles/Customswiper.css";

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [PcurrPos, setPcurrPos] = useState({ x: 0, y: 0 });
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const { width, height } = useWindowSize();

  const [underMaintenance, setUnderMaintenance] = useState(true); // State to control maintenance mode

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

  const isDesktop = useMediaQuery("(min-width:1148px)");
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.kvltires.com/"
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="kwdSgXRdzSwS7aQ_UINlRiFYoSoQkOtVuGOG5NntQqE"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-PHKPDRM', { 
                page_path: window.location.pathname,
            });
        `,
          }}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PHKPDRM');`,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHKPDRM"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* Conditionally render the MaintenancePage component */}
      {underMaintenance ? (
        <MaintenancePage />
      ) : (
        <StateContext>
          {isDesktop ? <TopUpbar /> : null}
          <Topbar toggle={toggle} postion={PcurrPos} />
          <ErrorBoundary>
            <Navbar toggle={toggle} postion={PcurrPos} />
          </ErrorBoundary>
          <Component {...pageProps} />
          <div>
            <Footer />
            <BottomBar />
          </div>
          <ErrorBoundary>
            {!isDesktop ? <Sidebar isOpen={isOpen} toggle={toggle} /> : null}
          </ErrorBoundary>
          <CookiePopup />
        </StateContext>
      )}
    </>
  );
};

export default MyApp;
