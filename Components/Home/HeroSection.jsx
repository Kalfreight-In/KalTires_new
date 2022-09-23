import React from 'react';
// import { Link } from 'react-scroll';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroContainer, HeroContent, HeroBg } from './HeroElements';
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
    <Gradients />
    <HeroBg className=" mt-0 " BackgroundImage={data.img} />
    <HeroContent>
      <div className=" lg:pl-20  pl-0 lg:-mb-20 2xl:-mb-0 lg:text-left text-center items-center">
        <div className="lg:flex flex-row lg:mx-0 mx-16">
          <div className=" sm:block " />

          <div
            className={` ml-0 ${
              data.Heading.length > 31 ? 'lg:w-7/12' : 'lg:w-10/12'
            }  w-full `}
          >
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
            >
              <div
                className={` ${
                  data.Heading ? 'lg:border-l-4 ' : null
                } border-PrimaryTwo anima lg:pl-3 pl-0`}
              >
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="2xl:text-5xl xl:text-4xl font-poppins lg:text-3xl text-2xl font-bold text-white font-xl  pb-0 lg:pb-4 lg:border-b-0 border-b-4  border-y-PrimaryTwo lg:mx-0 block-inline">
                    {data.Heading.toUpperCase()}
                  </div>
                </motion.div>

                {/* <div className="lg:border-l-4 border-y-amber-400 " /> */}
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className={`lg:text-xl  text-white  font-Helvetica font-xl  lg:block lg:pt-0 pt-2  pr-0   ${
                      data.desc
                        ? data.desc.length > 66
                          ? 'lg:pr-28'
                          : 'lg:pr-0'
                        : null
                    } `}
                  >
                    {data.desc}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* <div className="lg:border-l-4 border-y-amber-400 " /> */}

            {data.CTA1 ? (
              <div className="lg:mt-10 mt-16 text-lg flex justify-center lg:justify-start ">
                <Link
                  href={data.CTA1.Slink ? data.CTA1.Slink : data.CTA1.link}
                  className="flex flex-row justify-center lg:justify-start"
                  passHref
                >
                  {/* <button
                  type="button"
                  className="text-white bg-red-500  font-semibold   shadow-sm  shadow-yellow-shadow transition-all hover:drop-shadow-lg  hover:shadow-2xl hover:bg-red-700 flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left"
                >
                  <p>{data.CTA1.heading}</p>
                </button> */}

                  <motion.button
                    id={data?.page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="text-white font-poppins  hover:border-0   font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow  hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-32 2xl:h-12 h-10 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left transition duration-300 ease-in-out lg:bg-none bg-kaltire-red"
                  >
                    <p>{data.CTA1.heading}</p>
                  </motion.button>
                </Link>
              </div>
            ) : null}
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
