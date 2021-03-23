import React from "react";
import emailjs from "emailjs-com";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function Contacto() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_0wgje86",
        e.target,
        "user_gkX2RwuOIymDeHvum3Tvj"
      )

      .then(
        (result) => {
          alert("Mensaje enviado! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="contact-section"
      >
        {" "}
        <h1 className="text-center ">
          <strong>CONTACTO</strong>
        </h1>
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <Container>
                <div className="blockquote  ">
                  <blockquote>
                    <h3 className="text-center">MENSAJE POR CORREO </h3>
                    <form onSubmit={sendEmail}>
                      <Row lg="5">
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Nombre:</strong>
                          </label>
                          <input
                            type="text"
                            autoFocus
                            className="form-control"
                            required
                            placeholder="nombre"
                            name="name"
                          />
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Correo:</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder="correo"
                            name="email"
                          />
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Telefono:</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Telefono"
                            name="phone"
                          />
                          <br />
                        </Col>

                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Mensaje:</strong>
                          </label>
                          <textarea
                            className="form-control"
                            id=""
                            cols="30"
                            rows="8"
                            required
                            placeholder="Escribe aqui tu mensaje"
                            name="message"
                          ></textarea>
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <input
                            type="submit"
                            className="btn btn-info"
                            value="Enviar"
                          ></input>
                        </Col>
                      </Row>
                    </form>
                  </blockquote>
                </div>
              </Container>
            </Col>

            <Col lg="6" sm="12">
              <Container>
                <div className="blockquote  ">
                  <blockquote>
                    <h3 className="text-center">MENSAJE POR WHATSAPP </h3>
                    <Row lg="5">
                      <Col lg="12" sm="12" form-group="mx-auto">
                        <img
                          alt="..."
                          className="rounded"
                          src={require("assets/img/whats.jpg")}
                        ></img>
                      </Col>
                      <Col lg="4" sm="12">
                        <p>Enviame mensaje:</p>
                      </Col>
                      <Col lg="4" sm="12">
                        <div className="center">
                          {" "}
                          <Button
                            color="success"
                            href="https://wa.me/message/F4AGB4HXK2ZBE1"
                            target="blank"
                          >
                            WhatsApp
                          </Button>
                        </div>
                      </Col>
                      <Col lg="4" sm="12">
                        <p></p>
                      </Col>
                    </Row>
                  </blockquote>
                </div>
              </Container>
            </Col>

            <Row>
              <Col lg="12" sm="12">
                <Container>
                  <div className="blockquote  ">
                    <blockquote>
                      <h3 className="text-center">Nosotros </h3>
                      AUSTRIA AUDIOVISUAL <br />
                      Somos Una Empresa 100% Mexicana De Audiovisuales 🇲🇽 <br />
                      Anteriormente Hemos Trabajado En Colaboración Con La
                      Revista De Arte "Biografías México" Con Distintos Artistas
                      Mexicanos Como: <br />
                      ° Ermilo Espinosa <br />
                      Uno De Los Mejores Artistas De Hiperrealismo En México.
                      🎨🖌️
                      <br />° Alejando Gómez Oropeza Pintor Mexicano Con Más De
                      30 Años De Trayectoria Cuya Creatividad Pareciera No Tener
                      Límites. 🎨🖌️
                      <br /> ° Christian Borbolla Artista Plástico Del
                      Hiperrealismo, Merecedor De Diversos Premios Y
                      Reconocimientos 🎨🖌️
                      <br /> ° Liz Topete Escultora Que Ah Sido Premiada
                      Nacionalmente 🗿🖌️
                      <br /> ° Eddy Vázquez Artista Plástico Que Sobresale Por
                      Sus Distintos Colores, Formas Y Sentidos 🎨🖌️
                      <br /> ° Velya Leyva Con 20 Años De Trayectoria, Artista
                      De La Escultura 🗿🖌️ <br />
                      Entre Otros, Quieres Formar Parte De Esto ‽ <br />{" "}
                      Contamos Con Distintos Servicios Pregunta Por Nuestras
                      Promociones, Sin Ningún Compromiso Nos Adaptamos A Tu
                      Presupuesto ! <br />
                      Enrique Austria 33 1559 7531 <br />
                      Correo: austria.audiovisuales@gmail.com <br />
                      Síguenos En Nuestras Redes
                      <br />
                    </blockquote>
                  </div>
                </Container>
              </Col>
            </Row>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
}

export default Contacto;
