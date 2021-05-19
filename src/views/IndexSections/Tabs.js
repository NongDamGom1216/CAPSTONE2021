import React from "react";

import "../../assets/css/custom.css"

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
        <h1 className="text-default mt-4 font-weight-bold" style={{ fontSize: '50px' }}>
          About us
        </h1>
        <a href='/manual-page'>
        <span className="nav-link-inner--text ml-1 display-3 lead">
          <figure className='mt-4'>
            <img src={require("assets/img/theme/gears.jpg")} />
            <figcaption style={{ top: '33%', left: '6%', }}>
              <h1 className="text-white font-weight-bold" style={{ fontSize: '55px' }}>
                Rental Manual
                </h1>
            </figcaption>
            <div class="overlay">
              <div class="description" style={{ top: '35%', left: '6%', }}>
                <h3 className="text-white font-weight-bold">
                  국내 최초 검사구 렌탈 서비스를 제공합니다
                    </h3>
                <h3 className="text-white font-weight-bold">
                  큐브랩 만의 차별화된 혜택을 경험해보세요
                    </h3>
              </div>
            </div>
          </figure>
          </span>
        </a>
        <a href='/simul-page'>
        <span className="nav-link-inner--text ml-1 display-3 lead">
          <figure className='mt-5'>
            <img src={require("assets/img/theme/calculator-office.jpg")} />
            <figcaption style={{ top: '33%', left: '6%', }}>
              <h1 className="text-white font-weight-bold" style={{ fontSize: '55px' }}>
                Rental Simulation
                </h1>
            </figcaption>
            <div class="overlay">
              <div class="description" style={{ top: '35%', left: '6%', }}>
                <h3 className="text-white font-weight-bold">
                  필요한 제품의 렌탈료를 지금 확인하세요
                    </h3>
                <h3 className="text-white font-weight-bold">
                  부담되지 않는 가격으로 제공합니다
                    </h3>
              </div>
            </div>
          </figure>
          </span>
        </a>
      </>
    );
  }
}

export default TabsSection;
