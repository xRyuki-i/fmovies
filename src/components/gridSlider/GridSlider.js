import React from 'react'
import './gridSlider.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { MovieCard } from '../movieCard/MovieCard';

export const GridSlider = ({genre}) => {
    const title = genre;
    const [movies, setMovies] = useState([]);
    const api =`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=10&sort_by=rating`
    
    const fetchMovie = () => {
        axios.get(api)
        .then(res => {
            const data = res.data.data.movies;
            setMovies(data); 
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchMovie();
    },[])
    
    return (
        <section className="slider">
            <h3 className="title__slider">{genre.toUpperCase()}</h3>        

            <div className="grid__slider">
                {
                    movies.map((item, index)=>{
                        return < MovieCard key={item.id} movie={item}/>
                    })
                }
            </div>

            <div className="interact__slider">
                <label className="nav__slider">
                    <Link to={`./genre/${title}`}>See more</Link>
                </label>
            </div>
            
        </section>
    )
}


