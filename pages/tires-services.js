import React from 'react';
import Head from 'next/head';
import { Speciality } from '../Components/Whatweoffer/Speciality';
import { Services } from '../Components/Whatweoffer/Services';
import { IndustTires } from '../Components/Whatweoffer/IndustTires';
import CommercialTire from '../Components/Whatweoffer/CommercialTire';
import Contactform from '../Components/Whatweoffer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';
import HeroSection_free from '../Components/Home/HeroSection_free';
import { BreadcrumbJsonLd } from 'next-seo';
// import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBg.jpg',
    imgMobile:
      'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBgM.jpg',
    Heading: 'Get back on the road safely with KVL Tires  ',
    desc: 'Offering Major Tire Brands, Quality Tire Repair Services across 18+ Locations & Growing ',
    CTA1: {
      heading: 'Contact Us',
      Slink: '/#maincontactform',
      link: '/#ContactUsMain',
    },
    CTA12: { heading: 'Inventory', link: 'contactus' },
    page: 'tire',
  },
];

const tiresandservices = () => (
  <div>
    <Head>
      <title>
        Commercial Tires | Buy New Tires | Tire Service Near Me - Kvltires
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Kvl Tires offers Heavy Duty, Commercial Tire, and Retread tires, and delivers excellent tire service, in CA and surrounding areas. contact us today!
        "
      />
      <link rel="canonical" href="https://www.kvltires.com/tires-services" />
      <meta
        name="keywords"
        content="Retread Tires, Commercial Tires, Industrial Tires, Off The Road Tires, Agricultural Tires, Passenger Tires, Light Truck Tires"
      />
      <meta
        property="og:title"
        content="Buy New Tires | Tires Services for Industrial, Earthmover, Commercial Tires"
      />
      <meta
        property="og:url"
        content="https://www.kvltires.com/tires-services"
      />
      <meta
        property="og:image"
        content="https://www.kvltires.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblacktire.cf6b5fa2.png&w=1920&q=75"
      />
      <meta property="og:type" content="page" />
      <meta
        property="og:description"
        content="KVL Tires offers Heavy Duty, Commercial, Retread, Tires, and solutions adapted for the challenges of your daily uses and Heavy Activities."
      />
      <meta property="og:locale" content="en" />
    </Head>

    <HeroSection data={data[0]} />
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
    <Contactform />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 0,
          name: 'Home',
          item: 'https://www.kvltires.com/',
        },
        {
          position: 1,
          name: 'Commercial Tire',
          item: 'https://www.kvltires.com/tires-services',
        },
      ]}
    />
  </div>
);

export default tiresandservices;
