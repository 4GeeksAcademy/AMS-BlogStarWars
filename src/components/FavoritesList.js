import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Card from "./Card";

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h2 className="mb-4">Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes favoritos aún.</p>
      ) : (
        <div className="row">
          {favorites.map((entity) => (
            <div className="col-md-4" key={`${entity.type}-${entity.uid}`}>
              <Card entity={entity} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;