import React from 'react'
import './movie.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react'
import { MovieCard } from '../../components/movieCard/MovieCard';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export const Movie = () => {

    const history = useHistory();
    const data = history.location.state;

    const [localKeys, setLocalKeys] = useState(Object.keys(localStorage));
    const [movies, setMovies] = useState([]);
    const api =`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${data.id}`
    
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

    const addToList = () => {
        localStorage.setItem(+(data.id), JSON.stringify(data));
        setLocalKeys(Object.keys(localStorage));
    }

    useEffect(()=>{
        fetchMovie();
    },[localKeys])

    
    return (
        <>
            <Header />

            <section className="movie__wrapper">
                <iframe 
                    src={`https://www.youtube.com/embed/${data.yt_trailer_code}`}
                    frameBorder="0"
                    title="trailer"
                    className="trailer__movie">
                </iframe>

                <article className="detail__movie">
                    <div 
                        className="image__movie"
                        style={{backgroundImage: `url(${data.medium_cover_image})`}} >
                    </div>

                    <div className="info__movie">
                        <h2 className="title__movie">{data.title}</h2>
                        <p>Rating : {data.rating}</p>
                        <p>Duration: {data.runtime}min</p>
                        <ul className="genre__detail">Genre: {
                                (data.genres).map((genre, index) => {
                                    return <li className="list__genre" key={index}>{genre}</li>
                                })
                            }
                        </ul>
                        <p>{data.description_full}</p>

                        <div className="buttons__info">
                            <button className="button" onClick={addToList}>
                                { localKeys.includes((data.id).toString())? "Added to WatchList" : "Add to WatchList"}
                            </button>
                            {/* <button className="button">
                                Mark as Watched
                            </button> */}
                        </div> 
                    </div>      
                </article>

                <div className="download__movie">
                    <p>Download</p>
                    {
                        data.torrents.map((torrent, index) => {
                            return <a href={torrent.url} className="link__torrent" key={index}>{torrent.quality},{torrent.size}</a>
                        })
                    }
                </div>

                <h3 style={{marginTop : `1em`}}>You May Also Like</h3>            
                <div className="related__movie">
                    {
                        movies.map(item=>{
                            return < MovieCard movie={item}/>
                        })
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}
