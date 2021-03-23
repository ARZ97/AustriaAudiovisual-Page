import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Porta() {
  return (
    <>
      <div className="section-menssage" data-background-color="black">
        <div
          className="class-menssage"
          style={{
            backgroundImage: "url(" + require("assets/img/bg9.jpg") + ")",
           minHeight: "200px",

          }}
        >
          <Container>
            {" "}
            <h1 className="text-center" style={{ paddingTop: "50px" }}>
              <strong>
                  PORTFOLIO DE TRABAJO
                <br></br> 
              </strong>{" "}
            </h1>
           
          </Container>
        </div>
      </div>
    </>
  );
}

export default Porta;
