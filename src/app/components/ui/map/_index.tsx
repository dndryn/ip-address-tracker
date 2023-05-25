import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { LatLng, LatLngExpression, Icon, popup } from "leaflet";
import iconPin from '@asset/icon-location.svg';
import 'leaflet/dist/leaflet.css'; // path: node_modules\leaflet\dist\leaflet.css
import '@style/map';


const Map = ({ coordinates }) => {
  const [map, setMap] = useState(coordinates);

  const FlyMapTo = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
      map.flyTo(center, zoom);
    }, [center, zoom]);

    return null;
  };

  const someLocation: string = "Los Angeles, CA";
  const { lat, lng } = map;
  const icon: Icon = new Icon(
    {
      iconUrl: iconPin,
      iconSize: [46, 56],
    }
  );

  useEffect(() => {
    setMap(coordinates);
  }, [coordinates]);

  const position: LatLngExpression = Object.values(map) as LatLngExpression;
  console.log(`position: lan: ${position[0]}, lng: ${position[1]}`);
  return (
    <MapContainer
      id="map"
      center={new LatLng(lat, lng)}
      zoom={16}
      scrollWheelZoom={false}
      fadeAnimation={true}
    >
      <FlyMapTo center={position} zoom={16} />
      <TileLayer
        id="map_tile"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <p>{`This is ${someLocation}!`}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;