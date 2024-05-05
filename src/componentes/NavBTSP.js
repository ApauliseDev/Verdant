import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {Boton} from './LayaoutIndex/Botones'
import '../estilos/NavBTSP.css'
import CustomizedMenus from './CustomizedMenus';

function Navegador(props) {
  return (
    <Navbar data-bs-theme="dark" collapseOnSelect expand="lg" fixed="top" className="fondoNav justify-content-between">
      <Container style={{paddingTop: "15px"}}>
      <h1 className="nombre-web">VerdanT</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: "#53a13b", borderColor: "#53a13b"}} />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="justify-content-center" style={{width:"100%"}}>
            {props.items.map((item,index) =>(
              <Link className="link" to={item.url}> {item.texto }</Link>

            ))}
            {props.generos}
           
            {/* <Link className="link"  to="/">Inicio</Link>
            <Link className="link" to="/LayoutCatalogo">Catálogo</Link>
            <Link className="link" to="/LayoutPeliculas">Peliculas</Link> */}
          </Nav>
          <Boton className="boton-regist"  title="Registrarse" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;