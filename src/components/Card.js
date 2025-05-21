import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const getImageUrl = (type, uid) => {
  let base = "https://starwars-visualguide.com/assets/img";
  switch (type) {
    case "characters":
      return `${base}/characters/${uid}.jpg`;
    case "vehicles":
      return `${base}/vehicles/${uid}.jpg`;
    case "planets":
      return `${base}/planets/${uid}.jpg`;
    default:
      return `${base}/big-placeholder.jpg`;
  }
};

const Card = ({ entity }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some(
    fav => fav.uid === entity.uid && fav.type === entity.type
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(entity);
    } else {
      addFavorite(entity);
    }
  };

  return (
    <div className="card mb-3 h-100">
      <img
        src={getImageUrl(entity.type, entity.uid)}
        alt={entity.name}
        className="card-img-top"
        onError={e => {
          e.target.onerror = null;
          e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{entity.name}</h5>
        <div className="mt-auto">
          <Link to={`/${entity.type}/${entity.uid}`} className="btn btn-info btn-sm me-2">
            Ver detalles
          </Link>
          <button
            className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-primary"}`}
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;