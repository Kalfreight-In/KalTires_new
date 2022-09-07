import React from 'react';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { careerKvl } from '../../data/data';

const ydata = careerKvl;
// console.log(ydata);

export const Ykvl = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <div id="mainykvl">
      {ydata.map((thisdata) => (
        <div id="maininnerykvl" className="pt-8" key={thisdata}>
          <div
            id="mainboxykvl"
            className="grid lg:px-20 lg:grid-flow-col grid-flow-row"
          >
            <div
              id="firstboxykvl"
              className="flex items-center lg:justify-start justify-center"
            >
              <h1 className="text-4xl text-departmentheading font-poppins font-bold mr-8 ">
                {thisdata.Headingm}
              </h1>
            </div>
            <div
              className={
                isMobile
                  ? 'lg:pl-24 pl-8 lg:pt-0 pt-8'
                  : 'lg:pl-24 pl-16 lg:pt-0 pt-8'
              }
            >
              <div
                id="secondboxykvl"
                className={
                  isMobile
                    ? 'text-ykvldesc text-xl border-l-2 border-kaltire-red pr-4 pl-8 text-justify font-poppins'
                    : 'text-ykvldesc text-xl border-l-2 border-kaltire-red pr-16 pl-8 font-poppins text-justify'
                }
              >
                {thisdata.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
