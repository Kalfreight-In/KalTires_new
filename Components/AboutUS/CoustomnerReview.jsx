import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

const CustomerReciew = [
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
];

const CoustomnerReview = () => {
  return (
    <div className="bg-black flex flex-row  justify-center py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        slidesPerView={1}
        spaceBetween={30}
        speed={1400}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 1300,
        //   disableOnInteraction: false,
        // }}
      >
        <div className="text-white text-5xl font-thin">Customer Review</div>
        {CustomerReciew.map((data, id) => (
          <SwiperSlide key={id}>
            <div>
              <div id="grid" className="   px-4">
                <div className=" text-white text-center">
                  <div className="flex justify-center">{data.Review}</div>

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
  );
};

export default CoustomnerReview;
