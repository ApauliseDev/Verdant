import * as React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import "../estilos/main.css";

import { ImAirplane } from "react-icons/im";


function Main() {

  return (
    <div className="maincontenedor">
     <div className="contendorLista"> 
      <ul className="listamain" >
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/MonkeyMan.jpg'} alt="Imagen 1" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/Dune.jpg'} alt="Imagen 2" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/GodxKong.jpg'} alt="Imagen 3" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/AbY.jpg'} alt="Imagen 4" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/CivilWar.jpg'} alt="Imagen 5" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/KungFu.jpg'} alt="Imagen 5" /></li>
      </ul>
      <h2 className="intermedio"> En Verdant podras...</h2>
      </div>
 
      <div className="card-container">
        <div className="card">
        <GroupsIcon fontSize="large"></GroupsIcon>
          <p>Mantente al tanto de lo que opina la comunidad sobre cualquier serie o pelicula que te imagines.</p>
        </div>
        <div className="card">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
          <p>Demuestrale tu cariño al elenco a traves de tus reseñas y calificaciones.</p>
        </div>
        <div className="card">
        <SpeakerNotesIcon fontSize="large"></SpeakerNotesIcon>
          <p>Interactua y comparte tu opinion con los demas miembros de la comunidad</p>
        </div>
     </div>
     <div className="card-container">
        <div className="card">
        <StarIcon fontSize="large"></StarIcon>
          <p>Califica cada pelicula con una escala de cinco estrellas para guardar y compartir tu reaccion.</p>
        </div>
        <div className="card">
        <CalendarMonthIcon fontSize="large"></CalendarMonthIcon>
          <p>No te pierdas los utlimos lanzamientos y se el primero en dejarnos saber tu opinion</p>
        </div>
        <div className="card">
        <PlaylistAddIcon fontSize="large"></PlaylistAddIcon>
          <p>Crea una lista para agregar todas las peliculas y series que planeas ver</p>
     </div>
      </div>
      <div className="carts" >

      </div>

    </div>


  );
}

export default Main;
