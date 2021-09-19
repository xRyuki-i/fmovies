import React from 'react'
import './movieCard.css';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';


export const MovieCard = ({movie, watchList}) => {
    
    const [localKeys, setLocalKeys] = useState(Object.keys(localStorage));
    const history = useHistory(); 
    const data = movie;

    // let localKeys = Object.keys(localStorage);

    const handleClick = () => {
        history.push("/movie", data)
    }

    const addToList = () => {
        localStorage.setItem(+(data.id), JSON.stringify(data));
        setLocalKeys(Object.keys(localStorage));
    }

    const markWatched = () => {
        const id = data.id;
    }

    const removeFromList = () => {
        localStorage.removeItem((data.id));
        setLocalKeys(Object.keys(localStorage));
    }

    useEffect(()=>{
        
    },[localKeys])    

    return (
        <section 
            className="movieCard"
            style={{backgroundImage: `url(${data.medium_cover_image})`}}
        > 
            <article className="card" >
                 <div className="content__card" onClick={handleClick}>
                    <h3 >{data.title_english}</h3>
                    <p>Rating: {data.rating}</p>
                    <p>Duration: {data.runtime}min</p>
                </div>
                <div className="content__card">
                    {   !watchList &&
                        <button className="button__content" onClick={addToList}>
                            { localKeys.includes((data.id).toString())? "Added to WatchList" : "Add to WatchList"}
                        </button>
                    }
                    {   watchList &&
                        <button className="button__content button--remove" onClick={removeFromList}>
                            Remove from WatchList
                        </button>
                    }
                    
                    <button className="button__content" onClick={markWatched}>
                        Mark as Watched
                    </button>
                </div>
            </article>        
        </section> 
    )
}

