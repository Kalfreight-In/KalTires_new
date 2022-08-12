import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import one from '../../Assets/Images/Whatweoffer/Industrialtires/one.png';
import two from '../../Assets/Images/Whatweoffer/Industrialtires/two.png';
import three from '../../Assets/Images/Whatweoffer/Industrialtires/three.png';
import four from '../../Assets/Images/Whatweoffer/Industrialtires/four.png';
import five from '../../Assets/Images/Whatweoffer/Industrialtires/five.png';

export const IndustTires = () => (
  <>
    <div id="industslidermainmobile" className="block">
      <div id="industsliderinnermainmobile">
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
            <div id="specialmain" className="md:hidden">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={one}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="specialmain" className="md:hidden">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={two}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="specialmain" className="md:hidden">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={three}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="specialmain" className="md:hidden">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={four}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="specialmain" className="md:hidden">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={five}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div id="industslidermaintab" className="block">
      <div id="industsliderinnermain">
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={one}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60 lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={two}
                          alt="tires"
                        />
                      </div>

                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Earthmover Tips
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={three}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60 lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={four}
                          alt="tires"
                        />
                      </div>

                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Earthmover Tips
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <div className="">
                  <div className="flex justify-center items-end">
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={five}
                          alt="tires"
                        />
                      </div>
                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Industrial Tires
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between px-2">
                      <div className="lg:relative  self-start ">
                        <Image
                          className="lg:absolute lg:inset-0 h-60 lg:h-full object-cover object-center lg:rounded-tl-md  "
                          src={four}
                          alt="tires"
                        />
                      </div>

                      <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                        <span className="border-red-600 border-b-2 pb-2">
                          Earthmover Tips
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div id="specialmain" className="lg:block hidden">
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
        <div className="">
          <div className="flex justify-center items-end">
            <div className="flex flex-col justify-between px-2">
              <div className="lg:relative  self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={one}
                  alt="tires"
                />
              </div>
              <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                <span className="border-red-600 border-b-2 pb-2">
                  Industrial Tires
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-between px-2">
              <div className="lg:relative  self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60 lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={two}
                  alt="tires"
                />
              </div>

              <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                <span className="border-red-600 border-b-2 pb-2">
                  Earthmover Tips
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-between px-2">
              <div className="lg:relative  self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={three}
                  alt="tires"
                />
              </div>

              <h1 className="flex justify-center items-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                <span className="border-red-600 border-b-2 pb-2 ">
                  Agricultural Tires
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-between px-2">
              <div className="lg:relative self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={four}
                  alt="tires"
                />
              </div>

              <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                <span className="border-red-600 border-b-2 pb-2">
                  Passenger Tires
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-between px-2">
              <div className="lg:relative  self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={five}
                  alt="tires"
                />
              </div>

              <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                <span className="border-red-600 border-b-2 pb-2">
                  Light Truck Tires
                </span>
              </h1>
            </div>
            {/* <div className="flex flex-col justify-between">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={six}
                alt="tires"
              />
            </div>

            <h1 className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
              Industrial Tires
            </h1>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  </>
);
