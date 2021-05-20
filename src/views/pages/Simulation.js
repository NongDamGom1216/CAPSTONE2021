import React from "react";

import { Card, Container, Row, Col } from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Simulation extends React.Component {
  state = {
    price: '0',
    month: '0',
    deposit_p: '0',
    fee: '0',
    deposit: '0',
    retooling_b: '0',
    retooling_a: '0'
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  handleClick = () => {
    if (this.state.price == '0') {
      return alert("금액을 입력해 주세요")
    }
    if (this.state.month === '0') {
      return alert("렌탈기간을 선택해 주세요")
    }
    if (this.state.deposit_p === '0') {
      return alert("보증금을 선택해 주세요")
    }
    if (this.state.deposit_p === '10') {
      this.setState(prev => ({
        ...prev,
        fee: (prev.price * (0.1 / 12) * ((1 + (0.1 / 12)) ** prev.month)) / (((1 + (0.1 / 12)) ** prev.month) - 1)
      }));
    }
    if (this.state.deposit_p === '20') {
      this.setState(prev => ({
        ...prev,
        fee: (prev.price * (0.075 / 12) * ((1 + (0.075 / 12)) ** prev.month)) / (((1 + (0.075 / 12)) ** prev.month) - 1)
      }));
    }
    if (this.state.deposit_p === '30') {
      this.setState(prev => ({
        ...prev,
        fee: (prev.price * (0.05 / 12) * ((1 + (0.05 / 12)) ** prev.month)) / (((1 + (0.05 / 12)) ** prev.month) - 1)
      }));
    }
    this.setState(prev => ({
      ...prev,
      deposit: prev.price * prev.deposit_p / 100,
      retooling_a: (prev.price * 0.3) * 0.7,
      retooling_b: prev.price * 0.3

    }));
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="simul-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section-lg section-shaped pb-100">
              <div className="shape shape-style-1 shape-primary">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white"><br></br>Rental Service Simulation{" "}</h1>
                    </Col>
                  </Row>
                </div>
              </Container>

            </section>
          </div>

          <section className='bg-secondary pt-6 pb-7'>
          <Container>
            <Card className="bg-gradient-default mr-lg-7 ml-lg-7 shadow-lg p-3">
              <Col>
                <h5 className="text-white mt-2 font-weight-bold">
                <i class="fa fa-exclamation-circle"></i>
                &nbsp;&nbsp;주의사항</h5>
              </Col>
              <Col>
                <p className="text-white mt-2 ">
                  <i className="ni ni-check-bold" />&nbsp;
                  렌탈비는 <span className="text-red font-weight-bold">보증금의 차등에 따라 연 5%~10%의 수수료</span>가 적용됩니다
                  </p>
                <p className="text-white mt-1">
                  <i className="ni ni-check-bold" />&nbsp;
                  기본 리툴링비는 <span className="text-red font-weight-bold">제품 가격의 약 30%</span>로 책정됩니다
                  </p>
                <p className="text-white mt-1">
                  <i className="ni ni-check-bold" />&nbsp;
                  계산 결과의 리툴링비는 할인이 적용된 <span className="text-red font-weight-bold">매년 첫번째</span>의 리툴링입니다
                  </p>
                <p className="text-white mt-1">
                  <i className="ni ni-check-bold" />&nbsp;
                  시뮬레이터는 참고용이며 실제 금액과는 차이가 있을 수 있으므로 <span className="text-red font-weight-bold">자세한 상담은 당사에 문의 바랍니다</span>
                </p>
              </Col>
            </Card>
            <Card className="bg-white mr-lg-7 ml-lg-7 mt-7 p-4">
              <Row className='mb-3 align-items-center'>
                <Col md='2'>
                  <strong>제품가격</strong>
                </Col>
                <Col>
                  <input type="number" class="form-control" name="price" placeholder="금액(원)" value={this.price} onChange={this.onChange} />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col md='2'>
                  <strong>렌탈기간</strong>
                </Col>
                <Col>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="monthRadio1"
                      name="month"
                      value="12"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="monthRadio1">12개월</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="monthRadio2"
                      name="month"
                      value="24"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="monthRadio2">24개월</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="monthRadio3"
                      name="month"
                      value="36"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="monthRadio3">36개월</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="monthRadio4"
                      name="month"
                      value="48"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="monthRadio4">48개월</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="monthRadio5"
                      name="month"
                      value="60"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="monthRadio5">60개월</label>
                  </div>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col md='2'>
                  <strong>보증금</strong>
                </Col>
                <Col>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="depositRadio1"
                      name="deposit_p"
                      value="10"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="depositRadio1">10%</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="depositRadio2"
                      name="deposit_p"
                      value="20"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="depositRadio2">20%</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline col-md-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="depositRadio3"
                      name="deposit_p"
                      value="30"
                      onChange={this.onChange}
                    />
                    <label className="custom-control-label" for="depositRadio3">30%</label>
                  </div>
                </Col>
              </Row>
              <button
                type="button"
                className="btn btn-icon btn-block"
                style={{ backgroundColor: '#21386D', color: 'white' }}
                onClick={this.handleClick}>
                <span class="btn-inner--icon"><i class="fa fa-calculator"></i></span>
                <span class="btn-inner--text">Calculation</span>
              </button>
            </Card>
            </Container>
          </section>
          <section className="section-sm bg-gradient-default align-items-center">
            <Container>
            <Row className="align-items-center">
              <Col>
                <h1 className='text-white ml-lg-7'>렌탈비</h1>
              </Col>
              <Col>
                <h1 className='text-right text-white mr-lg-7'>
                  <span style={{ fontSize: "0.4em" }}>월 </span>
                  {Math.floor(this.state.fee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span style={{ fontSize: "0.4em" }}>원</span>
                </h1>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <h3 className='text-white ml-lg-7'>보증금</h3>
              </Col>
              <Col>
                <h3 className='text-right text-white mr-lg-7'>
                  {Math.floor(this.state.deposit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span style={{ fontSize: "0.6em" }}>원 </span>
                </h3>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <h3 className='text-white ml-lg-7'>리툴링비</h3>
              </Col>
              <Col className="align-text-center">
                <h3 className='text-right text-white mr-lg-7'>
                  <span className='text-right text-white mr-2' style={{ fontSize: "0.6em", textDecoration: 'line-through' }}>
                    {Math.floor(this.state.retooling_b).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                    </span>
                  {Math.floor(this.state.retooling_a).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span style={{ fontSize: "0.6em" }}>원
                  </span>
                </h3>
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

export default Simulation;