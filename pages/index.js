// import Head from 'next/head';
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
    {/* <Head>
      <script async src="https://cse.google.com/cse.js?cx=a645312b2331e4b91" />;
    </Head> */}
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
