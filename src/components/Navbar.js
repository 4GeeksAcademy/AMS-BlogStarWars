import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const Navbar = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">StarWars Blog</Link>
                <div>
                    <Link className="btn btn-outline-warning me-2" to="/favorites">
                        Favoritos ({favorites.length})
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;