import { reverseGeocode } from './reversejioCode';

export const findMyLocation = (setUserLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      reverseGeocode(position.coords, setUserLocation);
    });
  }
};
function getLocation() {
  console.log('getLocation was called');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, positionError);
  } else {
    hideLoadingDiv();
    console.log('Geolocation is not supported by this device');
  }
}

function positionError() {
  console.log('Geolocation is not enabled. Please enable to use this feature');

  if (allowGeoRecall && countLocationAttempts < 5) {
    countLocationAttempts += 1;
    getLocation();
  }
}

function showPosition() {
  console.log('posititon accepted');
  allowGeoRecall = false;
}
