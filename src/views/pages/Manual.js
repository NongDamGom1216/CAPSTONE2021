import React from "react";

import {
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";

import SimpleFooter from "components/Footers/SimpleFooter.js";

class Manual extends React.Component {
  state = {};
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
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-100">
              <div className="shape shape-style-1 shape-primary">
              
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        <br>
                        </br>
                        Rental Service Manual{" "}
                      
                      </h1>

                    
                    </Col>
                  </Row>
                </div>
              </Container>
              
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-centor">
                <Col style={{ wordBreak: 'keep-all' }} md='6'>
                  <Card className="bg-default shadow-lg border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img3.PNG")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h2 className="display-3 font-weight-bold text-white">
                      <i class="fa fa-question-circle"></i>
                      &nbsp;렌탈 서비스란?
                      </h2>
                      <p className="lead text-italic text-white">
                        <i className="ni ni-bold-right"/>
                        &nbsp;사용자측에서 필요한 검사구를 저렴한 초기 금액으로 설치부터 이용 가능하게 하는 서비스<br/><br/>
                      </p>
                      <p className="lead text-italic text-white">
                        <i className="ni ni-bold-right"/>
                        &nbsp;리스는 금융지원의 성격이 강하고 렌탈은 임대의 성격이 강하다고 할수 있음<br/><br/>
                      </p>
                      <p className="lead text-italic text-white">
                        <i className="ni ni-bold-right"/>
                        &nbsp;사용기간 종료, 또는 상환 완료시 렌탈물건은 사용자측에 무상 양도<br/><br/><br/>
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col style={{ wordBreak: 'keep-all' }} md='6'>
                  <Card className="bg-white shadow-lg border-0 pb-2">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/alufix2_.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-white"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-white"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                    <h2 className=" display-3 font-weight-bold">
                    <i className="ni ni-like-2" />&nbsp;렌탈 서비스의 장점
                    </h2>
                    <p className="lead text">
                    <i className="ni ni-bold-right"/>
                      <mark>저렴한 초기금액</mark>과 월 분할 납입 방식으로 WITTE사의 검사구 제품을 이용 가능
                    </p>
                    <p className="lead text">
                    <i className="ni ni-bold-right"/>
                      부품들을 조립, 제작하는 자사 제품의 특징상 Retooling 서비스를 통해 생산 제품이 바뀌어도 검사구를 <mark>새로 구매할 일 없이 </mark>재조립 가능
                    </p>
                    <p className="lead text">
                    <i className="ni ni-bold-right"/>
                      <mark>1년마다 첫 Retooling 금액 30% 할인 제공</mark><br/>(48개월 렌탈시 최대 4회 할인 적용 가능)
                    </p>
                    <p className="lead text">
                    <i className="ni ni-bold-right"/>
                      렌탈 기간 종료시 제품은 무상 양도되지만 Retooling 서비스는 이후에도 신청 가능
                    </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        
          <section className="section section-lg bg-secondary pt-4">
            <Container>
              <Card className="bg-gradient-neutral shadow-lg">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="10">
                      <h2 className="font-weight-bold">
                      <i className="fa fa-file-text-o" />  &nbsp;렌탈 서비스 매뉴얼
                      </h2>
                      <p>기업의 초기 자금 부담을 덜어주기 위해 검사구를 빌려주는 서비스</p>
                      <table className="table-white">
                        <tr height="10"></tr>
                        <tr height="35">
			               	    <th width="160">렌탈기간</th><td> 12개월 단위로 서비스 신청 (최소 12개월 ~ 최대 60개월)</td>
		              	    </tr>
                        <tr height="35">
			                  	<th>월 렌탈비</th><td>제품 가격 / 렌탈기간(개월)</td>
		            	      </tr>
		              	    <tr height="35">
			                  	<th>보증금</th><td>제품 가격의 10% ~ 30% 중 선택</td>
		            	      </tr>
                        <tr height="35">
			                  	<th>렌탈 수수료율</th><td>보증금의 차등에 따라 연 5% ~ 10%</td>
		            	      </tr>
		            	      <tr height="35">
		          	  	      <th>렌탈료 납입</th><td>은행을 통한 원리금균등상환 방식</td>
		            	      </tr>
		            	      <tr height="35">
			                  	<th>렌탈기간 종료</th><td>보증금 반환 및 렌탈제품 무상양도</td>
			                  </tr>
			                  <tr height="60">
		            	  	    <th>기타사항</th><td>
                            1년마다 첫 Retooling 금액 30% 할인 제공(예, 48개월 시 최대 4회)<br></br>
                            계약 중도파기시 보증금 회수 및 별도 위약금 청구, 물건 회수
                          </td>
		            	      </tr>
	              	    </table>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>  
          </section>
        
          <section className="section section-lg bg-gradient-default p-6">
            <Container className="pt-1 pb-1" style={{ wordBreak: 'keep-all' }}>
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">신청 방법</h2>
                </Col>
              </Row>
              <Row className="row-grid mt-5 justify-content-center">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-button-play text-primary" />
                  </div>
                  <h4 className="text-white font-weight-bold mt-3">Step 1</h4>
                  <h4 className="text-white font-weight-bold mt-1">
                    매뉴얼 확인 및 시뮬레이션
                  </h4>
                  <p className="text-white mt-4">
                    렌탈 매뉴얼을 확인 후
                    시뮬레이션 페이지를 통해
                    대략적인 비용 계산
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-credit-card text-primary" />
                  </div>
                  <h4 className="text-white font-weight-bold mt-3">Step 2</h4>
                  <h4 className="text-white font-weight-bold mt-1">
                    자사 상담 및 계약
                  </h4>
                  <p className="text-white mt-4">
                    대략적인 비용 확인 후
                    자사와 상담을 통해
                    세부적인 계약 내용 확정
                  </p>
                  <p className="text-gray">
                    보증금이나 수수료 등은
                    계약 기간이나 금액에 따라 책정
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-delivery-fast text-primary" />
                  </div>
                  <h4 className="text-white font-weight-bold mt-3">Step 3</h4>
                  <h4 className="text-white font-weight-bold mt-1">
                    제품 설계 & 조립 제공
                  </h4>
                  <p className="text-white mt-4">
                    계약 이후
                    각자의 규격에 따른
                    맞춤 검사구 설계&조립 제공
                  </p>
                  <p className="text-gray">
                    이후에는 Retooling 서비스 신청을 통해
                    재설계 가능
                  </p>
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

export default Manual;
