import React from "react";
import "../../estilos/headerPeliculas.css";
import RatingStars from "./RatingStars";
import {ElencoImagenes} from "./ElencoImagenes"

function HeaderPeliculas() {
  const genero = ["Romance", "Accion", "Guerra"];

  return (
    <header id="layout-header">
      <div className="header-banner">
        <img src="Imagenes/Godzilla.jpg" alt="Gozilla Banner" />
        <div className="header-shadow"> </div>
      </div>
      <section className="header-content-box">
        <div className="cartelera-img">
          <img src="Imagenes/GodxKong.jpg" alt="Gozilla imagen cartelera" />
          <RatingStars />
        </div>
        <article className="movie-info">
          <h2>Godzilla x Kong </h2>
          <div className="generos-pelicula">
            {genero.map((genero, index) => (
              <p key={index} className="genero">
                {genero}
              </p>
            ))}
          </div>
          <h6> Descripción general</h6>
          <p>
            Una aventura cinematográfica completamente nueva, que enfrentará al
            todopoderoso Kong y al temible Godzilla contra una colosal amenaza
            desconocida escondida dentro de nuestro mundo. La nueva y épica
            película profundizará en las historias de estos titanes, sus
            orígenes y los misterios de Isla Calavera y más allá, mientras
            descubre la batalla mítica que ayudó a forjar a estos seres
            extraordinarios y los unió a la humanidad para siempre.
          </p>
          <ElencoImagenes/>
        </article>
      </section>
    </header>
  );
}

export default HeaderPeliculas;
