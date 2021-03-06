import React from 'react'
import { Header } from '../../components/header/Header'
import { GridSlider } from '../../components/gridSlider/GridSlider'
import { MovieSlider } from '../../components/movieSlider/MovieSlider'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
    return (
        <>
           <Header />
           <MovieSlider />
           <GridSlider genre="action"/>
           <GridSlider genre="crime"/>
           <GridSlider genre="drama"/>
           <GridSlider genre="thriller"/>
           <Footer />
        </>
    )
}
