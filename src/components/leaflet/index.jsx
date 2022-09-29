import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './styles.scss';

export default function Leaflet({ coordinates }) {
  const paintMap = () => {
    if (!coordinates) {
      return <p>Cargando...</p>;
    } else {
      const coordArr = coordinates.split(', ').map(coord => Number(coord));

      return (
        <MapContainer center={coordArr} zoom={5}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      );
    }
  };

  useEffect(() => {
    paintMap();
  }, [coordinates]);

  return <div>{paintMap()}</div>;
}