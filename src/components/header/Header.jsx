import React from 'react'
import './header.css';
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <h1 className="logo__header">Fmovies.to</h1>

            <nav >
                <ul className="nav__header">
                    <li className="list__nav">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list__nav dropDown__nav">Genre
                        <ul className="genre__dropDown">
                            <li className="list__genre">
                                <Link to="/genre/action">Action</Link>
                            </li>
                            <li className="list__genre">
                                <Link to="/genre/crime">Crime</Link>
                            </li>
                            <li className="list__genre">
                                <Link to="/genre/drama">Drama</Link>
                            </li>
                            <li className="list__genre">
                                <Link to="/genre/thriller">Thriller</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="list__nav">Watchlist</li>
                </ul>
            </nav>
        </div>
    )
}


