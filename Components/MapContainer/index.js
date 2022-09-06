import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
// import { Link } from 'react-scroll';
import dynamic from 'next/dynamic';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { MapData1, MapData2 } from '../../data/data';

import { useHover } from '../../Hooks/Hover';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

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
  padding-left: 2rem;
  padding-right: 1rem;
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
  align-items: left;
  justify-content: space-between;
  width: 100%;
  margin: 0rem;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 0rem;
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
  () => import('./LeafMap'), // replace '@components/map' with your component's location
  {
    loading: () => <p>A map is loading now</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

const MapCaller = ({ Data, Data2, SData, location }) => (
  <LeafMap Data={Data} Data2={Data2} SData={SData} location={location} />
);
export const MapConatiner = () => {
  const [Maplocation, setMapocation] = useState();

  const [FeaatureCat, setFeaatureCat] = useState('Commercial Tires');

  const [ShowDropdown, setShowDropdown] = useState(false);
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (!isBrowser) {
  //   return null;
  // }
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [visibilities, setVisibilities] = useState(() =>
    MapData1.map((x) => false)
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    MapData1.map((x) => false);
  }, [visibilities]);

  const handleClick = (event, coordinates, city) => {
    setMapocation(coordinates);
    const index = parseInt(event.currentTarget.dataset.index, 10);
    setVisibilities(() => MapData1.map(() => false));

    const newVisibilities = [...visibilities];

    newVisibilities[index] = !newVisibilities[index];
    setVisibilities(newVisibilities);
    setShowDropdown(!ShowDropdown);
    setFeaatureCat(city);
  };
  // const [selectedPosition, setSelectedPosition] = React.useState(null);
  // const [Services, setServices] = useState(false);
  // const [NewsRoom, setNewsRoom] = useState(false);
  // const [AboutUs, setAboutUs] = useState(false);
  // const [BusinessVerticles, setBusinessVerticles] = useState(false);

  // const [Fontana, isFontana] = useHover();
  // const [Bakersfield, isBakersfield] = useHover();
  // const [SanMarcos, isSanMarcos] = useHover();
  // const [Calgary, isCalgary] = useHover();
  // const [Arlington, isArlington] = useHover();
  // const [Hampton, isHampton] = useHover();
  // // const [Stockton, isStockton] = useHover();
  // const [Atlanta, isAtlanta] = useHover();
  // const [Lathrop, isLathrop] = useHover();
  // const [Calexico, isCalexico] = useHover();
  // const [Almondfontana,isAlmondfontana] = useHover();
  // const [ValleyFontana,isValleyFontana] = useHover();
  // const [Indianapolis, isIndianapolis] = useHover();
  // const [Springdale, isSpringdale] = useHover();
  // const [abbotsford, isabbotsford] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-black flex flex-col-reverse  md:flex-row bg-cover "
      style={{
        backgroundImage: `${
          isDesktop
            ? 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/lol.png)'
            : 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
        }`,
      }}
    >
      <div className=" svg-container py-28 ">
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
      </div>
      <div className="w-full flex-1 ">
        <div
          className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center    lg:mb-0 mb-2  h-full py-28"
          style={{
            backgroundImage: `${
              isDesktop
                ? 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
                : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/lol.png)'
            }`,
            display: 'flex',
          }}
        >
          <div className="  w-full pl-16 md:mb-0 mb-24">
            <div className="w-full ">
              <div className="flex flex-row">
                {/* <svg
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
                </svg> */}

                <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl ">
                  Our Locations
                </h3>
              </div>

              <div className="lg:mt-8 mt-2 text-white font-desc text-descnew pb-4">
                United State
              </div>
            </div>
            <SidebarMenu className="lg:bg-white bg-none pb-2 2xl:mr-48 xl:mr-32 lg:mr-20 ">
              <div className="">
                {/* <div
                  className={`Transition-Height-${ShowDropdown ? 'in' : 'out'}`}
                >
                  {ShowDropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => {
                          SetDataFunction('Commercial Tires');
                          setFeaatureCat(' Commercial Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative     text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
                      >
                        <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Commercial Tires
                        </h4>
                        <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                      <button
                        onClick={() => {
                          SetDataFunction('Industrial Tires');
                          setFeaatureCat('Industrial Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative      text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
                      >
                        <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Industrial Tires
                        </h4>
                        <span className="bg-black  group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                      <button
                        onClick={() => {
                          SetDataFunction('Earthmover Tires');
                          setFeaatureCat('Earthmover Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative   text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
                      >
                        <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Earthmover Tires
                        </h4>
                        <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                    </div>
                  ) : null}
                </div> */}
                {isDesktop ? (
                  MapData1.map((value, index) => (
                    <div key={value.id}>
                      <Divlink
                        data-index={index}
                        onClick={(e) =>
                          handleClick(e, value.geometry.coordinates)
                        }
                      >
                        <h1
                          className={
                            visibilities[index]
                              ? 'text-black font-bold'
                              : 'text-black font-bold'
                          }
                        >
                          {value.properties.City}
                        </h1>

                        <span>
                          {visibilities[index] ? <BiMinus /> : <BsPlus />}

                          {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                        </span>
                      </Divlink>
                      <div
                        className={`Transition-Height-${
                          visibilities[index] ? 'in' : 'out'
                        }`}
                        onClick={() =>
                          setMapocation(value.geometry.coordinates)
                        }
                      >
                        <ul>
                          {visibilities[index] ? (
                            <div className="text-black h-8 2xl:text-xl xl:text-lg block lg:text-md md:text-sm mb-2 ">
                              {' '}
                              {value.properties.Address}
                            </div>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setShowDropdown(!ShowDropdown);
                      }}
                      className="group   flex flex-row justify-between px-6 py-4  text-center border-2 bg-black text-white   transition-all duration-100 delay-75 cursor-pointer "
                    >
                      {FeaatureCat}
                      <span>
                        {' '}
                        <MdKeyboardArrowDown
                          className={`transition-all duration-100${
                            ShowDropdown ? '-rotate-180' : 'rotate-180'
                          }`}
                        />{' '}
                      </span>
                    </div>
                    <div
                      className={`Transition-Height-${
                        ShowDropdown ? 'in' : 'out'
                      }`}
                    >
                      {ShowDropdown ? (
                        <div className="flex flex-col">
                          {MapData1.map((value, index) => (
                            <button
                              data-index={index}
                              onClick={(e) =>
                                handleClick(
                                  e,
                                  value.geometry.coordinates,
                                  value.properties.City
                                )
                              }
                              type="button"
                              className="group  relative     text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
                            >
                              <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                                {value.properties.City}
                              </h4>
                              <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </div>

              {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/Careers">Careers</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
            </SidebarMenu>
            <div className="my-8">
              <h3 className="lg:mt-8 mt-2 text-white font-desc text-descnew pb-4">
                CANADA
              </h3>
            </div>
            <SidebarMenu className="lg:bg-white bg-none pb-2 2xl:mr-48 xl:mr-32 lg:mr-20 ">
              <div className="">
                {isDesktop ? (
                  MapData2.map((value, index) => (
                    <div key={value.id}>
                      <Divlink
                        data-index={index}
                        onClick={(e) =>
                          handleClick(e, value.geometry.coordinates)
                        }
                      >
                        <h1
                          className={
                            visibilities[index]
                              ? 'text-black font-bold'
                              : 'text-black font-bold'
                          }
                        >
                          {value.properties.City}
                        </h1>

                        <span>
                          {visibilities[index] ? <BiMinus /> : <BsPlus />}

                          {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                        </span>
                      </Divlink>
                      <div
                        className={`Transition-Height-${
                          visibilities[index] ? 'in' : 'out'
                        }`}
                        onClick={() =>
                          setMapocation(value.geometry.coordinates)
                        }
                      >
                        <ul>
                          {visibilities[index] ? (
                            <div className="text-black h-8 2xl:text-xl xl:text-lg block lg:text-md md:text-sm mb-2 ">
                              {' '}
                              {value.properties.Address}
                            </div>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setShowDropdown(!ShowDropdown);
                      }}
                      className="group   flex flex-row justify-between px-6 py-4  text-center border-2 bg-black text-white   transition-all duration-100 delay-75 cursor-pointer "
                    >
                      {FeaatureCat}
                      <span>
                        {' '}
                        <MdKeyboardArrowDown
                          className={`transition-all duration-100${
                            ShowDropdown ? '-rotate-180' : 'rotate-180'
                          }`}
                        />{' '}
                      </span>
                    </div>
                    <div
                      className={`Transition-Height-${
                        ShowDropdown ? 'in' : 'out'
                      }`}
                    >
                      {ShowDropdown ? (
                        <div className="flex flex-col">
                          {MapData1.map((value, index) => (
                            <button
                              data-index={index}
                              onClick={(e) =>
                                handleClick(
                                  e,
                                  value.geometry.coordinates,
                                  value.properties.City
                                )
                              }
                              type="button"
                              className="group  relative     text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
                            >
                              <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                                {value.properties.City}
                              </h4>
                              <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
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
