import React from 'react'
import '../estilos/favoritos.css'
import Navegador from './NavBTSP'
import CustomizedMenus from './CustomizedMenus'

function Favoritos() {
    const elementosMenu = [
        {url:'/LayoutCatalogo',texto:'Inicio' },
        {url:'/PelisGrid',texto: 'Peliculas' },
        {url:'/Favoritos', texto: 'Mis favoritos' }
      ]

const generos = <CustomizedMenus/>
  return (
    <>
        <Navegador items= {elementosMenu}  generos = {generos}/>
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
