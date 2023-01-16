import React from 'react';

const SmallSimpleComponent1 = ({ data, Textcolour, colour, Linecolour }) => {
  return (
    <div className={`bg-${colour} `}>
      <div className="p-10 pl-8 mx-20">
        <div
          className={`text-${Textcolour} flex items-center   pt-4
           text-center  font-bold lg:text-3xl text-xl`}
        >
          {data.Heading}
        </div>
        <div className={`horizontal-line-red bg-white my-4  lg:w-1/2`}></div>
        {data.BoldDescription ? (
          <div
            className={`text-${Textcolour} w-10/12 lg:text-2xl text-lg py-4`}
          >
            {data.BoldDescription}
          </div>
        ) : null}
        <div className={`text-${Textcolour} w-10/12`}>{data.Description}</div>
      </div>
    </div>
  );
};

export default SmallSimpleComponent1;
