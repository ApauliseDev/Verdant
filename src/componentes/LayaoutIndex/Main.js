import * as React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import "../../estilos/main.css";

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
      <h2 className="intermedio"> In verdant...</h2>
      </div>
 
      <div className="card-container">
        <div className="card">
        <GroupsIcon fontSize="large"></GroupsIcon>
          <p>Stay up to date with what the community thinks about any series or movie you can imagine.</p>
        </div>
        <div className="card">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
          <p>Show your love to the cast through your reviews and ratings.</p>
        </div>
        <div className="card">
        <SpeakerNotesIcon fontSize="large"></SpeakerNotesIcon>
          <p>Interact and share your opinion with other members of the community</p>
        </div>
     </div>
     <div className="card-container">
        <div className="card">
        <StarIcon fontSize="large"></StarIcon>
          <p>Interact and share your opinion with other members of the community</p>
        </div>
        <div className="card">
        <CalendarMonthIcon fontSize="large"></CalendarMonthIcon>
          <p>Don't miss the latest releases and be the first to let us know your opinion</p>
        </div>
        <div className="card">
        <PlaylistAddIcon fontSize="large"></PlaylistAddIcon>
          <p>Create a list to add all the movies and series you plan to watch</p>
     </div>
      </div>
      <div className="carts" >

      </div>

    </div>


  );
}

export default Main;
