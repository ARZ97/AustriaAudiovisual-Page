import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Videoclips() {
  return (
    <>
      <div className="section section-javascript" id="videoclips-section">
        <Container>
          <h2 className="text-center">VIDEOCLIP'S </h2>

          <Row>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/9VDNFVS7Dpw"}
                  ></iframe>
                </div>
                <p className="text-center">
                  {" "}
                  D'wayne Cancino ft toro - So Woop{" "}
                </p>
              </Container>
            </Col>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/vqMuImqsCUg"}
                  ></iframe>
                </div>
                <p className="text-center">
                  {" "}
                  Toro ft basterlone - Trip Tranqui{" "}
                </p>
              </Container>
            </Col>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/5FwjPMHSCKM"}
                  ></iframe>
                </div>
                <p className="text-center"> Basterlone - Teatro </p>
              </Container>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/TfWhzCjpP-4"}
                  ></iframe>
                </div>
                <p className="text-center"> Basterlone - Nada </p>
              </Container>
            </Col>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/dVPRC9Iv0VM"}
                  ></iframe>
                </div>
                <p className="text-center"> Basterlone - Hunting </p>
              </Container>
            </Col>
            <Col lg="4">
              <Container>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="FrameVideo"
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/OeffKAiiUAg"}
                  ></iframe>
                </div>
                <p className="text-center"> Toro - Demasio Relax </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Videoclips;
