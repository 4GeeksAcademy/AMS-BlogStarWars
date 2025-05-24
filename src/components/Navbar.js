import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import SearchBar from './SearchBar';

const Navbar = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center" style={{ gap: "1rem", flex: 1 }}>
                    <Link className="navbar-brand me-2" to="/">StarWars Blog</Link>
                    <div style={{ maxWidth: 400, width: "100%" }}>
                        <SearchBar />
                    </div>
                </div>
                <Link className="btn btn-outline-warning ms-3" to="/favorites">
                    Favoritos ({favorites.length})
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;