import React, { useState } from 'react';
import DropBox from '../DropBox_FileUpload/DropBox';

export const SubResume = () => {
  const [Popup, setPopup] = useState(false);

  return (
    <div id="Mainresumecontainer">
      <div id="innermainresumecontainer" className="2xl:py-16 py-12">
        <div id="resumeallcontent">
          <div id="maincontentresume">
            <div id="innermaincontentresume" className="text-center">
              <h4 className="text-2xl font-bold text-resumeheading font-poppins">
                Join our Impressive & Diversified Team
              </h4>
            </div>
          </div>

          <div id="mainuploadbutton" className="flex justify-center pt-4">
            <div className="overflow-hidden relative w-64 mt-2 mb-4">
              <button
                className="bg-kaltire-red hover:bg-blue-light text-white font-bold py-4 w-full inline-flex justify-center items-center rounded-md"
                type="button"
                onClick={() => {
                  setPopup(!Popup);
                }}
              >
                <span className=" text-xl text-center font-poppins">
                  SUBMIT YOUR RESUME
                </span>
                <input className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t text-black" />
              </button>
            </div>
          </div>
          {Popup ? (
            <div className="relative bottom-52 z-30   mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="sticky  top-0 left-0 right-0">
                <DropBox className=" absolute" />
              </div>
            </div>
          ) : null}

          <div
            id="lastresumecontent"
            className="text-center text-black font-poppins"
          >
            <p className="text-xl font-poppins">
              Or mail your resume directly at{' '}
              <a
                href="mailto:info@kvltires.com"
                className="text-kaltire-red font-poppins"
              >
                info@kvltires.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
