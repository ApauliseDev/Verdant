import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../estilos/Pelislider.css'
import {Link} from 'react-router-dom'



function Pelislider(props)    {



    var settings = {
        dots: false,
        lazyLoad:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1737,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 2,

                }
              },
          {
            breakpoint: 1355,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1047,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 709,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [movies, setMovies] = useState([]);
      const [genres, setGenres] = useState([]);
    
      useEffect(() => {
        const fetchMovies = async () => {
          const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0023db00b52250d5bed5debec71d21fb');
          const data = await response.json();
          setMovies(data);
        };
    
        const fetchGenres = async () => {
          const response = await fetch('https://api.themoviedb.org/3/genre/movie?api_key=0023db00b52250d5bed5debec71d21fb');
          const data = await response.json();
          setGenres(data);
        };
    
        Promise.all([fetchMovies(), fetchGenres()])
          .then(() => {
            // Una vez que ambos fetches se completen, puedes acceder tanto a las películas como a los géneros
            // Combina o procesa los datos de películas y géneros según sea necesario
          })
          .catch((error) => {
            console.error('Error al obtener datos:', error);
            // Maneja los errores de forma adecuada
          });
      }, []);

      



    


  return (
    <div className="container">
                     <div>
    <h2  style={ {color : "#fff", position: "absolute", fontFamily:'Dokdo', marginLeft:"20px", fontSize:"40px"}} > {props.tituloSlider} </h2>
  </div>
      <Slider {...settings}> 

        <div>
          <img src="/Imagenes/planetaSimios.png"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/Uncharted.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>
        <div>
        <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
        </div>

      </Slider>
    </div>
  );
}

export default Pelislider
