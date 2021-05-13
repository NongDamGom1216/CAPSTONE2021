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
import {Button, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-default mt-lg mb-5">
          <span>About us</span>
        </h1>
        <Button className="btn-1 ml-1" size="lg" color="primary" outline type="button">
          Rental Manual
        </Button>

        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">렌탈 매뉴얼을 제공합니다.<br></br>
            소개 말<br></br>
            </h4>

           
          </Col>
        </Row>
        
        <div className = "mb-3 mt-5">
        <Button className="btn-1 ml-1" size = "lg" color="primary" outline type="button">
          Simulation page
        </Button>
        
        <Row className="py-3 align-items-center">
          
          <Col sm="9">
            <h4 className="mb-0">시뮬레이션 페이지를 통해<br></br>
            원하는 제품과 보증금을 설정하여<br></br>
            결과 값을 얻을 수 있습니다.<br></br>
            </h4>
          </Col>
        </Row>
        </div>

        <br></br>
        <br></br>
        
      </>
    );
  }
}

export default Typography;
