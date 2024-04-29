import React from 'react'
import Navegador  from './NavBTSP'
function SeriesGrid() {

  const elementosMenu = [
    {url:"/LayoutCatalogo",texto:'Inicio' },
    {url:'/PelisGrid',texto: 'Peliculas' },
    {url:'/SeriesGrid',texto: 'Series' },
    {url:'/Favoritos', texto: 'Mis favoritos' }
  ]
  return (
    <div>

    <Navegador items= {elementosMenu}/>
    <h1> Juan</h1>
      
    </div>
  )
}

export default SeriesGrid
