import Image from 'next/image';
import { ImPhone } from 'react-icons/im';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Onsitecomponentdata, OnsiteGriddata } from '../../../data/data';

const data = Onsitecomponentdata[0];
console.log(data);

const Onsiteservice = () => (
  <div id="onsitemain">
    <div id="onsitemaininner">
      <div id="maingrid" className="lg:block hidden">
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
              <p className="pt-6 lg:text-sm font-normal px-16">{index.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        // pagination={{
        //   clickable: false,
        // }}
        // navigation
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {OnsiteGriddata.map((index) => (
          <SwiperSlide key={index}>
            <div id="maingridtab" className="lg:hidden md:block hidden">
              <div
                id="grid"
                className="grid gap-x-4    bg-bg-white-1   grid-cols-onsiteTemplatetab pt-20 px-4"
              >
                <div className="bg-bg-white-1 text-center" key={index.id}>
                  <div className="flex justify-center">
                    <div className="w-onsiteimage h-onsiteimage flex">
                      <Image src={index.img} alt="service" />
                    </div>
                  </div>

                  <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                    {index.heading}
                  </h1>
                  {/* <p className="pt-6 lg:text-sm font-normal px-16">
                    {index.desc}
                  </p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        // pagination={{
        //   clickable: false,
        // }}
        // navigation
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
                <div className="bg-bg-white-1 text-center" key={index.id}>
                  <div className="flex justify-center">
                    <div className="w-onsiteimage h-onsiteimage flex">
                      <Image src={index.img} alt="service" />
                    </div>
                  </div>

                  <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                    {index.heading}
                  </h1>
                  {/* <p className="pt-6 lg:text-sm font-normal px-16">
                    {index.desc}
                  </p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
                &nbsp; {onsite.BTN}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Onsiteservice;
