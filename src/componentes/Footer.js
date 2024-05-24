import '../estilos/footer.css'
import * as React from 'react';


function Footer() {
  return (

    <div className='contenedor'>
        <h1 className='titulo' > VerdanT </h1>
        <div className='recursos' >
          <p className='recursos_items'>Términos de uso</p>
          <p className='recursos_items'>Politica de privacidad</p >
          <p className='recursos_items'>Dispositivos compatibles</p >
          <p className='recursos_items'>Ayuda</p>
        </div>
        <h4 className='copyright'> © 2024 VerdanT . Todos los derechos reservados.  </h4>
    </div>

      
 
  )
}

export default Footer
