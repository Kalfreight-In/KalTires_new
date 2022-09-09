import React from 'react';
// import Image from 'next/image';
// import headerimagecareer from '../../Assets/Images/Career/headerbanner.png';
// import headerbannermobile from '../../Assets/Images/Career/headerbannermobile.png';
// import useMediaQuery from '../../Hooks/CustomMediaQuery';
import HeroSection from '../Home/HeroSection';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Career/headerbanner.png',
    Heading: '',
    // desc: 'WE HELP YOU ACHIEVE YOUR DREAMS',

    // CTA1: { heading: 'Apply Now', link: 'contactus' },
    // CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

export const CareerHeader = () => (
  // const isMobile = useMediaQuery('(max-width:768px)');

  // <Image
  //   src={isMobile ? headerbannermobile : headerimagecareer}
  //   alt="headerImage"
  //   objectFit="contain"
  // />
  <HeroSection data={data[0]} />
);
