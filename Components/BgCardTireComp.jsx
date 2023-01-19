import React from 'react';
import { useHover } from '../Hooks/Hover';
import Image from 'next/image';
import Fade from '../FramerAnimations/Fade';
import Slide from '../FramerAnimations/Slide';
const BgCardTireComp = ({ post }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div
      key={post.id}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg "
    >
      <div
        className="flex-shrink-0 relative 2xl:h-104 xl:h-100  h-96 cursor-pointer "
        style={{
          width: '100',
        }}
        ref={hoverRef}
      >
        <div
          className={` text-center transition-all absolute text-white  duration-700 lg:text-lg text-base ${
            isHovered ? 'xl:h-96 lg:h-80 h-72 p-4  opacity-1' : 'h-0 opacity-0'
          } `}
          style={{ backgroundColor: '#C81010C4', zIndex: '6' }}
        >
          <Fade isActive={isHovered}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <div className="text-white relative flex justify-center font-bold text-2xl underline underline-offset-4 text-center">
              {post.author.name}
            </div>
          </Fade>
        </div>

        <div
          className={` bottom-0  text-center pb-8 w-full transition-all duration-700 flex justify-center absolute  `}
          style={{
            zIndex: '5',
          }}
        >
          {' '}
          {isHovered ? (
            <Slide isActive={isHovered} direction={-1} xdistance={100}>
              <div className="text-white bg-red-600 flex font-bold text-xl py-2 px-4 text-center">
                Explore Now
              </div>
            </Slide>
          ) : (
            <div className="text-white flex font-bold text-2xl underline underline-offset-4 text-center">
              {post.author.name}
            </div>
          )}
        </div>
        <div className="w-full  h-full">
          <Image
            loading="lazy"
            placeholder="AboutUsPAge"
            src={post.imageUrl}
            alt="AboutUs Header"
            objectFit="true"
          />
        </div>
      </div>
    </div>
  );
};

export default BgCardTireComp;
