
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

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
  Col
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
        <h1 className="text-default mt-lg mb-5">
          <span>About us</span>
        </h1>
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
                <Button className="btn-1 btn-neutral ml-1" size="lg" color="default" type="button">
                <h3 className="text-primary font-weight-bold mb-2"> Rental Manual</h3>
                </Button>
                </NavItem>

              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="display-3 description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="display-3 description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
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
                <Button className="btn-1 btn-neutral ml-1" size="lg" color="default" type="button">
                <h3 className="text-primary font-weight-bold mb-2">Simulation page</h3>
                </Button>
                </NavItem>

              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="display-3 lead text-default font-weight-bold">
                      저렴한 가격으로 독일 기술을 경험해보십시오
                    </p>
                    <p className="display-3 lead">
                      부담되지 않는 가격
                    </p>
                  </TabPane>
                  
                 
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
