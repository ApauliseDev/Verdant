
import TabsMui from  './Tabs'
import Navegador from '../NavBTSP'
import HeaderPeliculas from "./HeaderPeliculas"

function LayoutPeliculas() {
  const elementosMenu = [
    {url:"/LayoutCatalogo",texto:'Inicio' },
    {url:'/PelisGrid',texto: 'Peliculas' },
    {url:'/SeriesGrid',texto: 'Series' },
    {url:'/Favoritos', texto: 'Mis favoritos' }
  ]
  

  return (
    <> 
    <Navegador items={elementosMenu}/>
    <HeaderPeliculas/>
    
    
    <TabsMui/>

    </>    
  )
}

export default LayoutPeliculas

