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
const AggricultureTire = () => {
  return (
    <>
      <div
        style={{
          zIndex: '-1',
        }}
      >
        <Image
          loading="lazy"
          placeholder="AboutUsPAge"
          src={CommercialTiresBanner}
          alt="AboutUs Header"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="mb-8 "
        style={{
          position: 'relative',
          marginTop: '-3.6rem',
          zIndex: '5',
        }}
      >
        <div className="lg:flex block lg:flex-col flex-row items-center ">
          <div
            className="bg-white px-7 pt-3"
            style={{
              clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div
              className="text-white  flex items-center px-24 m  bg-red-600 pb-4
           text-center  font-bold lg:text-5xl text-lg"
              style={{
                clipPath: 'polygon(13% 0, 88% 0, 100% 100%, 0% 100%)',
              }}
            >
              Aggriculture Tyre
            </div>
          </div>

          <div className="bg-red-600 p-12 text-white">
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

      <TireTypes></TireTypes>
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

export default AggricultureTire;
