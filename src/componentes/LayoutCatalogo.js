import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper React components
import {SliderCatalogo} from './SliderCatalogo'
import SImplePaper from './SImplePaper'
import Pelislider from './Pelislider'
import Navegador from './NavBTSP'
import { FaHome } from "react-icons/fa";

const MovieSlide = ({ imageUrl, title }) => (
  <div>
    <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
    <p>{title}</p>
  </div>
);

// Componente del carrusel





function LayoutCatalogo() {

const sliderAventura = {
  imagenes: [  "/Imagenes/planetaSimios.png",
  "/Imagenes/Uncharted.jpg",
  "/Imagenes/guerra4.jpg",
  "/Imagenes/.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ],
  a: 'Aventura'
}



const elementosMenu2 = [
  {url:'/LayoutCatalogo',texto:'Inicio' },
  {url:'/PelisGrid',texto: 'Peliculas' },
  {url:'/SeriesGrid',texto: 'Series' },
  {url:'/Favoritos', texto: 'Mis favoritos' }
]

  return (
    < >
    <Navegador items= {elementosMenu2} />
    <SliderCatalogo/>
        <SImplePaper/>
        <Pelislider id="slider1" tituloSlider= "Aventura" />
        <Pelislider tituloSlider = "Terror"/>
        <Pelislider tituloSlider = "Romance"/>
        <Pelislider tituloSlider = "Comedia"/>
        <Pelislider tituloSlider = "Guerra"/>



    </>
  )
}

export default LayoutCatalogo
