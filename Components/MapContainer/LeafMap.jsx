import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
// 8/

import styled from 'styled-components';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Polygon,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { officeLists } from '../../data/data';
import { statesData } from './GeoData.js';

function style(feature) {
  return {
    fillColor: '#ED1C24',
    weight: 0.6,
    opacity: 1,
    color: 'white',
    dashArray: '0',
    fillOpacity: 0,
  };
}
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
const LeafMap = ({ Data }) => {
  const [office, setoffice] = useState(Data);
  console.log(`,...........................${Data}`);
  return (
    <MapInside id="map">
      <MapContainer
        center={[40.8054, -99.0241]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '700px', width: '100%' }}
      >
        <TileLayer
          url={`
       https://api.mapbox.com/styles/v1/ssoam/cl77qs9yq000c14uk4kv9ecog/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3NvYW0iLCJhIjoiY2w3N3J5ZTgyMDJwZzNwb3gzYWtxdWttciJ9.g2IBgPyHpz_bDNTAe3g2fw`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
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
                    fillOpacity: 1,
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
                click: (e) => {},
              }}
            />
          );
        })}
        {officeLists.map((eachData) => (
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
              <h2 className="font-bold text-lg">{office.properties.name}</h2>
              <div className="text-sm mb-2">
                {office.properties.address}, {office.properties.state},{' '}
                {office.properties.ZipCode}
              </div>

              <div className="text-sm mb-2 flex flex-row">
                <span>
                  <RiPhoneFill className="text-md m-1" />
                </span>
                {office.properties.phone}
              </div>
              <div className="text-sm mb-2 flex flex-row">
                <span>
                  <MdEmail className="text-md m-1" />
                </span>
                <a href="/">{office.properties.email}</a>
              </div>
            </div>
          </Popup>
        )}
      </MapContainer>
    </MapInside>
  );
};

export default LeafMap;
