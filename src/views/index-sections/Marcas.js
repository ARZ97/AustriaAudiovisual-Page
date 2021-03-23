import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Marcas() {
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <h1 className="text-center">MARCAS CON LAS QUE HEMOS COLABORADO</h1>
          <Row lg="4">
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/1.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/2.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/3.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/4.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/5.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/6.png")}
              ></img>
            </Col>
          </Row>
          <Row mg="2">
            {" "}
            <Col sm="2" xs="2">
              <br></br>
            </Col>
          </Row>
          <Row lg="4">
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/7.jpg")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/8.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/9.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/10.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/11.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/12.jpg")}
              ></img>
            </Col>
          </Row>{" "}
          <Row lg="2">
            {" "}
            <Col sm="2" xs="2">
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/13.jpg")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/14.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/15.png")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/16.jpg")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/17.jpg")}
              ></img>
            </Col>
            <Col sm="2" xs="2">
              {" "}
              <img
                className="rounded "
                alt="equipo"
                src={require("../../assets/img/marcas/18.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Marcas;
