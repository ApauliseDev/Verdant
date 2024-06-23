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
import axios from 'axios';
import { DataContext } from './DataContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  objectFit: "cover",
}));

const elementosMenu2 = [
  { url: "/LayoutCatalogo", texto: "Home" },
  { url: "/PelisGrid", texto: "Movies" },
  { url: "/Favoritos", texto: "Lists" },
];

function PelisGrid() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '0023db00b52250d5bed5debec71d21fb';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

  // Watchlist
  const { porver, setPorver } = useContext(DataContext);

  const addToWatchList = (movie) => {
    const check = porver.every(item => item.id !== movie.id);
    if (check) {
      setPorver([...porver, movie]);
      alert("Great choice! :)");
    } else {
      alert("This movie is already added");
    }
  };

  // Filtrar por género
  const [selectedGenres, setSelectedGenres] = useState([]);

  const fetchMoviesByGenres = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres: selectedGenres.join(','),
        },
      });
      setMovielist(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMoviesByGenres();
  }, [selectedGenres]);

  const [activeGenres, setActiveGenres] = useState([]);

  const toggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter(id => id !== genreId));
      setActiveGenres(activeGenres.filter(id => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
      setActiveGenres([...activeGenres, genreId]);
    }
  }

  // Variables de estado 
  const [movielist, setMovielist] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [page, setPage] = useState(1);

  const fetchTrendingMovies = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/trending/all/week`, {
        params: {
          api_key: API_KEY,
          page: page,
        },
      });

      const filteredResults = results.filter(result => result.poster_path !== null);
      setMovielist(filteredResults);
      setMovie(filteredResults[0]);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  const fetchSearchMovies = async (searchKey) => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/search/multi`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
          page: page,
        },
      });

      const filteredResults = results.filter(result =>
        (result.media_type === "movie" && result.poster_path !== null) ||
        (result.media_type === "person" && result.profile_path !== null)
      );
      setMovielist(filteredResults);
      setMovie(filteredResults[0]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const loadMoreMovies = () => {
    window.scrollTo(0, 0);
    setPage(page + 1);
  };

  const loadLessMovies = () => {
    if (page !== 1) {
      window.scrollTo(0, 0);
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (searchKey) {
      fetchSearchMovies(searchKey);
    } else {
      fetchTrendingMovies();
    }
  }, [page, searchKey]);

  const searchMovies = (e) => {
    e.preventDefault();
    setPage(1);
    fetchSearchMovies(searchKey);
  };

  return (
    <>
      <Navegador items={elementosMenu2} />

      <div className="contenedor-titulo-peliculas">
        <h2 style={{ fontSize: "36px" }}>Peliculas</h2>
        <div>
          <button
            id="BotonesGeneros"
            onClick={() => { toggleGenre(12) }}
            className={activeGenres.includes(12) ? 'active' : ''}
          >
            Adventure
          </button>
          <button
            id="BotonesGeneros"
            onClick={() => { toggleGenre(10752) }}
            className={activeGenres.includes(10752) ? 'active' : ''}
          >
            War
          </button>
          <button
            id="BotonesGeneros"
            onClick={() => { toggleGenre(16) }}
            className={activeGenres.includes(16) ? 'active' : ''}
          >
            Comedy
          </button>
          <button
            id="BotonesGeneros"
            onClick={() => { toggleGenre(27) }}
            className={activeGenres.includes(27) ? 'active' : ''}
          >
            Horror
          </button>
          <button
            id="BotonesGeneros"
            onClick={() => { toggleGenre(10749) }}
            className={activeGenres.includes(10749) ? 'active' : ''}
          >
            Romance
          </button>
        </div>

      </div>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={searchMovies}>
        <input
          className="input-busqueda"
          type="text"
          placeholder="Search a movie..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </form>

      <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <div className="load-buttons" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <button onClick={loadLessMovies}>{<ArrowBackIosIcon />} Previous</button>
          <button onClick={loadMoreMovies}>Next {<ArrowForwardIosIcon />}</button>
        </div>

        <Grid container spacing={0.1}>
          {movielist.map((item) => (
            <Grid key={item.id} xs={6} md={4} lg={3} xl={2.4}>
              <Item className="img-grid">
                {item.media_type === "person" ? (
                  <Link to={`/PersonDetails/${item.name}`} state={{ personDetails: item }}>
                    <img
                      src={`${URL_IMAGE + item.profile_path}`}
                      alt={item.name}
                      style={{ borderRadius: "16px", width: "100%", height: "100%" }}
                    />
                  </Link>
                ) : (
                  <Link to={`/LayoutPeliculas/${item.original_title}`} state={{ movieDetails: item }}>
                    <img
                      src={`${URL_IMAGE + item.poster_path}`}
                      alt={item.title}
                      style={{ borderRadius: "16px", width: "100%", height: "100%" }}
                    />
                  </Link>
                )}
                {item.media_type === "movie" && (
                  <button
                    id="boton-poster"
                    onClick={() => { addToWatchList(item) }}
                  >{<PlaylistAddIcon />}</button>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
        <div className="load-buttons" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <button onClick={loadLessMovies}>{<ArrowBackIosIcon />} Previous</button>
          <button onClick={loadMoreMovies}>Next {<ArrowForwardIosIcon />}</button>
        </div>
      </Box>
    </>
  );
}

export default PelisGrid;
