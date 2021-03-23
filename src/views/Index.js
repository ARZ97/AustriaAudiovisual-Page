import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Intro from "./index-sections/Intro.js";
import Experiencia from "./index-sections/Experiencia.js";
import PortafolioInt from "./index-sections/PortafolioInt.js";
import Marcas from "./index-sections/Marcas.js";
import SesionFotos from "./index-sections/SesionFotos.js";
import Producciones from "./index-sections/Producciones.js";
import Catalogos from "./index-sections/Catalogos.js";
import Videoclips from "./index-sections/Videoclips.js";
 
import Artistas from "./index-sections/Artistas.js";
 import Contacto from "./index-sections/Contacto.js";
import Porta  from "./index-sections/Porta.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Intro />
          <Experiencia />
          <PortafolioInt />
          <Marcas />
          <Porta/>
          <SesionFotos />
          <Producciones />
          <Catalogos />
          <Videoclips />
          <Artistas />
          <Contacto />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
