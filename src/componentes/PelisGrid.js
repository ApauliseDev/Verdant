import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import  Navegador from './NavBTSP'
import '../estilos/pelisGrid.css'
import CustomizedMenus from './CustomizedMenus'
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  objectFit: "cover",

}));
/*------------------------------------------------------------------*/


const elementosMenu2 = [
  {url:"/LayoutCatalogo",texto:'Inicio' },
  {url:'/PelisGrid',texto: 'Peliculas' },
  {url:'/Favoritos', texto: 'Mis favoritos' },

]


function PelisGrid() {
  const[movielist,setMovielist] = useState([])

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=0023db00b52250d5bed5debec71d21fb"
    )
      .then((res) => res.json())
      .then((json) => setMovielist(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movielist)





  return (
    <> 
    <Navegador items= {elementosMenu2} />

    <div className='contenedor-titulo-peliculas'>
      <h2>Peliculas</h2>
      <CustomizedMenus/>
    </div>
    <Box sx=
    {{ flexGrow: 1,
      marginTop:20,
      paddingLeft: 6,
      paddingRight:6,
  
      

    }}>
      <Grid container spacing={0.1}>


      {movielist.map((movie) => (

        <Grid   xs={6} md= {4} lg= {3} xl={2.4} >
          <Link
              key= {movie.id}
              to={`/LayoutPeliculas/${movie.id}`}
              state= {{movieDetails: movie }}
          > <Item className='img-grid'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt='guerra' style={{  borderRadius: "16px",width: '100%', height: '100%' }}/>
          <button>+Mi lista</button>
          </Item>
          </Link>
        </Grid>
    

    ))  }
      
      </Grid>
    </Box>
    </>
  )
}

export default PelisGrid
