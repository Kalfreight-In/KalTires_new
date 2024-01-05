import React from "react";
import Head from "next/head";
import crs_banner from "../Assets/Images/Home/csr-banner.jpg";

const CSR = () => (
  <div id="maincontactform" className="justify-between lg:flex">
    <div class="md:p-0 p-4 bg-red-600 2xl:w-1/2 xl:w-9/12 flex justify-center items-center">
      <div class="text-white pt-4  text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
        <h4 class="text-white md:text-3xl text-2xl font-bold text-left font-poppins">
          CSR: A pledge that’s aligned with our ethical charter and everyday
          commitments
        </h4>
        <p class="text-white pt-4  text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
          Corporate Social Responsibility is a part and parcel of the way we
          operate our business across the United States. Being socially
          responsible for us means not only fulfilling a few legal formalities
          but also going beyond all regular compliances. It includes investing
          “more” into human capital, the environment, and the relations with
          every individual in the ambit of our business operations.
        </p>
      </div>
      <div className="right">
        <img src={crs_banner} alt="CSR Banner" />
      </div>
    </div>
  </div>
);

export default CSR;
