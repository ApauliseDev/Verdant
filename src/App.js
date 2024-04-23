// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";
import "./estilos/footer.css";
import "./estilos/App.css";
import { NavBar } from "./componentes/Nav";
import IndexUno from "./componentes/IndexUno";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Box from '@mui/material/Box';
import LayoutCatalogo from './componentes/LayoutCatalogo'
import LogIn from "./componentes/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<IndexUno />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/LayoutCatalogo" element= {<LayoutCatalogo/>}> </Route>
          <Route> </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
