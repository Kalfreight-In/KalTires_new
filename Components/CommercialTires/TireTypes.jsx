import React from 'react';
import TrailerTire from '../../Assets/Images/CommercialTires/Trailer-Tire.png';
import RearDrive from '../../Assets/Images/CommercialTires/RearDrive.png';
import SteerTires from '../../Assets/Images/CommercialTires/SteerTires.png';
import Image from 'next/image';
import { useHover } from '../../Hooks/Hover';
import BgCardTireComp from '../BgCardTireComp';

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl: TrailerTire,
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
    imageUrl: RearDrive,
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
    imageUrl: SteerTires,
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
const TireTypes = () => {
  return (
    <div>
      <div className="">
        <div className=" flex lg:flex-row flex-col w-auto  justify-around">
          {blogPosts.map((post) => (
            <BgCardTireComp post={post} />
          ))}
        </div>

        <a
          href="https://a.paddle.com/v2/click/37973/124350?link=3167"
          class="no-underline hover:no-underline"
        >
          <div class="card">
            <div class="relative">
              <img src="templates/tails.jpg" alt="Tails [$]" />

              <span
                class="absolute bottom-0 w-full py-1 tracking-wider text-gray-800 text-center text-xs font-bold"
                // style={{"background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);opacity:0.75;"}}
              >
                AFFILIATE SCHEME
              </span>
            </div>

            <div class="card-title">Tails [$]</div>
            <p class="card-description">
              Tails is the ultimate drag'n drop page creator built for Tailwind
              CSS (Affiliate Link)
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TireTypes;
