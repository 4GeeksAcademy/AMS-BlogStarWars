import React, { useEffect, useState } from "react";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../services/swapi";
import Card from "../components/Card";

const mapType = {
  people: "characters",
  vehicles: "vehicles",
  planets: "planets"
};

const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const [p, v, pl] = await Promise.all([
        fetchPeople(),
        fetchVehicles(),
        fetchPlanets()
      ]);
      setPeople(p.map(item => ({ ...item, type: "characters" })));
      setVehicles(v.map(item => ({ ...item, type: "vehicles" })));
      setPlanets(pl.map(item => ({ ...item, type: "planets" })));
      setLoading(false);
    };
    fetchAll();
  }, []);

  if (loading) return <div className="container">Cargando...</div>;

  return (
    <div className="container">
      <h2>Personajes</h2>
      <div className="row mb-4">
        {people.map(entity => (
          <div className="col-md-4" key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>
      <h2>Vehículos</h2>
      <div className="row mb-4">
        {vehicles.map(entity => (
          <div className="col-md-4" key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>
      <h2>Planetas</h2>
      <div className="row mb-4">
        {planets.map(entity => (
          <div className="col-md-4" key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;