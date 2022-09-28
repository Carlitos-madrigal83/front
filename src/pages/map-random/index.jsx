import React from 'react';
import { useGetter } from 'store';
import { useEffect } from 'react';
import Leaflet from 'components/leaflet';
import "./styles.scss";

function MapRandom() {
    const {map, setMap} = useGetter();
    useEffect(() => {
        setMap()
    },[])
    console.log(map)
  return (
    <div id="Map">
      <Leaflet coordinates={ map.coordinates }/>
    </div>  
    // aqui cargo información de vuelos dentro de map  
    )
}

export default MapRandom;