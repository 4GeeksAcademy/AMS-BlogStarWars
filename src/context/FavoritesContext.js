import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (entity) => {
    setFavorites((prev) =>
      prev.some(fav => fav.uid === entity.uid && fav.type === entity.type)
        ? prev
        : [...prev, entity]
    );
  };

  const removeFavorite = (entity) => {
    setFavorites((prev) =>
      prev.filter(fav => !(fav.uid === entity.uid && fav.type === entity.type))
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);