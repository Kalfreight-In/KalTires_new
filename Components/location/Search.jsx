import { Axios } from 'axios';
import React, { useState } from 'react';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const Search = ({ value }) => {
  async function reverseGeocode({ value }) {
    const url = `${GOOGLE_MAP_API_URL}?json?address=${value}&sensor=true&key=AIzaSyCumu5B8e6vcRoLhKw1bpWxODsy2YiUtEk&latlng`;
    try {
      Axios.get(url).then(
        (response) =>
          // eslint-disable-next-line implicit-arrow-linebreak, comma-dangle
          console.log(response)
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
  const [data, setData] = useState(value);
  return (
    <div className="bg-black h-16 flex justify-end flex-center ">
      <div className="  text-gray-600 flex m-2 mr-8">
        <input
          className="  bg-white  px-5 pr-8 w-56 text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Enter your city or ZIP code"
        />
        <button type="submit" className=" bg-red-600   ">
          <div className="text-white px-5">Search</div>
        </button>
      </div>
    </div>
  );
};

export default Search;
