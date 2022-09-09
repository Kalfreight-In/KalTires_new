import React from 'react';

export const SubResume = () => (
  <div id="Mainresumecontainer">
    <div id="innermainresumecontainer" className="py-16">
      <div id="resumeallcontent">
        <div id="maincontentresume">
          <div id="innermaincontentresume" className="text-center">
            <h1 className="text-2xl font-bold text-resumeheading font-poppins">
              Join our Impressive & Diversified Team
            </h1>
          </div>
        </div>

        <div id="mainuploadbutton" className="flex justify-center pt-4">
          <div className="overflow-hidden relative w-64 mt-2 mb-4">
            <button
              className="bg-kaltire-red hover:bg-blue-light text-white font-bold py-4 w-full inline-flex justify-center items-center rounded-md"
              type="button"
            >
              <span className="ml-2 text-xl font-poppins">
                SUBMIT YOUR RESUME
              </span>
              <input
                className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t text-black"
                type="file"
                // name="documents[]"
                accept="image/png, image/jpeg"
              />
            </button>
          </div>
        </div>

        <div id="lastresumecontent" className="text-center text-kaltire-red">
          <p className="text-xl font-poppins">
            Or mail your resume directly at info@kvltires.com
          </p>
        </div>
      </div>
    </div>
  </div>
);
