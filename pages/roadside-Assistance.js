import React from 'react';
import { Speciality } from '../Components/What_We_Offer/Speciality';
import { Services } from '../Components/What_We_Offer/Services';
import { IndustTires } from '../Components/What_We_Offer/IndustTires';
import CommercialTire from '../Components/What_We_Offer/CommercialTire';
import Contactform from '../Components/What_We_Offer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';
import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';
import Roadside from '../Components/Roadside_Assitance/Roadside';
import EmergencyAssists from '../Components/Roadside_Assitance/EmergencyAssists';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Roadside_Assistance/RoadsideAssistantBg.png',
    Heading: 'ARE YOU STUCK ON THE ROAD WITH A FLAT TIRE ? ',
    desc: 'We  Got Your Back! ',
    // commsfsdf
    // commsfsdf

    CTA1: { heading: 'Call Now', link: '/#maincontactformhome' },
    CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const roadsideAssistance = () => (
  <div>
    <HeroSection data={data[0]} />
    <Roadside />
    <EmergencyAssists />
    <Onsiteservice />
  </div>
);

export default roadsideAssistance;
