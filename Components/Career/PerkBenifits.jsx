/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import {
  PerkBenifitsdata,
  PerkBenifitsdatatabone,
  PerkBenifitsdatatabtwo,
  PerkBenifitsdatatabthree,
  PerkBenifitsmobileonedata,
  PerkBenifitsmobiletwodata,
  PerkBenifitsmobilethreedata,
  PerkBenifitsmobilefourdata,
  PerkBenifitsmobilefivedata,
} from '../../data/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const PerkBenifits = () => (
  <div id="Perkmain">
    <div id="Perkmaininner">
      <div id="Perkmaingrid" className="pb-8 ">
        <div className="lg:block hidden">
          <h1 className="text-departmentheading font-bold text-4xl px-20 pt-8">
            Perks & Benefits
          </h1>
          <div
            id="Perkgrid"
            className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplate pt-12 px-20"
          >
            {PerkBenifitsdata.map((index) => (
              <div
                className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                key={index.id}
              >
                <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                  <div className="flex ">
                    <Image src={index.img} alt="service" />
                  </div>
                </div>

                <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                  {index.Heading}
                </h1>
                <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                  {index.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="perkslidermaintab" className="lg:hidden md:block hidden">
          <div id="perksliderinnermain">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              loopFillGroupWithBlank
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatetab pt-20 px-4"
                >
                  {PerkBenifitsdatatabone.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatetab pt-20 px-4"
                >
                  {PerkBenifitsdatatabtwo.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatetab pt-20 px-4"
                >
                  {PerkBenifitsdatatabthree.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div id="perkslidermainmobile" className="md:hidden">
          <div id="perksliderinnermainmobile">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              loopFillGroupWithBlank
              pagination={{
                clickable: false,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatemobile pt-20 px-4"
                >
                  {PerkBenifitsmobileonedata.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatemobile pt-20 px-4"
                >
                  {PerkBenifitsmobiletwodata.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatemobile pt-20 px-4"
                >
                  {PerkBenifitsmobilethreedata.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatemobile pt-20 px-4"
                >
                  {PerkBenifitsmobilefourdata.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  id="Perkgrid"
                  className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplatemobile pt-20 px-4"
                >
                  {PerkBenifitsmobilefivedata.map((index) => (
                    <div
                      className="bg-bg-white-1 text-center border border-perkbenefitsborder  "
                      key={index.id}
                    >
                      <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                        <div className="flex ">
                          <Image src={index.img} alt="service" />
                        </div>
                      </div>

                      <h1 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 ">
                        {index.Heading}
                      </h1>
                      <p className="pt-16 pb-8 lg:text-sm font-normal pl-8 text-left">
                        {index.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
);
