import Image from 'next/image';
import React from 'react';
import CommercialTiresBanner from '../../Assets/Images/CommercialTires/CommecialPage-Tires.png';
import TireTypes from '../../Components/CommercialTires/TireTypes';

const CommercialTires = () => {
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
              COMMERCIAL TIRE
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
    </>
  );
};

export default CommercialTires;
