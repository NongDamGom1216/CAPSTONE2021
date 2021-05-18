
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
          <h1 className="text-default mt-lg-6 mb-4 font-weight-bold">
          <span>About us</span>
          </h1>
        <Container>
        <Row className="justify-content-center">
          <Col lg="6">
           
            <div className="nav-wrapper">
              <Nav
                className="flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  
                <Button className="btn-1 btn-neutral ml-1 nav-link" size="lg" color="default" type="button" to = "/manual-page" tag={Link}>
            
                <h3 className="text-primary font-weight-bold mb-2"> 
                <span className="btn-inner--icon mr-1 nav-link-inner--text">
                      <i className="ni ni-single-copy-04" />
                </span>&nbsp;Rental Manual</h3>
                </Button>
                
                </NavItem>

              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="display-3 lead text-default font-weight-bold">
                    <i className="ni ni-check-bold" />&nbsp;
                    국내 최초 검사구 렌탈 서비스를 제공합니다.
                    </p>
                    <p className="display-3 lead text-default font-weight-bold">
                    <i className="ni ni-check-bold" />&nbsp;
                    큐브랩 만의 차별화된 혜택을 경험해보세요.
                    </p>
                  </TabPane>
                 
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            {/* Menu */}
            
            <div className="nav-wrapper">
            <Nav
                className="flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                <Button className="btn-1 btn-neutral ml-1 nav-link" size="lg" color="default" type="button" to = "/simul-page" tag={Link}>
                <h3 className="text-primary font-weight-bold mb-2"><span className="btn-inner--icon mr-1">
                      <i className="ni ni-single-copy-04" />
                </span>&nbsp;Simulation page</h3>
                </Button>
                </NavItem>

              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="display-3 lead text-default font-weight-bold">
                    <i className="ni ni-check-bold" />&nbsp;
                    필요한 제품의 렌탈료를 지금 확인하세요.
                    </p>
                    <p className="display-3 lead text-default font-weight-bold">
                    <i className="ni ni-check-bold" />&nbsp;
                    부담되지 않는 가격으로 제공합니다.
                    </p>
                  </TabPane>
                  
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
        
       
      </>
     

    );
  }
}

export default TabsSection;
