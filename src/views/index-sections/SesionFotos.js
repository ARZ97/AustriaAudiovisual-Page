import React from "react";
 // reactstrap components
import {
  UncontrolledCarousel,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
UncontrolledCarousel.propTypes = {
  
  autoPlay: false, // default: true
}
const items = [
  {
    src: require("assets/img/SesionF/ALBATRANS/A1.jpg"),
    altText: "Albatrans1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ALBATRANS/A2.jpg"),
    altText: "Albatrans2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ALBATRANS/A3.jpg"),
    altText: "Albatrans3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ALBATRANS/A4.jpg"),
    altText: "Albatrans4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ALBATRANS/A5.jpg"),
    altText: "Albatrans5 ",
    caption: "",
  },
];

const items2 = [
  {
    src: require("assets/img/SesionF/GOGHI/G1.jpg"),
    altText: "GOGHI 1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GOGHI/G2.jpg"),
    altText: "GOGHI 2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GOGHI/G3.jpg"),
    altText: "GOGHI 3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GOGHI/G4.jpg"),
    altText: "GOGHI 4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GOGHI/G5.jpg"),
    altText: "GOGHI 5 ",
    caption: "",
  },
];
const items3 = [
  {
    src: require("assets/img/SesionF/GRETA/Gr1.jpg"),
    altText: "GREATA 1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GRETA/Gr2.jpg"),
    altText: "GREATA 2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GRETA/Gr3.jpg"),
    altText: "GREATA 3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GRETA/Gr4.jpg"),
    altText: "GREATA 4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/GRETA/Gr5.jpg"),
    altText: "GREATA 5 ",
    caption: "",
  },
];
const items4 = [
  {
    src: require("assets/img/SesionF/LAZCANO/L1.jpg"),
    altText: "LAZCANO 1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/LAZCANO/L2.jpg"),
    altText: "LAZCANO 2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/LAZCANO/L3.jpg"),
    altText: "LAZCANO 3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/LAZCANO/L4.jpg"),
    altText: "LAZCANO 4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/LAZCANO/L5.jpg"),
    altText: "LAZCANO 5 ",
    caption: "",
  },
];
const items6 = [
  {
    src: require("assets/img/SesionF/RINO/R1.jpg"),
    altText: "RINO 1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/RINO/R2.jpg"),
    altText: "RINO 2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/RINO/R3.jpg"),
    altText: "RINO 3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/RINO/R4.jpg"),
    altText: "RINO 4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/RINO/R5.jpg"),
    altText: "LAZCANO 5 ",
    caption: "",
  },
];
const items5 = [
  {
    src: require("assets/img/SesionF/ZARAHI/Z1.jpg"),
    altText: "ZARAHI 1 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ZARAHI/Z2.jpg"),
    altText: "ZARAHI 2 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ZARAHI/Z3.jpg"),
    altText: "ZARAHI 3 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ZARAHI/Z4.jpg"),
    altText: "ZARAHI 4 ",
    caption: "",
  },
  {
    src: require("assets/img/SesionF/ZARAHI/Z5.jpg"),
    altText: "ZARAHI 5 ",
    caption: "",
  },
];
function SesionFotos() {
   return (
    <>
      <div className="section " data-background-color="black" id="sesionFotos-section">
        <Container>
         
          <h2 className="text-center">SESION FOTOGRAFICA </h2>
          <br></br>
          <Row>
            <Col lg="4" sm="4">
            
            <UncontrolledCarousel items={items}    interval={false} />
              <p className="text-center">ALBATRANS MÉXICO</p>
             </Col>
             <Col lg="4" sm="4">
            <UncontrolledCarousel items={items2}  interval={false}/>
            <p className="text-center">GOGHI ESCOBEDO </p>

             </Col>
             <Col lg="4" sm="4">
            <UncontrolledCarousel items={items3}   interval={false} />
            <p className="text-center">GRETA SANCHEZ</p>

             </Col>
          </Row>
          <br/>
          <Row>
            <Col lg="4" sm="4">
            <UncontrolledCarousel items={items4}    interval={false}/>
              <p className="text-center">ROSARIO LAZCANO</p>
             </Col>
             <Col lg="4" sm="4">
               <Container style={{ maxWidth: "233px"}}>
            <UncontrolledCarousel items={items5}   interval={false}/>
            </Container>
            <p className="text-center">ZARAHI</p>

             </Col>
             <Col lg="4" sm="4" >
            <UncontrolledCarousel items={items6}  interval={false} />
            <p className="text-center">RINO</p>

             </Col>
          </Row>
           <br/> <br/>
        </Container>
      </div>
    </>
  );
}

export default SesionFotos;
