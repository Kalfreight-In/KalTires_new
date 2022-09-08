import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import CommercialTire from '../Components/What_We_Offer/CommercialTire';
import Contactform from '../Components/What_We_Offer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';
import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBg.png',
    Heading: 'Get back on the road safely with KVL Tires.  ',
    desc: 'Offering Major Brand Tire Brands, Quality Tire Repair Services, 18+ Locations & Growing.  ',

    CTA1: { heading: 'Inventory', link: 'contactus' },
    CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const WhatWeOffer = () => (
  <div>
    <HeroSection data={data[0]} />
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
    <Contactform />
  </div>
);

export default WhatWeOffer;
