import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function PortafolioInt() {
  return (
    <>
      <div
        className="section-menssage"
        data-background-color="black"
        id="introportafolio-section"
      >
        <div
          className="class-menssage  clear-filter"
          style={{
            backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")",
          }}
        >
          <Container>
            {" "}
            <h2 className="text-center" style={{ paddingTop: "80px" }}>
              <strong>
                "LO QUE NO SABEMOS HACER" <br></br> ES... <br></br>"POR QUE NO
                NOS LO HEMOS PROPUESTO A HACER"
              </strong>{" "}
            </h2>
            <Row>
              <Col lg="4">
                <blockquote>
                  <p className="blockquote blockquote-primary text-center text-justify">
                    <h4>
                      <strong>SESIÓN FOTOGRÁFICA</strong>
                    </h4>
                    <strong>
                      Capturando la escencia y el momento, en Austria
                      Audiovisual<br></br>
                      Estamos preparados para hacer tu sesión de fotos en el
                      giro o rumbo que gustes, buscando una perspectiva de
                      calidad, con usos ilimitados para empresas o figuras
                      publicas.
                    </strong>
                    <Button
                      className="btn-round"
                      color="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("sesionFotos-section")
                          .scrollIntoView();
                      }}
                    >
                      <i className="now-ui-icons media-1_camera-compact mr-1">
                        {" "}
                      </i>
                      VER MAS
                    </Button>
                  </p>
                </blockquote>
              </Col>
              <Col lg="4">
                <blockquote>
                  <p className="blockquote blockquote-primary text-center text-justify">
                    <h4>
                      <strong>PRODUCCIONES</strong>
                    </h4>
                    <strong>
                      Desde un video coorporativo, entrevista, publicidad,
                      capacitación etc...<br></br>
                      No hay limites ni intención que no podamos generar, la
                      producción audiovisual no tiene limites.
                    </strong>
                    <br></br>
                    <br></br>
                    <Button
                      className="btn-round"
                      color="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("produccion-section")
                          .scrollIntoView();
                      }}
                    >
                      <i className="now-ui-icons tech_headphones mr-1"> </i>
                      VER MAS
                    </Button>
                    <br></br>
                  </p>
                </blockquote>
              </Col>
              <Col lg="4">
                <blockquote>
                  <p className="blockquote blockquote-primary text-center text-justify">
                    <h4>
                      <strong>CATÁLOGOS</strong>
                    </h4>
                    <strong>
                      Dale identidad a tu negocio con un catalogo demostrativo y
                      personalizado, para que tus clientes encuentren de forma
                      facil aquello que necesitan.<br></br>
                      Con un diseño unico y especial para tu imagen.
                    </strong>
                    <br></br>
                    <br></br>
                    <Button
                      className="btn-round"
                      color="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("catalogos-section")
                          .scrollIntoView();
                      }}
                    >
                      <i className="now-ui-icons media-1_album mr-1"> </i>
                      VER MAS{" "}
                    </Button>
                  </p>
                </blockquote>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <blockquote>
                  <p className="blockquote blockquote-primary text-center text-justify">
                    <h4>
                      <strong>VIDEOCLIP´S</strong>
                    </h4>
                    <strong>
                      Desde un video coorporativo, entrevista, publicidad,
                      capacitación etc...<br></br>
                      No hay limites ni intención que no podamos generar, la
                      producción audiovisual no tiene limites.
                    </strong>
                    <br></br>
                    <br></br>
                    <Button
                      className="btn-round"
                      color="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("videoclips-section")
                          .scrollIntoView();
                      }}
                    >
                      <i className="now-ui-icons media-1_button-play mr-1"> </i>
                      VER MAS{" "}
                    </Button>
                  </p>
                </blockquote>{" "}
              </Col>
              <Col lg="6">
                <blockquote>
                  <p className="blockquote blockquote-primary text-center text-justify">
                    <h4>
                      <strong>ARTE</strong>
                    </h4>
                    <strong>
                      Colaborando con artistas para crear difusión digital,
                      creando productos audiovisualez y fotograficos de calidad
                      para apoyar su talento de forma accesible y dinamica.
                      <br></br>
                      Aprovechando las inovaciones tecnologicas y artisticas.
                    </strong>
                    <br></br>
                    <br></br>
                    <Button
                      className="btn-round"
                      color="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("arte-section")
                          .scrollIntoView();
                      }}
                    >
                      <i className="now-ui-icons design_palette m-1"> </i>
                      VER MAS
                    </Button>
                  </p>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default PortafolioInt;
