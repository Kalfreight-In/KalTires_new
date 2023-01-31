import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { AiFillHeart, AiOutlineHeart } from ' ';

export const CustomerReview = ({ heading, data, colour }) => {
  return (
    <>
      <div
        className={`bg-${colour == 'black' ? 'black' : 'white'} text-${
          colour == 'black' ? 'white' : 'black'
        } text-2xl font-bold text-center pt-4`}
      >
        {heading}
      </div>
      <div
        className={`bg-${
          colour == 'black' ? 'black' : 'white'
        } flex flex-row  justify-center py-4`}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          slidesPerView={1}
          spaceBetween={30}
          speed={1400}

          // autoplay={{
          //   delay: 1300,
          //   disableOnInteraction: false,
          // }}
        >
          {data.map((data, id) => (
            <SwiperSlide key={id}>
              <div>
                <div id="grid" className="   ">
                  <div
                    className={`text-${
                      colour == 'black' ? 'white' : 'black'
                    } text-center`}
                  >
                    <div className="flex justify-center">{data.Review}</div>
                    <Ratings value={data.Rating} />

                    <h2 className="lg:text-xl text-lg font-bold font-Helvetica ">
                      {data.CustomerName}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export const Ratings = ({ value }) => {
  return (
    <div className="flex flex-row justify-center">
      {[...Array(5)].map((ignore, ind) => {
        // you just use indice here
        return (
          <span key={ind}>
            {value >= ind + 1 ? (
              <AiFillHeart color="red" />
            ) : value >= ind + 0.5 ? (
              <AiOutlineHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </span>
        );
      })}
    </div>
  );
};
