import React from 'react';
import TrailerTire from '../../Assets/Images/CommercialTires/Trailer-Tire.png';
import RearDrive from '../../Assets/Images/CommercialTires/RearDrive.png';
import SteerTires from '../../Assets/Images/CommercialTires/SteerTires.png';
import Image from 'next/image';
import { useHover } from '../../Hooks/Hover';
import BgCardTireComp from '../BgCardTireComp';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
const TireTypes = ({ data }) => {
  const isDesktop = useMediaQuery('(min-width:1248px)');
  const isMobile = useMediaQuery('(min-width:708px)');
  return (
    <div className="lg:mx-20 mx-8">
      <div className="my-8">
        {isDesktop ? (
          <div className=" grid lg:grid-cols-3 grid-row-3 2xl:gap-28 gap-2">
            {data.map((post) => (
              <BgCardTireComp post={post} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop
            slidesPerView={isMobile ? 2 : 1}
            spaceBetween={30}
            speed={1400}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
          >
            {data.map((post, id) => (
              <SwiperSlide key={id}>
                <BgCardTireComp post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default TireTypes;
