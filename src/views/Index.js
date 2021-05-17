import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import SimpleFooter from "components/Footers/SimpleFooter.js";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
// index page sections
import Hero from "./IndexSections/Hero.js";


import Tabs from "./IndexSections/Tabs.js";
import Carousel from "./IndexSections/Carousel.js";



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
              <Tabs />
             
          </Container>
          <Carousel />

        </main>
        
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
