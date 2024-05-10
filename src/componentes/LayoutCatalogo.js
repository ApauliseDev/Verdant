import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper React components
import {SliderCatalogo} from './SliderCatalogo'
import SImplePaper from './SImplePaper'
import Pelislider from './Pelislider'
import Navegador from './NavBTSP'
import CustomizedMenus from './CustomizedMenus'
import AccountMenu from './AccountMenu'
import CatalogoSlider from './CatalogoSlider'
import  { useSelector } from 'react-redux';

const MovieSlide = ({ imageUrl, title }) => (
  <div>
    <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
    <p>{title}</p>
  </div>
);

// Componente del carrusel





function LayoutCatalogo() {

const usuario = useSelector((state)=> state.usuario)


const elementosMenu2 = [
  {url:'/LayoutCatalogo',texto:'Inicio' },
  {url:'/PelisGrid',texto: 'Peliculas' },
  {url:'/Favoritos', texto: 'Mis favoritos' },
]

const objGeneros = <CustomizedMenus/>


  return (
    < >
    
    <Navegador items= {elementosMenu2}  generos = {objGeneros}  />
    {/* <CatalogoSlider /> */}
     <SliderCatalogo/> 
        <SImplePaper/>
        <Pelislider/>

    </>
  )
}

export default LayoutCatalogo
