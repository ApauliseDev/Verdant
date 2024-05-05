import React from "react";
import "../../estilos/headerPeliculas.css";
import RatingStars from "./RatingStars";
import ElencoImagenes from "./ElencoImagenes"
import { Margin } from "@mui/icons-material";

function HeaderPeliculas(props) {
  const genero = ["Romance", "Accion", "Guerra"];
  
  return (
    <header id="layout-header">
      <div className="header-banner">
        <img src={`https://image.tmdb.org/t/p/original${props.wallpaper}`} alt={props.title} />
        <div className="header-shadow"> </div>
      </div>
      <section className="header-content-box">
        <div className="cartelera-img">
          <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} />
          <RatingStars />
        </div>
        <article className="movie-info">
          <h2 style={{margin: "20px"}}> {props.title} </h2>
          <div className="generos-pelicula">
            {genero.map((genero, index) => (
              <p key={index} className="genero">
                {genero}
              </p>
            ))}
          </div>
          <h6> Descripción general</h6>
          <p>{props.sinopsis} </p>

          <ElencoImagenes movieId={props.id}/>
          
        </article>
      </section>
    </header>
  );
}

export default HeaderPeliculas;
