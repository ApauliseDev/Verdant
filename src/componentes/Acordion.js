import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import "../estilos/Acordion.css";

export function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "#24451D", color: "#fff", border: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

/* 
====================
====================
====================
====================
====================
====================

PREGUNTAS FRECUENTES

====================
====================
====================
====================
====================
 ==================*/


function Acordion() {
  return (
    <div id="AcordionContainer">
  
      <Accordion className="accordionWidth" >
      <div id="FAQ">
        <h2 > Preguntas Frecuentes</h2>
      </div>
        <Card id="border-c">
          <CustomToggle eventKey="0">
            <Card.Header id="card-head" style={{ backgroundColor: "#24451D", color: "#fff" }}>
              ¿Es necesario registrarse para utilizar Verdant?
            </Card.Header>
          </CustomToggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body id="cuerpo" >
              Sí, para acceder y disfrutar del contenido disponible en Verdant,
              así como para dejar reseñas y comentarios sobre películas y
              series, es necesario registrarse en la plataforma. 
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card id="border-c">
          <CustomToggle eventKey="1">
            <Card.Header id="card-head" style={{ backgroundColor: "#24451D", color: "#fff" }}>
              ¿Cómo puedo buscar una película o serie específica?
            </Card.Header>
          </CustomToggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body id="cuerpo"  >
              Para acceder al contenido de películas y series específicas en
              Verdant, es necesario iniciar sesión en tu cuenta. 
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card id="border-c">
          <CustomToggle eventKey="3">
            <Card.Header id="card-head" >
              ¿Cuál es la frecuencia de actualización del contenido?
            </Card.Header>
          </CustomToggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body id="cuerpo"  >
              En Verdant, nos esforzamos por mantener nuestro catálogo
              actualizado con las últimas películas y series para que siempre
              tengas acceso a contenido fresco y emocionante.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card id="border-c">
          <CustomToggle eventKey="4">
            <Card.Header id="card-head" >
              ¿Hay algún requisito técnico específico para utilizar Verdant en
              diferentes dispositivos?
            </Card.Header>
          </CustomToggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body id="cuerpo" >
              Puedes disfrutar de Verdant desde tu dispositivo favorito, ya sea
              una computadora de escritorio, una laptop, una tableta o un
              teléfono. 
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Acordion;
