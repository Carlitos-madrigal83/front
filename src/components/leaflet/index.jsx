import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./styles.scss";

export default function Leaflet({ coordinates }) {

  return (
    <div>
        <p>{coordinates}</p>
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
    </div>
  );
}

