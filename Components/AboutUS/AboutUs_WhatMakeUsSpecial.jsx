import React from 'react';

import useMediaQuery from '../../Hooks/CustomMediaQuery';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import { AboutUs__PageData } from '../../data/data';
const AboutUs_WhatMakeUsSpecial = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const isMobile = useMediaQuery('(min-width:768px)');
  return (
    <div className="mb-8">
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-red-600  flex items-center px-24 m  pt-4
           text-center  font-bold lg:text-5xl text-lg"
        >
          WHAT MAKES <div className="text-black pl-5"> US SPECIAL</div>
        </div>
        {isDesktop ? (
          <div>
            <div
              id="grid"
              className="flex flex-row justify-between w-screen  bg-bg-white-1    px-20"
            >
              {AboutUs__PageData[1].WhatmakeusSpecial.map((index) => (
                <div className="bg-bg-white-1 text-center py-8" key={index.id}>
                  <div className="flex justify-center ">
                    <div className=" flex">
                      <Image
                        loading="lazy"
                        src={index.img}
                        alt={index.heading}
                      />
                    </div>
                  </div>

                  <h2 className="lg:text-xl text-lg font-bold font-poppins h-12">
                    {index.heading}
                  </h2>
                  <p className="pt-1 lg:text-sm font-normal px-2 text-center font-Helvetica">
                    {index.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop
            slidesPerView={isMobile ? 2 : 1}
            spaceBetween={30}
            speed={1400}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
          >
            {AboutUs__PageData[1].WhatmakeusSpecial.map((index) => (
              <SwiperSlide key={index.id}>
                <div>
                  <div id="grid" className=" bg-bg-white-1   px-4">
                    <div className="bg-bg-white-1 text-center">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage flex">
                          <Image
                            loading="lazy"
                            src={index.img}
                            alt={index.heading}
                          />
                        </div>
                      </div>

                      <h2 className="lg:text-xl text-lg font-bold font-Helvetica ">
                        {index.heading}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default AboutUs_WhatMakeUsSpecial;
