import React from "react";
import "../../estilos/headerPeliculas.css";
import RatingStars from "./RatingStars";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function HeaderPeliculas() {
  return (
    <header className="header">
      <div className="header-banner">
        <img src="Imagenes/Godzilla.jpg" alt="Gozilla Banner" />
        <div className="header-shadow"> </div>
      </div>
      <section className="header-content-box">
      <div className="cartelera-img">
      <img src="Imagenes/GodxKong.jpg" alt="Gozilla imagen cartelera" />
      <RatingStars/>

      </div>
      <article className="movie-info">
      <h2>Godzilla x Kong </h2>
      <div className="iconos">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <h6> Descripción general</h6>
      <p>Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida escondida dentro de nuestro mundo. La nueva y épica película profundizará en las historias de estos titanes, sus orígenes y los misterios de Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre.</p>
      <div className="reparto">
        <div>
          <h5>Director</h5>
          <p>Mariano</p>
        </div>
        <div>
          <h5>Productor</h5>
          <p>Marcelo</p>
        </div>
        <div>
          <h5>Ayudante</h5>
          <p>Martin</p>
        </div>
      </div>


      </article>
      </section>
    </header>
  );
}

export default HeaderPeliculas;
