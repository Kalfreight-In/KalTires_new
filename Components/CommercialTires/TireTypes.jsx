import React from 'react';
import TrailerTire from '../../Assets/Images/CommercialTires/Trailer-Tire.png';
import RearDrive from '../../Assets/Images/CommercialTires/RearDrive.png';
import SteerTires from '../../Assets/Images/CommercialTires/SteerTires.png';
import Image from 'next/image';
import { useHover } from '../../Hooks/Hover';
import BgCardTireComp from '../BgCardTireComp';

const TireTypes = ({ data }) => {
  return (
    <div className="mx-20">
      <div className="my-8">
        <div className=" grid lg:grid-cols-3 grid-row-3 2xl:gap-28 gap-2">
          {data.map((post) => (
            <BgCardTireComp post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TireTypes;
