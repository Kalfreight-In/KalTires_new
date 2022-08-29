import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png';

const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [service, setservice] = useState('');
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
    setlocation('');

    setError(false);
    setErrorMessage('');
    setButtonText('Submit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const data = {
      site: 'kalgroup',
      name,
      email,
      message,
      phoneno,
      //   location,
    };

    axios
      .post('https://nodeserver-contactus.herokuapp.com/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  };

  return (
    <div id="maincontactform" className="flex justify-beween ">
      <div
        id="shadow"
        className="md:p-8 p-4 bg-red-600 px-48"
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
            <div className="flex flex-col justify-center items-center">
              <div className="w-max">
                {/* <Sparkles> */}
                {/* <Image
                  src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/animation/3dbuddy.png"
                  width={350}
                /> */}
                {/* </Sparkles> */}
              </div>
              <div className="text-2xl font-bold text-black w-2/4 mt-3 text-center mb-16 ">
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
                <div
                  animate={{ scale: [0.8, 1] }}
                  transition={{
                    ease: 'linear',
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                >
                  Something else <strong className="text-5xl ">!</strong>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form className="w-fit " onSubmit={(e) => handleSubmit(e)}>
            <div className="xl:text-left text-center xl:pl-2">
              <div
                id="contactnew"
                className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12 pl-12 "
              >
                {/* <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              /> */}
                <h1 className="text-white md:text-5xl text-3xl font-bold pl-2">
                  BOOK AN APPOINTMENT
                  <br /> NOW!
                </h1>
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
            <div className="flex flex-wrap -mx-3 mb-6 md:mt-8 lg:mt-0">
              <div
                className="w-full flex justify-center items-center  xl:px-3 mb-6 md:mb-0 pt-8"
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
              <div
                className="w-full flex justify-center items-center  xl:px-3 mb-6 md:mb-0 pt-4"
                id="input_placeholder"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div
                className="w-full flex justify-center items-center  xl:px-3 mb-6 md:mb-0 pt-4"
                id="input_placeholder"
              >
                <input
                  onChange={(e) => setservice(e.target.value)}
                  className="appearance-none block w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  type="select"
                  value={service}
                  placeholder="Service type"
                  required
                />
              </div>
              <div
                className="w-full flex justify-center items-center  xl:px-3 mb-6 md:mb-0 pt-4"
                id="input_placeholder"
              >
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
            <div id="submitallbutton" className="pl-24 pt-8 flex ">
              <div>
                <button
                  className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center"
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
              <div className="pl-12">
                <button
                  className="text-white  bg-red-600 text-opacity-80 border-opacity-80 bg-opacity-20 rounded h-12 p-4 w-48 mt-2 flex justify-center items-center border-2"
                  type="submit"
                >
                  Call Us Now
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <div id="maincontactformtwo">
        <div id="imgcontact">
          <Image src={mainimage} alt="contactus" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Contactform;
