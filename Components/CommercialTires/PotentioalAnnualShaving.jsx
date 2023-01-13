import React from 'react';
import PotentialBg_Image from '../../Assets/Images/CommercialTires/PotentialBg_Image.png';
const PotentioalAnnualShaving = () => {
  return (
    <div id="maineassist">
      <div
        id="maineassistinner"
        className="text-center py-2 lg:mx-20 mx-0 px-4"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            `url(${PotentialBg_Image.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'red',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div id="content" className="md:pt-0 pt-2">
          <p className="text-xl md:text-3xl lg:text-3xl text-white lg:leading-70 font-semibold font-poppins">
            EMERGENCY ASSISTANCE --
            <span className="lg:text-xl"> KVL Tires is just a Call Away!</span>
          </p>
          <p className="text-sm md:text-lg lg:text-lg text-white  font-normal font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
          <div className="border-4 border-white mt-10 lg:mx-32 mx-0">
            <p className="text-lg -mt-12 md:text-xl border-4 border-white lg:text-2xl text-white bg-red-600 p-2 inline-block lg:leading-70 font-semibold font-poppins">
              POTENTIAL ANNUAL SAVINGS* OTHER V/S
            </p>
            <div className="flex lg:flex-row flex-col  lg:justify-center justify-start lg:items-center items-start pl-8 my-3 mt-4">
              <div className="text-white pr-20 text-2xl lg:pb-0 py-4">
                Cost Saving $100,000
              </div>
              <div
                className="bg-white text-black lg:text-xl text-lg px-8 py-2 items-start flex flex-col justify-left pr-30"
                style={{
                  clipPath:
                    'polygon(94% 0, 100% 50%, 93% 100%, 0% 100%, 5% 50%, 0% 0%);',
                }}
              >
                <div>* 118,454.55 GAL | Fuel Savings</div>
                <div>* 2,653,381.82 LBS | CO₂ Emission Reduction</div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  lg:justify-center justify-start lg:items-center items-start pl-8 my-3 mt-4">
              <div className="text-white pr-20 text-2xl lg:pb-0 py-4">
                Cost Saving $100,000
              </div>
              <div
                className="bg-white text-black lg:text-xl text-lg px-8 py-2 items-start flex flex-col justify-left pr-30"
                style={{
                  clipPath:
                    'polygon(94% 0, 100% 50%, 93% 100%, 0% 100%, 5% 50%, 0% 0%);',
                }}
              >
                <div>* 118,454.55 GAL | Fuel Savings</div>
                <div>* 2,653,381.82 LBS | CO₂ Emission Reduction</div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  lg:justify-center justify-start lg:items-center items-start pl-8 my-3 mt-4">
              <div className="text-white pr-20 text-2xl lg:pb-0 py-4">
                Cost Saving $100,000
              </div>
              <div
                className="bg-white text-black lg:text-xl text-lg px-8 py-2 items-start flex flex-col justify-left pr-30"
                style={{
                  clipPath:
                    'polygon(94% 0, 100% 50%, 93% 100%, 0% 100%, 5% 50%, 0% 0%);',
                }}
              >
                <div>* 118,454.55 GAL | Fuel Savings</div>
                <div>* 2,653,381.82 LBS | CO₂ Emission Reduction</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 pb-6 md:pt-0 pt-4 text-white text-left lg:px-32 px-0">
            Terms & Condition** Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentioalAnnualShaving;
