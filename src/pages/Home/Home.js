import React from 'react'
import "./home.css"
import { Header } from '../../components/header/Header'
import { GridSlider } from '../../components/gridSlider/GridSlider'
import { MovieSlider } from '../../components/movieSlider/MovieSlider'

export const Home = () => {
    return (
        <>
           <Header />
           <MovieSlider />
           <GridSlider genre="action"/>
           <GridSlider genre="crime"/>
           <GridSlider genre="drama"/>
           <GridSlider genre="thriller"/>
        </>
    )
}
