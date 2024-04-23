import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../estilos/Pelislider.css'


function Pelislider() {
    var settings = {
        dots: false,
        lazyLoad:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1737,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 2
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
      <Slider {...settings}>
        <div>
          <img src="/Imagenes/guerra4.jpg"  alt='guerra'/>
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
