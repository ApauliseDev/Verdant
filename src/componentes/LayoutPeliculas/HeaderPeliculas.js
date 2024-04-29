import React from "react";
import "../../estilos/headerPeliculas.css";
import RatingStars from "./RatingStars";
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
      <h6> Descripción general</h6>
      <p>Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past</p>

      </article>
      </section>
    </header>
  );
}

export default HeaderPeliculas;
