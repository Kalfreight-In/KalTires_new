import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import axios from 'axios';

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

    if (types.includes('administrative_area_level_2')) {
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
  const [address, setAddress] = useState({});
  async function reverseGeocode({ latitude: lat, longitude: lng }) {
    const url = `${GOOGLE_MAP_API_URL}?key=AIzaSyCumu5B8e6vcRoLhKw1bpWxODsy2YiUtEk&latlng=${lat},${lng}`;
    try {
      axios.get(url).then(
        (response) =>
          // eslint-disable-next-line implicit-arrow-linebreak, comma-dangle
          setAddress(extractAddress(response.data.results[0]))
        // eslint-disable-next-line function-paren-newline
      );
    } catch (err) {
      console.log(err);
    }

    // .then((location) => {
    //   const place = location.results[0];
    //   const Aaddress = extractAddress(place);
    //   setAddress(Aaddress);
    // });
  }

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };
  useEffect(() => {
    findMyLocation();
  }, []);

  // const { data } = getLocationByLatLng(
  //   location.coordinates.lat,
  //   location.coordinates.lng
  // );

  return (
    <div className="bg-tire-gray-3 ">
      <div className="flexBetween z-10 mx-20 p-3 flex-row">
        <Link href="/">
          <div className="flex flex-row flexCenter">
            <div className="text-white font-bold ml-8">
              {' '}
              {address
                ? `${address.city} ${address.state}`
                : 'Location data not available yet.'}
            </div>
            <div className="ml-2 font-bold">
              <GoLocation color="white " />
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="text-white">Help</div>
        </Link>
      </div>
    </div>
  );
};

export default TopUpbar;
