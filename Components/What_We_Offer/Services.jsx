import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import one from '../../Assets/Images/Whatweoffer/services/one.png';
import two from '../../Assets/Images/Whatweoffer/services/two.png';
import three from '../../Assets/Images/Whatweoffer/services/three.png';
import four from '../../Assets/Images/Whatweoffer/services/four.png';
import five from '../../Assets/Images/Whatweoffer/services/five.png';
import six from '../../Assets/Images/Whatweoffer/services/six.png';
import seven from '../../Assets/Images/Whatweoffer/services/seven.png';
import eight from '../../Assets/Images/Whatweoffer/services/eight.png';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import { Servicesdata } from '../../data/data';

export const Services = () => (
  <>
    <div className="hidden lg:block">
      <div id="onsitemain">
        <div
          id="onsitemaininner"
          className="bg-black 2xl:px-56 lg:px-16 lg:py-12 2xl:py-16 "
          style={{
            backgroundImage:
              // eslint-disable-next-line operator-linebreak
              'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <h1 className="text-white text-5xl font-bold font-poppins pb-8">
            Services
          </h1>
          <div id="maingrid">
            <div id="grid" className="grid gap-4 grid-cols-servicesTemplate">
              {Servicesdata.map((index) => (
                <div
                  className="bg-kaltire-red  text-center text-white border-white border-2"
                  key={index.id}
                >
                  <div className="flex justify-center">
                    <div className="w-onsiteimage h-onsiteimage">
                      <Image src={index.img} alt="service" />
                    </div>
                  </div>
                  <h1 className="lg:text-xl text-lg font-bold font-poppins">
                    {index.heading}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lg:hidden md:block hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 px-4 lg:py-12 2xl:py-16 "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-5xl font-bold font-poppins pt-12 pl-28 text-left">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4"
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={one} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 px-4 lg:py-12 2xl:py-16 "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-5xl font-bold font-poppins pt-12 pl-28 text-left">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4"
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage pt-8 ">
                          <Image src={three} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={four} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 px-4 lg:py-12 2xl:py-16 "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-5xl font-bold font-poppins pt-12 pl-28 text-left">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4"
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage pt-8">
                          <Image src={five} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={six} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16  lg:py-12 2xl:py-16 "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-5xl font-bold font-poppins pt-12 pl-28 text-left">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4 grid-flow-col"
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={seven} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={eight} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div className="md:hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={one} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={three} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={four} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={five} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={six} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={seven} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                    {/* <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={two} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Retread Services
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div>
            <div id="onsitemain">
              <div
                id="onsitemaininner"
                className="bg-black 2xl:px-56 lg:px-16 lg:py-12  "
                style={{
                  backgroundImage:
                    // eslint-disable-next-line operator-linebreak
                    'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1 className="text-white text-3xl font-bold font-poppins pt-8  text-center">
                  Services
                </h1>
                <div id="maingrid" className="px-20">
                  <div
                    id="grid"
                    className="grid gap-4 grid-cols-servicesMobileTemplate justify-center items-center py-16 "
                  >
                    <div className="bg-kaltire-red  text-center text-white border-white border-2">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage">
                          <Image src={eight} alt="service" />
                        </div>
                      </div>
                      <h1 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4">
                        Tire & Wheel Balancing
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </>
);
