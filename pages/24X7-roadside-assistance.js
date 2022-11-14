import React from 'react';

import Head from 'next/head';
import HeroSection from '../Components/Home/HeroSection';
import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';
import Roadside from '../Components/Roadside_Assitance/Roadside';
import EmergencyAssists from '../Components/Roadside_Assitance/EmergencyAssists';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Roadside_Assistance/RoadsideAssistantBg.jpg',
    imgMobile:
      'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Roadside_Assistance/RoadsideAssistantBg.jpg',
    Heading: 'ARE YOU STUCK ON THE ROAD WITH A FLAT TIRE? ',
    Alttag: 'Convenient Roadside Assistance',
    desc: 'Get Quick & Convenient Roadside Assistance',

    CTA1: {
      heading: 'Call Now',
      Slink: 'tel:800-808-0025',
      link: 'tel:800-808-0025',
    },
    CTA12: { heading: 'Inventory', link: 'contactus' },
    page: 'roadside',
  },
];

const roadsideAssistance = () => (
  <div>
    <Head>
      <title>
        {' '}
        24/7 Roadside Assistance| Heavy Vehicle | Complete Tire Services
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="KVL Tires provide 24X7 Roadside Assistance service near me breakdown to everyone in need. Our trained & knowledgeable staff are always ready to answer your service calls."
      />
      <meta
        name="keywords"
        content="24/7ROADSIDE ASSISTANCE, On-Site Services, Nationwide Presence, Competitive Price, Friendly & Experienced Technicians"
      />
      <link
        rel="canonical"
        href="https://www.kvltires.com/24X7-roadside-assistance"
      />
      <meta
        property="og:title"
        content="24/7 Roadside Assistance| Heavy Vehicle | Complete Tire Services"
      />
      <meta
        property="og:url"
        content="https://www.kvltires.com/24X7-roadside-assistance"
      />
      <meta
        property="og:image"
        content="https://www.kvltires.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservicetruck.10f4814d.png&w=1920&q=75"
      />
      <meta property="og:type" content="page" />
      <meta
        property="og:description"
        content="KVL Tires provide 24X7 Roadside Assistance service near me breakdown to everyone in need. Our trained &amp; knowledgeable staff are always ready to answer your service calls."
      />
      <meta property="og:locale" content="en" />
    </Head>
    <HeroSection data={data[0]} />
    <Roadside />
    <EmergencyAssists />
    <Onsiteservice />
  </div>
);

export default roadsideAssistance;
