import React from 'react';
import Image from 'next/image';
import headerimagecareer from '../../Assets/Images/Career/headerbanner.png';
import headerbannermobile from '../../Assets/Images/Career/headerbannermobile.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const CareerHeader = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    // <div id="mainimagecareerheader">
    <Image
      src={isMobile ? headerbannermobile : headerimagecareer}
      alt="headerImage"
      objectFit="contain"
    />
    // </div>
  );
};
