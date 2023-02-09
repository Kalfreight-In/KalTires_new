import Image from 'next/image';
import React from 'react';
import AboutUsTire from '../Assets/Images/Home/AboutUsTire.jpg';
import AboutUs_Tires from '../Components/AboutUS/AboutUs_Tires';
import AboutUs_WhatMakeUsSpecial from '../Components/AboutUS/AboutUs_WhatMakeUsSpecial';

import ExploreNow from '../Components/AboutUS/ExploreNow';
import MostAdvancedTechnology from '../Components/AboutUS/MostAdvancedTechnology';
import OurStory from '../Components/AboutUS/OurStory';
import { CustomerReview } from '../Components/CustomerReview';
import HeroSection from '../Components/Home/HeroSection';
import MapConatiner from '../Components/MapContainer';
const CustomerReviewdata = [
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    Rating: 4,
    CustomerName: 'john',
  },
];

const AboutUs = () => {
  const data = [
    {
      id: 1,
      img: AboutUsTire,
      imgMobile: AboutUsTire,
      Heading: 'ARE YOU STUCK ON THE ROAD WITH A FLAT TIRE? ',
      Alttag: 'Convenient Roadside Assistance',
      desc: 'Get Quick & Convenient Roadside Assistance',

      CTA1: {
        heading: 'Call Now',
        Slink: 'tel:800-808-0025',
        link: 'tel:800-808-0025',
      },
      CTA12: { heading: 'Inventory', link: 'contactus' },
      page: 'roadside',
    },
  ];
  return (
    <>
      <HeroSection data={data[0]} />

      <AboutUs_Tires />
      <AboutUs_WhatMakeUsSpecial />
      <OurStory />
      <ExploreNow />
      <MapConatiner />
      <MostAdvancedTechnology />

      <CustomerReview
        data={CustomerReviewdata}
        colour={'black'}
        heading={'Testimonials'}
      />
    </>
  );
};

export default AboutUs;
