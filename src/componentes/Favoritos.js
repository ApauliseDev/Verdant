import React from 'react'
import '../estilos/favoritos.css'
import Navegador from './NavBTSP'

function Favoritos() {
    const elementosMenu = [
        {url:'/LayoutCatalogo',texto:'Inicio' },
        {url:'/PelisGrid',texto: 'Peliculas' },
        {url:'/SeriesGrid',texto: 'Series' },
        {url:'/Favoritos', texto: 'Mis favoritos' }
      ]
  return (
    <>
        <Navegador items= {elementosMenu}/>
        <div>
            <h2>Mi lista de favoritos</h2>
            <section className='lista-favs'>
                lista de favoritos
            </section>
        </div>
      
    </>
  )
}

export default Favoritos
