import React from 'react'
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
  return (
    <div className="container">
                     <div>
    <h2  style={ {color : "#fff", position: "absolute", fontFamily:'Dokdo', marginLeft:"20px", fontSize:"40px"}} > {props.tituloSlider} </h2>
  </div>
      <Slider {...settings}> 

        <div>
          <Link to ="/LayoutPeliculas"  >  <img src="/Imagenes/planetaSimios.png"  alt='guerra'/> </Link>
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
