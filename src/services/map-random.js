import { catcher } from "./utils";

const getMap = (client) => async () => catcher(client.post)("map-random/create");

const MapRandom = (client) =>({
    getMap: getMap(client),
});

export default MapRandom;