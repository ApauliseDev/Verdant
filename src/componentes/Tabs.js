import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";


function TabsMui() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%", color: "#5bd635", background: "#000" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            id="color-tabs"
            onChange={handleChange}
            textColor="#5bd635"
            TabIndicatorProps={{ sx:{backgroundColor:"#5bd635"}}}
            sx={{
              "& button":{borderRadius: 2, color:"#5bd635", underline:"#5bd635"},
              "& button:hover": {backgroundColor: "#5bd63565", color:"#fff"},
            }}
          >
            <Tab label="Elenco" value="1" />
            <Tab label="Produccion" value="2" />
            <Tab label="Detalles" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Elenco</TabPanel>
        <TabPanel value="2">d</TabPanel>
        <TabPanel value="3">Detalles</TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsMui;
