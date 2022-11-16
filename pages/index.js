// import Head from 'next/head';
import Head from 'next/head';
import { AboutUs } from '../Components/Home/AboutUs';
import BrandsComponent from '../Components/Home/BrandsComponent';
// import FeaturedProducts from '../Components/Home/FeaturedProducts';
import HighPerformanceBrands from '../Components/Home/HighPerformanceBrands';
import HomeSlider from '../Components/Home/HomeSlider';
import RoadSideAssistant from '../Components/Home/RoadSideAssistant';
import { MapConatiner } from '../Components/MapContainer';
import ContactTwo from '../Components/Home/ContactTwo';
// import FeaturedProducts from '../Components/Home/FeaturedProducts';

const Home = () => (
  <div>
    <Head>
      <title>
        {' '}
        Best Quality Commercial Tires & Heavy-Duty Tires | RSA services for
        Tires
      </title>
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="Commercial Tires, Industrial Tires, OTR Tires, Agricultural Tires"
      />

      <meta
        name="description"
        content="KVL Tires offers you new & used tires, 24/7 roadside assistance, quality tires for your fleet, pick-up & delivery services nearby - Call 800 808 0025 today!"
      />
      <link rel="canonical" href="https://www.kvltires.com" />
      <meta
        property="og:title"
        content="Best Quality Commercial Tires & Heavy-Duty Tires | RSA services for Tires"
      />
      <meta property="og:url" content="https://www.kvltires.com/" />
      <meta
        property="og:image"
        content="https://www.kvltires.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKvlTiresLogo.84949037.png&w=3840&q=75"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="KVL Tires offers you new & used tires, 24/7 roadside assistance, quality tires for your fleet, pick-up & delivery services nearby - Call 800 808 0025 today!"
      />
      <meta property="og:locale" content="en" />
    </Head>
    <HomeSlider />
    <BrandsComponent />
    {/* <div className="gcse-search" /> */}
    <AboutUs />

    {/* <FeaturedProducts /> */}
    <RoadSideAssistant />
    <HighPerformanceBrands />
    {/* <MapConatiner /> */}
    <ContactTwo />

    {/* <h1 className="text-3xl  font-bold underline">Hello world from Kal tires</h1> */}
  </div>
);
export default Home;
