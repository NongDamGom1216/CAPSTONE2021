import React from "react";

import { Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      
        <div className="position-relative">
          
          <section className="section section-hero section-shaped pb-210">
            
            <div className="shape shape-style-1 shape-default">   
                
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">

                  <h1 className="text-white display-1">
                        CUBELAB
                  </h1>

                  <h1 className = "text-white display-3"> 
                    Rental Manual & Simulation
                 </h1>
                      
                  </Col>
                  </Row>
                  </div>
            </Container>
         
           
          </section>
        </div>
      
    );
  }
}

export default Hero;
