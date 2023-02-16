import { React, Head, dynamic } from '../GlobalImports/globalImport';
import { Suspense } from 'react';


Products';
const MapConatiner = dynamic(() => import('../Components/MapContainer'), {
  suspense: true,
  ssr: true,
  loading: () => <p>Loading...</p>,
});
const HomeSlider = dynamic(() => import('../Components/Home/HomeSlider'), {
  suspense: true,
  loading: () => <p>Loading...</p>,
});

const Home = () => (
  <div>
    <Head>
      <title>
        {' '}
        Tires Shop Near Me | Truck Tire Service | Heavy-Duty Tires - Kvltires
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Commercial Tires, Industrial Tires, OTR Tires, Agricultural Tires"
      />

      <meta
        name="description"
        content="Kvl Tire is one of the best and most trustworthy tire service shops throughout Fontana, CA and we offer you new & used tires, 24/7 roadside assistance, quality tires for your fleet, and pick-up & delivery services nearby - Call 800 808 0025 today!"
      />
      <meta name="googlebot" content="noodp" />

      <meta name="slurp" content="noydir" />

      <meta name="Language" content="English" />

      <meta name="Publisher" content="KVL TIRES INC" />

      <meta name="distribution" content="Global" />

      <meta name="Robots" content="INDEX, FOLLOW" />

      <meta name="YahooSeeker" content="INDEX, FOLLOW" />

      <meta name="msnbot" content="INDEX, FOLLOW" />

      <meta name="googlebot" content="INDEX, FOLLOW" />

      <meta name="Rating" content="General" />

      <meta name="allow-search" content="yes" />

      <meta name="expires" content="never" />

      <meta name="googlebot" content="noodp" />
      <link rel="canonical" href="https://www.kvltires.com" />

      {/* <!-- Open Graph data --> */}

      <meta property="og:locale" content="en_US" />

      <meta property="og:type" content="website" />

      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
      />

      <meta
        property="og:title"
        content="Tires Shop Near Me | Truck Tire Service | Heavy-Duty Tires - Kvltires"
      />

      <meta
        property="og:description"
        content="Kvltire is one of the best and most trustworthy tire service shops throughout Fontana, CA and we offer you new & used tires, 24/7 roadside assistance, quality tires for your fleet, and pick-up & delivery services nearby - Call 800 808 0025 today!"
      />

      <meta property="og:url" content=" https://www.kvltires.com" />

      <meta property="og:site_name" content="Kvltires" />
    </Head>
    <Suspense fallback="Loading...">
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
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.kvltires.com/',
        },
      ]}
    />
    <LocalBusinessJsonLd
      name="Kvltires"
      legalName="KVL Tires"
      url="https://www.kvltires.com/"
      images="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
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

    <OrganizationJsonLd
      name="KVL Tires"
      legalName="KVL Tires"
      url="https://www.kvltires.com/"
      logo="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
      contactPoint={[
        // {
        //   telephone: ' 401-555-1212',
        //   contactType: 'customer service',
        //   areaServed: 'US',
        //   availableLanguage: ['English', 'Spanish', 'French'],
        // },
        {
          telephone: '+1-800-808-0025',
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
        'https://www.linkedin.com/company/kvltires',
        'https://www.instagram.com/kvltires',
      ]}
    />
  </div>
);
export default Home;
