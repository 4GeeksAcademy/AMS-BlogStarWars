import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEntityDetails } from "../services/swapi";
import Card from "../components/Card";

const Detail = () => {
  const { type, uid } = useParams();
  const [entity, setEntity] = useState(null);
  const [loading, setLoading] = useState(true);

  const typeMap = {
    characters: "people",
    vehicles: "vehicles",
    planets: "planets"
  };

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const apiType = typeMap[type] || type;
      const result = await fetchEntityDetails(apiType, uid);
      if (result && result.properties) {
        setEntity({
          ...result.properties,
          uid,
          type,
          name: result.properties.name || result.properties.title || "Sin nombre",
          description: result.description || ""
        });
      } else {
        setEntity(null);
      }
      setLoading(false);
    };
    fetchDetail();
  }, [type, uid]);

  if (loading) return <div className="container">Cargando...</div>;
  if (!entity) return <div className="container">No encontrado</div>;

  return (
    <div className="container">
      <h2>Detalle</h2>
      <div className="row">
        <div className="col-md-6">
          <Card entity={entity} />
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {Object.entries(entity).map(([key, value]) =>
              key !== "uid" && key !== "type" && key !== "name" && key !== "description" ? (
                <li className="list-group-item" key={key}>
                  <strong>{key}:</strong> {String(value)}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;