import React from 'react';
import TrailerTire from '../../Assets/Images/CommercialTires/Trailer-Tire.png';
import RearDrive from '../../Assets/Images/CommercialTires/RearDrive.png';
import SteerTires from '../../Assets/Images/CommercialTires/SteerTires.png';
import Image from 'next/image';
import { useHover } from '../../Hooks/Hover';

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
  const [hoverRef, isHovered] = useHover();
  return (
    <div>
      <div className="">
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div
                className="flex-shrink-0 relative h-102 "
                style={{
                  width: '100',
                }}
                ref={hoverRef}
              >
                <div
                  className={` text-center transition-all duration-1000 text-lg  ${
                    isHovered ? 'h-96' : 'h-0'
                  } p-4`}
                  style={{ backgroundColor: '#C81010C4', zIndex: '6' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <div className="text-white flex justify-center font-bold text-2xl underline underline-offset-4 text-center">
                    {post.author.name}
                  </div>
                </div>
                <div
                  className=" bottom-0  text-center pb-8 w-full flex justify-center absolute "
                  style={{
                    zIndex: '5',
                  }}
                >
                  <div className="text-white flex font-bold text-2xl underline underline-offset-4 text-center">
                    {post.author.name}
                  </div>
                </div>
                <Image
                  loading="lazy"
                  placeholder="AboutUsPAge"
                  src={post.imageUrl}
                  alt="AboutUs Header"
                  fill
                  height="480"
                  style={{
                    objectFit: 'cover',
                    display: 'absolute',
                    zIndex: '3',
                  }}
                />
              </div>
            </div>
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
