import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const Contactform = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
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

  // useEffect(() => {
  //   const emailval = document.querySelector('#emailValidate');
  //   const submit = document.querySelector('#submitmain');
  //   submit.addEventListener('click', () => {
  //     if (emailval.validity.typeMismatch) {
  //       emailval.setCustomValidity('Please enter correct email');
  //     } else {
  //       emailval.setCustomValidity('');
  //     }
  //   });
  // });

  return (
    <div id="maincontactform" className="justify-between lg:flex">
      <div
        id="shadow"
        className="md:p-0 p-4 bg-red-600"
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
              <div className="text-2xl font-bold text-black w-2/4 mt-3 text-center mb-16 font-Helvetica ">
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
            <div className="xl:px-3">
              <div className="xl:text-left text-center xl:pl-2">
                <div
                  id="contactnew"
                  className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12 md:pl-12 pl-4"
                >
                  {/* <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              /> */}
                  <div>
                    <h1 className="text-white md:text-5xl text-2xl font-bold text-left font-poppins">
                      BOOK AN APPOINTMENT NOW
                    </h1>
                    <p className="text-white pt-4  text-justify lg:pr-0 mr-16 font-Helvetica">
                      Let’s grow your business together. Please provide your
                      details, and a KVL Tire expert will get in touch with you
                      shortly.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 md:mt-8 lg:mt-0">
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 lg:pt-8 pt-0"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none font-Helvetica block w-10/12 h-full placeholder-white bg-opacity-30 bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block font-Helvetica w-10/12 h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="emailValidate"
                    type="email"
                    value={email}
                    placeholder="Email Id"
                    required
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    // title="email is required like samosa"
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <select
                    name="servicetype"
                    className=" block font-Helvetica w-10/12  h-full bg-opacity-30 focus:bg-red-600  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    onChange={(e) => setservice(e.target.value)}
                    type="select"
                    value={service}
                    placeholder="Service type"
                    required
                  >
                    <option value="service">Select Service Type</option>
                    <option value="newtires">New Tires</option>
                    <option value="retreadtires">Retread Tires</option>
                    <option value="heavyduty">Heavy Duty Front End Work</option>
                    <option value="wheel">Wheel Alignment</option>
                    <option value="otr">OTR Tires</option>
                    <option value="speciality">Specialty</option>
                    <option value="enquiry">Enquiry</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    className="appearance-none font-Helvetica block w-10/12 h-full bg-opacity-30 bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-non"
                    id="grid-first-name"
                    type="text"
                    value={message}
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              <div
                id="submitallbutton"
                className="lg:pl-16 md:pl-16 pl-6 md:pt-8 flex font-Helvetica md:pb-8 lg:pb-4  md:flex-row flex-col"
              >
                <div>
                  <button
                    className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
                    type="submit"
                    id="submitmain"
                  >
                    {buttonText}
                  </button>
                </div>

                <div>
                  <p className="text-white md:ml-16  bg-red-600 text-opacity-80 border-opacity-80 bg-opacity-20 rounded h-12 font-Helvetica  mt-2 flex justify-start items-center">
                    Or call us now at &nbsp;
                    <a
                      href="tel:8008080025"
                      className="cursor-pointer font-bold font-Helvetica"
                    >
                      800-808 0025
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>

      {isDesktop ? (
        <Image src={mainimage} alt="contactus" objectFit="cover" />
      ) : null}
    </div>
  );
};

export default Contactform;
