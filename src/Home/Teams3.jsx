import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col, Divider } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

const loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1,
};

class Teams3 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          <Row>
            <Col span={7}>
              <div {...image}>
                <img src={image.children} alt="img" />
              </div>
            </Col>
            <Col span={17}>
              <QueueAnim {...titleWrapper} type="bottom">
                {titleWrapper.children.map(getChildrenToRender)}
              </QueueAnim>
            </Col>
          </Row>
        </Col>
      );
    });

  getBlockTopChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    const listTopChildren = this.getBlockTopChildren(
      dataSource.blockTop.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} className="banner-bg-wrapper">
        <svg width="100%" height="100%" viewBox="0 0 800 576" fill="none">
          <TweenOne component="g" animation={[{ opacity: 0, type: 'from' }, { ...loop, y: 15 }]}>
            
            <rect stroke="#FADB14" strokeWidth="1.6" width="9" height="9" cx="300" cy="250" rx="6" />
            <g transform="translate(100 100)">
              <g style={{ transformOrigin: '50% 50%', transform: 'rotate(-340deg)' }}>
                <rect stroke="#FADB14" strokeWidth="1.6" width="15" height="15" />
              </g>
            </g>
          </TweenOne>
          <TweenOne component="g" animation={[{ opacity: 0, type: 'from' }, { ...loop, y: -15 }]}>
            <g transform="translate(200 400)">
              <g style={{ transformOrigin: '50% 50%', transform: 'rotate(-340deg)' }}>
                <rect stroke="#FADB14" strokeWidth="1.6" width="9" height="9" />
              </g>
            </g>
          </TweenOne>

          
          <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" opacity="0.95" cx="1096" cy="11" r="11" />
          <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" cx="11" cy="667" r="11" />
          <g id="Group-11" transform="translate(500.000000, 500.000000)" fill="#13C2C2">
            <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/MnLEmwjipfhzPUmBJnJE.svg" />
          </g>
          <g id="Group-28" transform="translate(-50.000000, 500.000000)" fill="#2F54EB">
            <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/dyNuxLOZtvjoHSVisbhQ.svg" />
          </g>
        </svg>
        
      </div>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="blockTop"
                {...dataSource.blockTop}
                component={Row}
              >
                {listTopChildren}
              </QueueAnim>
              <Divider key="divider" />
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={Row}
              >
                {listChildren}
              </QueueAnim>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams3;
