import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import { Servicesdata } from '../../data/data';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const Services = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  // const outClick = useRef(null);
  // const [lightboxData, setlightboxData] = useState(null);
  // const [light, setlightbox] = useState(false);
  // const [lol, setlol] = useState(false);

  // const handleClick = (e) => {
  //   if (outClick.current.contains(e.target)) {
  //     setlol(true);
  //     // inside click
  //   }
  //   // outside click
  //   setlightbox(false);
  // };

  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener('mousedown', handleClick);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  // function UpdateLightbox(data) {
  //   setlightbox(true);
  //   setlightboxData(data);
  // }
  return (
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
            <h1 className="text-white  text-5xl font-bold font-mainpoppin pb-8">
              Services
            </h1>
            <div
              id="maingrid "
              className="flex flex-col justify-center items-center"
            >
              {/* {light ? ( */}
              {/* // <div className="relative bg-Lightbox pb-96  w-1/2 flex justify-center  z-20 top-96 left-0  border-4 rounded-xl overflow-y-auto">
                //   <div className=" absolute ">
                //     <div id="lighboxmaincontainer">
                //       <div id="crossimage" className="text-right">
                //         {/* <Image src="" alt="" /> cross image */}
              {/* //       </div>
                //       <div id="mainlightimage" className="text-center">
                //         <Image src={lightboxData.img} />
                //       </div>
                //       <div id="lightheading" className="text-center">
                        // <h1 */}{' '}
              {/* className={`font-bold text-white ${ */}
              {/* //             lol ? 'text-2xl' : 'text-lg'
                //           } font-poppins`}
                //         >
                //           {lightboxData.heading}
                //         </h1>
                //       </div>
                //       <div id="lightdesc" className="pt-2">
                //         <p className="text-justify px-6 text-white font-poppins">
                //           {lightboxData.desc}
                //         </p>
                //       </div>
                //     </div>
                //   </div>
                // </div> */}
              {/* // ) : null} */}
              <div
                id="grid"
                className=" static grid gap-4 grid-cols-servicesTemplate "
              >
                {Servicesdata.map((data) => (
                  <div
                    className="bg-kaltire-red  text-center text-white border-white hover:border"
                    key={data.id}
                    // onClick={() => {
                    //   UpdateLightbox(data);
                    // }}
                  >
                    <div className="flex justify-center">
                      <div className="w-onsiteimage h-onsiteimage pt-4">
                        <Image src={data.img} alt="service" />
                      </div>
                    </div>
                    <h1 className="lg:text-xl text-lg font-bold font-poppins h-16">
                      {data.heading}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {' '}
        <div>
          <div id="mainservices">
            <div
              id="maininnerservices"
              className="bg-black 2xl:px-56 lg:px-16 px-4 lg:py-12 2xl:py-16 z-0"
              style={{
                backgroundImage:
                  // eslint-disable-next-line operator-linebreak
                  'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h1 className="text-white text-5xl font-bold font-poppins py-12 pl-28 text-left">
                Services
              </h1>
              <div
                id="maingrid"
                className={isMobile ? 'px-10 pb-10' : 'px-20 pb-20'}
              >
                <div className={isMobile ? 'pt-0' : 'pt-2'}>
                  {/* {light ? (
                    <div
                      className={
                        isMobile
                          ? 'relative bg-Lightbox pb-lightboxmobilepadding overflow-y-auto  w-full flex justify-center  z-20 top-14 left-0  border-4 rounded-xl'
                          : 'relative bg-Lightbox pb-lightboxtabpadding   w-full flex justify-center  z-20 top-14 left-0  border-4 rounded-xl'
                      }
                    >
                      <div className=" absolute ">
                        <div id="lighboxmaincontainer">
                          <div id="crossimage" className="text-right">
                            {/* <Image src="" alt="" /> cross image */}
                  {/* </div>
                          <div id="mainlightimage" className="text-center">
                            <Image src={lightboxData.img} />
                          </div>
                          <div id="lightheading" className="text-center">
                            <h1
                              className={`font-bold text-white ${
                                lol ? 'text-2xl' : 'text-lg'
                              } font-poppins`}
                            >
                              {lightboxData.heading}
                            </h1>
                          </div>
                          <div id="lightdesc" className="pt-2">
                            <p className="text-justify px-6 text-white font-poppins">
                              {lightboxData.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  {/* ) : null} */}
                </div>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop
                  slidesPerView={isMobile ? 1 : 2}
                  spaceBetween={30}
                  // pagination={{ clickable: true }}
                  // className="mySwiper"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                >
                  <div className="flex">
                    <div
                      id="grid"
                      className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4"
                    >
                      {Servicesdata.map((mydata) => (
                        <SwiperSlide key={mydata.id}>
                          <div
                            className="bg-kaltire-red  text-center text-white border-white hover:border-2"
                            // onClick={() => UpdateLightbox(mydata)}
                          >
                            <div className="flex justify-center">
                              <div className="w-onsiteimage h-onsiteimage pt-6">
                                <Image src={mydata.img} alt="service" />
                              </div>
                            </div>
                            <h1 className="lg:text-xl text-lg font-bold font-mainpoppin pb-16 pt-4 h-12">
                              {mydata.heading}
                            </h1>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
