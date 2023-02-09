import React from 'react';
import CommercialTiresBanner from '../../Assets/Images/CommercialTires/CommecialPage-Tires.png';
import PotentioalAnnualShaving from '../../Components/CommercialTires/PotentioalAnnualShaving';
import TireTypes from '../../Components/CommercialTires/TireTypes';
import { CustomerReview } from '../../Components/CustomerReview';
import Image from 'next/image';
import OtrimagesSection from '../../Assets/Images/OTRTires/OtrimagesSection.png';
import OTRTiresTrucks from '../../Components/OTRTires/OTRTiresTrucks';
import SmallSimpleComponent1 from '../../Components/SmallSimpleComponent1';
import SafetyOtrFeatures from '../../Components/OTRTires/SafetyOtrFeatures';
import MiniTruckTireHead from '../../Assets/Images/MiniTruckTire/MiniTruckTireHead.jpg';
import HeroSection from '../../Components/Home/HeroSection';

const CustomerReviewdata = [
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
];
const Data = {
  Heading: 'HEADING - 1 COMMERCIAL TRUCK',
  BoldDescription:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Description:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
const Data2 = {
  Heading: 'HEADING - 1 COMMERCIAL TRUCK',

  Description:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
const SafetyOtrFeature = [
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
];
const data = [
  {
    id: 1,
    img: MiniTruckTireHead,
    imgMobile: MiniTruckTireHead,
    Heading: 'ARE YOU STUCK ON THE ROAD WITH A FLAT TIRE? ',
    Alttag: 'Convenient Roadside Assistance',
    desc: 'Get Quick & Convenient Roadside Assistance',

    CTA1: {
      heading: 'Call Now',
      Slink: 'tel:800-808-0025',
      link: 'tel:800-808-0025',
    },
    CTA12: { heading: 'Inventory', link: 'contactus' },
    page: 'roadside',
  },
];
const MiniTruckTire = () => {
  return (
    <>
      <HeroSection data={data[0]} />
      <div className="mb-2">
        <div className="lg:flex bg-zinc-600 block w-full mt-0">
          <div className=" text-left text-lg  p-4 text-white w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum,
          </div>
        </div>
      </div>
      <OTRTiresTrucks />

      <SmallSimpleComponent1
        data={Data2}
        Textcolour={'white'}
        colour={'black'}
      />
      <SafetyOtrFeatures data={SafetyOtrFeature} />
      <SmallSimpleComponent1
        data={Data}
        Textcolour={'black'}
        colour={'white'}
        Linecolour={'red-600'}
      />
    </>
  );
};

export default MiniTruckTire;
