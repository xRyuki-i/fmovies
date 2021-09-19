import React from 'react'
import './header.css';

export const Header = () => {
    return (
        <div className="header">
            <h1 className="logo__header">Fmovies.to</h1>

            <nav >
                <ul className="nav__header">
                    <li className="list__nav">Home</li>
                    <li className="list__nav dropDown__nav">Genre
                        <ul className="genre__dropDown">
                            <li className="list__genre">Action</li>
                            <li className="list__genre">Crime</li>
                            <li className="list__genre">Drama</li>
                            <li className="list__genre">Thriller</li>
                        </ul>
                    </li>
                    <li className="list__nav">Watchlist</li>
                </ul>
            </nav>
        </div>
    )
}


