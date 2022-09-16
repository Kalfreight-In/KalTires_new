import React from 'react';
import { Speciality } from '../Components/Whatweoffer/Speciality';
import { Services } from '../Components/Whatweoffer/Services';
import { IndustTires } from '../Components/Whatweoffer/IndustTires';
import CommercialTire from '../Components/Whatweoffer/CommercialTire';
import Contactform from '../Components/Whatweoffer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';
// import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBg.png',
    Heading: 'Get back on the road safely with KVL Tires.  ',
    desc: `Offering Major Brand Tire Brands, Quality Tire Repair Services,
     18+ Locations & Growing.  `,
    CTA1: { heading: 'Contact Us', link: '/#maincontactform' },
    CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const tiresandservices = () => (
  <div>
    <HeroSection data={data[0]} />
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
    <Contactform />
  </div>
);

export default tiresandservices;
