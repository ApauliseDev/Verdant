import React, { useEffect, useState } from 'react'
import '../estilos/favoritos.css'
import Navegador from './NavBTSP'
import { styled } from "@mui/material/styles";
import CustomizedMenus from './CustomizedMenus'
import { Box, Grid } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  objectFit: "cover",
}));

function Favoritos() {
    const elementosMenu = [
        {url:'/LayoutCatalogo',texto:'Inicio' },
        {url:'/PelisGrid',texto: 'Peliculas' },
        {url:'/Favoritos', texto: 'Mis favoritos' }
      ]

const generos = <CustomizedMenus/>
const ACCOUNT_ID = '21241850'
const API_KEY = '0023db00b52250d5bed5debec71d21fb'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
const [watchlistMovies, setWatchlistMovies] = useState([]);


  useEffect(() => {
    const fetchWatchlist = async () => {
      const url = `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setWatchlistMovies(data.results);
        } else {
          console.error('Error al obtener la watchlist:', response.status);
        }
      } catch (error) {
        console.error('Error al realizar la petición:', error);
      }
    };

    fetchWatchlist();
  }, [ACCOUNT_ID, API_KEY]);





  return (
    <>
        <Navegador items= {elementosMenu}  generos = {generos}/>
        <div>
            <h2>Mi lista de favoritos</h2>
            <section className='lista-favs'>
                
            <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <Grid container spacing={0.1}>
          {watchlistMovies.map((movie) => (
            <Grid xs={6} md={4} lg={3} xl={2.4}>
              <Item className="img-grid">
                <Link
                  key={movie.id}
                  to={`/LayoutPeliculas/${movie.original_title}`}
                  state={{ movieDetails: movie }}
                >
                  <img
                    src={`${URL_IMAGE + movie.poster_path}`}
                    alt="guerra"
                    style={{
                      borderRadius: "16px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
                <button 
                id="boton-poster"
                >{<PlaylistAddIcon/>} Mi lista</button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
            </section>
        </div>
      
    </>
  )
}

export default Favoritos
