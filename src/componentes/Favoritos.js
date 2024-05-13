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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
        {url:'/LayoutCatalogo',texto:'Home' },
        {url:'/PelisGrid',texto: 'Movies' },
        {url:'/Favoritos', texto: 'Lists' }
      ]

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
    



const {porver,setPorver,addToWatched,vistas,setVistas,removeFromVistas} = useContext(DataContext)
const [envistas,setEnvistas] = useState(false)


const removeFromPorver = (movie) =>{
  const updater = [...porver]
  updater.forEach((item,index)=>{
    if(item.id === movie.id){
      updater.splice(index,1)
    }
    setPorver(updater)
  })

}


const addToWatchList = (movie) => {
  const check = porver.every(item =>{
    return item.id !== movie.id
  })
  
  if (check) {
    setPorver([...porver,movie])
    alert("Great choice! :)")
  }else{
    alert("This movie is already added")
  }
  }


  return (
    <><div className='div-fav'>
        <Navegador items= {elementosMenu} />
        

        <Box sx={{ flexGrow: 1, marginTop: 20, paddingLeft: 6, paddingRight: 6 }}>
        <div style={{display:"flex", gap:"50px"}}> 
        <h2 style={{color:"#fff", fontFamily:"Cinzel Semibold"}}>My Watchlist</h2>
        { envistas?         <button
        style={{  background:"none",
                  border: "solid 2px #5bd635",
                  width: "200px",
                  fontSize: "20px",
                  borderRadius: "32px",
                  padding: "3px",
                  fontFamily: "Cinzel Semibold",
                  fontWeight: "700",
                  color: "antiquewhite"}}
         onClick={ ()=> {
          setEnvistas(false)
        }}   > Watched  </button>:
         <button
        style={{  background:"none",
                  border: "solid 2px #5bd635",
                  width: "200px",
                  fontSize: "20px",
                  borderRadius: "32px",
                  padding: "3px",
                  fontFamily: "Cinzel Semibold",
                  fontWeight: "700",
                  color: "antiquewhite"}}
         onClick={ ()=> {
          setEnvistas(true)
        }}   > Watchlist  </button>   }
        </div>

        <Grid container spacing={0.1}>
        { envistas? 
        vistas.map((movie) => (
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
                <div style={{display:"flex" ,position:"absolute"}}>                
                <button 
                style={{border:"none", background:"none", position:"relative"}}
                id= "boton-poster"
                 onClick={()=>{
                  removeFromVistas(movie)}}
                > {<RemoveCircleOutlineIcon style={{border:"none",color:"#5AD635", fontSize:"50px"}}/>}</button>
                
                <button 
                style={{border:"none", background:"none",position:"relative"}}
                id= "boton-poster"
                onClick={ () =>{
                  addToWatchList(movie)

                }  }  

                > {<RemoveRedEyeIcon style={{border:"none",color:"#5AD635", fontSize:"50px"}}/>}</button> </div>

              </Item>
            </Grid>
        ))

        : porver? porver.map((movie) => (
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
                <div style={{display:"flex" ,position:"absolute"}}>                
                <button 
                style={{border:"none", background:"none", position:"relative"}}
                id= "boton-poster"
                 onClick={()=>{
                  removeFromPorver(movie)}}
                > {<RemoveCircleOutlineIcon style={{border:"none",color:"#5AD635", fontSize:"50px"}}/>}</button>
                
                <button 
                style={{border:"none", background:"none",position:"relative"}}
                id= "boton-poster"
                onClick={ () =>{
                  addToWatched(movie)

                }  }  

                > {<RemoveRedEyeIcon style={{border:"none",color:"#5AD635", fontSize:"50px"}}/>}</button> </div>

              </Item>
            </Grid>
        )): null



        }


        </Grid>
      </Box>


      </div>

    </>
  )
}

export default Favoritos
