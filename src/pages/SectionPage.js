import React, { useEffect, useState } from "react";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../services/swapi";
import Card from "../components/Card";

const fetchMap = {
  characters: fetchPeople,
  vehicles: fetchVehicles,
  planets: fetchPlanets,
};

const sectionTitles = {
  characters: "Personajes",
  vehicles: "Vehículos",
  planets: "Planetas",
};

const STORAGE_KEY = "swapi_store_v1";

const SectionPage = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      let store = {};
      try {
        store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch {
        store = {};
      }
      if (!store[type] || !Array.isArray(store[type]) || store[type].length === 0) {
        const data = await fetchMap[type]();
        store[type] = data.map(item => ({ ...item, type }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      }
      setItems(store[type]);
      setLoading(false);
    };
    fetchAll();
  }, [type]);

  if (loading) return <div className="container">Cargando...</div>;

  return (
    <div className="container">
      <h2 className="mb-4">{sectionTitles[type] || type}</h2>
      <div className="row">
        {items.map(entity => (
          <div className="col-md-4" key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionPage;