import { reverseGeocode } from './reversejioCode';

export const findMyLocation = (setUserLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      reverseGeocode(position.coords, setUserLocation);
    });
  }
};
