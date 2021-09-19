import React from 'react'
import './watchList.css'
import { Header } from '../../components/header/Header'
import { MovieCard } from '../../components/movieCard/MovieCard';
import { useState, useEffect } from 'react'


export const WatchList = () => {

    const [storedData, setStoredData] = useState(Object.values(localStorage));
    // const storedData = Object.values(localStorage);

    useEffect(()=>{
        if (localStorage.length > 0)
        {setTimeout(()=>{setStoredData(Object.values(localStorage))}, 100)}
    },[storedData]);

    return (
        <>
            <Header />

            <section className="watchList">
                <h1 className="title__watchList">WatchList</h1>

                <div className="movies__watchList">

                    {   localStorage.length > 0 &&
                        storedData.map(item => {
                            const parsedData = JSON.parse(item);
                            return (
                                <div key={parsedData.id}>
                                    <MovieCard movie={parsedData} watchList={true}/>                                    
                                </div>
                            )
                        })
                    }

                    {   localStorage.length === 0 &&
                        <h2 className="error__watchList">Add movies to WatchList.</h2>
                    }

                </div>
            </section>
        </>
    )
}
