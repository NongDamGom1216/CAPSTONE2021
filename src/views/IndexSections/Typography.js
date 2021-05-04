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
        <h3 className="h4 text-success font-weight-bold">Rental Manual</h3>
        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">렌탈 매뉴얼을 제공합니다.<br></br>
            소개 말<br></br>
            </h4>
          </Col>
        </Row>
        
        {/* Display titles */}
        <h3 className="h4 text-success font-weight-bold mt-md">
          Simulation page
        </h3>
        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">시뮬레이션 페이지를 통해<br></br>
            원하는 제품과 보증금을 설정하여<br></br>
            결과 값을 얻을 수 있습니다.<br></br>
            </h4>
          </Col>
        </Row>

        <h3 className="h4 text-success font-weight-bold mt-md">필요하면 사용</h3>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h3 className="text-uppercase text-muted font-weight-bold">
              메뉴1
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
              메뉴2
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
        
        
      </>
    );
  }
}

export default Typography;
