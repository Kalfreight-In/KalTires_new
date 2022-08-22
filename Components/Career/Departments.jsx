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
              <h1 className="text-departmentheading text-4xl font-bold font-poppins pb-8">
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
                            <Image src={index.img} alt="departments" />
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
                <div id="maingrid">
                  <Swiper
                    spaceBetween={0}
                    centeredSlides
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    // navigation
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {Departmentsdata.map((index) => (
                      <SwiperSlide key={index.id}>
                        <div
                          id="grid"
                          className="flex gap-2 flex-nowrap  justify-center"
                        >
                          <div className=" text-center ">
                            <div className="flex justify-center">
                              <div>
                                <Image src={index.img} alt="service" />
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
