import React, { useEffect, useState } from 'react'
import '../estilos/favoritos.css'
import Navegador from './NavBTSP'
import { styled } from "@mui/material/styles";
import CustomizedMenus from './CustomizedMenus'
import { Box, Grid } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import axios from 'axios'
import {useContext} from 'react'
import {DataContext} from './DataContext'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

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

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
    



const {porver,setPorver,addToWatched} = useContext(DataContext)


const removeFromPorver = (movie) =>{
  const updater = [...porver]
  updater.forEach((item,index)=>{
    if(item.id === movie.id){
      updater.splice(index,1)
    }
    setPorver(updater)



  })

}




  return (
    <>
        <Navegador items= {elementosMenu} />
        

        <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <h2 style={{color:"antiquewhite", fontFamily:"Cinzel Semibold"}}>My Watchlist</h2>
        <Grid container spacing={0.1}>
        {porver? porver.map((movie) => (
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
                style={{border:"none", background:"none"}}
                id= "boton-poster"
                 onClick={()=>{
                  removeFromPorver(movie)
                 }}
                > {<RemoveCircleOutlineIcon style={{border:"none",color:"#5AD635", fontSize:"50px"}}/>}</button>

              </Item>
            </Grid>
        )): null }


        </Grid>
      </Box>




    </>
  )
}

export default Favoritos
