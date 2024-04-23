import * as React from "react";

import "../estilos/main.css";

import { ImAirplane } from "react-icons/im";


function Main() {

  return (
    <div className="maincontenedor">
      <ul className="listamain" >
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/MonkeyMan.jpg'} alt="Imagen 1" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/Dune.jpg'} alt="Imagen 2" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/GodxKong.jpg'} alt="Imagen 3" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/AbY.jpg'} alt="Imagen 4" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/CivilWar.jpg'} alt="Imagen 5" /></li>
        <li><img  src={process.env.PUBLIC_URL + '/imagenes/KungFu.jpg'} alt="Imagen 5" /></li>
      </ul>
 
      <h3 className="intermedio"  >Con VerdanT podras... </h3>
      <div className="card-container">
        <div className="card">
          <ImAirplane className="icon" />
          <p>foShow some love r your favorite films, lists and reviews with a like   </p>
        </div>
        <div className="card">
        <ImAirplane className="icon" />
          <p>Show some love for your favorite films, lists and reviews with a like</p>
        </div>
        <div className="card">
        <ImAirplane className="icon" />
          <p>Show some love for your favorite films, lists and reviews with a like</p>
        </div>
     </div>
     <div className="card-container">
        <div className="card">
        <ImAirplane className="icon" />
          <p>Show some love for your favorite films, lists and reviews with a like   </p>
        </div>
        <div className="card">
        <ImAirplane className="icon" />
          <p>Show some love for your favorite films, lists and reviews with a like</p>
        </div>
        <div className="card">
        <ImAirplane className="icon" />
          <p>Show some love for your favorite films, lists and reviews with a like</p>
     </div>
      </div>
      <div className="carts" >

      </div>

    </div>


  );
}

export default Main;
