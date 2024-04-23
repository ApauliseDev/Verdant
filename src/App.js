// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import * as React from "react";
import Footer from "./componentes/Footer";
import "./estilos/App.css";

import IndexUno from "./componentes/IndexUno";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutCatalogo from './componentes/LayoutCatalogo'
import LogIn from "./componentes/LogIn";
import LayoutPeliculas from "./componentes/LayoutPeliculas"
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
          <Route path="/LayoutPeliculas" element={<LayoutPeliculas/>}> </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
