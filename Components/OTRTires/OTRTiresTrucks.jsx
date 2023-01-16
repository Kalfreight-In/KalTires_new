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
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-evenly w-screen">
                <Image className="relative" src={OtrimagesSection}></Image>
                <Image className="relative" src={OtrimagesSection}></Image>
              </div>
            </div>
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-around w-screen">
                <Image className="relative" src={OtrimagesSection}></Image>
                <Image className="relative" src={OtrimagesSection}></Image>
              </div>
            </div>

            <div className="relative grid content-end h-56">
              <div className="flex flex-row items-center justify-around w-screen ">
                <Image className="relative h-12" src={OtrimagesSection}></Image>
              </div>
            </div>
          </div>
        </div>
      </diiv>
    </>
  );
};

export default OTRTiresTrucks;
