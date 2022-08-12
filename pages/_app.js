// import Script from 'next/script';
import { Navbar, Footer, TopUpbar, Topbar } from '../Components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <TopUpbar />
    <Topbar />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}
  </div>
);

export default MyApp;
