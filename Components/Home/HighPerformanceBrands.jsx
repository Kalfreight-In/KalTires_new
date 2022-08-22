import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import { HighPerformanceBrandsData } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const HighBrandSliderComponent = styled.div`
  background: linear-gradient(rgba(11, 11, 11, 0.8), rgba(11, 11, 11, 0.8)),
    ${(props) => `url(${props.BackgroundImage}) `};
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background-image: ${(props) => `url(${props.BackgroundImage}) `};
    background-color: red;
    background-blend-mode: multiply;
  }
`;

const HighBrandsSlider = ({ data }) => (
  <HighBrandSliderComponent
    className="bg-zinc-200"
    BackgroundImage={data.bgImage}
  >
    <div className="flex flex-col p-4">
      <img src={data.logo} className="h-24" />
      <img src={data.Image} className="w-96" />
    </div>
  </HighBrandSliderComponent>
);

const HighPerformanceBrands = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  return (
    <div className="lg:px-36 px-12 py-12 flex flex-col flexcenter">
      <h2
        className={` font-bold  text-center pb-8 ${
          isDesktop ? 'text-4xl' : 'text-2xl text-center'
        } `}
      >
        <span className="text-red-500">HIGH PERFORMANCE</span> BRANDS
      </h2>
      <div className="lg:px-36">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          slidesPerView={isDesktop ? 4 : 1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {HighPerformanceBrandsData.map((data) => (
            <SwiperSlide key={data.id}>
              <HighBrandsSlider data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HighPerformanceBrands;
