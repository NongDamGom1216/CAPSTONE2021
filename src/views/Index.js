import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";

import Carousel from "./IndexSections/Carousel.js";
import Icons from "./IndexSections/Icons.js";
import Login from "./IndexSections/Login.js";


class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Container>
              <Typography />
          </Container>
          <Carousel />

        </main>
        
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
