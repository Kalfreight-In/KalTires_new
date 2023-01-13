import Image from 'next/image';
import React from 'react';
import OTRTires from '../../Assets/Images/OTRTires/truckOTR.png';
import OtrimagesSection from '../../Assets/Images/OTRTires/OtrimagesSection.png';

const OTRTiresTrucks = () => {
  return (
    <>
      <diiv>
        <div className="flex justify-center">
          <Image src={OTRTires}></Image>
          <div className="absolute">
            <Image className="relative" src={OtrimagesSection}></Image>
            <Image className="relative" src={OtrimagesSection}></Image>
            <Image className="relative" src={OtrimagesSection}></Image>
            <Image className="relative" src={OtrimagesSection}></Image>
          </div>
        </div>
      </diiv>
    </>
  );
};

export default OTRTiresTrucks;
