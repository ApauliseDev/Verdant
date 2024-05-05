import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../../estilos/ElencoImagenes.css";

export function ElencoImagenes() {

  return (
    <div>
      <ImageList cols={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img srcSet={item.img} src={item.img} alt={item.title} id="imagen-redondeada" />
            <div className="overlay">
              <div className="name">{item.name}</div>
            </div>
        </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


const itemData = [
  {
    img: 'imagenes/AbY-godzilla.jpg',
    title: 'Candle',
    name: "Kaylee Hottle",
  },
  {
    img: 'imagenes/rebecca-godzilla.jpg',
    title: 'Laptop',
    name: "Rebecca Hall",
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    name: "Freida Pinto",
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    name: "Terry Notary ",
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    name: "Tom Felton ",
  }
];

