import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import CommercialTire from '../Components/What_We_Offer/CommercialTire';
import Contactform from '../Components/What_We_Offer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Home/HomePageSlider-1.png',
    Heading: 'TRANSFORMING TRUCKING DYNAMICS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique arcu a nisi, semper. Ut cras odio ac sem ac.',

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
