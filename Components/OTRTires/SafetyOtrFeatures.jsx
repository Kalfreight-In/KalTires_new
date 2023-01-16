import React from 'react';
import Image from 'next/image';
const SafetyOtrFeatures = ({ data }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:place-content-center place-items-center justify-center w-screen ">
        {data.map((el, id) => (
          <div
            className="w-1/2 my-6 flex justify-center items-center flex-row"
            key={id}
          >
            <div className="lg:mr-8 mr-2 h-full">
              <Image src={el.Icon} className=""></Image>
            </div>
            <div className="flex justify-center flex-col">
              <div className="text-black font-bold">{el.Heading}</div>
              <div className={`horizontal-line-red  my-2  lg:w-1/2`}></div>
              <div className="text-black">{el.Description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyOtrFeatures;
