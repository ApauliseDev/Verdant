import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import '../estilos/simplePaper.css';

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Dokdo",
    fontSize: 25,
  },
});

function SimplePaper() {
  const [genreMovies, setGenreMovies] = useState({});

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        const genres = ["Romance", "Guerra", "Comedia", "Terror", "Aventura"];
        const genreMoviesData = {};

        for (const genre of genres) {
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0023db00b52250d5bed5debec71d21fb&with_genres=${getGenreId(genre)}`);
          const data = await response.json();
          genreMoviesData[genre] = data.results[0]; // Tomamos solo la primera película de cada género
        }

        setGenreMovies(genreMoviesData);
      } catch (error) {
        console.error('Error al obtener datos de películas:', error);
      }
    };

    fetchGenreMovies();
  }, []);

  // Función para obtener el ID de género correspondiente
  const getGenreId = (genre) => {
    switch (genre) {
      case "Romance":
        return 10749;
      case "Guerra":
        return 10752;
      case "Comedia":
        return 35;
      case "Terror":
        return 27;
      case "Aventura":
        return 12;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 15,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "flex-end",
          position: "relative",
          "& > :not(style)": {
            m: 1,
            width: 328,
            height: 184,
          },
        }}
      >
        {Object.entries(genreMovies).map(([genre, movie]) => (
          <Paper
            key={genre}
            elevation={3}
            sx={{
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <img
              id="img-paper"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
                filter: "brightness(0.5)"
              }}
            />
            <Typography
              color="primary"
              variant="h6"
              sx={{
                position: "absolute",
                color:"#fff"
              }}
            >
              {genre}
            </Typography>
          </Paper>
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default SimplePaper;
