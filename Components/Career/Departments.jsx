/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/dist/client/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Departmentsdata } from '../../data/data';

export const Departments = () => (
  <div id="maindepartment">
    <div id="innermaindepartment">
      <div id="departmentgrid">
        <div className="hidden md:block">
          <div id="departmentmain">
            <div
              id="departmentmaininner"
              className="bg-white 2xl:px-28 lg:px-8  lg:py-12 2xl:py-16"
            >
              <h1 className="text-departmentheading text-4xl font-bold font-poppins pb-8 mt-12">
                Our Departments
              </h1>

              <div
                id="departmentmaingrid"
                className="flex gap-6 xl:flex-nowrap flex-wrap xl:justify-center justify-evenly  flex-row"
              >
                {Departmentsdata.map((index) => (
                  <div id="departmentmaingrid" key={index.id}>
                    <div id="grid">
                      <div className=" text-center ">
                        <div className="flex">
                          <div>
                            <Image
                              src={index.img}
                              alt="departments"
                              className="relative"
                            />
                            <div
                              id="headingdepartment"
                              className="flex justify-center"
                            >
                              <h1 className="text-red font-poppins font-bold absolute -mt-16  text-white lg:text-xl md:text-base ">
                                {index.Heading}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div>
            <div id="onsitemain">
              <div id="onsitemaininner" className="bg-white">
                <h1 className="text-departmentheading text-3xl text-center pt-6 font-semibold font-poppins pb-8">
                  Our Departments
                </h1>
                <div id="maingrid">
                  <Swiper
                    spaceBetween={0}
                    centeredSlides
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {Departmentsdata.map((data) => (
                      <SwiperSlide key={data.id}>
                        <div id="grid">
                          <div className=" text-center ">
                            <div className="flex justify-center">
                              <div>
                                <Image
                                  src={data.img}
                                  alt="departments"
                                  className="relative"
                                />
                                <div
                                  id="headingdepartment"
                                  className="flex justify-center"
                                >
                                  <h1 className="text-red font-poppins font-bold absolute -mt-16  text-white 2xl:text-xl lg:text-xs md:text-base ">
                                    {data.Heading}
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
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
