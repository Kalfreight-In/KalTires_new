import React from 'react';

export const SubResume = () => (
  <div id="Mainresumecontainer">
    <div id="innermainresumecontainer" className="py-16">
      <div id="resumeallcontent">
        <div id="maincontentresume">
          <div id="innermaincontentresume" className="text-center">
            <h1 className="text-2xl font-bold text-resumeheading font-poppins">
              Join Our Awesome and Diversified Team
            </h1>
            <p className="text-resumedescription py-2 text-xl font-poppins">
              Many new women Hosts have started hosting on Airbnb during the
              pandemic, and women <br /> with only one listing have collectively
              earned over a half billion{' '}
            </p>
          </div>
        </div>

        <div id="mainuploadbutton" className="flex justify-center pt-4">
          <div className="overflow-hidden relative w-64 mt-2 mb-4">
            <button
              className="bg-kaltire-red hover:bg-blue-light text-white font-bold py-4 w-full inline-flex justify-center items-center rounded-md"
              type="button"
            >
              {/* <svg
              fill="#000"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg> */}

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
            Or Email your resume directly at info@kalpartz.com
          </p>
        </div>
      </div>
    </div>
  </div>
);
