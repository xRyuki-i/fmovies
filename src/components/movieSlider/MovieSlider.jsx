import React from 'react'
import './movieSlider.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


export const MovieSlider = () => {

    const [current, setCurrent] = useState(0);
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
        (current > 0) ?  setCurrent(current - 1) : setCurrent(3); 
        console.log(current)
    }

    const increaseCurrent= () => {
        (current < movies.length - 1) ?  setCurrent(current + 1) : setCurrent(0); 
        console.log(current)
    }

    return (
        <section className="movie__slider">
            <button className="button__slider" onClick={decreaseCurrent}>
                <img src="./left.png" alt="arrow" />
            </button>

            <div className="slides__movie" >
                {
                    movies.map((item, index) => {
                        return (
                            <div key = {item.id}>
                                {   index === current &&
                                    (
                                        <div 
                                            className="slide__movie"
                                            style={{backgroundImage: `url(${item.background_image})`}}
                                            
                                        >
                                            <article className="detail__slide">
                                                <h3>{item.title}</h3>
                                                <p>Rating: {item.rating}</p>
                                                <p>Duration: {item.runtime}min</p>
                                                <ul className="genre__slide">Genre: {
                                                    (item.genres).map((genre,index) => {
                                                        return <li className="list__genre" key={index}>{genre}</li>
                                                    })
                                                }
                                                </ul>
                                                <p>{item.summary}</p>
                                            </article>
                                        </div>
                                    )
                                }
                            </div>
                        )
                                      
                    })
                }
            </div>

            <button className="button__slider" onClick = {increaseCurrent}>
                <img src="./right.png" alt="arrow" />
            </button>
        </section>
    )
}
