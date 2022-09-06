import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import {
  HeroContainer,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
} from './HeroElements';
// import Video from './media/bgvideo.mp4';

const Gradients = styled.div`
  background-image: linear-gradient(
    230.87deg,
    rgba(0, 0, 0, 0.7) 10.28%,
    rgba(0, 0, 0, 0) 91.36%
  );
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const HeroSection = ({ data }) => (
  <HeroContainer>
    {/* <Gradients /> */}
    <HeroBg className=" mt-0 " BackgroundImage={data.img} />
    <HeroContent>
      <div className=" 2xl:pl-28 xl:pl-22 lg:pl-16  lg:-mb-20 2xl:-mb-0 lg:text-left text-center items-center">
        <div className="lg:flex flex-row lg:mx-0 mx-16">
          <div className="lg:border-l-4 border-PrimaryTwo sm:block " />

          <div className="lg:ml-8 ml-0 2xl:w-3/4 lg:w-8/12 w-full ">
            <div className="2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl font-bold text-white font-xl  pb-4 lg:border-b-0 border-b-4  border-y-PrimaryTwo lg:mx-0 ">
              {data.Heading}
            </div>
            {/* <div className="lg:border-l-4 border-y-amber-400 " /> */}
            <div className="lg:text-2xl text-white font-xl hidden lg:block">
              {data.desc}
            </div>
            <div className="lg:mt-10 mt-16 text-lg  ">
              <Link
                to="AboutUs-Scroll"
                className="flex flex-row justify-center lg:justify-start"
                smooth
                duration={500}
                spy
                offset={-80}
              >
                {/* <button
                  type="button"
                  className="text-white bg-red-500  font-semibold   shadow-sm  shadow-yellow-shadow transition-all hover:drop-shadow-lg  hover:shadow-2xl hover:bg-red-700 flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left"
                >
                  <p>{data.CTA1.heading}</p>
                </button> */}
                <button
                  type="button"
                  className="text-white   hover:border-0   font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow  hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left transition duration-300 ease-in-out lg:bg-none bg-kaltire-red"
                >
                  <p>{data.CTA1.heading}</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row lg:mt-16 mt-8  justify-center items-center lg:hidden">
          <div className="lg:border-l-2 border-x-amber-400 sm:block hidden" />

          <div className="lg:ml-8 ml-0">
            <div className="2xl:text-2xl text-lg text-white font-xl">
              Comprehensive, Consistent Convenient
            </div>
            <div className="lg:mt-4 mt-16 flex lg:justify-start justify-center  lg:items-start items-center">
              <Link to="AboutUs-Scroll" smooth duration={500} spy offset={-80}>
                <button
                  type="button"
                  className="text-white bg-yellow-bg  font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-xl lg:text-md lg:text-sm  2xl:p-0 p-4 lg:text-left"
                >
                  <p>lol</p>
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </HeroContent>
  </HeroContainer>
);
export default HeroSection;
