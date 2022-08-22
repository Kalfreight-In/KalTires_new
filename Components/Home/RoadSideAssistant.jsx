import React from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';

import RoadSideAss from '../../Assets/Images/Home/RoadsideAssistant_Home.png';

const RoadSideAssistant = () => (
  <div>
    <div
      style={{
        backgroundImage:
          // eslint-disable-next-line operator-linebreak
          'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Home/AboutUs_background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="">
        <div className="lg:grid lg:grid-cols-12 items-center ">
          <div className="lg:hidden block">
            <h2 className="text-4xl tracking-tight py-4 text-black font-poppins font-semibold lg:block text-center">
              <span className="text-red-500">24/7 </span>
              ROADSIDE ASSISTANCE
            </h2>
          </div>
          <div className="lg:hidden block">
            <div className="lg:relative lg:mt-4 self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={RoadSideAss}
                alt="tires"
              />
            </div>
          </div>

          <div className="lg:block hidden col-span-6  mr-20">
            <div className="  ">
              <Image className="  " src={RoadSideAss} alt="tires" />
            </div>
          </div>

          <div
            //   className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto col-span-2 "
            className=" md:px-10 px-6 lg:px-0  col-span-5 max-w-5xl  mx-auto  text-center lg:text-left "
          >
            <h2 className="text-5xl tracking-tight  text-black font-poppins font-bold lg:block hidden">
              <span className="text-red-500">24/7 </span>
              ROADSIDE ASSISTANCE
            </h2>
            <p className="text-black mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when
            </p>

            <div className="block pt-4 " id="PhoneEmailRoad" />
            <div
              id="InnerphoneEmailRoad"
              className="md:flex hidden mt-8 justify-center lg:justify-start"
            >
              <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                <div
                  id="Hotline"
                  className="flex items-center px-10 py-3 bg-red-600 cursor-pointer"
                >
                  <MdLocalPhone className="h-6 w-6 text-white" />

                  <p className="text-white">800-808-0025</p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="InnerphoneEmailRoad"
            className="md:hidden flex mt-8 justify-center lg:justify-start"
          >
            <div className="flex lg:justify-center lg:pb-0 pb-4 ">
              <div
                id="Hotline"
                className="flex items-center px-10 py-3 bg-red-600 cursor-pointer"
              >
                <MdLocalPhone className="h-6 w-6 text-white" />

                <p className="text-white">800-808-0025</p>
              </div>
            </div>
          </div>

          {/* The Phone and Email icons end */}
        </div>
      </div>
    </div>
  </div>
);

export default RoadSideAssistant;
