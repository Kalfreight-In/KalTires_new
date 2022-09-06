import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';

import { HomeSliderData } from '../../data/data';
import HeroSection from './HeroSection';

const HomeSlider = () => {
  // const menu = ['1', '2', '3'];

  const pagination = {
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}"> 
        <svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"> 
        <circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"
        stroke-opacity="1" stroke-width="1.5px"></circle>
      <circle cx="8" cy="8" r="3" fill="#FFF"></circle>
        </svg>0 ${index + 1}</span>`;
    },
  };
  return (
    <div className="SliderWrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        pagination={pagination}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {HomeSliderData.map((data) => (
          <SwiperSlide key={data.id}>
            <HeroSection data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
