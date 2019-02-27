// libs
import React, { Component } from 'react';
import classNames from 'classnames';
// hoc
import withMouse from '../../hoc/withMouse';
// styles
import './index.scss';
// constants
const outerDotSize = 11;

class MouseDot extends Component {
  render() {
    const {
      mouse: { x, y, isDown }  
    } = this.props;
    const dotOuterStyles = {
      width: `${outerDotSize}px`,
      height: `${outerDotSize}px`,
      top: `${y - outerDotSize / 2}px`,
      left: `${x - outerDotSize / 2}px`
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
          {'mousedot '.repeat(500)}
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" alt="" />
      </div>
    );
  }
}

export default withMouse(MouseDot);
