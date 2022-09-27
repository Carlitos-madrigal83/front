import React from 'react';
import { useGetter } from 'store';
import { useEffect } from 'react';

function MapRandom() {
    const {map, setMap} = useGetter();
    useEffect(() => {
        setMap()
    },[])
    console.log(map)
  return (
    <div>MapRandom</div>
  )
}

export default MapRandom