import React, { useRef, useState } from 'react';

import { animateScroll as scroll, Link } from 'react-scroll';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import styled from 'styled-components';
import { SidebarFr } from './sidebarFr';
// import { NavbarData } from '../../data';

import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkR,
  SideBtnWrap,
  Divlink,
  SidebarRoute,
} from './SlidebarElement';

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

// import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  const [Services, setServices] = useState(false);
  const [NewsRoom, setNewsRoom] = useState(false);
  const [AboutUs, setAboutUs] = useState(false);
  const [BusinessVerticles, setBusinessVerticles] = useState(false);
  // const [Logistics, setLogistics] = useState(false);
  // const [Partz, setPartz] = useState(false);
  // const [Tires, setTires] = useState(false);
  // const [TrailersLeasing, setTrailersLeasing] = useState(false);
  // const [Brokerage, setBrokerage] = useState(false);

  function disabel() {
    const path = window.location.pathname;

    if (path === '/') {
      return true;
    }
    return false;
  }
  return (
    <SlidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/" onClick={toggle}>
            Home
          </SidebarLinkR>

          {/* <Divlink
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

              <BsPlus onClick={()=>setPlus(<BiMinus/>)}/>
            </span>
          </Divlink> */}
          {/* <div
            className={`Transition-Height-${BusinessVerticles ? 'in' : 'out'}`}
          >
            <ul>
              {BusinessVerticles
                ? NavbarData[0].navItems.map((data) => (
                    <a href={data.url.url}>
                      <li>
                        <div className=" text-white text-sm font-normal  justify-left items-left text-left p-1">
                          {data.navItem}
                          {data.navItems
                ? data.navItems.map((data) => (
                    <div className=" text-Heading  justify-center text-center items-center">
                      {data.navItem}
                    </div>
                  ))
                : null}
                        </div>
                      </li>
                    </a>
                  ))
                : null}
            </ul>
          </div> */}

          {/* <Divlink
            onClick={() => {
              setAboutUs(!AboutUs);
              setBusinessVerticles(false);

              setNewsRoom(false);
              setServices(false);
            }}
          >
            About Us
            <span>{AboutUs ? <BiMinus /> : <BsPlus />}</span>
          </Divlink> */}
          {/* <div className={`Transition-Height-${AboutUs ? 'in' : 'out'}`}>
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
                      onClick={toggle}
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
          </div> */}

          {/* <Divlink
            onClick={() => {
              setNewsRoom(!NewsRoom);
              setBusinessVerticles(false);
              setAboutUs(false);

              setServices(false);
            }}
          >
            News Room
            <span>{NewsRoom ? <BiMinus /> : <BsPlus />}</span>
          </Divlink> */}
          {/* <div className={`Transition-Height-${NewsRoom ? 'in' : 'out'}`}>
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
                      onClick={toggle}
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
          </div> */}

          {/* <Divlink
            onClick={() => {
              setServices(!Services);
              setBusinessVerticles(false);
              setAboutUs(false);
              setNewsRoom(false);
            }}
          >
            Services
            <span>{Services ? <BiMinus /> : <BsPlus />}</span>
          </Divlink> */}
          {/* <div className={`Transition-Height-${Services ? 'in' : 'out'}`}>
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
                      onClick={toggle}
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
          </div> */}
          <SidebarLinkR to="ContactSection">
            <Link
              to="ContactSection"
              onClick={toggle}
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
              onClick={toggle}
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
              onClick={toggle}
              smooth
              duration={1000}
              spy
              exact
              offset={-80}
            >
              Contact Us
            </Link>
          </SidebarLinkR>
          <SidebarLinkR onClick={toggle} to="mainmapcontainer">
            <Link
              to="mainmapcontainer"
              onClick={toggle}
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
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute>
            <a href="/Contact">Contact Us</a>
          </SidebarRoute>
        </SideBtnWrap> */}
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute to="/WorkAtKalway">
            <a href="/WorkAtKalway">Work At KALWAY</a>
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
