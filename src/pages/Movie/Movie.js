import React from 'react'
import './movie.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { MovieCard } from '../../components/movieCard/MovieCard';
import { Header } from '../../components/header/Header';

export const Movie = () => {

    const data = {
"id": 35618,
"url": "https://yts.mx/movies/the-sender-1998",
"imdb_code": "tt0138089",
"title": "The Sender",
"title_english": "The Sender",
"title_long": "The Sender (1998)",
"slug": "the-sender-1998",
"year": 1998,
"rating": 3.8,
"runtime": 98,
"genres": [
"Action",
"Sci-Fi",
"Thriller"
],
"summary": "In 1965, an American fighter squadron encountered a spaceship while flying over the Bermuda Triangle. After getting into a brief dogfight with it, one of the fighters is shot down, and the others agree to keep what they've seen a secret. Years later, the downed aircraft is recovered, and the son of the missing pilot insists on seeing it. Soon, strange ocurrences start happening around the son and his family. Could there be any connection with what his father witnessed? —Jean-Marc Rocher",
"description_full": "In 1965, an American fighter squadron encountered a spaceship while flying over the Bermuda Triangle. After getting into a brief dogfight with it, one of the fighters is shot down, and the others agree to keep what they've seen a secret. Years later, the downed aircraft is recovered, and the son of the missing pilot insists on seeing it. Soon, strange ocurrences start happening around the son and his family. Could there be any connection with what his father witnessed? —Jean-Marc Rocher",
"synopsis": "In 1965, an American fighter squadron encountered a spaceship while flying over the Bermuda Triangle. After getting into a brief dogfight with it, one of the fighters is shot down, and the others agree to keep what they've seen a secret. Years later, the downed aircraft is recovered, and the son of the missing pilot insists on seeing it. Soon, strange ocurrences start happening around the son and his family. Could there be any connection with what his father witnessed? —Jean-Marc Rocher",
"yt_trailer_code": "FeWsNhbPals",
"language": "en",
"mpa_rating": "R",
"background_image": "https://yts.mx/assets/images/movies/the_sender_1998/background.jpg",
"background_image_original": "https://yts.mx/assets/images/movies/the_sender_1998/background.jpg",
"small_cover_image": "https://yts.mx/assets/images/movies/the_sender_1998/small-cover.jpg",
"medium_cover_image": "https://yts.mx/assets/images/movies/the_sender_1998/medium-cover.jpg",
"large_cover_image": "https://yts.mx/assets/images/movies/the_sender_1998/large-cover.jpg",
"state": "ok",
"torrents": [
{
"url": "https://yts.mx/torrent/download/3B160942CBAED554B36A9B8B9E113535A2484AD0",
"hash": "3B160942CBAED554B36A9B8B9E113535A2484AD0",
"quality": "720p",
"type": "bluray",
"seeds": 79,
"peers": 20,
"size": "842.32 MB",
"size_bytes": 883236536,
"date_uploaded": "2021-09-16 00:55:16",
"date_uploaded_unix": 1631746516
},
{
"url": "https://yts.mx/torrent/download/2950916CF62CED755BE02D5BC8F1196C03AB33F2",
"hash": "2950916CF62CED755BE02D5BC8F1196C03AB33F2",
"quality": "1080p",
"type": "bluray",
"seeds": 71,
"peers": 7,
"size": "1.53 GB",
"size_bytes": 1642824991,
"date_uploaded": "2021-09-16 02:07:55",
"date_uploaded_unix": 1631750875
}
],
"date_uploaded": "2021-09-16 00:55:16",
"date_uploaded_unix": 1631746516
        }

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

    useEffect(()=>{
        fetchMovie();
    },[])

    return (
        <>
            <Header />

            <section className="movie__wrapper">
                <iframe 
                    src={`https://www.youtube.com/embed/${data.yt_trailer_code}`}
                    frameborder="0"
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
                                (data.genres).map(genre => {
                                    return <li className="list__genre">{genre}</li>
                                })
                            }
                        </ul>
                        <p>{data.description_full}</p>

                        <div className="buttons__info">
                            <button className="button">
                                Add to WatchList
                            </button>
                            <button className="button">
                                Mark as Watched
                            </button>
                        </div> 
                    </div>      
                </article>

                <h3 style={{marginTop : `1em`}}>You May Also Like</h3>            
                <div className="related__movie">
                    {
                        movies.map(item=>{
                            console.log(item);
                            return < MovieCard movie={item}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}
