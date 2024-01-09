import React from "react";
import Head from "next/head";
import Image from "next/image";
import crs_banner from "../Assets/Images/Home/csr-banner.jpg";

const CSR = () => (
  <div className="maincontactform">
    <div className="row justify-between lg:flex">
      <div className="p-4 bg-red-600 2xl:w-full xl:w-full flex justify-center items-center">
        <div className="lg:ml-20 ml-4 col-4" style={{ width: "70%" }}>
          <div className="lg:text-left text-center">
            <div
              id="contactnew"
              className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12"
            >
              <div>
                <h3 className="text-white md:text-5xl text-2xl font-bold text-left font-poppins">
                  CSR
                </h3>
                <br />
                <h4 className="text-white md:text-2xl pt-6 text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                  A pledge that’s aligned with our ethical charter and everyday
                  commitments
                </h4>
                <br />
                <p className="text-white pt-4 text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                  Corporate Social Responsibility is a part and parcel of the
                  way we operate our business across the United States. Being
                  socially responsible for us means not only fulfilling a few
                  legal formalities but also going beyond all regular
                  compliances. It includes investing “more” into human capital,
                  the environment, and the relations with every individual in
                  the ambit of our business operations.
                  <br />
                  <br />
                  We understand that Corporate Social Responsibility has a big
                  role to play in the industry we operate in. It’s an industry
                  where there is a need to foster research and innovation so
                  that sustainable technologies and behaviors can be promoted.
                  Now with digital technologies in place, we can better monitor
                  and analyze our activities. As part of our efforts, new
                  electric vehicles are joining our fleet for last-mile
                  deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Image
            src={crs_banner}
            alt="Banner"
            className="grayscale img-fluid"
            width={1200} // Set your desired width
            height={800} // Set your desired height
          />
        </div>
      </div>
    </div>
  </div>
);

export default CSR;
