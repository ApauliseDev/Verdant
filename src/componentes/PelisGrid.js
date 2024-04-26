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
    <> 
    <Navegador items= {elementosMenu2} />

    <div className='contenedor-titulo-peliculas'>
      <h2>Peliculas</h2>
    </div>
    <Box sx=
    {{ flexGrow: 1,
      marginTop:20,
      paddingLeft: 6,
      paddingRight:6
      

    }}>
      <Grid container spacing={0.1}>
        <Grid   xs={6} md= {4} lg= {3} xl={2.4} >
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
        <Grid   xs={6} md= {4} lg= {3} xl={2.4} >
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
          {/* ------------------------------ Fila3 -----------------------------------------   */}
          <Grid   xs={6} md= {4} lg= {3} xl={2.4} >
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
          <Grid   xs={6} md= {4} lg= {3} xl={2.4} >
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
