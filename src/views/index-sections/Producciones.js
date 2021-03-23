import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Producciones() {
  return (
    <>
      <div className="section"  id="produccion-section">
        <Container>
          <h1 className="text-center">PRODUCCIONES</h1>
          <Row>
          <Col lg="6" sm="6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/ND1SDpyDO18"}
                ></iframe>
              </div>
            </Col>
            <Col lg="6" md="4" sm="6">
              <h4>CHRISTIAN BORBOLLA</h4>

              <p className="text-justify">
                Artista Plástico Hiperrealista. Nace en Oaxaca en 1976. Borbolla
                se ha hecho merecedor de diversos premios y reconocimientos.
                Nuestro Editor de Biografías México Alfredo Miranda, le pregunto
                acercar de su experiencia en el mundo del arte como creador y
                empresario.
              </p>
            </Col>
          </Row>
          <hr className="my-10"></hr>

          <Row>
            <br />
            <Col lg="6" sm="6">
              <br />
              <h4>Alejandro Gomez Oropeza</h4>

              <p className="text-justify">
                30 años de una brillante carrera en el arte de nuestro país.
                Este mexicano es un consagrado pintor cuya creatividad pareciera
                no tener límites.
              </p>
            </Col>
            <Col lg="5" sm="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/kpD5V4x_EN4"}
                ></iframe>
              </div>
            </Col>
          </Row>
          <hr className="my-10"></hr>
          <Row>
            <Col lg="5" sm="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/XPZLwMZZRxk"}
                ></iframe>
              </div>
            </Col>
            <Col lg="6" sm="6">
              <h4>ENRIQUE ZERVIN </h4>

              <p className="text-justify">
                Un artista que logra despertar con sus obras cualquier tipo de
                emociónes. Su trabajo es rotundo, contundente; cada personaje
                parece que te quiere decir algo importante.
              </p>
            </Col>
          </Row>
          <hr className="my-10"></hr>
          <Row>
            <br />
            <Col lg="6" sm="6">
              <br />
              <h4>MANUEL MIGUEL</h4>

              <p className="text-justify">
                Es un artista oaxaqueño que está en plan ascendente. Su esfuerzo
                y trabajo le han llevado a ganarse un lugar entre los artistas
                reconocidos en Oaxaca.
              </p>
            </Col>
            <Col lg="5" sm="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/B7-U0JYmg8E"}
                ></iframe>
              </div>
            </Col>
          </Row>
          <hr className="my-10"></hr>
          <Row>
            <Col lg="5" sm="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/6765mfy85Hc"}
                ></iframe>
              </div>
            </Col>
            <Col lg="6" sm="6">
              <h4>ROSARIO LAZCANO </h4>

              <p className="text-justify">
                Artista de Guadalajara verdaderamente valiosa, le auguramos una
                larga y exitosa carrera. No solo crea desde la emoción, también
                pose un intelecto que plasma con maestría en sus obras.
              </p>
            </Col>
          </Row>
          <hr className="my-10"></hr>
          <Row>
            <br />
            <Col lg="6" sm="6">
              <br />
              <h4>MANOLO QUINTERO</h4>

              <p className="text-justify">
                Artista que no deja de experimentar con las formas, texturas y
                colores, juega y experimenta con las formas, texturas y colores,
                mostrando siempre su propia esencia.{" "}
              </p>
            </Col>
            <Col lg="5" sm="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/-1z6j_I_ra8"}
                ></iframe>
              </div>
            </Col>
          </Row>
          <hr className="my-10"></hr>
        </Container>
      </div>
    </>
  );
}

export default Producciones;
