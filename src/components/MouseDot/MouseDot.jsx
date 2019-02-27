// libs
import React, { Component } from 'react';
import classNames from 'classnames';
import posed from 'react-pose';
// hoc
import withMouse from '../../hoc/withMouse';
// styles
import './index.scss';
// constants
const outerDotSize = 11;

const MouseClickShadow = posed.div({
  visible: {
    opacity: .8,
    transition: {
      opacity: { duration: 0 }
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 0 }
    }
  }
});

class MouseDot extends Component {
  // state = {
  //   dotShadows: []
  // };
  // static getDerivedStateFromProps(nextProps, prevState) {
    
  // }
  render() {
    const {
      mouse: { x, y, isDown, isUpAfterDown }
    } = this.props;
    const dotOuterStyles = {
      width: `${outerDotSize}px`,
      height: `${outerDotSize}px`,
      top: `${y - outerDotSize / 2}px`,
      left: `${x - outerDotSize / 2}px`,
      display: x === null && y === null ? 'none' : ''
    };
    const dotOuterClass = classNames(
      'dot-outer',
      isDown ? 'is-down' : ''
    );

    return (
      <div className="mousedot">
        <div className={dotOuterClass} style={dotOuterStyles}>
          <div className="dot-inner"></div>
        </div>
        <div>
          <MouseClickShadow
            className="dot-shadow"
            pose={isDown ? 'visible' : 'hidden'}
          />
        </div>
        <div>
          {'mousedot '.repeat(500)}
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" alt="" />
      </div>
    );
  }
}

export default withMouse(MouseDot);
