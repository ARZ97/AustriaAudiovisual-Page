/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button, UncontrolledTooltip} from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row>
        <Col className="text-center" lg="3" md="12">
          <ul>
            <li>
              <a href="https://wa.me/message/F4AGB4HXK2ZBE1" target="_blank">
                Lic. Jose Enrique Austria Duran{" "}
              </a>
            </li>
          </ul>
        </Col>

        <Col className="text-center" lg="6" md="12">
        <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/Austriavisual/"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="instagram"
                href="https://www.instagram.com/austria_audiovisual/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
            </Col>
            <Col className="text-center" lg="3" md="12">
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Creado por Abraham RZ.
        </div>
        </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default DarkFooter;
