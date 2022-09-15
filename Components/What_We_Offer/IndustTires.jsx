/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IndustrialTiresdata } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const IndustTires = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div id="industmain">
      <div className="lg:hidden">
        <div>
          <div className="block">
            <div>
              <div>
                <div
                  className="py-24"
                  style={{
                    backgroundImage:
                      // eslint-disable-next-line operator-linebreak
                      'url(' +
                      'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/Industrialtires/industbackg.png' +
                      ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Swiper
                      slidesPerView={isMobile ? 1 : 2}
                      spaceBetween={0}
                      slidesPerGroup={1}
                      loop
                      loopFillGroupWithBlank
                      navigation
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <div
                        id="mainmobile"
                        className="flex justify-center items-center"
                      >
                        {IndustrialTiresdata.map((index) => (
                          <SwiperSlide key={index}>
                            <div
                              className="flex justify-center items-center"
                              key={index.id}
                            >
                              <div className="flex flex-col justify-center">
                                <div className="lg:relative  self-start">
                                  <Image
                                    className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md "
                                    src={index.img}
                                    alt="tires"
                                  />
                                </div>
                                <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-mainpoppin font-bold pt-12">
                                  <span className="border-red-600 border-b-2 pb-2 font-mainpoppin">
                                    {index.heading}
                                  </span>
                                </h1>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="industslidermaintab" className="block">
      <div id="industsliderinnermain">
        <div id="specialmain" className="md:block hidden lg:hidden">
          <div
            id="specialmaininner"
            className="py-24"
            style={{
              backgroundImage:
                // eslint-disable-next-line operator-linebreak
                'url(' +
                'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/Industrialtires/industbackg.png' +
                ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                loopFillGroupWithBlank
                // pagination={{
                //   clickable: true,
                // }}
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <div id="maintab" className="flex justify-center items-center">
                  {IndustrialTiresdata.map((index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="flex justify-center items-center"
                        key={index.id}
                      >
                        <div className="flex flex-col justify-center ">
                          <div className="lg:relative  self-start ">
                            <Image
                              className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md "
                              src={index.img}
                              alt="tires"
                            />
                          </div>
                          <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                            <span className="border-red-600 border-b-2 pb-2 font-poppins">
                              {index.heading}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <div className="lg:block hidden">
        <div
          className="py-24"
          style={{
            backgroundImage:
              // eslint-disable-next-line operator-linebreak
              'url(' +
              'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/Industrialtires/industbackg.png' +
              ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="">
            <div className="flex justify-center items-end">
              {IndustrialTiresdata.map((index) => (
                <div
                  className={`flex flex-col justify-between px-2 pr-${index.pr}`}
                  key={index.id}
                >
                  <div className="lg:relative  self-start ">
                    <Image
                      className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                      src={index.img}
                      alt="tires"
                    />
                  </div>
                  <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-mainpoppin font-bold pt-12">
                    <span className="border-red-600 border-b-2 pb-2 font-mainpoppin">
                      {index.heading}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
