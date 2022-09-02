import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
// import { geosearch } from 'esri-leaflet-geocoder';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';
// import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import styled from 'styled-components';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  ZoomControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { officeLists } from '../../data/data';
import { statesData } from './GeoData.js';

// function style(feature) {
//   return {
//     fillColor: '#ED1C24',
//     weight: 0.6,
//     opacity: 1,
//     color: 'white',
//     dashArray: '0',
//     fillOpacity: 0,
//   };
// }
const MapInside = styled.div`
  flex: 3;
  width: 100%;
  height: 50%;
  zindex: 8;
  @media screen and (max-width: 768px) {
    height: 40% !important;
  }
`;
const covidIcon = new Icon({
  iconUrl:
    'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/4622c2c6940e5fc26a7eb95e48f3c42a7855014e/Assets/Images/iconMapMarker.svg',
  iconSize: [25, 25],
});
const LeafMap = ({ Data, SData, location }) => {
  const mapRef = React.useRef(null);
  const [maps, setMaps] = useState(null);
  const [office, setoffice] = useState(null);
  const [officeListss, setofficeListss] = useState(Data);
  console.log(`..........${officeListss[0]}`);
  console.log(`...........${location}`);
  // function handleOnSerchResults(data) {
  //   console.log('serch Results', data);
  // }
  useEffect(() => {
    // const control = geosearch();
    // control.addTo(MapContainer);
    // control.on('results', handleOnSerchResults);

    console.log(`...........${maps}`);
    // if(office){
    //   Data.filter
    // }
    if (location) {
      const officeA = officeListss.filter(
        (off) => off.geometry.coordinates === location
      );
      // console.log(
      //   `popuop click in use effect ${officeA[0]}`
      // );
      setoffice(officeA[0]);
    }
    if (maps) {
      setTimeout(() => {
        maps.flyTo(location || [40.8054, -99.0241], 5, {
          duration: 1,
        });
      }, 1000);
    }
    // return () => {
    //   control.off('results', handleOnSerchResults);
    // };
  }, [location, maps]);

  return (
    <MapInside id="map">
      <MapContainer
        ref={setMaps}
        // whenCreated={(map) => setMaps(map)}
        center={[40.8054, -99.0241]}
        zoom={5}
        ZoomControl={false}
        scrollWheelZoom={false}
        style={{ height: '700px', width: '100%' }}
      >
        <TileLayer
          url={`
       https://api.mapbox.com/styles/v1/ssoam/cl77qs9yq000c14uk4kv9ecog/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3NvYW0iLCJhIjoiY2w3N3J5ZTgyMDJwZzNwb3gzYWtxdWttciJ9.g2IBgPyHpz_bDNTAe3g2fw`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <zoomControl position="bottomright" zoomInText="😎" zoomOutText="😶‍🌫️" />
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              key={state.id}
              pathOptions={{
                fillColor: '#ED1C24',
                weight: 0.6,
                opacity: 1,
                color: 'white',
                dashArray: '0',
                fillOpacity: 0,
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: '#ED1C24',
                    weight: 0.6,
                    opacity: 1,

                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0.4,
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: '#ED1C24',
                    weight: 0.6,
                    opacity: 1,
                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0,
                  });
                },
                // click: (e) => {},
              }}
            />
          );
        })}
        {/* {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <p
              positions={coordinates}
              key={state.id}
              className="text-2xl text-green-400 text-center z-30"
            >
              {state.properties.name}
            </p>
          );
        })} */}
        {officeListss.map((eachData) => (
          <Marker
            draggable
            animate
            key={eachData.id}
            position={eachData.geometry.coordinates}
            eventHandlers={{
              click: () => {
                setoffice(eachData);
              },
              hover: () => {
                setoffice(eachData);
              },
            }}
            icon={covidIcon}
          />
        ))}

        {office && (
          <Popup
            position={[
              office.geometry.coordinates[0],
              office.geometry.coordinates[1],
            ]}
            onClose={() => {
              setoffice(null);
            }}
          >
            <div>
              <h2 className="font-bold text-lg">{office.properties.City}</h2>
              <div className="text-sm mb-2">
                {office.properties.Address}, {office.properties.State},{' '}
                {office.properties.ZipCode}
              </div>

              <div className="text-sm mb-2 flex flex-row">
                <span>
                  <RiPhoneFill className="text-md m-1" />
                </span>
                {office.properties.Phone}
              </div>
              <div className="text-sm mb-2 flex flex-row">
                <span>
                  <MdEmail className="text-md m-1" />
                </span>
                <a href="/">{office.properties.Email}</a>
              </div>
            </div>
          </Popup>
        )}
      </MapContainer>
    </MapInside>
  );
};

export default LeafMap;
