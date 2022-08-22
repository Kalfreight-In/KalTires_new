import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import CommercialTire from '../Components/What_We_Offer/CommercialTire';

const WhatWeOffer = () => (
  <div>
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
  </div>
);

export default WhatWeOffer;
