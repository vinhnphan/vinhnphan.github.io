import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1,
};

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      }
      : {
        x: '-=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
  };
  return (
    <div style={{ position: 'relative' }} {...tagProps} {...dataSource.wrapper}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 1 }} className="banner-bg-wrapper">
        <svg width="100%" height="100%" viewBox="0 0 400 576" fill="none">
          <TweenOne component="g" animation={[{ opacity: 0, type: 'from' }, { ...loop, y: 15 }]}>
            <ellipse id="Oval-9-Copy-4" cx="300" cy="100" rx="6" ry="6" stroke="#2F54EB" strokeWidth="1.6" />
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

          <g transform="translate(100, 100)">
            <g id="Group-26" transform="translate(146.000000, 338.000000)" fill="#FADB14">
              <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/UtBesTOkoZsBUxPqfDlZ.svg" />
            </g>
          </g>
          <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" opacity="0.95" cx="1096" cy="11" r="11" />
          <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" cx="11" cy="667" r="11" />
          <g id="Group-28" transform="translate(884.000000, 400.000000)" fill="#2F54EB">
            <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/dyNuxLOZtvjoHSVisbhQ.svg" />
          </g>
        </svg>
      </div>
      <OverPack {...dataSource.OverPack} component={Row}>
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <span {...dataSource.img}>
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Content1;
