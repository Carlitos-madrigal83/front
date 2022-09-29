import services from "services";
import { useState } from "react";

export const useMap = () => {
    const [map, setMap] = useState([]);
  
    const getMap = async () => {
      const result = await services.MapRandom.getMap();
      result && setMap(result.data);
  
    };
  
    return [map, getMap];
  };
  