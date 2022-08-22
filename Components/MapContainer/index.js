import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-scroll';
import Map from '../../Assets/Map/index';
import { NavbarData } from '../../data/data';
import { useHover } from '../../Hooks/Hover';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const Ddata = ['James', 'John', 'Jessica', 'Jamie'];
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
  width: 85%;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 0rem;
  font-weight: 600;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-bottom: 1px solid white;
  color: #fff;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
// use hover reducer to change the visibility on hover of the sidebar when dynimically created links
const useHoverReducer = (initialState, reducer) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [ref, isHovered] = useHover();
  React.useEffect(() => {
    if (isHovered) {
      dispatch({ type: 'HOVER' });
    } else {
      dispatch({ type: 'UNHOVER' });
    }
  }, [isHovered]);
  return [state, ref];
};

export const MapConatiner = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [visibilities, setVisibilities] = React.useState(() =>
    Ddata.map((x) => false)
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    Ddata.map((x) => false);
  }, [visibilities]);

  console.log(`visibilities: ${visibilities}`);
  const handleClick = (event) => {
    const devData = Ddata;
    Ddata.map((x) => false);
    const index = parseInt(event.currentTarget.dataset.index, 10);
    console.log(`index ${index}`);
    devData = [...visibilities];

    console.log(`newVisibilities  ${devData}`);

    devData[index] = !devData[index];
    setVisibilities(devData);
  };
  const [Services, setServices] = useState(false);
  const [NewsRoom, setNewsRoom] = useState(false);
  const [AboutUs, setAboutUs] = useState(false);
  const [BusinessVerticles, setBusinessVerticles] = useState(false);

  const [Fontana, isFontana] = useHover();
  const [Bakersfield, isBakersfield] = useHover();
  const [SanMarcos, isSanMarcos] = useHover();
  const [Calgary, isCalgary] = useHover();
  const [Arlington, isArlington] = useHover();
  const [Hampton, isHampton] = useHover();
  // const [Stockton, isStockton] = useHover();
  const [Atlanta, isAtlanta] = useHover();
  const [Lathrop, isLathrop] = useHover();
  const [Calexico, isCalexico] = useHover();
  // const [Almondfontana,isAlmondfontana] = useHover();
  // const [ValleyFontana,isValleyFontana] = useHover();
  const [Indianapolis, isIndianapolis] = useHover();
  const [Springdale, isSpringdale] = useHover();
  const [abbotsford, isabbotsford] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-blue-600 flex flex-col-reverse  md:flex-row p-8 bg-cover"
      style={{
        backgroundImage: `${
          isDesktop
            ? 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/lol.png)'
            : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
        }`,
      }}
    >
      <div className=" svg-container">
        <Map
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
        />
      </div>
      <div className="md:-m-8 -mx-8 w-full flex-1 ">
        <div
          className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center  lg:ml-12  lg:mb-0 mb-2  h-full"
          style={{
            backgroundImage: `${
              isDesktop
                ? 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
                : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/lol.png)'
            }`,
            display: 'flex',
          }}
        >
          <div className="lg:-mt-28 -mt-0 w-full pl-16 md:mb-0 mb-24">
            <div className="w-full ">
              <div className="flex flex-row">
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

                <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl pl-4">
                  Our Locations
                </h3>
              </div>

              <div className="lg:mt-8 mt-2 text-white font-desc text-descnew ">
                We serve you at multiple location
              </div>
            </div>
            <SidebarMenu>
              <SidebarLinkR to="/">Home</SidebarLinkR>

              <Divlink
                onClick={() => {
                  setBusinessVerticles(!BusinessVerticles);
                  setAboutUs(false);
                  setNewsRoom(false);
                  setServices(false);
                }}
              >
                Business Verticals
                <span>
                  {BusinessVerticles ? <BiMinus /> : <BsPlus />}

                  {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                </span>
              </Divlink>
              <div
                className={`Transition-Height-${
                  BusinessVerticles ? 'in' : 'out'
                }`}
              >
                <ul>
                  {BusinessVerticles
                    ? NavbarData[0].navItems.map((data) => (
                        <a href={data.url.url}>
                          <li>
                            <div className=" text-white text-sm font-normal  justify-left items-left text-left p-1">
                              {data.navItem}
                              {/* {data.navItems
                ? data.navItems.map((data) => (
                    <div className=" text-Heading  justify-center text-center items-center">
                      {data.navItem}
                    </div>
                  ))
                : null} */}
                            </div>
                          </li>
                        </a>
                      ))
                    : null}
                </ul>
              </div>

              <Divlink
                onClick={() => {
                  setAboutUs(!AboutUs);
                  setBusinessVerticles(false);

                  setNewsRoom(false);
                  setServices(false);
                }}
              >
                About Us
                <span>{AboutUs ? <BiMinus /> : <BsPlus />}</span>
              </Divlink>

              <div className={`Transition-Height-${AboutUs ? 'in' : 'out'}`}>
                {AboutUs
                  ? NavbarData[1].navItems.map((data) =>
                      data.url.link === 'a' ? (
                        <a href={data.url.url} className="w-full">
                          <div className=" text-white text-sm font-normal  justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={data.url.url}
                          smooth
                          duration={1000}
                          spy
                          exact
                          offset={-80}
                          className="cursor-pointer"
                        >
                          <div className=" text-white text-sm font-normal  justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </Link>
                      )
                    )
                  : null}
              </div>

              <Divlink
                onClick={() => {
                  setNewsRoom(!NewsRoom);
                  setBusinessVerticles(false);
                  setAboutUs(false);

                  setServices(false);
                }}
              >
                News Room
                <span>{NewsRoom ? <BiMinus /> : <BsPlus />}</span>
              </Divlink>
              <div className={`Transition-Height-${NewsRoom ? 'in' : 'out'}`}>
                {' '}
                {NewsRoom
                  ? NavbarData[2].navItems.map((data) =>
                      data.url.link === 'a' ? (
                        <a href={data.url.url} className="w-full">
                          <div className=" text-white text-sm font-normal justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={data.url.url}
                          smooth
                          duration={1000}
                          spy
                          exact
                          offset={-80}
                          className="cursor-pointer"
                        >
                          <div className=" text-white text-sm font-normal justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </Link>
                      )
                    )
                  : null}
              </div>

              <Divlink
                onClick={() => {
                  setServices(!Services);
                  setBusinessVerticles(false);
                  setAboutUs(false);
                  setNewsRoom(false);
                }}
              >
                Services
                <span>{Services ? <BiMinus /> : <BsPlus />}</span>
              </Divlink>
              <div className={`Transition-Height-${Services ? 'in' : 'out'}`}>
                {Services
                  ? NavbarData[3].navItems.map((data) =>
                      data.url.link === 'a' ? (
                        <a href={data.url.url} className="w-full">
                          <div className=" text-white text-sm font-normal justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={data.url.url}
                          smooth
                          duration={1000}
                          spy
                          exact
                          offset={-80}
                          className="cursor-pointer"
                        >
                          <div className=" text-white text-sm font-normal justify-left items-left text-left p-1">
                            {data.navItem}
                          </div>
                        </Link>
                      )
                    )
                  : null}
              </div>
              <div>
                <div className="border">
                  {Ddata.map((value, index) => (
                    <h1
                      data-index={index}
                      onClick={handleClick}
                      className={visibilities[index] ? 'selected' : undefined}
                    >
                      Hello {value}, you are{' '}
                      {visibilities[index] ? 'visible' : 'hidden'}!
                    </h1>
                  ))}
                </div>
              </div>
              <SidebarLinkR to="ContactSection">
                <Link
                  to="ContactSection"
                  smooth
                  duration={1000}
                  spy
                  exact
                  offset={-80}
                >
                  Careers
                </Link>
              </SidebarLinkR>
              <SidebarLinkR to="ContactSection">
                <Link
                  to="ContactSection"
                  smooth
                  duration={1000}
                  spy
                  exact
                  offset={-80}
                >
                  Contact Us
                </Link>
              </SidebarLinkR>
              <SidebarLinkR to="mainmapcontainer">
                <Link
                  to="mainmapcontainer"
                  smooth
                  duration={1000}
                  spy
                  exact
                  offset={-80}
                >
                  Locations
                </Link>
              </SidebarLinkR>

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
