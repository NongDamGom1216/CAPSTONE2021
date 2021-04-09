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
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5">
          <span>About us</span>
        </h2>
        <h3 className="h4 text-success font-weight-bold">Introduce</h3>
        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">회사 소개1<br></br>
            회사 소개1<br></br>
            회사 소개1</h4>
          </Col>
        </Row>
        
        {/* Display titles */}
        <h3 className="h4 text-success font-weight-bold mt-md">
          Introduce2
        </h3>
        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">회사 소개2<br></br>
            회사 소개2<br></br>
            회사 소개2<br></br>
            회사 소개2<br></br>
            회사 소개2</h4>
          </Col>
        </Row>

        <h3 className="h4 text-success font-weight-bold mt-md">주요 연혁</h3>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h3 className="text-uppercase text-muted font-weight-bold">
              연혁1
            </h3>
          </Col>
          <Col sm="9">
            <p className="lead">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h3 className="text-uppercase text-muted font-weight-bold">
              연혁2
            </h3>
          </Col>
          <Col sm="9">
            <p className="lead">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </Col>
        </Row>
        
        <h2 className="mt-lg mb-5">
          <span>주요 제품 소개</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              제품1
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/theme/team-1-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              제품2
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/theme/team-2-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              제품3
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/theme/team-3-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              제품4
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/theme/team-4-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
