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
              className="flex items-center lg:justify-start justify-center "
            >
              <h1 className="text-4xl text-departmentheading font-poppins font-bold mr-8 ">
                {thisdata.Headingm}
              </h1>
            </div>
            <div
              className={
                isMobile
                  ? 'lg:pl-24 pl-0 lg:pt-0 pt-8'
                  : 'lg:pl-0 pl-0 lg:pt-0 pt-8'
              }
            >
              <div
                id="secondboxykvl"
                className={
                  isMobile
                    ? 'text-ykvldesc text-xl border-l-2 border-kaltire-red pr-4 pl-0 lg:pl-8 text-left font-Helvetica'
                    : 'text-ykvldesc  border-l-2 border-kaltire-red pr-0 pl-8 font-Helvetica text-left tracking-wide'
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
