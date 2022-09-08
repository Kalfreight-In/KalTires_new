import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import Emergencyassist from '../Components/Roadside_Assitance/Emergencyassist';
import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';
import Roadside from '../Components/Roadside_Assitance/Roadside24.jsx';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Roadside_Assistance/RoadsideAssistantBg.png',
    Heading: 'Are you stuck on the side of the road? ',
    desc: 'We’ve got your back. ',

    CTA1: { heading: 'Call Now', link: 'contactus' },
    CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const RoadsideAssistance = () => (
  <>
    <HeroSection data={data[0]} />
    <Roadside />
    <Emergencyassist />
    <Onsiteservice />
  </>
);

export default RoadsideAssistance;
