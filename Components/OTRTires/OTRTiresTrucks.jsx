import Image from 'next/image';
import React from 'react';

import OtrimagesSection from '../../Assets/Images/OTRTires/OtrimagesSection.png';
import BuyTire4 from '../../Assets/Images/OTRTires/BuyTire.png';
import BuyTire3 from '../../Assets/Images/OTRTires/Group25.png';
import BuyTire2 from '../../Assets/Images/OTRTires/Group-1.png';
import BuyTire1 from '../../Assets/Images/OTRTires/Group.png';
import TruckTire from '../../Assets/Images/MiniTruckTire/miniTruck.png';

import ToolTip from '../ToolTip';
const OtrToltip = [
  {
    // image: OtrimagesSection,
    description:
      'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    // image: BuyTire1,
    description:
      'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    // image: BuyTire2,
    description:
      'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    // image: BuyTire3,
    description:
      'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    // image: BuyTire4,
    description:
      'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
const getObj = () => {
  return <div className="  w-4 h-2 bg-white pl-3 pr-3"></div>;
};
const OTRTiresTrucks = () => {
  return (
    <>
      <diiv>
        <div className="flex justify-center h-100 lg:h-auto pb-8">
          <Image className="absolute" src={TruckTire}></Image>

          <div className="absolute  w-screen h-48 bg-slate-800   mt-28 -z-5">
            <div className="relative w-screen mt-24 flex flex-row justify-between">
              <div className="dashed-line flex flex-row justify-around">
                {Array(10).fill(null).map(getObj)}
              </div>
              <div className="    dashed-line flex flex-row justify-around">
                {Array(10).fill(null).map(getObj)}
              </div>
              <div className="    dashed-line flex flex-row justify-around">
                {Array(10).fill(null).map(getObj)}
              </div>
            </div>
          </div>
          <div className="absolute">
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-evenly w-screen">
                <ToolTip data={OtrToltip[0]}>
                  <div className="bg-white  z-30 rounded-full  w-24 h-24 text-center grid place-content-center">
                    <div className="bg-red-500 animate-pulse left-1/3 -z-10 black rounded-full  w-16 h-16 absolute "></div>
                    <Image className="relative" src={OtrimagesSection}></Image>
                  </div>
                </ToolTip>

                <ToolTip data={OtrToltip[1]}>
                  <div className="bg-white  z-30 rounded-full  w-24 h-24 text-center grid place-content-center">
                    <div className="bg-red-500 animate-pulse  left-1/3 -z-10 black rounded-full  w-16 h-16 absolute "></div>
                    <Image className="relative" src={BuyTire1}></Image>
                  </div>
                </ToolTip>
              </div>
            </div>
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-around w-screen">
                <ToolTip data={OtrToltip[2]}>
                  <div className="bg-white  z-30 rounded-full  w-24 h-24 text-center grid place-content-center">
                    <div className="bg-red-500 animate-pulse left-1/3 -z-10 black rounded-full  w-16 h-16 absolute "></div>
                    <Image className="relative" src={BuyTire2}></Image>
                  </div>
                </ToolTip>
                <ToolTip data={OtrToltip[3]}>
                  <div className="bg-white  z-30 rounded-full  w-24 h-24 text-center grid place-content-center">
                    <div className="bg-red-500 animate-pulse left-1/3 -z-10 black rounded-full  w-16 h-16 absolute "></div>
                    <Image className="relative" src={BuyTire3}></Image>
                  </div>
                </ToolTip>
              </div>
            </div>
          </div>
        </div>
      </diiv>
    </>
  );
};

export default OTRTiresTrucks;
