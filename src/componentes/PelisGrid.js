import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import  Navegador from './NavBTSP'
import '../estilos/pelisGrid.css'
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
  {url:'/',texto:'Inicio' },
  {url:'/PelisGrid',texto: 'Peliculas' },
  {url:'/SeriesGrid',texto: 'Series' },
]


function PelisGrid() {
  return (
<<<<<<< HEAD
    <div>
    <button> </button>
      
=======
    <> 
    <Navegador items= {elementosMenu2} />

    <div style={{ fontFamily: "Cinzel bold",marginLeft: "8px",color: "antiquewhite",fontSize: "10px" ,marginTop: "110px", position:"absolute"}}>
      <h2>Peliculas</h2>
>>>>>>> cfe60ba6ab2b32be7a0e3fc65224372bb9f4a5be
    </div>
    <Box sx=
    {{ flexGrow: 1,
      marginTop:20,

      

    }}>
      <Grid container spacing={0.1}>
        <Grid  height= "184px" xs={6} md= {4} lg= {3} xl={2.4} >
          <Item className='img-grid'>
          <img src="/Imagenes/planetaSimios.png"  alt='guerra' style={{  borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/ToyStory.jpg"  alt='guerra' style={{borderRadius: "16px", width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Godzilla.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Uncharted.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Annabelle.jpg"  alt='guerra' style={{borderRadius: "16px", width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        {/* ------------------------------ Fila2 -----------------------------------------   */}
        <Grid  height= "184px" xs={6} md= {4} lg= {3} xl={2.4} >
          <Item className='img-grid'>
          <img src="/Imagenes/planetaSimios.png"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/ToyStory.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Godzilla.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item >
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Uncharted.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Annabelle.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
          {/* ------------------------------ Fila3 -----------------------------------------   */}
          <Grid  height= "184px" xs={6} md= {4} lg= {3} xl={2.4} >
          <Item className='img-grid'>
          <img src="/Imagenes/planetaSimios.png"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/ToyStory.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Godzilla.jpg"  alt='guerra' style={{borderRadius: "16px", width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Uncharted.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Annabelle.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
          {/* ------------------------------ Fila4 -----------------------------------------   */}
          <Grid  height= "184px" xs={6} md= {4} lg= {3} xl={2.4} >
          <Item className='img-grid'>
          <img src="/Imagenes/planetaSimios.png"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/ToyStory.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Godzilla.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4} lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Uncharted.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
        <Grid xs={6} md= {4}  lg= {3}  xl={2.4}>
          <Item className='img-grid'>
          <img src="/Imagenes/Annabelle.jpg"  alt='guerra' style={{ borderRadius: "16px",width: '100%', height: '100%' }}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default PelisGrid
