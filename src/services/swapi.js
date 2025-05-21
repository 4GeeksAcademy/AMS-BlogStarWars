import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.tech/api";

export const fetchPeople = async () => {
  const res = await axios.get(`${SWAPI_BASE_URL}/people`);
  return res.data.results;
};

export const fetchVehicles = async () => {
  const res = await axios.get(`${SWAPI_BASE_URL}/vehicles`);
  return res.data.results;
};

export const fetchPlanets = async () => {
  const res = await axios.get(`${SWAPI_BASE_URL}/planets`);
  return res.data.results;
};

export const fetchEntityDetails = async (type, uid) => {
  const res = await axios.get(`${SWAPI_BASE_URL}/${type}/${uid}`);
  return res.data.result;
};

const swapi = {
  fetchPeople,
  fetchVehicles,
  fetchPlanets,
  fetchEntityDetails,
};

export default swapi;
