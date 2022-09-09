import React, { useState } from 'react';

import { RiInstagramFill } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
import { IoLogoFacebook, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { MdPhone, MdEmail, MdLocationPin } from 'react-icons/md';
import { Link as Slink } from 'react-scroll';

const Footer = () => {
  const [Hinventery, setHinventery] = useState(false);
  const [H_WA, setHWA] = useState(false);
  const [email, setEmail] = useState('');
  const [Hquicklinks, setHquicklinks] = useState(false);
  const [Hcontactus, setHcontactus] = useState(false);
  return (
    <div
      className="bg-footerbackground md:bg-cover bg-contain bg-black block"
      style={{
        backgroundImage:
          'url(https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png)',
        backgroundBlendMode: 'difference',
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'full',
      }}
    >
      <div className="p-8  md:p-0 xl:block flex justify-center ">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/NavLogo.png?token=GHSAT0AAAAAABXLNQCYFS4TDD6SA7WIQEWCYXSWPRA"
          alt="logo"
          className="2xl:h-18 xl:h-20  h-16 xl:hidden flex md:ml-0 xl:ml-36 mt-4"
        />
      </div>

      <div className="flex md:flex-row flex-col-reverse 2xl:pb-8 xl:pt-8 md:pt-4 md:flex md:justify-between md:bg-cover bg-contain">
        <div className=" ">
          <div className="xl:flex xl:flex-wrap xl:-mx-4 pt-2 xl:pb-2 w-screen">
            <div className="footer-info xl:w-3/12 xl:px-4 xl:block hidden items- start justify- start">
              <div className="xl:ml-16 w-max justify- start ml-4 xl:mt-0">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/NavLogo.png?token=GHSAT0AAAAAABXLNQCYFS4TDD6SA7WIQEWCYXSWPRA"
                    alt="logo"
                    className="2xl:h-20 xl:h-16 h-20 md:block hidden"
                    to="mailto:umarkhurshid3@gmail.com"
                    height={70}
                  />
                </div>

                <div className="text-white flex justify-start  xl:mt-5  ml-0 ">
                  <div className="mt-11">
                    <a href="tel:8003858006" target="_blank" rel="noreferrer">
                      <IoMdMail className="h-8 w-6  " />
                    </a>
                  </div>
                  <div className="block xl:ml-0 ">
                    <div className="flex justify-start text-lg mb-4 items-start  text-left -ml-6  font-medium">
                      Reach out to us
                    </div>

                    <div className=" text-md ml-2 xl:ml-4 text-xl  cursor-pointer">
                      info@kaltire.com
                    </div>
                  </div>
                </div>

                <div className="text-white flex xl:justify- start justify-start mt-2 md:ml-0 ml-0 ">
                  <div className="">
                    <a href="tel:8009770010" target="_blank" rel="noreferrer">
                      <MdPhone className="h-8 w-6" />
                    </a>
                  </div>
                  <div className="ml-4 flex flexcenter">
                    <a href="tel:8009770010" target="_blank" rel="noreferrer">
                      {' '}
                      <div className=" text-md   ">800-808-0025</div>{' '}
                    </a>
                  </div>
                </div>
                <div className="text-white flex xl:justify- start justify-start mt-2 md:ml-0 ml-0 ">
                  <div className="mt-2">
                    <a href="tel:8009770010" target="_blank" rel="noreferrer">
                      <MdLocationPin className=" h-8 w-6 " />
                    </a>
                  </div>
                  <div className="ml-4">
                    <a href="tel:8009770010" target="_blank" rel="noreferrer">
                      {' '}
                      <div className="md:text-md xl:text-md text-md   ">
                        Headquarters: 10156 Live Oak Ave <br /> Fontana, CA
                        92335
                      </div>{' '}
                    </a>
                  </div>
                </div>

                <div className="text-white flex mb-8 xl:mb-2  pt-5">
                  <div className=" ml-0">
                    <div className="w-full  md:ml-0  ml:-0 ">
                      English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  xl:w-3/6 md:px-4 ">
              <div className="sm:flex">
                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(!Hinventery);
                      setHWA(false);
                      setHquicklinks(false);
                      setHcontactus(false);
                    }}
                  >
                    <h1 className="2xl:text-2xl mb-4  text-xl md:font-bold font-normal xl:text-left text-center ">
                      Inventory
                    </h1>
                  </div>

                  <div
                    className={`text-white  2xl:leading-8 leading-6 xl:block   ${
                      Hinventery ? '' : 'hidden'
                    }`}
                  >
                    <a
                      href="#"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center  "
                    >
                      Commercial Tires
                    </a>
                    <Slink
                      to="corevaluemain"
                      smooth
                      duration={1000}
                      spy
                      exact
                      offset={-80}
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer"
                    >
                      OTR Tires
                    </Slink>
                    <a
                      href="https://kalfreight.com/who-we-are/csr"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Industrial Tires
                    </a>
                    <a
                      href="https://kalfreight.com/who-we-are/csr"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Agricultural Tires
                    </a>
                    <a
                      href="https://kalfreight.com/who-we-are/csr"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Retreads
                    </a>
                  </div>
                </div>

                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHWA(!H_WA);
                      setHinventery(false);
                      setHquicklinks(false);
                      setHcontactus(false);
                    }}
                  >
                    <h1 className="2xl:text-2xl mb-4 text-xl md:font-bold font-normal xl:text-left text-center   ">
                      Who Are We
                    </h1>
                  </div>

                  <div
                    className={`text-white 2xl:leading-8 leading-6 xl:block   ${
                      H_WA ? '' : 'hidden'
                    }`}
                  >
                    <a
                      href="https://kalfreight.com/"
                      target="_blank"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center  "
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                    <a
                      href="https://kaltrailers.com/"
                      target="_blank"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                      rel="noreferrer"
                    >
                      Group of Companies
                    </a>
                    <a
                      href="https://kvlties.com/"
                      className="block text-md hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      CSR
                    </a>
                  </div>
                </div>

                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(!Hquicklinks);
                      setHWA(false);
                      setHcontactus(false);
                    }}
                  >
                    <h1 className="2xl:text-2xl mb-4  text-xl md:font-bold font-normal xl:text-left  text-center ">
                      Quick Links
                    </h1>
                  </div>

                  <div
                    className={`text-white  2xl:leading-8 leading-6 xl:block  ${
                      Hquicklinks ? '' : 'hidden'
                    }`}
                  >
                    <div />
                    <div>
                      <a
                        href="https://kaltrailers.com/product-category/trucks/"
                        className="block text-md hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        target="_blank"
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://kaltrailers.com/product-tag/dry-van/"
                        className="block text-md hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Roadside Assistance
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://kaltrailers.com/product-tag/reefer/"
                        className="block text-md hover:text-yellow-shadowhover   mt-1   xl:text-left text-center  "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Locations
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://kaltrailers.com/product-category/trailers/new-trailers/"
                        className="block text-md hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Brands we offer
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://kaltrailers.com/product-category/trucks/used-trucks/"
                        className="block text-md hover:text-yellow-shadowhover   mt-1   xl:text-left text-center"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Credit Application
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 block xl:block mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);
                      setHWA(false);
                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <h1 className=" md:font-bold mb-4  font-normal  xl:text-left text-center   2xl:text-2xl text-xl md:ml-0 pl-0 ">
                      Services
                    </h1>
                  </div>

                  <div
                    className={`text-white 2xl:leading-10 leading-6 xl:block    ${
                      Hcontactus ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex flex-row space-x-2  align-center justify-center xl:justify-start  mt-1">
                      <div className="block text-md hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8 ">
                        <span className="flex cursor-pointer ">
                          <span className="mt-5px lg:leading-7">
                            <Slink
                              to="ContactSection"
                              smooth
                              duration={1000}
                              spy
                              exact
                              offset={-80}
                            >
                              Pick up & Delivery Service
                            </Slink>
                          </span>
                        </span>
                      </div>
                      <a
                        href="mailto:hr@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-md hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                      />
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-1">
                      <div className="block text-md hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8">
                        <span className="flex cursor-pointer">
                          <Slink
                            to="NewsRoom"
                            smooth
                            duration={1000}
                            spy
                            exact
                            offset={-80}
                          >
                            <span className="mt-5px lg:leading-7">
                              On-Site Services
                            </span>
                          </Slink>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className="block text-md hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        <span className="flex cursor-pointer">
                          <a
                            href="https://kalfreight.com/what-we-do"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="mt-5px lg:leading-7">
                              Mounted Wheel Programs
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className=" antialiased w-max block text-md hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        <span className="flex cursor-pointer">
                          <a
                            href="https://kaltrailers.com/credit-application/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="mt-5px lg:leading-7">
                              Subscribe for latest updates
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className=" antialiased w-max block text-md hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        <span className="flex cursor-pointer">
                          <a
                            href="http://kvlties.com/#Advantages"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="mt-5px lg:leading-7">
                              Flat Tire Repairs
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className=" antialiased w-max block text-md hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        <span className="flex cursor-pointer">
                          <a
                            href="http://kvlties.com/#Advantages"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="mt-5px lg:leading-7">
                              Retread Tires
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  xl:flex-1 flex-1 xl:w-2/12 hidden xl:flex md:justify-end justify-center mr-12  ">
              <div>
                <div
                  className="text-white cursor-pointer"
                  onClick={() => {
                    setHinventery(false);
                    setHquicklinks(false);
                    setHWA(false);
                    setHcontactus(!Hcontactus);
                  }}
                >
                  <h1 className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-lg md:ml-0 pl-0  ">
                    Subscribe for latest updates
                  </h1>
                </div>

                <div
                  className={`text-white 2xl:leading-8 leading-6 xl:block ${
                    Hcontactus ? '' : 'hidden'
                  }`}
                >
                  <div className="  mt-8">
                    <div className="w-full ">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        placeholder="Email Address"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-row ml-28 space-x-2  item-center justify-end  bg-kaltire-red  rounded">
                    <a
                      to=""
                      className=" block md:text-xl text-navsmall pr-8 2xl:pr-7  hover:text-yellow-shadowhover items-center cursor-pointer text-white   mt-1  font-bold text-center"
                    >
                      Submit
                    </a>
                  </div>

                  <div id="mainiconcontainer" className=" justify-end  mt-6 ">
                    <div id="allicons" className="flex justify-end">
                      <IoLogoFacebook
                        onClick={() =>
                          window.open(
                            'https://www.facebook.com/kalgroupusa',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-footersocialnew  h-8 w-6 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                      />
                      <RiInstagramFill
                        onClick={() =>
                          window.open(
                            'https://www.instagram.com/kalgroupusa/',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-instafooterhover  h-8 w-6 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                      />
                      <IoLogoLinkedin
                        onClick={() =>
                          window.open(
                            'https://www.linkedin.com/company/kal-trailers-and-leasing',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-linkdenfooterhover   h-8 w-6 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info xl:w-1/3 md:px-4 xl:hidden flex items-center justify-center mt-4">
              <div className="xl:ml-16 w-max justify-center items-center  flex flex-col ml-4 xl:mt-0">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
                    alt="logo"
                    className="2xl:h-28 xl:h-24  h-20 xl:block hidden"
                    to="mailto:umarkhurshid3@gmail.com"
                  />
                </div>
                <div className="md:flex block md:flex-row gap-x-8">
                  <div className="text-white flex justify-center  xl:mt-12 mt-4 ml-0 ">
                    <div className="mt-0">
                      <a href="mailto:info@kalgroup.com">
                        <MdEmail className="md:h-8 w-6 h-8 w-6 md:w-8 w-6  " />
                      </a>
                    </div>
                    <div className="block xl:ml-3 ml-2 text-center">
                      {/* <div className="block">Working hours</div> */}
                      <div className="md:text-xl text-md font-bold xl:font-semibold text-center">
                        <a href="mailto:info@kalgroup.com">info@kalgroup.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex xl:justify-center justify-start mt-4 md:ml-0 ml- ">
                    <div className="">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        <img
                          src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                          alt=""
                          className="text-white h-4 w-4"
                          width={50}
                        />
                      </a>
                    </div>
                    <div className="ml-4">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        {' '}
                        <div className="md:text-2xl text-md font-bold xl:font-semibold  ">
                          800-808-0025
                        </div>{' '}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-white flex mb-8 xl:mb-2  pt-5">
                  <div className="xl:ml-4 ml-0">
                    <div className="w-full  md:ml-0 xl:ml-12 ml:-0 ">
                      English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);
                      setHWA(false);
                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <h1 className=" md:font-semibold   xl:text-left text-center text-Description   text-md md:ml-0 pl-0  ">
                      For latest news & updates
                    </h1>
                  </div>

                  <div className="text-white 2xl:leading-8 leading-6 xl:block ">
                    <div className="  mt-1">
                      <div className="w-full ">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          placeholder="Email Address"
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-row align-center justify-center xl:justify-end">
                      <a
                        to=""
                        className="block md:text-xl text-navsmall font-normal hover:text-yellow-shadowhover cursor-pointer text-kaltire-red  text-Description   text-center"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="mainiconcontainer"
                  className=" justify-end pb-4 mt-4  "
                >
                  <div id="allicons" className="flex justify-between  ">
                    <IoLogoFacebook
                      onClick={() =>
                        window.open(
                          'https://www.facebook.com/kaltireusa',
                          '_blank'
                        )
                      }
                      className="text-white hover:text-footersocialnew  h-8 w-6 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                    />
                    <RiInstagramFill
                      onClick={() =>
                        window.open(
                          'https://www.instagram.com/kaltireusa/',
                          '_blank'
                        )
                      }
                      className="text-white hover:text-instafooterhover  h-8 w-6 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                    />
                    <IoLogoLinkedin
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/company/kal-trailers-and-leasing',
                          '_blank'
                        )
                      }
                      className="text-white hover:text-linkdenfooterhover   h-8 w-6 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;