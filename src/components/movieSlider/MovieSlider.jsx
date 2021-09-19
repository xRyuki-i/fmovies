import React from 'react'
import './movieSlider.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


export const MovieSlider = () => {

    let current = 0;
    const [movies, setMovies] = useState([]);
    const api =`https://yts.mx/api/v2/list_movies.json?genre=action&limit=4&sort_by=rating`
    
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

    const decreaseCurrent= () => {
        // (current > movies.length) ?  current-- : current = 0; 
    }

    const increaseCurrent= () => {
        (current < movies.length) ?  current++ : current = 0; 
    }

    return (
        <section className="movie__slider">
            <button onClick={decreaseCurrent}>
                Prev
            </button>

            <div className="slides__movie">
                {
                    movies.map((item, index) => {
                        return (
                            <>
                                {   index === current &&
                                    (
                                        <div 
                                            className="slide__movie"
                                            key={item.id}
                                            style={{backgroundImage: `url(${item.background_image})`}}
                                        >
                                            {item.title}
                                        </div>
                                    )
                                }
                            </>
                        )
                                      
                    })
                }
            </div>

            <button onClick = {increaseCurrent}>
                Next
            </button>
        </section>
    )
}
