import React from 'react';
import { ImPhone } from 'react-icons/im';
// import emerassistbackgr from '../../Assets/Images/Roadside_Assistance/emerassistbackgr.png';

const Emergencyassist = () => (
  <div id="maineassist">
    <div
      id="maineassistinner"
      className="text-center py-16"
      style={{
        backgroundImage:
          // eslint-disable-next-line operator-linebreak
          'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Roadside_Assistance/emerassistbackgr.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div id="content" className="md:pt-0 pt-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white lg:leading-70 font-semibold font-poppins">
          WE GOT YOUR BACK.
          <br /> EMERGENCY ASSISTANCE
        </h1>
        <div className="flex justify-center mt-8 pb-6 md:pt-0 pt-4">
          <button
            className="flex items-center bg-kaltire-red py-3 lg:px-12 md:px-16 px-12 text-white lg:text-2xl lg:font-bold"
            type="button"
          >
            <span>
              <ImPhone className="text-2xl" />
            </span>{' '}
            &nbsp; 800-808-0025
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default Emergencyassist;
