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


  //Watchlist
  const  {porver,setPorver} = useContext(DataContext)


  //Agregar a WatchList


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

  //Filtrar por genero
  const [selectedGenres, setSelectedGenres] = useState([]);


  const fetchMoviesByGenres = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres: selectedGenres.join(',') // Convertir array de géneros en string separado por comas
        }
      });
      setMovielist(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMoviesByGenres();
  }, [selectedGenres]); // Volver a cargar las películas cuando cambian los géneros seleccionados

  
  const toggleGenre = (genreId) => {
    // Verificar si el género ya está seleccionado
    if (selectedGenres.includes(genreId)) {
      // Si ya está seleccionado, quitarlo de la lista de géneros seleccionados
      setSelectedGenres(selectedGenres.filter(id => id !== genreId));
    } else {
      // Si no está seleccionado, agregarlo a la lista de géneros seleccionados
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };




// }

//variables de estado 
  const [movielist, setMovielist] = useState([]);
  const [searchKey,setSearchKey] = useState('');
  const [movie,setMovie] = useState({title:"Loading Movies"});

  const [page, setPage] = useState(1)

  

  const fechMovies = async(searchKey) =>{
    const type = searchKey ? "search": "discover"
    const {data: {results},
  } = await axios.get(`${API_URL}/${type}/movie`,{
    params:{
      api_key: API_KEY,
      query: searchKey,
      page: page
    }
  })

  const filteredResults = results.filter(movie => movie.poster_path !== null);
  setMovielist(filteredResults)
  setMovie(filteredResults[0])
}


//Funcion cargas mas pelis
const loadMoreMovies = () => {
  setPage(page + 1); // Incrementar el número de página
}

const loadLessMovies = () => {

  if(page !== 1){
    setPage(page - 1); // Incrementar el número de página
  }


}


useEffect( () =>{
  fechMovies()



}, [page]  )


//funcion para buscar la pelicula
const searchMovies = (e) => {
e.preventDefault();
fechMovies(searchKey)
}


useEffect(() => {
  // Llamar a fetchMovies con el valor actual de searchKey
  fechMovies(searchKey);
}, [searchKey])



  console.log(movielist);

  return (
    <>
      <Navegador items={elementosMenu2} generos= {generos}  />

      <div className="contenedor-titulo-peliculas">
        <h2 style={{fontSize: "36px"}}>Peliculas</h2>
        <div> 
        <button onClick={()=> { toggleGenre(12)}}>Adventure  </button>
        <button onClick={()=> { toggleGenre(10752)}} >War  </button>
        <button onClick={()=> { toggleGenre(16)}}>Comedy  </button>
        <button onClick={()=> { toggleGenre(27)}} >Horror  </button>
        <button onClick={()=> { toggleGenre(10749)}} >Romance  </button>
        </div>
        {/* buscador */}
      </div>
      <form style={{display:"flex", justifyContent:"center"}} onSubmit={searchMovies}> 
        <input 
            className="input-busqueda"
            type="text"
            placeholder="Search a movie..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}>
        </input>
        </form>
      
      <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <div className="load-buttons" style={{width:"100%", display:"flex", justifyContent:"space-between"}}> 
        <button onClick={loadLessMovies}> Load less  </button> 
        <button  onClick={loadMoreMovies} >  Load more </button>
        </div>

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
