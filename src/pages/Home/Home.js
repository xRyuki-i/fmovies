import React from 'react'
import "./home.css"
import { Header } from '../../components/header/Header'
import { GridSlider } from '../../components/gridSlider/GridSlider'

export const Home = () => {
    return (
        <>
           <Header />
           <GridSlider genre="action"/>
           <GridSlider genre="crime"/>
           <GridSlider genre="drama"/>
           <GridSlider genre="thriller"/>
        </>
    )
}
