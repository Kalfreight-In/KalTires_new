// import Head from 'next/head';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { AboutUs } from '../Components/Home/AboutUs';
import BrandsComponent from '../Components/Home/BrandsComponent';
// import FeaturedProducts from '../Components/Home/FeaturedProducts';
import HighPerformanceBrands from '../Components/Home/HighPerformanceBrands';
// import HomeSlider from '../Components/Home/HomeSlider';
import RoadSideAssistant from '../Components/Home/RoadSideAssistant';
// import MapConatiner from '../Components/MapContainer';
import ContactTwo from '../Components/Home/ContactTwo';
import { LocalBusinessJsonLd } from 'next-seo';
// import FeaturedProducts from '../Components/Home/FeaturedProducts';
const MapConatiner = dynamic(() => import('../Components/MapContainer'), {
  suspense: true,
  ssr: true,
});
const HomeSlider = dynamic(() => import('../Components/Home/HomeSlider'), {
  suspense: true,
});

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
      <LocalBusinessJsonLd
        name="KVL Tires"
        legalName="KVL Tires"
        url="https://kvltires.com/"
        images="https://www.kvltires.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKvlTiresLogo.84949037.png&w=3840&q=75"
        telephone="+1-800-808-0025"
        address={{
          streetAddress: '10156 Live Oak Ave, Fontana, CA 92335',
          addressLocality: 'Fontana',
          addressRegion: 'CA',
          postalCode: '92335',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '34.068795',
          longitude: '-117.4812517',
        }}
        openingHours={[
          {
            opens: '07:00',
            closes: '17:00',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
        ]}
        sameAs={[
          'https://www.facebook.com/kvltires',
          'https://www.instagram.com/kvltires/',
          'https://www.linkedin.com/company/kvltires/',
          'https://www.kvltires.com/',
        ]}
        contactPoint={[
          // {
          //   telephone: ' 401-555-1212',
          //   contactType: 'customer service',
          //   areaServed: 'US',
          //   availableLanguage: ['English', 'Spanish', 'French'],
          // },
          {
            telephone: '800-808-002',
            contactType: 'customer service',
            contactOption: 'TollFree',
            availableLanguage: 'en',
            areaServed: 'US',
          },
          // {
          //   telephone: ' 877-453-1304',
          //   contactType: 'technical support',
          //   contactOption: 'TollFree',
          //   areaServed: ['US', 'CA'],
          //   availableLanguage: ['English', 'French'],
          // },
        ]}
        sameAs={[
          'https://www.facebook.com/kvltires',
          'https://www.instagram.com/kvltires/',
          'https://www.linkedin.com/company/kvltires/',
        ]}
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
    <Suspense fallback={`Loading...`}>
      <HomeSlider className="h-headerHeight" />
    </Suspense>
    <BrandsComponent />
    {/* <div className="gcse-search" /> */}
    <AboutUs />

    {/* <FeaturedProducts /> */}
    <RoadSideAssistant />
    <HighPerformanceBrands />

    <MapConatiner />

    <ContactTwo />

    {/* <h1 className="text-3xl  font-bold underline">Hello world from Kal tires</h1> */}
  </div>
);
export default Home;
