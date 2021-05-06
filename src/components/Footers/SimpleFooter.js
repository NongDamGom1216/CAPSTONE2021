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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="10">
                <h3 className=" text-primary font-weight-light mb-2">
                  CUBELAB
                </h3>
                <p className=" mb-0 font-weight-light"> 
                알루픽스코리아 | 대표 : 이진원 | 사업자등록번호 : 129-25-18629 <br></br>

                ADD. 경기도 용인시 처인구 모현면 외대로 81(한국외국어대학교 BI센터 407호) <br></br>

                TEL : (031)323-0055 | FAX : (031)763-4869 <br></br>

                E-MAIL : alufix@hanmail.net <br></br>

                Copyright. 2016. alufix. All Rights Reseved
                </p>
              </Col>
              
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="http://www.alufix.co.kr/default/main.php"
                    target="_blank"
                  >
                    Main Home
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://www.alufix.co.kr/default/guide/service_rull.php?m=g&sm=81"
                      target="_blank"
                    >
                      서비스 이용약관
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://www.alufix.co.kr/default/guide/personal.php?m=g&sm=82"
                      target="_blank"
                    >
                      개인정보 취급방침
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://www.alufix.co.kr/default/guide/email.php?m=g&sm=83"
                      target="_blank"
                    >
                      이메일무단수집거부
                    </NavLink>
                  </NavItem>
                
                </Nav>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
          
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
