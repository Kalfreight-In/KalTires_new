import Image from 'next/image';
import React from 'react';
import OTRTires from '../../Assets/Images/OTRTires/truckOTR.png';
import OtrimagesSection from '../../Assets/Images/OTRTires/OtrimagesSection.png';
import BuyTire4 from '../../Assets/Images/OTRTires/BuyTire.png';
import BuyTire3 from '../../Assets/Images/OTRTires/Group25.png';
import BuyTire2 from '../../Assets/Images/OTRTires/Group-1.png';
import BuyTire1 from '../../Assets/Images/OTRTires/Group.png';

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
const OTRTiresTrucks = () => {
  return (
    <>
      <diiv>
        <div className="flex justify-center">
          <Image src={OTRTires}></Image>
          <div className="absolute">
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-evenly w-screen">
                <ToolTip data={OtrToltip[0]}>
                  <Image className="relative" src={OtrimagesSection}></Image>
                </ToolTip>

                <ToolTip data={OtrToltip[1]}>
                  <Image className="relative" src={BuyTire1}></Image>
                </ToolTip>
              </div>
            </div>
            <div className="relative grid place-content-center h-32">
              <div className="flex flex-row items-center justify-around w-screen">
                <ToolTip data={OtrToltip[2]}>
                  <Image className="relative" src={BuyTire2}></Image>
                </ToolTip>
                <ToolTip data={OtrToltip[3]}>
                  <Image className="relative" src={BuyTire3}></Image>
                </ToolTip>
              </div>
            </div>

            <div className="relative grid content-end h-56">
              <div className="flex flex-row items-center justify-around w-screen ">
                <ToolTip data={OtrToltip[4]}>
                  <Image className="relative" src={BuyTire4}></Image>
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
