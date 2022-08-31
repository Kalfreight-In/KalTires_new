import React from 'react';
// import { careerKvl } from '../../data/data';

// const careerdata = [careerKvl];

export const Ykvl = () => (
  <div id="mainykvl">
    <div id="maininnerykvl" className="pt-8">
      <div
        id="mainboxykvl"
        className="grid lg:px-20 lg:grid-flow-col grid-flow-row"
      >
        <div
          id="firstboxykvl"
          className="flex items-center lg:justify-start justify-center"
        >
          <h1 className="text-4xl text-departmentheading font-poppins font-bold mr-8">
            CAREERS AT KVL TIRES
          </h1>
        </div>
        <div className="lg:pl-24 pl-16 lg:pt-0 pt-8">
          <div
            id="secondboxykvl"
            className="text-ykvldesc text-xl border-l-2 border-kaltire-red pr-16 pl-8"
          >
            At KVL Tires, we build strong relationships with everyone. People
            everywhere entrust us with the care of their vehicles. We drive on
            the mission of ‘Efficiency on the move’. From tires to tuning up
            your vehicle, we ensure it runs at its best. The relentless pursuit
            of our goals extends beyond moving forward. It contributes to
            creating a workplace that celebrates the diversity of skills,
            capabilities, and experiences. Hence, inspiring us to grow, develop
            expertise, and encourage the right career moves. We stay committed
            to building a better future for employees, clients, and others.
          </div>
        </div>
      </div>
    </div>
  </div>
);
