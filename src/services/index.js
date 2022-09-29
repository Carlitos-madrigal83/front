import axios from "axios";
import MapRandom from "./map-random";

const instance = axios.create({
    baseURL: "https://bewildered-wind-staging.up.railway.app",
    withCredentials: true
});

const services = {
    MapRandom: MapRandom(instance),
}

export default services;

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
