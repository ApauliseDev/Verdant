import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function TabsMui() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "#5bd635" }}>
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
          <ul>
            <li>Andy Serkis(César) <br /></li>
            <li>James Franco (Will Rodman) <br /> </li>
            <li>Freida Pinto (Caroline) <br /> </li>
            <li>Terry Notary (Bright Eyes) <br /> </li>
            <li>Tom Felton (Dodge Landon) <br /></li>
            <li>John Lithgow (Charles Rodman) <br /> </li>
            <li>Brian Cox(John Landon) <br /></li>
            <li>David Hewlett(Hunsiker)</li>
          </ul>
        </TabPanel>
        <TabPanel value="2"> 
        <ul>
        <li> Dirigida por Rupert Wyatt <br/> </li>
        <li> Guion Rick Jaffa, Amanda Silver</li>
        </ul>
        </TabPanel>
        <TabPanel value="3">Will Rodman, un científico de San Francisco, está experimentando con una droga con la que espera curar la enfermedad de Alzheimer que sufre su padre. Después de que su trabajo presenta una falla, Will se convierte en el protector de un chimpancé que estuvo expuesto a la droga. Caesar desarrolla una inteligencia inusual, y Will decide continuar con sus experimentos. Pero al crecer la inteligencia y habilidades de Caesar, él se convierte en una amenaza para los humanos en la Tierra.</TabPanel>
        <TabPanel value="4"> 
        <ul>
            <li>Accion</li>  
            <li>Drama</li>
            <li>Guerra</li>
        </ul>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsMui;
