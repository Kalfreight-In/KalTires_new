// import React from 'react';
// import { useStateContext } from '../context/StateContext';
import { MapData1 } from '../data/data';

// function distance(lat1, lon1, lat2, lon2, unit) {
//   const radlat1 = (Math.PI * lat1) / 180;
//   const radlat2 = (Math.PI * lat2) / 180;
//   const theta = lon1 - lon2;
//   const radtheta = (Math.PI * theta) / 180;
//   let dist =
//     Math.sin(radlat1) * Math.sin(radlat2) +
//     Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//   if (dist > 1) {
//     dist = 1;
//   }
//   dist = Math.acos(dist);
//   dist = (dist * 180) / Math.PI;
//   dist = dist * 60 * 1.1515;
//   if (unit === 'K') {
//     dist *= 1.609344;
//   }
//   if (unit === 'N') {
//     dist *= 0.8684;
//   }
//   return dist;
// }
function toRad(Value) {
  return (Value * Math.PI) / 180;
}
function distance(lat1, lon1, lat2, lon2) {
  const R = 9999999; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  let lat1 = toRad(lat1);
  let lat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = (R * c) / 1000;
  return d;
}
function DistanceData(eachData, typeAddress) {
  return distance(
    typeAddress.lat,
    typeAddress.lng,
    eachData.geometry.coordinates[0],
    eachData.geometry.coordinates[0]
  ).toFixed(1);
}

function NearestLocation(typeAddress) {
  const distanceArray = [];
  MapData1.map((eachData, index) => {
    distanceArray.push(DistanceData(eachData, typeAddress));
    distanceArray.push(eachData);
    //     const first = distanceArray.sort();
    // }
  });
  const filtered = distanceArray.filter((element, index) => {
    return index % 2 === 0;
  });
  // var firstelement = filtered.sort()[0];
  // const firstData = distanceArray.filter((element, index) => {
  //   return firstelement === filtered;
  // });
  const shortElement =
    distanceArray[distanceArray.indexOf(filtered.sort()[0]) + 1];

  // console.log(
  //   `.........in nearest function ${shortElement.geometry.coordinates}`
  // );
  console.log(`.........in nearest function ${filtered}`);
  return shortElement;
}

export default NearestLocation;
// lat: 36.171563, lng: -115.1391009
