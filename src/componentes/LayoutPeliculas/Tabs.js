import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function TabsMui() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contenidoPlantaSimios = {
    Elenco: [
      "Andy Serkis(César)",
      "James Franco (Will Rodman)",
      "Freida Pinto (Caroline)",
      "Terry Notary (Bright Eyes)",
      "Tom Felton (Dodge Landon)"
    ],
    Producción: [
      "Dirigida por Rupert Wyatt",
      "Guion Rick Jaffa, Amanda Silver"
    ],
    Detalles: [
      "Will Rodman, un científico de San Francisco, está experimentando con una droga con la que espera curar la enfermedad de Alzheimer que sufre su padre. Después de que su trabajo presenta una falla, Will se convierte en el protector de un chimpancé que estuvo expuesto a la droga. Caesar desarrolla una inteligencia inusual, y Will decide continuar con sus experimentos. Pero al crecer la inteligencia y habilidades de Caesar, él se convierte en una amenaza para los humanos en la Tierra."
    ],
    Genero:[
      "Accion",
      "Drama",
      "Guerra"
    ]
  };

  function TabPanelContent({ tabName }) {
    // Verifica si el nombre de la pestaña existe en el objeto contenidoPlantaSimios
    if (!(tabName in contenidoPlantaSimios)) {
      return <p>No hay contenido para esta pestaña.</p>;
    }
  
    // Obtiene todos los valores correspondientes a la pestaña 'tabName'
    const contenido = contenidoPlantaSimios[tabName];
  
    return (
      <ul>
        {/* Mapea cada elemento del array contenido y crea un elemento li para cada uno */}
        {contenido.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  

  return (
    <Box sx={{ width: "100%", color: "#5bd635"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            centered
            onChange={handleChange}
            textColor="#5bd635"
            TabIndicatorProps={{ sx: { backgroundColor: "#5bd635" } }}
            sx={{
              "& button": {
                borderRadius: 2,
                color: "#5bd635",
                underline: "#5bd635",
              },
              "& button:hover": { backgroundColor: "#5bd63565", color: "#fff" },
            }}
          >
            <Tab label="Elenco" value="1" />
            <Tab label="Produccion" value="2" />
            <Tab label="Detalles" value="3" />
            <Tab label="Genero" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabPanelContent tabName="Elenco" />
        </TabPanel>
        <TabPanel value="2">
          <TabPanelContent tabName="Producción" /> 
        </TabPanel>
        <TabPanel value="3">
          <TabPanelContent tabName="Detalles" />
        </TabPanel>
        <TabPanel value="4"> 
          <TabPanelContent tabName="Genero" />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsMui;
