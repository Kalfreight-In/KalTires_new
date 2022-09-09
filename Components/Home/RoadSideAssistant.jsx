import React from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';
import RoadSideAss from '../../Assets/Images/Home/RoadsideAssistant_Home.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const RoadSideAssistant = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div>
      <div
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Home/Roadsidebackground.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: `${isDesktop ? 'right' : 'bottom'}`,
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

            <div className="lg:block hidden col-span-6 ">
              <div className="  ">
                <Image className="  " src={RoadSideAss} alt="tires" />
              </div>
            </div>

            <div
              //   className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto col-span-2 "
              className=" md:px-10 px-6 lg:px-0  2xl:col-span-5 xl:col-span-6 max-w-5xl col-span-5 col mx-auto  text-center lg:text-left lg:ml-20 ml-0"
            >
              <h2 className="2xl:text-4xl xl:text-3xl tracking-tight  text-black font-poppins font-bold lg:block hidden">
                <span className="text-red-500">24/7 </span>
                ROADSIDE ASSISTANCE
              </h2>

              <p className=" mt-5 text-justify text-neutral-500 xl:text-lg text-sm font-medium">
                Driving a commercial vehicle keeps you on the move, making it
                necessary to be aware of your vehicle’s condition. You must
                ensure that your tires deliver great mileage, superior traction,
                and fuel efficiency while on the road. Also, you should be ready
                to deal with emergency breakdown situations; a trusted tire
                partner is what you need! KVL Tires provides quick and reliable
                24/7 roadside assistance. Our network across the United States
                gives us accessibility even in remote locations. We are ready to
                help in times of need!
              </p>
              <div className="block pt-4 " id="PhoneEmailRoad" />
              <div
                id="InnerphoneEmailRoad"
                className="md:flex hidden mt-8 justify-center lg:justify-start"
              >
                <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                  <button
                    className="flex items-center bg-kaltire-red py-3 lg:px-12 md:px-16 px-12 text-white lg:text-lg font-poppins"
                    type="button"
                  >
                    <span>
                      <MdLocalPhone className="text-2xl" />
                    </span>{' '}
                    &nbsp; 800-808-0025
                  </button>
                </div>
              </div>
            </div>
            <div
              id="InnerphoneEmailRoad"
              className="md:hidden flex mt-8 justify-center lg:justify-start"
            >
              <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                <button
                  className="flex items-center bg-kaltire-red py-3 lg:px-12 md:px-16 px-12 text-white lg:text-lg  font-poppins"
                  type="button"
                >
                  <span>
                    <MdLocalPhone className="text-2xl" />
                  </span>{' '}
                  &nbsp; 800-808-0025
                </button>
              </div>
            </div>

            {/* The Phone and Email icons end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadSideAssistant;
