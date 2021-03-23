import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Intro() {
  return (
    <>
      <div className="section" data-background-color="black" id="Intro-section">
        <Container>
          <Container>
            <Row>
              <Col sm="4">
                <img
                  className="rounded-circle img-raised"
                  alt="Foto Enrique"
                  src={require("../../assets/img/Fperfil.jpg")}
                ></img>
                <br></br>
              </Col>
              <Col sm="8">
                <h1 className="text-center">ENRIQUE AUSTRIA </h1>
                <div className="typography-line" style={{ paddingLeft: "0px" }}>
                  <blockquote>
                    <p className="blockquote text-justify">
                      <strong>José Enrique Austria Duran</strong> estudio la
                      Lic. en Comunicación, se ha especializado en Producción
                      Audiovisual con sede en la Ciudad de Guadalajara, Jalisco.
                      Con la pasión de capturar lo que hay en su entorno desde
                      la acción hasta la tranquilidad que pueda existir en el
                      proyecto. <br></br>
                      Organizado, responsable y con una gran motivación, es
                      capaz de adaptarse a cualquier circunstancia y dar siempre
                      lo mejor de el en cualquier circunstancia, al mismo tiempo
                      se esfuerza por trabajar en equipo y fomentar valores como
                      los del compañerismo. <br></br>
                    </p>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm="4">
                <h4 className="text-center">ELABORACION DE PROYECTOS </h4>
                <blockquote>
                  <p className="blockquote text-justify">
                    Para la realización de cada proyeco usamos las herramientas
                    profesionales más adecuadas para que nuestro trabajo siempre
                    sea de la mejor calidad.<br></br>
                    Con el compromiso de siempre entregar un trabajo de calidad
                    y personalizado. <br></br>
                  </p>
                </blockquote>
              </Col>
              <Col sm="4">
                <h4 className="text-center">SOFTWARE DE TRABAJO </h4>
                <img
                  className="rounded img-raised"
                  alt="software de trabajo"
                  src={require("../../assets/img/software.png")}
                ></img>
              </Col>
              <Col sm="4">
                {" "}
                <h4 className="text-center">EQUIPO </h4>
                <Row>
                  <Col sm="6" xs="6">
                    <img
                      className="rounded "
                      alt="equipo"
                      src={require("../../assets/img/equipo1.png")}
                    ></img>
                  </Col>
                  <Col sm="6" xs="6">
                    <img
                      className="rounded "
                      alt="equipo"
                      src={require("../../assets/img/equipo2.png")}
                    ></img>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6" xs="6">
                    <img
                      className="rounded "
                      alt="equipo"
                      src={require("../../assets/img/equipo3.png")}
                    ></img>
                  </Col>
                  <Col sm="6" xs="6">
                    <img
                      className="rounded "
                      alt="equipo"
                      src={require("../../assets/img/equipo4.png")}
                    ></img>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Intro;
