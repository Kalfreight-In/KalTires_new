import Image from 'next/image';
import { ImPhone } from 'react-icons/im';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import {
  // HighPerformanceBrandsData,
  Onsitecomponentdata,
  OnsiteGriddata,
} from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const Onsiteservice = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  return (
    <div>
      <div>
        <div className="lg:block hidden">
          <div
            id="grid"
            className="grid gap-x-4  bg-bg-white-1   grid-cols-onsiteTemplate pt-20 px-4"
          >
            {OnsiteGriddata.map((index) => (
              <div className="bg-bg-white-1 text-center" key={index.id}>
                <div className="flex justify-center">
                  <div className="w-onsiteimage h-onsiteimage flex">
                    <Image src={index.img} alt="service" />
                  </div>
                </div>

                <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                  {index.heading}
                </h1>
                <p className="pt-6 lg:text-sm font-normal px-16">
                  {index.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          slidesPerView={isDesktop ? 2 : 1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {OnsiteGriddata.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="block  ">
                <div
                  id="grid"
                  className="grid gap-x-4    bg-bg-white-1   grid-cols-onsiteTemplatetab pt-20 px-4"
                >
                  <div className="bg-bg-white-1 text-center">
                    <div className="flex justify-center">
                      <div className="w-onsiteimage h-onsiteimage flex">
                        <Image src={data.img} alt="service" />
                      </div>
                    </div>

                    <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                      {data.heading}
                    </h1>
                    <p className="pt-6 lg:text-sm font-normal px-16">
                      {/* {data.desc} */}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* {OnsiteGriddata.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="bg-black">{data.heading}</div>
              <div className="block">
                <div
                  id="grid"
                  className="grid gap-x-4    bg-bg-white-1   grid-cols-onsiteTemplatetab pt-20 px-4"
                >
                  <div className="bg-bg-white-1 text-center">
                    <div className="flex justify-center">
                      <div className="w-onsiteimage h-onsiteimage flex">
                        <Image src={index.img} alt="service" />
                      </div>
                    </div>

                    <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                      {index.heading}
                    </h1>
                    <p className="pt-6 lg:text-sm font-normal px-16">
                      {index.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))} */}
        </Swiper>
        {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {OnsiteGriddata.map((index) => (
          <SwiperSlide key={index}>
            <div id="maingridmobile" className="md:hidden">
              <div
                id="gridmobile"
                className="grid gap-x-4    bg-bg-white-1   grid-cols-onsiteTemplatemobile pt-20 px-4"
              >
                <div className="bg-bg-white-1 text-center" >
                  <div className="flex justify-center">
                    <div className="w-onsiteimage h-onsiteimage flex">
                      <Image src={index.img} alt="service" />
                    </div>
                  </div>

                  <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                    {index.heading}
                  </h1>
                  <p className="pt-6 lg:text-sm font-normal px-16">
                    {index.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  */}

        {Onsitecomponentdata.map((onsite) => (
          <div id="secondonsite" className="mt-12 mb-4" key={onsite.id}>
            <div id="innersecondonsite" className="text-center">
              <h1 className="md:text-2xl font-bold font-poppins">
                {onsite.heading}
              </h1>
              <p className="pt-2 md:text-xl text-onsite-text font-poppins lg:px-80 px-8">
                {onsite.desc}
              </p>
              <div className="flex justify-center mt-8">
                <button
                  className="flex items-center bg-kaltire-red py-3 px-12 text-white lg:text-2xl lg:font-bold"
                  type="button"
                >
                  <span>
                    <ImPhone className="text-2xl" />
                  </span>
                  {onsite.BTN}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Onsiteservice;
