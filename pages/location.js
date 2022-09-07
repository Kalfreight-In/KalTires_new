import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
// import { Link } from 'react-scroll';
import dynamic from 'next/dynamic';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {
  animateScroll as scroll,
  Scroll,
  scroller,
  Element,
  Button,
} from 'react-scroll';
import { MapData1, MapData2 } from '../data/data';

import { useHover } from '../Hooks/Hover';
import useMediaQuery from '../Hooks/CustomMediaQuery';
import Search from '../Components/location/Search';

// eslint-disable-next-line no-unused-vars
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
export const SidebarMenu = styled.ul`
  display: flex;

  flex-direction: column;
  items-align: center;
  justify-content: center;
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  text-decoration: none;
  padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarLinkR = styled.a`
  display: flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  border-bottom: 1px solid #fff;
  font-size: 1rem;
  font-weight: 600;
  width: 85%;
  padding: 1rem 1rem 1rem 0rem;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
export const Divlink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0rem;
  font-size: 1rem;

  font-weight: 600;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-bottom: 1px solid black;
  color: #000;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
// use hover reducer to change the visibility on hover of the sidebar when dynimically created links

const useHoverReducer = (initialState, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [ref, isHovered] = useHover();
  useEffect(() => {
    if (isHovered) {
      dispatch({ type: 'HOVER' });
    } else {
      dispatch({ type: 'UNHOVER' });
    }
  }, [isHovered]);
  return [state, ref];
};
const LeafMap = dynamic(
  () => import('../Components/MapContainer/LeafMap'), // replace '@components/map' with your component's location
  {
    loading: () => <p>A map is loading now</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

const MapCaller = ({ Data, SData, location }) => (
  <LeafMap Data2={MapData2} Data={Data} SData={SData} location={location} />
);

const location = () => {
  const [Maplocation, setMapocation] = useState();
  const [TypedLocation, setTypedLocation] = useState();
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (!isBrowser) {
  //   return null;
  // }
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [visibilities, setVisibilities] = useState(() =>
    MapData1.map((x) => true)
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`location after typed${TypedLocation}`);
    MapData1.map((x) => true);
  }, [visibilities, TypedLocation]);

  const handleClick = (event, coordinates) => {
    scroller.scrollTo('MapContanierElement', {
      duration: 1500,
      delay: 100,
      smooth: true,

      offset: isDesktop ? 0 : 100, // Scrolls to element + 50 pixels down the page
    });
    setMapocation(coordinates);
    const index = parseInt(event.currentTarget.dataset.index, 10);

    const newVisibilities = [...visibilities];

    newVisibilities[index] = !newVisibilities[index];
    setVisibilities(newVisibilities);
  };
  return (
    <div
      id="mainmapcontainer"
      className="bg-black flex flex-col-reverse  md:flex-col bg-cover"
    >
      <Search setTypedLocation />

      <Element id="MapContanier" name="MapContanierElement">
        {/* <Map
          Fontana={isFontana}
          Bakersfield={isBakersfield}
          SanMarcos={isSanMarcos}
          Calgary={isCalgary}
          Arlington={isArlington}
          Hampton={isHampton}
          // Stockton={isStockton}
          Atlanta={isAtlanta}
          Indianapolis={isIndianapolis}
          Springdale={isSpringdale}
          abbotsford={isabbotsford}
          Lathrop={isLathrop}
          Calexico={isCalexico}
        /> */}
        <MapCaller
          Data={MapData1}
          Data2={MapData2}
          SData={visibilities}
          location={Maplocation}
        />
      </Element>
      <div className="w-full flex-1 ">
        <div
          className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center    lg:mb-0 mb-2  h-full"
          style={{
            backgroundImage: `${
              isDesktop
                ? 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
                : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/lol.png)'
            }`,
            display: 'flex',
          }}
        >
          <div className="  w-full  md:mb-0 bg-white ">
            <SidebarMenu className=" ">
              <div className="">
                {MapData1.map((value, index) => (
                  <div key={value.id} className="bg-black mb-4">
                    <Divlink
                      spy
                      smooth
                      duration={500}
                      delay={1000}
                      data-index={index}
                      onClick={(e) =>
                        handleClick(e, value.geometry.coordinates)
                      }
                    >
                      <div className="bg-red-600 p-5 ml-6 xl:w-1/6 w-1/3">
                        <h1
                          className={
                            visibilities[index]
                              ? 'text-white text-center font-bold '
                              : 'text-white text-center font-bold'
                          }
                        >
                          {value.properties.City}
                        </h1>
                      </div>
                      <div className="flex flex-row ml-10">
                        <svg
                          width="37"
                          height="35"
                          viewBox="0 0 37 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.1178 35C28.124 35 36.2357 27.165 36.2357 17.5C36.2357 7.83502 28.124 0 18.1178 0C8.11163 0 0 7.83502 0 17.5C0 27.165 8.11163 35 18.1178 35ZM18.0799 28.703C18.3894 27.2847 20.0584 23.5208 23.7808 19.4003C29.5466 13.0179 24.1047 6.07208 18.0799 6.21808C12.055 6.36409 5.83574 12.6839 13.0483 20.3597C15.1646 22.7376 16.7626 24.8234 18.0799 28.703Z"
                            fill="white"
                          />
                          <ellipse
                            cx="18.0963"
                            cy="13.7665"
                            rx="3.84383"
                            ry="3.71275"
                            fill="white"
                          />
                        </svg>

                        <h3 className="xl:text-2xl self-start text-white font-bold md:text-2xl pl-4">
                          Our Locations
                        </h3>
                      </div>
                      <span>
                        {visibilities[index] ? (
                          <BiMinus color="bg-white" />
                        ) : (
                          <BsPlus color="bg-white" />
                        )}

                        {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                      </span>
                    </Divlink>
                    <div
                      className={`Transition-Height-${
                        visibilities[index] ? 'in' : 'out'
                      }`}
                      onClick={() => setMapocation(value.geometry.coordinates)}
                    >
                      <ul>
                        {visibilities[index] ? (
                          <div className="text-black bg-white flex flex-center lg:flex-row flex-col p-8    justify-between ">
                            <div className="flex flex-center flex-col pl-6">
                              <div className="mb-6">
                                <div className="font-semibold text-lg">
                                  KVL Tires, KAL Partz, KAL Freight English Ave
                                </div>
                                <div className=" font-light text-lg">
                                  {value.properties.Address}
                                </div>
                                <div className=" font-light text-lg">
                                  Manager: {value.properties.Manager}
                                </div>
                              </div>
                              <div className="pb-2">
                                <div className=" font-light text-lg flex flex-row items-center ">
                                  <RiPhoneFill className="mr-4" />
                                  {value.properties.Phone}
                                </div>
                                <div className=" font-light text-lg flex flex-row items-center ">
                                  <MdEmail className="mr-4" />
                                  {value.properties.Email}
                                </div>
                              </div>
                            </div>
                            <div className="lg:flex flex-center flex-col lg:w-1/4 hidden">
                              <span className="text-black font-semibold text-lg">
                                Hours
                              </span>
                              <div>
                                {value.timing.map((time) => (
                                  <p key={index}>{time}</p>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-center flex-col lg:w-2/12 ">
                              <img src={value.properties.bgimage} />
                              <div className="text-right  pt-2">
                                <a
                                  className="text-blue-500"
                                  href={value.properties.url}
                                >
                                  See on maps
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/Careers">Careers</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
            </SidebarMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default location;
