
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/alufix1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix3.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix4.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix5.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix6.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix7.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/alufix8.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped mt-lg ">
          <div className="shape shape-style-1 shape-light">
            
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h2 className="text-secondary font-weight-bold">
                  제품 소개
                </h2>
                
                <h4 className="text-secondary font-weight-light">
                Creative value for customers!
                </h4>
                
                <Button
                  className="btn-black mt-4"
                  color="default"
                  href="http://www.alufix.co.kr/default/m3/s1.php?m=3&sm=30"
                  target="_blank"
                >
                  상세 페이지 이동
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="4">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          
        </section>
      </>
    );
  }
}

export default Carousel;
