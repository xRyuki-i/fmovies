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
    const [storedData, setStoredData] = useState(Object.values(localStorage));
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

    const checkIsWatched = (id) => {
        if (localKeys.includes((id).toString())) {
            const storageData = localStorage.getItem(id);
            const parsedData = JSON.parse(storageData);
            if (parsedData.watched) {
                return true
            }else{
                return false
            }
        }else{
            return false
        }           
    }

    const checkisWatchList = (id) => {
        if (localKeys.includes((id).toString())) {
            const storageData = localStorage.getItem(id);
            const parsedData = JSON.parse(storageData);

            if (parsedData.watchList) {
                return true
            }else{
                return false
            }
        }else{
            return false
        }           
    }

    const addToList = () => {
        if (checkIsWatched(data.id)) {
            const watchList = {watchList: true, watched: true}
            const newData = {...data, ...watchList}
            localStorage.setItem(+(data.id), JSON.stringify(newData));
            setStoredData(Object.values(localStorage))
        }else{
            const watchList = {watchList: true}
            const newData = {...data, ...watchList}
            localStorage.setItem(+(data.id), JSON.stringify(newData));
            setLocalKeys(Object.keys(localStorage));
            setStoredData(Object.values(localStorage))
        }
    }

    const markWatched = () => {
        if (localKeys.includes((data.id).toString()) && checkisWatchList(data.id)) {
            const watched = {watchList: true, watched: true}
            const newData = {...data, ...watched}
            localStorage.setItem(+(data.id), JSON.stringify(newData));
            setStoredData(Object.values(localStorage))
        } else {
            const watched = {watched: true}
            const newData = {...data, ...watched}
            setLocalKeys(Object.keys(localStorage));
            localStorage.setItem(+(data.id), JSON.stringify(newData));
            setStoredData(Object.values(localStorage))
        }
    }

    useEffect(()=>{
       fetchMovie();
    },[localKeys,storedData])

    
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
                                    { checkisWatchList(data.id)? "Added to WatchList" : "Add to WatchList"}
                                </button>
                            
                            <button className="button" onClick={markWatched}>
                                { checkIsWatched(data.id)? "Watched" : "Mark as Watched"}
                            </button>
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
