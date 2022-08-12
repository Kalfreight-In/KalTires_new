import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import { CommercialTires } from '../Components/What_We_Offer/CommercialTires';

const WhatWeOffer = () => (
  <div>
    <CommercialTires />
    <Speciality />
    <IndustTires />
    <Services />
  </div>
);

export default WhatWeOffer;
