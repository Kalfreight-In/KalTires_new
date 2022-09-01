import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import Emergencyassist from '../Components/Roadside_Assitance/Emergencyassist';
import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';
import Roadside from '../Components/Roadside_Assitance/Roadside24.jsx';

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

const RoadsideAssistance = () => (
  <>
    <HeroSection data={data[0]} />
    <Roadside />
    <Emergencyassist />
    <Onsiteservice />
  </>
);

export default RoadsideAssistance;
