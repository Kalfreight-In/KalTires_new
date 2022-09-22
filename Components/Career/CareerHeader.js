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
    Heading: 'Join Our Team',
    // page: 'Careers'
    // desc: 'Join Our Team',

    // CTA1: { heading: 'Apply Now', link: 'contactus' },
    // CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

export const CareerHeader = () => (
  <div id="careerHeadermain">
    <div
      id="careerHeadertwo"
      style={{
        backgroundImage:
          // eslint-disable-next-line operator-linebreak
          'url(' +
          'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/Industrialtires/industbackg.png' +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '',
      }}
    >
      <h1 className="text-center">Join Our Team</h1>
    </div>
  </div>
  // const isMobile = useMediaQuery('(max-width:768px)');

  // <Image
  //   src={isMobile ? headerbannermobile : headerimagecareer}
  //   alt="headerImage"
  //   objectFit="contain"
  // />

  // <HeroSection />
);
