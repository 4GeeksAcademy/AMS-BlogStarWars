import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const placeholders = {
  characters: "https://starwars-visualguide.com/assets/img/big-placeholder.jpg",
  vehicles: "https://starwars-visualguide.com/assets/img/vehicles/1.jpg",
  planets: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
  default: "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
};

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
      return placeholders.default;
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

  const imageUrl = getImageUrl(entity.type, Number(entity.uid));
  const placeholder = placeholders[entity.type] || placeholders.default;

  console.log("URL de imagen:", imageUrl, "UID:", entity.uid, "TYPE:", entity.type);

  return (
    <div className="card mb-3 h-100">
      <img
        src={imageUrl}
        alt={entity.name}
        className="card-img-top"
        onError={e => {
          e.target.onerror = null;
          e.target.src = placeholder;
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
            className={`btn btn-favorite ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteToggle}
            title={isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          >
            {isFavorite ? (
              // Corazón relleno amarillo
              <svg
                className="favorite-heart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffc107"
                stroke="#ffc107"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-6.7-5.6-8.5-7.7C1.1 11.2 1 8.2 3.1 6.1c2.1-2.1 5.5-2.1 7.6 0l1.3 1.3 1.3-1.3c2.1-2.1 5.5-2.1 7.6 0 2.1 2.1 2 5.1-.4 7.2C18.7 15.4 12 21 12 21z"/>
              </svg>
            ) : (
              // Corazón vacío con contorno amarillo
              <svg
                className="favorite-heart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffc107"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-6.7-5.6-8.5-7.7C1.1 11.2 1 8.2 3.1 6.1c2.1-2.1 5.5-2.1 7.6 0l1.3 1.3 1.3-1.3c2.1-2.1 5.5-2.1 7.6 0 2.1 2.1 2 5.1-.4 7.2C18.7 15.4 12 21 12 21z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;