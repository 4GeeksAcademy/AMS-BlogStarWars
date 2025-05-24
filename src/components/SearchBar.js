import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const STORAGE_KEY = "swapi_store_v1";
const sectionTitles = {
  characters: "Personajes",
  vehicles: "Vehículos",
  planets: "Planetas",
};

const SearchBar = () => {
  const [allItems, setAllItems] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let store = {};
    try {
      store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      store = {};
    }
    setAllItems([
      ...(store.characters || []),
      ...(store.vehicles || []),
      ...(store.planets || [])
    ]);
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setSuggestions([]);
      return;
    }
    const lower = search.toLowerCase();
    setSuggestions(
      allItems
        .filter(item =>
          (item.name || item.title || "").toLowerCase().includes(lower)
        )
        .slice(0, 8)
    );
  }, [search, allItems]);

  const handleSelectSuggestion = (item) => {
    setSearch("");
    setSuggestions([]);
    history.push(`/${item.type}/${item.uid}`);
  };

  return (
    <div style={{ position: "relative", marginBottom: "24px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar personaje, planeta o vehículo..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            zIndex: 10,
            background: "#fff",
            width: "100%",
            border: "1px solid #ccc",
            borderTop: "none",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: "200px",
            overflowY: "auto"
          }}
        >
          {suggestions.map(item => (
            <li
              key={item.type + "-" + item.uid}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
              onClick={() => handleSelectSuggestion(item)}
            >
              <strong>{item.name || item.title}</strong>{" "}
              <span style={{ color: "#888", fontSize: "0.9em" }}>
                ({sectionTitles[item.type] || item.type})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;