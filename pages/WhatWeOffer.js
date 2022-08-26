import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import CommercialTire from '../Components/What_We_Offer/CommercialTire';
import Contactform from '../Components/What_We_Offer/ContactForm';

const WhatWeOffer = () => (
  <div>
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
    <Contactform />
  </div>
);

export default WhatWeOffer;
