import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Catalogos() {
  return (
    <>
      <div className="section" data-background-color="black" id="catalogos-section">
        <Container>
          <h1 className="text-center">CATALOGOS</h1>
          <Row>
            <Col lg="4" md="4" sm="12">
              <a href="https://drive.google.com/file/d/10kO4aVpnwRsTXvTfsYxxDYmIJYwECraU/view" target="blank">
              <img
                className="rounded img-raised"
                alt="smoke "
                src={require("../../assets/img/CatalogoF/smoke.PNG")}
                width="350"
                height="240"
              ></img>
              <p className="text-center">SP SMOKE</p></a>
            </Col>
            <Col lg="4" md="4" sm="12">
            <a href="https://drive.google.com/file/d/11GI-bCwdiEg7I5GGO-B-Tjq2uQjo9Kud/view" target="blank">

              <img
                className="rounded img-raised"
                alt="surgery "
                src={require("../../assets/img/CatalogoF/surgery.PNG")}
                width="350"
                height="240"
              ></img>
              <p className="text-center">SURGERY LAPAROMEX</p>
              </a>
            </Col>
            <Col lg="4" md="4" sm="12">
            <a href="https://drive.google.com/file/d/1hvR9_InKVTQJ0uUkjxqqBWSEgjaqRK9o/view" target="blank">

              <img
                className="rounded img-raised"
                alt="emplao "
                src={require("../../assets/img/CatalogoF/emplao.PNG")}
                width="350"
                height="240"
              ></img>
               <p className="text-center">EMPLAO</p></a>
            </Col>
          </Row>
          <br />
          <Container>
            <Row>
              <Col lg="2" md="2">
                {" "}
                <br />
              </Col>

              <Col lg="4" md="4" sm="12">
              <a href="https://drive.google.com/file/d/19Cp-3RrplH0b4S4baFflmDCIUhEvFdIt/view" target="blank">

                <img
                  className="rounded img-raised"
                  alt="rios "
                  src={require("../../assets/img/CatalogoF/rios.PNG")}
                  width="350"
                  height="240"
                ></img>
                <p className="text-center">RIOS LAB</p></a>
              </Col>
              <Col lg="4" md="4" sm="12">
              <a href="https://drive.google.com/file/d/1gzV1cmcGZQCtS12J4ZBxzSQlNx7dOYTb/view" target="blank">

                <img
                  className="rounded img-raised"
                  alt="mcm "
                  src={require("../../assets/img/CatalogoF/mcm.PNG")}
                  width="350"
                  height="240"
                ></img>
                <p className="text-center">
                  MCM (MATERIAL DE CURACION Y MEDICAMENTOS)
                </p></a>
              </Col>
              <Col lg="2" md="2">
                {" "}
                <br />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Catalogos;
