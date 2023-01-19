import React, { useEffect } from 'react';
import Slide from '../FramerAnimations/Slide';
import Zoom from '../FramerAnimations/Zoom';
import { useHover } from '../Hooks/Hover';
import Image from 'next/image';
import { useComponentPosition } from '../Hooks/useComponentPostion';
import { useIntersectionObserver } from '../Hooks/useIntersection';
import { debounce } from 'lodash';
import { useWindowSize } from '../Hooks/WindowSize';
const ToolTip = ({ children, data }) => {
  const [hoverRef, isHovered] = useHover();
  const { width, height } = useWindowSize();
  //   const [position, componentRef] = useComponentPosition();
  const [position, setRef] = useIntersectionObserver({
    threshold: [0, 0.5, 1],
  });
  //   const [positionLive, componentRef] = useComponentPosition(
  //     debounce(() => true, 250)
  //   );
  useEffect(() => {
    console.log(
      `X: ${position.x} Y: ${position.y} isIntersecting: ${position.isIntersecting}`
    );
  }, [position]);
  return (
    <div className="relative" ref={hoverRef}>
      <div>
        {children}

        {
          true && (
            // <Slide isActive={isHovered} direction={-1} xdistance={60}>

            <Zoom isActive={isHovered}>
              <div className="absolute z-30" ref={setRef}>
                <div
                  className={`bg-white w-96 ${
                    position.y > height - 180 && '-mt-56'
                  }   m-2 p-4 drop-shadow-md`}
                >
                  {/* <Image src={data.image} /> */}
                  <div className="">
                    <div className="text-lg">{data.description}</div>
                  </div>
                </div>
              </div>
            </Zoom>
          )

          // </Slide>
        }
      </div>
    </div>
  );
};

export default ToolTip;
