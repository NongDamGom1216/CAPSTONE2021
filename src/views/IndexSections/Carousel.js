/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img1.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img2.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Gallery
                </h1>
                <p className="lead text-white mt-4">
                  농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 농담곰 귀여워 
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://www.google.com/search?q=%EB%86%8D%EB%8B%B4%EA%B3%B0+%EA%B7%80%EC%97%AC%EC%9B%8C&rlz=1C1AVUB_enKR735KR735&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAltGzutjvAhW9yIsBHQ0ZA3cQ_AUoAXoECAEQAw&biw=1222&bih=492"
                >
                  농담곰을 보러가자
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
