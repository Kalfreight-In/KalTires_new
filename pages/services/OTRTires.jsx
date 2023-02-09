import React from 'react';
import CommercialTiresBanner from '../../Assets/Images/CommercialTires/CommecialPage-Tires.png';
import PotentioalAnnualShaving from '../../Components/CommercialTires/PotentioalAnnualShaving';
import TireTypes from '../../Components/CommercialTires/TireTypes';
import { CustomerReview } from '../../Components/CustomerReview';
import Image from 'next/image';
import OtrimagesSection from '../../Assets/Images/OTRTires/OtrimagesSection.png';
import OTRTiresTrucks from '../../Components/OTRTires/OTRTiresTrucks';
import SmallSimpleComponent1 from '../../Components/SmallSimpleComponent1';
import SafetyOtrFeatures from '../../Components/OTRTires/SafetyOtrFeatures';
import otr1 from '../../Assets/Images/OTRTires/otr1.png';
import otr2 from '../../Assets/Images/OTRTires/otr2.png';
import otr3 from '../../Assets/Images/OTRTires/otr3.png';
import HeroSection from '../../Components/Home/HeroSection';

const CustomerReviewdata = [
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
  {
    Review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Rating: 4,
    CustomerName: 'john',
  },
];
const Data = {
  Heading: 'HEADING - 1 COMMERCIAL TRUCK',
  BoldDescription:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Description:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
const Data2 = {
  Heading: 'HEADING - 1 COMMERCIAL TRUCK',

  Description:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
const SafetyOtrFeature = [
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    Icon: OtrimagesSection,
    Heading: 'Lorem & ipsum',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
];
const OTRPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl: otr1,
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Trailer Tire',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl: otr2,
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Rear Drive',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl: otr3,
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Steer Tires',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];
const data = [
  {
    id: 1,
    img: CommercialTiresBanner,
    imgMobile: CommercialTiresBanner,
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
const OTRTires = () => {
  return (
    <>
      <HeroSection data={data[0]} />
      <div className="mb-8 ">
        <div className="lg:flex block lg:flex-col flex-row items-center mt-4">
          <div className="bg-red-600 text-center  p-4 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum,
          </div>
        </div>
      </div>
      <div
        className="mb-8 "
        style={{
          position: 'relative',
          marginTop: '-3.6rem',
          zIndex: '5',
        }}
      >
        <div className="lg:flex block -mb-2 z-30 lg:flex-col flex-row items-center ">
          <div
            className="bg-white -mt-9 absolute px-7 pt-3 min-w-1/2"
            style={{
              clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div
              className="text-white  flex items-center px-24 min-w-500 bg-red-600 pt-4
              text-center h-8  z-30 relative  font-bold lg:text-5xl  text-lg sha"
              style={{
                clipPath: 'polygon(13% 0, 88% 0, 100% 100%, 0% 100%)',
                shadowColor: '#ef4444',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}
            >
              <span className="w-3/4"></span>
            </div>
          </div>
          <div className="w-screen h-2 bg-white relative -z-10"></div>
          <div className="bg-red-600 p-3 text-white w-full font-bold flex lg:justify-center items-center text-3xl">
            OFF-THE-ROAD TIRES
          </div>
        </div>
      </div>
      <OTRTiresTrucks />
      <SmallSimpleComponent1
        data={Data}
        Textcolour={'white'}
        colour={'black'}
        Linecolour={'red-600'}
      />
      <TireTypes data={OTRPosts}></TireTypes>
      <PotentioalAnnualShaving />
      <CustomerReview
        heading={'Testimonials'}
        data={CustomerReviewdata}
        colour={'white'}
      />
      <SmallSimpleComponent1
        data={Data2}
        Textcolour={'white'}
        colour={'red-600'}
      />
      <SafetyOtrFeatures data={SafetyOtrFeature} />
      <SmallSimpleComponent1
        data={Data}
        Textcolour={'black'}
        colour={'white'}
        Linecolour={'red-600'}
      />
    </>
  );
};

export default OTRTires;
