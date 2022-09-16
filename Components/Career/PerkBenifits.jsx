/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { PerkBenifitsdata } from '../../data/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const PerkBenifits = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div id="Perkmain">
      <div id="Perkmaininner">
        <div id="Perkmaingrid" className="pb-8 ">
          <div className="lg:block hidden">
            <h1 className="text-departmentheading font-bold text-4xl px-20 pt-8 font-Helvetica">
              Perks & Benefits
            </h1>
            <div
              id="Perkgrid"
              className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplate  pt-12 px-20"
            >
              {PerkBenifitsdata.map((index) => (
                <div
                  className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                  key={index.id}
                >
                  <div className="flex justify-start  pt-12 h-perkimageheight w-perkimagewidth px-4">
                    <div className="flex ">
                      <Image src={index.img} alt="service" />
                    </div>
                  </div>

                  <h1 className="lg:text-xl text-lg font-bold font-poppins text-left px-4   pt-8 h-8">
                    {index.Heading}
                  </h1>
                  <p className="pt-16 pb-8 lg:text-sm font-normal  text-center px-4 font-Helvetica ">
                    {index.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="perkslidermaintab" className="lg:hidden">
            <div
              id="perksliderinnermain"
              className={isMobile ? 'px-6' : 'px-12'}
            >
              <h1 className="text-departmentheading font-bold text-3xl  pt-8 pb-4  md:text-left text-center font-poppins">
                Perks & Benefits
              </h1>
              <Swiper
                slidesPerView={isMobile ? 1 : 2}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 1300,
                }}
                navigation
                modules={[Pagination, Navigation, Autoplay]}
              >
                <div
                  id="Perkgrid"
                  className="grid gap-4  grid-cols-PerkTemplate pt-20 bg-bg-white-1  px-4"
                >
                  {PerkBenifitsdata.map((data) => (
                    <SwiperSlide key={data}>
                      <div
                        className="bg-bg-white-1 text-center border border-perkbenefitsborder "
                        key={data.id}
                      >
                        <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                          <div className="flex ">
                            <Image src={data.img} alt="service" />
                          </div>
                        </div>
                        <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                          {data.Heading}
                        </h1>
                        <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left h-48 font-Helvetica">
                          {data.desc}
                        </p>
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
  );
};
