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
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Colm, CardImg, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  state = {
    price: '0',
    month: '0',
    deposit: '0',
    fee: '0',
    amount: '0',
    deposit_: '0',
    retooling: '0'
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  handleClick = () => {
    if (this.state.deposit === '10') {
      this.setState(state => ({
        ...state,
        fee: (state.price * (0.1 / 12) * ((1 + (0.1 / 12)) ** state.month)) / (((1 + (0.1 / 12)) ** state.month) - 1)
      }));
    }
    if (this.state.deposit === '20') {
      this.setState(state => ({
        ...state,
        fee: (state.price * (0.075 / 12) * ((1 + (0.075 / 12)) ** state.month)) / (((1 + (0.075 / 12)) ** state.month) - 1)
      }));
    }
    if (this.state.deposit === '30') {
      this.setState(state => ({
        ...state,
        fee: (state.price * (0.05 / 12) * ((1 + (0.05 / 12)) ** state.month)) / (((1 + (0.05 / 12)) ** state.month) - 1)
      }));
    }
    this.setState(state => ({
      ...state,
      amount: state.fee * state.month,
      deposit_: state.price * state.deposit / 100,
      retooling: (state.price * 0.3) * 0.7,
    }));
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">Rental Service Simulation{" "}</h1>
                      <p className="lead text-white">채워도 되고 비워도 되고 아몰랑~~2</p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                </svg>
              </div>
            </section>
          </div>
          <div>
            <section className="section bg-secondary">
              <Container>
                <Row>
                  <Col mr='auto'>
                    <br />
                    <Row>
                      <Col md='2'>
                        <div class="mb-5">
                          <label class="form-control-label">제품가격</label>
                        </div>
                      </Col>
                      <Col>
                        <div class="form-group row">
                          <input type="number" class="form-control" name="price" placeholder="금액" value={this.price} onChange={this.onChange} />
                        </div>
                      </Col>
                    </Row>
                    <div class="mb-4">
                      <Row>
                        <Col md='2'>
                          <div class="mb-4">
                            <label class="form-control-label">렌탈기간</label>
                          </div>
                        </Col>
                        <Col>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="monthRadio1" name="month" value="12" onChange={this.onChange} />
                            <label class="custom-control-label" for="monthRadio1">12개월</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="monthRadio2" name="month" value="24" onChange={this.onChange} />
                            <label class="custom-control-label" for="monthRadio2">24개월</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="monthRadio3" name="month" value="36" onChange={this.onChange} />
                            <label class="custom-control-label" for="monthRadio3">36개월</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="monthRadio4" name="month" value="48" onChange={this.onChange} />
                            <label class="custom-control-label" for="monthRadio4">48개월</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="monthRadio5" name="month" value="60" onChange={this.onChange} />
                            <label class="custom-control-label" for="monthRadio5">60개월</label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div class="mb-5">
                      <Row>
                        <Col md='2'>
                          <div>
                            <label class="form-control-label mr-5">보증금</label>
                          </div>
                        </Col>
                        <Col>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="depositRadio1" name="deposit" value="10" onChange={this.onChange} />
                            <label class="custom-control-label" for="depositRadio1">10%</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="depositRadio2" name="deposit" value="20" onChange={this.onChange} />
                            <label class="custom-control-label" for="depositRadio2">20%</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline col-md-2">
                            <input type="radio" class="custom-control-input" id="depositRadio3" name="deposit" value="30" onChange={this.onChange} />
                            <label class="custom-control-label" for="depositRadio3">30%</label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <button type="button" class="btn btn-outline-primary btn-block" onClick={this.handleClick}>Calculation</button>
                    <br />
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div>
            <section className="section section-lg bg-gradient-default">
              <Row>
                <Col>
                  <h1 class='text-secondary ml-6'>렌탈비</h1>
                </Col>
                <Col>
                  <h1 class='text-right text-secondary mr-6'>
                    <span style={{ fontSize: "0.5em" }}>월 </span>
                    {Math.floor(this.state.fee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span style={{ fontSize: "0.5em" }}>원 </span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 class='text-secondary ml-6'>납입금액</h1>
                </Col>
                <Col>
                  <h1 class='text-right text-secondary mr-6'>
                    <span style={{ fontSize: "0.5em" }}>총 </span>
                    {Math.floor(this.state.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span style={{ fontSize: "0.5em" }}>원 </span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 class='text-secondary ml-6'>보증금</h3>
                </Col>
                <Col>
                  <h3 class='text-right text-secondary mr-6'>
                    {Math.floor(this.state.deposit_).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span style={{ fontSize: "0.5em" }}>원 </span>
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 class='text-secondary ml-6'>첫 리툴링</h3>
                </Col>
                <Col>
                  <h3 class='text-right text-secondary mr-6'>
                    {Math.floor(this.state.retooling).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span style={{ fontSize: "0.5em" }}>원 </span>
                  </h3>
                </Col>
              </Row>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;