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
    <HomeSlider />
    <BrandsComponent />
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
