import React from 'react';

const ExploreNow = () => {
  return (
    <div id="maineassist">
      <div
        id="maineassistinner"
        className="text-center py-16"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Roadside_Assistance/emerassistbackgr.jpg' +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'red',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div id="content" className="md:pt-0 pt-8">
          <p className="text-2xl md:text-3xl lg:text-5xl text-white lg:leading-70 font-semibold font-poppins">
            EMERGENCY ASSISTANCE
            <br />
          </p>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center mt-8 pb-6 md:pt-0 pt-4">
            <a href="tel: 8008080025" target="_blank" rel="noreferrer">
              <div
                id="onsiteid"
                className="flex items-center  bg-kaltire-red py-2  px-12 text-white lg:text-2xl lg:font-bold font-Helvetica"
                // type="button"
              >
                &nbsp; 800-808-0025
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
