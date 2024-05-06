import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Navegador from "./NavBTSP";
import "../estilos/pelisGrid.css";
import CustomizedMenus from "./CustomizedMenus";
import { Link } from "react-router-dom";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import axios from 'axios'
import  YouTube  from 'react-youtube';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  objectFit: "cover",
}));
/*------------------------------------------------------------------*/

const elementosMenu2 = [
  { url: "/LayoutCatalogo", texto: "Inicio" },
  { url: "/PelisGrid", texto: "Peliculas" },
  { url: "/Favoritos", texto: "Mis favoritos" },
];

function PelisGrid() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '0023db00b52250d5bed5debec71d21fb'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

//variables de estado

  const [movielist, setMovielist] = useState([]);
  const [searchKey,setSearchKey] = useState('');
  const [trailer,setTrailer] = useState(null);
  const [movie,setMovie] = useState({title:"Loading Movies"});
  const[ playing,setPlaying] = useState(false);

  const fechMovies = async(searchKey) =>{
    const type = searchKey ? "search": "discover"
    const {data: {results},
  } = await axios.get(`${API_URL}/${type}/movie`,{
    params:{
      api_key: API_KEY,
      query: searchKey,
    }
  })
  setMovielist(results)
  setMovie(results[0])
}


//funcion para buscar la pelicula
const searchMovies = (e) => {
e.preventDefault();
fechMovies(searchKey)
}


useEffect( ()=>{
  fechMovies();


},[] )



  // const getMovie = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=0023db00b52250d5bed5debec71d21fb"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => setMovielist(json.results));
  // };

  // useEffect(() => {
  //   getMovie();
  // }, []);

  console.log(movielist);

  return (
    <>
      <Navegador items={elementosMenu2} />

      <div className="contenedor-titulo-peliculas">
        <h2>Peliculas</h2>
        {/* buscador */}
        <form onSubmit={searchMovies}> 
        <input style={ {border:"solid green" ,fontSize: "15px"} }  type="text" placeholder="Search a movie" onChange={(e)=> 

        setSearchKey(e.target.value) && searchMovies
        }
        >
        </input>
        <button> Search </button>
        </form>
      </div>
      <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <Grid container spacing={0.1}>
          {movielist.map((movie) => (
            <Grid xs={6} md={4} lg={3} xl={2.4}>
              <Item className="img-grid">
                <Link
                  key={movie.id}
                  to={`/LayoutPeliculas/${movie.title}`}
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
                <button id="boton-poster">{<PlaylistAddIcon/>} Mi lista</button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default PelisGrid;
