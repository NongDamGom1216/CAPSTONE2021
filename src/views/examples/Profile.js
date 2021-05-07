
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
              <div className="shape shape-style-1 shape-dark">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">Rental Service Simulation{" "}</h1>
                    </Col>
                  </Row>
                </div>
              </Container>
            
            </section>
            
          </div>
        
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Card className="bg-default shadow border-0">
                  <blockquote className="card-blockquote">
                    <div class="container">
                      <div class="form-group row mb-5" style={{ width: "430px" }}>
                        <input type="number" class="form-control" name="price" placeholder="금액" value={this.price} onChange={this.onChange} />
                      </div>
                      <label class="form-control-label text-secondary">보증기간</label>
                      <div class="row mb-5">
                        <div class="custom-control custom-radio custom-control-inline text-secondary">
                          <input type="radio" class="custom-control-input" id="monthRadio1" name="month" value="12" onChange={this.onChange} />
                          <label class="custom-control-label" for="monthRadio1">12개월</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary">
                          <input type="radio" class="custom-control-input" id="monthRadio2" name="month" value="24" onChange={this.onChange} />
                          <label class="custom-control-label" for="monthRadio2">24개월</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary">
                          <input type="radio" class="custom-control-input" id="monthRadio3" name="month" value="36" onChange={this.onChange} />
                          <label class="custom-control-label" for="monthRadio3">36개월</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary">
                          <input type="radio" class="custom-control-input" id="monthRadio4" name="month" value="48" onChange={this.onChange} />
                          <label class="custom-control-label" for="monthRadio4">48개월</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary">
                          <input type="radio" class="custom-control-input" id="monthRadio5" name="month" value="60" onChange={this.onChange} />
                          <label class="custom-control-label" for="monthRadio5">60개월</label>
                        </div>
                      </div>
                      <label class="form-control-label text-secondary">보증금</label>
                      <div class="row mb-9">
                        <div class="custom-control custom-radio custom-control-inline text-secondary mr-6">
                          <input type="radio" class="custom-control-input" id="depositRadio1" name="deposit" value="10" onChange={this.onChange} />
                          <label class="custom-control-label" for="depositRadio1">10%</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary mr-6">
                          <input type="radio" class="custom-control-input" id="depositRadio2" name="deposit" value="20" onChange={this.onChange} />
                          <label class="custom-control-label" for="depositRadio2">20%</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline text-secondary mr-6">
                          <input type="radio" class="custom-control-input" id="depositRadio3" name="deposit" value="30" onChange={this.onChange} />
                          <label class="custom-control-label" for="depositRadio3">30%</label>
                        </div>
                      </div>
                      <br /><br /><br />
                      <div class="form-group">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>계산</button>
                      </div>
                    </div>
                  </blockquote>
                </Card>
                <Col md>
                  <Card className="bg-default shadow border-0">
                    <blockquote className="card-blockquote">
                      <div>
                        <div class="container">
                          <p class='text-secondary'> 렌탈비 : ₩{Math.floor(this.state.fee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                          <p class='text-secondary'> 총 납입금액 : ₩{Math.floor(this.state.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                          <p class='text-secondary'> 보증금 : ₩{Math.floor(this.state.deposit_).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                          <p class='text-secondary'> 첫 리툴링 : ₩{Math.floor(this.state.retooling).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                      </div>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;