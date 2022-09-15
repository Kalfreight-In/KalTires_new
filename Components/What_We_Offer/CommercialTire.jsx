import React, { useState } from 'react';
import Image from 'next/image';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { CommercialTireone, CommercialTiretwo } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const CommercialTire = () => {
  const [alldata, setalldata] = useState(CommercialTireone[0]);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div id="commercialtiremain">
      <div id="commertiremaininner">
        <div id="commercemain">
          <div id="commercemaininner">
            <div className="bg-black">
              <div className="lg:grid lg:grid-cols-2 2xl:pr-16 xl:pr-12 lg:pr-8">
                <div className="lg:block hidden ">
                  <div className="lg:relative self-start">
                    <Image
                      className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md "
                      src={alldata.mainimage}
                      alt="tires"
                    />
                  </div>
                </div>
                <div className="flex flex-col-reverse lg:block lg:pl-8">
                  <div className="lg:hidden block  ">
                    <div className="lg:relative lg:mt-4 self-start">
                      <Image
                        className="lg:absolute lg:inset-0  lg:h-full object-cover object-center lg:rounded-tl-md  "
                        src={alldata.mainimagetab}
                        alt="tires"
                      />
                    </div>
                  </div>
                  <div className="lg:py-2 md:px-10 px-6 lg:px-0 md:max-w-3xl lg:max-w-5xl max-w-sm  mx-auto col-span-2  text-center lg:text-left mt-16  ">
                    <h1 className="text-white font-mainpoppin text-4xl font-bold">
                      {alldata.Heading}
                    </h1>
                    <div id="combuttons" className="mt-12">
                      <span className="">
                        <button
                          type="button"
                          className={` mr-2 text-center focus:border-b-2 font-bold font-poppins  border-white text-white ${
                            alldata.Heading === 'Retread Tires'
                              ? 'text-kaltire-red border-white border-b-2 font-poppins'
                              : 'text-white font-poppins'
                          }  transition-all duration-100 delay-75 cursor-pointer  font-mainpoppin focus:text-kaltire-red`}
                          onClick={() => setalldata(CommercialTireone[0])}
                        >
                          {alldata.titleone}
                        </button>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="">
                        <button
                          type="button"
                          className="mr-2 font-bold text-center focus:border-b-2 font-mainpoppin border-white text-white  transition-all duration-100 delay-75 cursor-pointer    focus:text-kaltire-red "
                          onClick={() => setalldata(CommercialTiretwo[0])}
                        >
                          {alldata.titletwo}
                        </button>
                      </span>
                    </div>
                    <p className="text-white mt-5 text-justify font-poppins">
                      {alldata.desc}
                    </p>
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      loop
                      slidesPerView={
                        alldata.Heading === 'Retread Tires'
                          ? 2
                          : isMobile
                          ? 2
                          : 3
                      }
                      spaceBetween={30}
                      // pagination={{ clickable: true }}
                      // className="mySwiper"
                      autoplay={{
                        delay: 700,
                        disableOnInteraction: false,
                      }}
                    >
                      <div className="flex items-center h-24 pr-12">
                        {alldata.logos.map((indexnew) => (
                          <SwiperSlide key={indexnew.id}>
                            <div id="commlogos" className="mt-8 ml-4">
                              <Image src={indexnew.img} className="flex" />
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
    </div>
  );
};
export default CommercialTire;
