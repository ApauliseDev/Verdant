import React, { useContext, useEffect, useState } from "react";
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
import {DataContext} from './DataContext'
import { Check } from "@mui/icons-material";



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
  { url: "/LayoutCatalogo", texto: "Home" },
  { url: "/PelisGrid", texto: "Movies" },
  { url: "/Favoritos", texto: "WatchList" },
];


const generos = <CustomizedMenus/>
/*------------------------------------------------------------------*/

function PelisGrid() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '0023db00b52250d5bed5debec71d21fb'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'


//Agregar a WatchList

const  {porver,setPorver} = useContext(DataContext)
console.log(porver)

const addToWatchList = (movie) => {
const check = porver.every(item =>{
  return item.id !== movie.id
})

if (check) {
  setPorver([...porver,movie])
  alert("This movie has been added to your watchlist")
}else{
  alert("This movie is already added")
}
}

// }

//variables de estado

  const [movielist, setMovielist] = useState([]);
  const [searchKey,setSearchKey] = useState('');
  const [movie,setMovie] = useState({title:"Loading Movies"});

  

  const fechMovies = async(searchKey) =>{
    const type = searchKey ? "search": "discover"
    const {data: {results},
  } = await axios.get(`${API_URL}/${type}/movie`,{
    params:{
      api_key: API_KEY,
      query: searchKey,
    }
  })

  const filteredResults = results.filter(movie => movie.poster_path !== null);
  setMovielist(filteredResults)
  setMovie(filteredResults[0])
}


//funcion para buscar la pelicula
const searchMovies = (e) => {
e.preventDefault();
fechMovies(searchKey)
}


useEffect(() => {
  // Llamar a fetchMovies con el valor actual de searchKey
  fechMovies(searchKey);
}, [searchKey])



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
      <Navegador items={elementosMenu2} generos= {generos}  />

      <div className="contenedor-titulo-peliculas">
        <h2>Peliculas</h2>
        {/* buscador */}
      </div>
      <form style={{display:"flex", justifyContent:"center"}} onSubmit={searchMovies}> 
        <input
            className="input-busqueda"
            type="text"
            placeholder="Search a movie"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </form>
      
      <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <Grid container spacing={0.1}>
          {movielist.map((movie) => (
            <Grid xs={6} md={4} lg={3} xl={2.4}>
              <Item className="img-grid">
                <Link
                  key={movie.id}
                  to={`/LayoutPeliculas/${movie.original_title}`}
                  state={{ movieDetails: movie }}
                >
                  <img
                    src={`${URL_IMAGE + movie.poster_path}`}
                    alt={movie.name}
                    style={{
                      borderRadius: "16px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
                <button 
                id="boton-poster"
                 onClick={()=>{
                  addToWatchList(movie)
                 }}
                >{<PlaylistAddIcon/>} </button>
                
                
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default PelisGrid;
