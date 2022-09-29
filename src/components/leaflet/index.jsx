import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./styles.scss";


export default function Leaflet({ coordinates }) {
  const [coordinatesArr, setCoordinatesArr] = useState();
  useEffect(() => {
    const arrCoordinates = () => {
      const arr = coordinates && coordinates.split(', ').map(x => Number(x))
      setCoordinatesArr(arr)  
  }
  arrCoordinates()

  },[])
  console.log(coordinatesArr)
  return (
    <div>
        <p>{coordinates}</p>
    <MapContainer center={coordinatesArr} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
    </div>
  );
}

