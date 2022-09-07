import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const ContactTwo = () => {
  const isMobile = useMediaQuery('max-width:768px');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  // const [service, setservice] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [ROC, setROC] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const resetForm = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    setphoneno('');
    setError(false);
    setErrorMessage('');
    setButtonText('Submit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const data = {
      site: 'abcd@soidfh.com',
      name,
      email,
      message,
      phoneno,
      //   location,
    };

    axios
      // .post('https://nodeserver-contactus.herokuapp.com/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  };

  return (
    <div id="maincontactformhome" className="justify-center lg:flex">
      <div
        id="shadowhome"
        className=" bg-red-600 lg:pl-20 md:pl-28 pl-16 md:pt-20 pt-8 flex"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/Contactform/backgroundfirst.png' +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {success ? (
          <div
            animate={{ scale: [0.5, 1] }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex flex-col   items-center">
              <div className="w-max">
                {/* <Sparkles> */}
                {/* <Image
                  src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/animation/3dbuddy.png"
                  width={350}
                /> */}
                {/* </Sparkles> */}
              </div>
              <div className="text-2xl font-bold text-black w-2/4 mt-3 text-center mb-16">
                {/* <Sparkles> */}
                Thanks you for reaching out, we will get back to you as soon as
                possible.
                {/* </Sparkles> */}
              </div>
              <div
                className="text-3xl font-bold text-black text-center  cursor-pointer mb-2"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                {/* <div
                  animate={{ scale: [0.8, 1] }}
                  transition={{
                    ease: 'linear',
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                >
                  Something else <strong className="text-5xl ">!</strong>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <form className="w-fit " onSubmit={(e) => handleSubmit(e)}>
            <div className="xl:text-left text-center ">
              <div
                id="contactnew"
                className="flex justify-start items-center xl:justify-start xl:items-start  "
              >
                {/* <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              /> */}
                <div>
                  <h1 className="text-white md:text-5xl text-2xl font-bold text-left ">
                    CONTACT US
                  </h1>
                  <p className="text-white pt-4  text-justify lg:pr-0 mr-16">
                    Let’s grow your business together. Please provide your
                    details, and a KVL tire expert will get in touch with you
                    shortly.{' '}
                  </p>
                </div>
              </div>
              {/* <div className="2xl:hidden">
                <p className="text-neautralform  font-Poppins md:text-lg text-xs font-normal  my-1 mb-3 ">
                  Got a question? Or request a quote? Contact us directly or
                  fill up the form and we will get back to you promptly.
                </p>
              </div> */}
              {/* <div className="hidden 2xl:block">
                <p className="text-neautralform  font-Poppins md:text-lg text-xs font-normal  my-1 mb-3 ">
                  Got a question? Or request a quote? Contact us directly or
                  fill up the form <br /> and we will get back to you promptly.
                </p>
              </div> */}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 md:mt-8 lg:mt-0 mt-8">
              <div
                className="w-full flex   items-center  xl:px-3 mb-4 md:mb-0 md:pt-8"
                id="input_placeholder"
              >
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-10/12 h-full placeholder-white bg-opacity-30 bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  value={name}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="w-full flex   items-center  xl:px-3 mb-4 md:mb-0 md:pt-4">
                <input
                  type="tel"
                  // pattern="^\(\d{3}\)\s\d{3}-\d{4}$"
                  placeholder="Contact Number"
                  value={phone}
                  className="appearance-none block w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full flex   items-center  xl:px-3 mb-4 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                />
              </div>
              <div className="w-full flex   items-center  xl:px-3 mb-4 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setZip(e.target.value)}
                  inputMode="numeric"
                  className="appearance-none block w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="text"
                  value={zip}
                  placeholder="ZIP Code"
                  pattern="^\d{5}(-\d{4})?$"
                  required
                />
              </div>
              <div className="w-full flex   items-center  xl:px-3 mb-4 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none block w-10/12 h-full bg-opacity-30 bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-non"
                  id="grid-first-name"
                  type="text"
                  value={message}
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div id="submitallbutton" className=" md:pt-8 pt-0 flex ">
              <div>
                <button
                  className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center  items-center cursor-pointer"
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
              <div>
                <p
                  className="text-white  bg-red-600 text-opacity-80  bg-opacity-20 h-12 rounded  mt-2 flex justify-start items-center md:ml-16 ml-4"
                  type="submit"
                >
                  Or call us now at &nbsp;
                  <a href="tel:8008080025" className="cursor-pointer">
                    800-808 0025
                  </a>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>

      <span id="formtwo" className="lg:block hidden">
        <Image
          src={mainimage}
          alt="contactus"
          objectFit="cover"
          className="hidden"
        />
      </span>
    </div>
  );
};

export default ContactTwo;
