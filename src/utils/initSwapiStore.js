import { fetchPeople, fetchVehicles, fetchPlanets } from "../services/swapi";

const STORAGE_KEY = "swapi_store_v1";

export const initSwapiStore = async () => {
  let store = {};
  try {
    store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    store = {};
  }
  const types = ["characters", "vehicles", "planets"];
  let needsFetch = false;
  for (const t of types) {
    if (!store[t] || !Array.isArray(store[t]) || store[t].length === 0) {
      needsFetch = true;
    }
  }
  if (needsFetch) {
    const [p, v, pl] = await Promise.all([
      fetchPeople(),
      fetchVehicles(),
      fetchPlanets()
    ]);
    store.characters = p.map(item => ({ ...item, type: "characters" }));
    store.vehicles = v.map(item => ({ ...item, type: "vehicles" }));
    store.planets = pl.map(item => ({ ...item, type: "planets" }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }
};