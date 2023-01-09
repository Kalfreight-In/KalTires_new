import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { useWindowSize } from '../../Hooks/WindowSize';

const MostAdvancedTechnology = () => {
  const { width, height } = useWindowSize();
  const isMobile = useMediaQuery('(max-width:1024px)');
  return (
    <div className="bg-white flex lg:flex-row flex-col">
      <div className="p-10">
        <ReactPlayer
          width={!isMobile ? (width / 100) * 40 : (width / 100) * 90}
          url="https://youtu.be/RqrXhwS33yc"
        />
      </div>
      <div className="p-10 pl-8">
        <div
          className="text-red-600  flex items-center   pt-4
           text-center  font-bold lg:text-2xl text-lg"
        >
          WHAT MAKES <div className="text-black pl-5"> US SPECIAL</div>
        </div>
        <div className="horizontal-line-red py-4"></div>
        <div className="text-black w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q className="text-black text-3xl pt-8 font-bold italic">
          <div className="inline-flex">
            Lorem <div className="text-red-600 pl-2">Technology</div>
          </div>
          <br></br>
          <div className="inline-flex pl-32">
            Ipsum Dolor <div className="text-red-600 pl-2">Tires</div>
          </div>
        </q>
      </div>
    </div>
  );
};

export default MostAdvancedTechnology;
