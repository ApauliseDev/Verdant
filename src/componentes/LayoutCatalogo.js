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
const MovieCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Habilitar el modo centrado
    centerPadding: '60px', // Espacio entre las imágenes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <MovieSlide key={index} imageUrl={movie.imageUrl} title={movie.title} />
      ))}
    </Slider>
  );
};





function LayoutCatalogo() {

const slider1Img = [
  "/Imagenes/planetaSimios.png",
  "/Imagenes/Uncharted.jpg",
  "/Imagenes/guerra4.jpg",
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" ,
  "/Imagenes/guerra4.jpg" 
]

const infoImg = {
  imgArray: slider1Img,
  tituloSlider: "Aventura"
}

const elementosMenu2 = [
  {url:'/',texto:'Inicio' },
  {url:'/PelisGrid',texto: 'Peliculas' },
  {url:'/SeriesGrid',texto: 'Series' },

  
 

]

  return (
    <div >
    <Navegador items= {elementosMenu2} />
    <SliderCatalogo/>
        <SImplePaper/>
        <Pelislider  tituloSlider = "Aventura" />
        <Pelislider tituloSlider = "Terror"/>
        <Pelislider tituloSlider = "Romance"/>
        <Pelislider tituloSlider = "Comedia"/>
        <Pelislider tituloSlider = "Guerra"/>



    </div>
  )
}

export default LayoutCatalogo
