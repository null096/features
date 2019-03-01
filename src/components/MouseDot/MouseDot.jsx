// libs
import React, { Component } from 'react';
import classNames from 'classnames';
// components
import MouseClickShadows from './MouseClickShadows';
// hocs
import withMouse from '../../hoc/withMouse';
// styles
import './index.scss';
// constants
import { outerDotSize } from './constants';
// utils
import { getDotPositionByCursorPosition } from './utils';

class MouseDot extends Component {
  render() {
    const {
      mouse: { x, y, isDown }
    } = this.props;
    const dotPosition = getDotPositionByCursorPosition({ y, x, dotSize: outerDotSize });
    const dotOuterStyles = {
      top: `${dotPosition.y}px`,
      left: `${dotPosition.x}px`,
      width: `${outerDotSize}px`,
      height: `${outerDotSize}px`,
      display: x === null || y === null ? 'none' : ''
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
        <MouseClickShadows />
        <div>
          {'mousedot '.repeat(500)}
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" alt="" />
      </div>
    );
  }
}

export default withMouse(MouseDot);
