import Image from 'next/image';
import React from 'react';
import OurStory_Tire from '../../Assets/Images/AboutUs/OurStory_Tire.png';
import Connectionlinered from '../../Assets/Images/AboutUs/Connectionlinered.png';

const OurStory = () => {
  return (
    <div className="bg-black px-20 py-10 ">
      <div className=" flex lg:flex-row flex-col  ">
        <div className="w-full">
          <Image src={OurStory_Tire}></Image>
        </div>

        <div className="pl-12 ">
          <div
            className="text-red-600  flex items-center
           text-center  font-normal lg:text-5xl text-lg"
          >
            OUR <div className="text-white pl-5 font-bold">STORY</div>
          </div>
          <div className="w-2/3 text-white py-2 lg:text-3xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="horizontal-line-red py-4"></div>
          <div>
            <div className="text-white py-2 lg:text-xl text-lg">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="text-white py-2 lg:text-xl text-lg">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit an
            </div>
            <div className="text-white py-2 lg:text-xl text-lg">
              > Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </div>
            <div className="text-white py-2 lg:text-xl text-lg">
              > Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        {/* <svg
          style={{ width: '1000px' }}
          width="1000"
          height="36"
          viewBox="0 0 509 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="7.78336"
            y1="18.4281"
            x2="506.336"
            y2="17.2088"
            stroke="#C81010"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="463.137"
            y1="33.1776"
            x2="506.323"
            y2="17.2176"
            stroke="#C81010"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="1.83672"
            y1="18.3902"
            x2="45.0227"
            y2="2.43012"
            stroke="#C81010"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg> */}
        <Image src={Connectionlinered}></Image>
      </div>

      <div className=" flex lg:flex-row flex-col-reverse ">
        <div className="pr-12">
          <div
            className="text-red-600  flex items-center
           text-center justify-end  font-normal lg:text-5xl text-lg"
          >
            OUR <div className="text-white pl-5 font-bold">STORY</div>
          </div>
          <div className=" text-white py-2 lg:text-3xl text-lg lg:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="horizontal-line-red py-4"></div>
          <div>
            <div className="text-white py-2 lg:text-xl text-lg lg:text-right">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="text-white py-2 lg:text-xl text-lg lg:text-right">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit an
            </div>
            <div className="text-white py-2 lg:text-xl text-lg text-right">
              > Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </div>
            <div className="text-white py-2 lg:text-xl text-lg text-right">
              > Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image src={OurStory_Tire}></Image>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
