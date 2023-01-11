import Image from 'next/image';
import React from 'react';
import AboutUsTire from '../Assets/Images/Home/AboutUsTire.jpg';
import AboutUs_Tires from '../Components/AboutUS/AboutUs_Tires';
import AboutUs_WhatMakeUsSpecial from '../Components/AboutUS/AboutUs_WhatMakeUsSpecial';
import CoustomnerReview from '../Components/AboutUS/CoustomnerReview';
import ExploreNow from '../Components/AboutUS/ExploreNow';
import MostAdvancedTechnology from '../Components/AboutUS/MostAdvancedTechnology';
import OurStory from '../Components/AboutUS/OurStory';
import CustomerReview from '../Components/CustomerReview';
import MapConatiner from '../Components/MapContainer';
const AboutUs = () => {
  return (
    <>
      <div
        styles={{
          position: 'fixed',
          height: '90vh',
          width: '100vw',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      >
        <Image
          loading="lazy"
          placeholder="AboutUsPAge"
          src={AboutUsTire}
          alt="AboutUs Header"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <AboutUs_Tires />
      <AboutUs_WhatMakeUsSpecial />
      <OurStory />
      <ExploreNow />
      <MapConatiner />
      <MostAdvancedTechnology />
      <CoustomnerReview />
      <CustomerReview></CustomerReview>
    </>
  );
};

export default AboutUs;
