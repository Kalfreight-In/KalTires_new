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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="KVL Tires offers you new & used tires, 24/7 roadside assistance, quality tires for your fleet, pick-up & delivery services nearby - Call 800 808 0025 today!"
      />
    </Head>
    <HomeSlider />
    <BrandsComponent />
    {/* <div className="gcse-search" /> */}
    <AboutUs />
    {/* <FeaturedProducts /> */}
    <RoadSideAssistant />
    <HighPerformanceBrands />
    <MapConatiner />
    <ContactTwo />

    {/* <h1 className="text-3xl font-bold underline">Hello world from Kal tires</h1> */}
  </div>
);
export default Home;
