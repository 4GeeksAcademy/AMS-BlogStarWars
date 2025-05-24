import React, { useEffect, useState } from "react";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../services/swapi";
import Card from "../components/Card";
import { Link } from "react-router-dom";

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

  // Slider CSS en línea
  const sliderStyle = {
    display: "flex",
    overflowX: "auto",
    gap: "16px",
    paddingBottom: "16px"
  };

  return (
    <div className="container">
      <h2>
        <Link to="/characters" className="section-link">Personajes</Link>
      </h2>
      <div style={sliderStyle}>
        {people.map(entity => (
          <div style={{ minWidth: 300, flex: "0 0 auto" }} key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>

      <h2>
        <Link to="/vehicles" className="section-link">Vehículos</Link>
      </h2>
      <div style={sliderStyle}>
        {vehicles.map(entity => (
          <div style={{ minWidth: 300, flex: "0 0 auto" }} key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>

      <h2>
        <Link to="/planets" className="section-link">Planetas</Link>
      </h2>
      <div style={sliderStyle}>
        {planets.map(entity => (
          <div style={{ minWidth: 300, flex: "0 0 auto" }} key={entity.uid}>
            <Card entity={entity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;