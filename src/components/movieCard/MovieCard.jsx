import React from 'react'
import './movieCard.css';



export const MovieCard = (movie) => {
    const data = movie.movie;

    const handleClick = () => {
        console.log(data);
    }

    return (
        <section 
            className="movieCard"
            style={{backgroundImage: `url(${data.medium_cover_image})`}}
            onClick={handleClick} > 
            <article className="card">
                 <div className="content__card">
                    <h3>{data.title_english}</h3>
                    <p>Rating: {data.rating}</p>
                    <p>Duration: {data.runtime}min</p>
                </div>
                <div className="content__card">
                    <button className="button__content">
                        Add to WatchList
                    </button>
                    <button className="button__content">
                        Mark as Watched
                    </button>
                </div>
            </article>        
        </section>
    )
}

