import React from 'react'
import './gridSlider.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { MovieCard } from '../movieCard/MovieCard';

export const GridSlider = ({genre}) => {
    const title = genre;
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(4);
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

    const showPrevious = () => {
        if (first > 0) {
            setFirst(first - 1)
            setLast(last - 1)  
        }
        console.log(first, last)
    }

    const showNext = () => {
        if (last < 10) {
            setFirst(first + 1)
            setLast(last + 1)
            console.log(first, last)
        }
    }

    useEffect(()=>{
        fetchMovie();
    },[])
    
    return (
        <section className="slider">
            <h3 className="title__slider">{genre.toUpperCase()}</h3>        

            <div className="grid__slider">
                {
                    movies.slice(first,last).map((item, index)=>{
                        return < MovieCard key={item.id} movie={item}/>
                    })
                }
            </div>

            <div className="interact__slider">
                <div className="buttons__interact">
                    <button className="navigation__button"onClick={showPrevious}>Prev</button>
                    <button className="navigation__button"onClick={showNext}>Next</button>
                </div>
                <label className="nav__slider">
                    <Link to={`./genre/${title}`}>See more</Link>
                </label>
            </div>
            
        </section>
    )
}


