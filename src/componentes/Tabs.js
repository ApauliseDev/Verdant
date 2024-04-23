import { useState } from 'react';
import {Box, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'

 function TabsMui() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Elenco</TabPanel>
        <TabPanel value="2">Produccion</TabPanel>
        <TabPanel value="3">Detalles</TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsMui