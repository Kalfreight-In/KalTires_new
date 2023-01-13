import React from 'react';
import CommercialTiresBanner from '../../Assets/Images/CommercialTires/CommecialPage-Tires.png';
import PotentioalAnnualShaving from '../../Components/CommercialTires/PotentioalAnnualShaving';
import TireTypes from '../../Components/CommercialTires/TireTypes';
import { CustomerReview } from '../../Components/CustomerReview';
import Image from 'next/image';
import OTRTiresTrucks from '../../Components/OTRTires/OTRTiresTrucks';
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
const OTRTires = () => {
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
              className="text-white  flex items-center px-24 m  bg-red-600 pt-4
         text-center  font-bold lg:text-5xl text-lg"
              style={{
                clipPath: 'polygon(13% 0, 88% 0, 100% 100%, 0% 100%)',
              }}
            >
              OFF-THE-ROAD TIRES
            </div>
          </div>
        </div>
      </div>
      <OTRTiresTrucks />
      <TireTypes></TireTypes>
      <PotentioalAnnualShaving />
      <CustomerReview
        heading={'Testimonials'}
        data={CustomerReviewdata}
        colour={'white'}
      />
    </>
  );
};

export default OTRTires;
