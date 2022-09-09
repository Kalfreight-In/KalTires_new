import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import axios from 'axios';
import { findMyLocation } from '../../HelpFunctions/findMyLocation';
import { useStateContext } from '../../context/StateContext';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
// import Image from 'next/image';
const extractAddress = (place) => {
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    plain() {
      const city = this.city ? `${this.city}, ` : '';
      const zip = this.zip ? `${this.zip}, ` : '';
      const state = this.state ? `${this.state}, ` : '';
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const { types } = component;
    const value = component.long_name;

    if (types.includes('locality')) {
      address.city = value;
    }

    if (types.includes('administrative_area_level_1')) {
      address.state = value;
    }

    if (types.includes('postal_code')) {
      address.zip = value;
    }

    if (types.includes('country')) {
      address.country = value;
    }
  });

  return address;
};

const TopUpbar = () => {
  const { userLocation, setUserLocation, setCurrentlatlong } =
    useStateContext();

  // const { data } = getLocationByLatLng(
  //   location.coordinates.lat,
  //   location.coordinates.lng
  // );

  return (
    <div className="bg-tire-gray-3 ">
      <div className="flexBetween z-10 mx-20 p-0 flex-row">
        <Link href="/">
          <div className="flex flex-row flexCenter">
            <div className="text-white font-bold ml-8">
              {' '}
              {userLocation ? (
                `${userLocation.city} , ${userLocation.state}`
              ) : (
                <div className="flex flex-row">
                  Location data not available yet.{' '}
                  <div
                    className="cursor-pointer"
                    onClick={findMyLocation(setUserLocation, setCurrentlatlong)}
                  >
                    Shoow Your Location
                  </div>
                </div>
              )}
            </div>
            <div className="ml-2 font-bold">
              <GoLocation color="white " />
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default TopUpbar;
