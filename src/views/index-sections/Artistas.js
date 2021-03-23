import React from "react";
 // reactstrap components
import {
  Col,
  Container,
  Row,
} from "reactstrap";

// core components

function Artistas() {
 return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
        id="arte-section"
      >
        <Container>
        <h1 className="text-center "><strong>COLABORACION CON ARTISTAS</strong></h1>
        <Row>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/6dkc408fric"}
                  ></iframe>
                </div>
                <p className="text-center text-white">
                  <strong>
                  Xehan - Artista Plástico - Gdl
               </strong>
                </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/XhfJ8BQuy8Y"}
                  ></iframe>
                </div>
                <p className="text-center text-white">
                  <strong>Marco Antonio Cruz - Artista Plástico- Oax
                  </strong>
                </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/g7pv1BN7Bwg"}
                  ></iframe>
                </div>
                <p className="text-center text-white"> <strong>B
                Goghi Escobedo - Artista Plástico - Gdl
                  </strong> </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/SCX4zchps3s"}
                  ></iframe>
                </div>
                <p className="text-center text-white"><strong> 
                Manuel Miguel - Artista Plástico - Oax
                   </strong></p>
              </Container>
            </Col>
          </Row>
          <br />
          <Row>
          <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/NvvQjeq7AE8"}
                  ></iframe>
                </div>
                <p className="text-center text-white">
                   <strong>
                   Rosario Lazcano - Artista Plástico -Gdl
                 </strong>
                </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/yTXgwcu6sNg"}
                  ></iframe>
                </div>
                <p className="text-center text-white">
                   <strong>Claudia Huizar - Artista Plástico - Gdl
                 </strong>
                </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/zpKJ1P3stc8"}
                  ></iframe>
                </div>
                <p className="text-center text-white"><strong>  La Bauhaus - Papelería de Arte en México </strong> </p>
              </Container>
            </Col>
            <Col lg="3">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/-gYxFmUh7HI"}
                  ></iframe>
                </div>
                <p className="text-center text-white"> <strong>   Galería Digital México      </strong></p>
              </Container>
            </Col>
          </Row>
         
        </Container>
      </div>
    </>
  );
}

export default Artistas;
