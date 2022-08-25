import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
const Map = () => {
  const position = [42.82881661578283, 74.58419582287019];

  return (
    <div>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[42.82881661578283, 74.58419582287019]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
