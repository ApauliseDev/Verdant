import React from "react";
import "../estilos/IndexUno.css"; // Importa el archivo CSS para estilos
import {Boton} from './Botones'
import Main from '../componentes/Main'
import LogIn from './LogIn'
import {NavBar}  from  './Nav' 
import Navegador from './NavBTSP'
import Acordion from './Acordion'
import {Link} from 'react-router-dom'
function IndexUno() {
  return (
    <>
    <div className="imagen-fondo">
    {/* <NavBar/> */}
    <Navegador/>
      <div className="encabezado">
        <h1 className="title" >
          EXPLORA UN MUNDO DE ENTRETENIMIENTO
        </h1> 
        <h1 className = "title"style={{ color: "#2DB11B" }}>SIN LÍMITES</h1>
        <p className="texto">¡Únete hoy mismo a nuestra comunidad de amantes del cine y las series! </p>
        <p className="texto"> Regístrate ahora para calificar, reseñar, acceder a contenido exclusivo y mucho más. ¡No esperes más!</p>
        <Boton title='Unite Ahora' />
        <Link to = "/LogIn"><Boton title='Ya tengo  Verdant' /> </Link>
      </div>
    </div>
       <Main/> 
       <Acordion/>
      </>
  );
}

export default IndexUno;