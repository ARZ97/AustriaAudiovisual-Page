import React from "react";

// reactstrap components
import {

  Container,
  Row,
  Col,
  Progress
} from "reactstrap";

// core components

function Experiencia() {
  
  
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h2 className="title text-center">EXPERIENCIA</h2>
          <h3 className="text-center">PRE, PRO Y POST PRODUCCION DE VIDEO</h3>
          <Row>
            <Col md="4">
              <p className="category">ESCOLARIDAD</p>

              <ul>
              <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>Universidad Univer
                    <br></br>
                    Maestria En Comunicación Enero 2021 - Actual</strong>
                  </p>
                </li>
                <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>Universidad Univer
                    <br></br>
                    Licenciatura En Comunicación Marzo 2015 - 2020</strong>
                  </p>
                </li>
                <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>Universidad Univer
                    <br></br>
                    Bachillerato Tecnico En Comunicación 2013 - 2015 </strong>
                  </p>
                </li>
              </ul>
              <img
                  className="rounded img-raised"
                  alt="univer "
                  src={require("../../assets/img/univer.png")}
                ></img>
            </Col>
            <Col md="4">
              <p className="category">
                EXPERIENCIA LABORAL [3 ULTIMOS TRABAJOS]
              </p>

              <ul>
                <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>
                      Revistas “Biografías México, Medusa” [Fotógrafo, Productor
                      de video,editor]{" "}
                     Julio 2019 - Actual Planeación y levantamiento de imagen,
                    pre, pro y post producción.</strong>
                  </p>
                </li>
                <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>
                      Yelou Estudio Creativo [Productor de video, editor]
                    
                    Enero 2019 – Julio 2019 Pre, por y post producción de videos
                    para agencia de publicidad.</strong>
                  </p>
                </li>
                <li className="text-info">
                  {" "}
                  <p className="text-info">
                    <strong>
                      ThinkingGroup [Fotógrafo] [Contrato Temporal]
                   
                    Noviembre 2018 – Enero 2019 Trabajando para el proyecto de
                    “DIDI FOOD”, asistiendo a los diferentes restaurantes que se
                    agendaron por semana para hacer levantamiento de imagen en
                    fotografía, buscando la imagen ideal para el negocio y la
                    aplicación. </strong>
                  </p>
                </li>
              </ul>
            </Col>
            <Col md="4">
            <p className="category">
                HABILIDADES
              </p>
              <img
                  className="rounded-circle img-raised"
                  alt="habilidades "
                  src={require("../../assets/img/habilidades.jpg")}
                ></img><br></br>
                <strong>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Adobe</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Office </span>
                <Progress max="100" value="100">
                  <span className="progress-value">100%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Nikon</span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Canon</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Audio</span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
              </strong>
              
              </Col>
           
           
            <Col lg="3" sm="6">
                <br></br>
             </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Experiencia;
