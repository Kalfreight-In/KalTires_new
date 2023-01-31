import React from 'react';
import CommercialTiresBanner from '../Assets/Images/CommercialTires/CommecialPage-Tires.png';
import Image from 'next/image';
import SmallSimpleComponent1 from '../Components/SmallSimpleComponent1';
import axios from 'axios';
import { useState } from 'react';

const Data = {
  Heading: 'HEADING - 1 COMMERCIAL TRUCK',
  BoldDescription:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Description:
    'Description 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend
    axios
      .post('/form', {
        name: name,
        email: email,
        serviceType: serviceType,
        message: message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div
        style={{
          zIndex: '-1',
        }}
      >
        <Image
          loading="lazy"
          placeholder="AboutUsPAge"
          src={CommercialTiresBanner}
          alt="AboutUs Header"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="mb-8 "
        style={{
          position: 'relative',
          marginTop: '-3.6rem',
          zIndex: '5',
        }}
      >
        <div className="lg:flex block lg:flex-col flex-row items-center ">
          <div
            className="bg-white px-7 pt-3"
            style={{
              clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div
              className="text-white  flex items-center justify-center px-24  bg-red-600 pt-4
              text-center  font-bold lg:text-5xl text-3xl"
              style={{
                clipPath: 'polygon(13% 0, 88% 0, 100% 100%, 0% 100%)',
              }}
            >
              CONTACT-US
            </div>
          </div>

          <div className="bg-red-600 text-center  p-4 text-white">
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
      <SmallSimpleComponent1
        data={Data}
        Textcolour={'white'}
        colour={'black'}
        Linecolour={'red-600'}
      />
      <div className="w-full flex flex-row px-10 py-10">
        <form className="lg:w-1/2" onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col justify-around">
            <div
              className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4 pr-2"
              id="input_placeholder"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                className="appearance-none font-Helvetica block w-full h-full placeholder-black bg-opacity-30  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                value={name}
                placeholder="Name"
                required
              />
            </div>
            <div
              className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
              id="input_placeholder"
            >
              <input
                className="appearance-none font-Helvetica block w-full h-full placeholder-black bg-opacity-30  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div
              className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
              id="input_placeholder"
            >
              <input
                className="appearance-none font-Helvetica block w-full h-full placeholder-black bg-opacity-30  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="serviceType"
                value={serviceType}
                placeholder="Service Type"
                onChange={(event) => setServiceType(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="half right cf">
            <textarea
              id="message"
              value={message}
              className="appearance-none font-Helvetica block w-full h-full placeholder-black bg-opacity-30  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
            <br />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-black bg-red-500 rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
              type="submit"
              id="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="lg:w-1/2 pl-6">
          <div className="text-black font-bold text-xl">Our Store</div>
          <div className="text-black font-bold text-xl">Hour Of Operation</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
