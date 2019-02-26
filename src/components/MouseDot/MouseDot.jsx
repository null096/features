// libs
import React, { Component } from 'react';
// hoc
import withMouse from '../../hoc/withMouse';
// styles
import './index.scss';

class MouseDot extends Component {
  render() {
    const {
      mouse: { x, y }
    } = this.props;
    const mouseStyles = {
      top: y,
      left: x,
    };

    return (
      <div className="mousedot">
        <div className="mouse" style={mouseStyles}></div>
        <div>
          {'mousedot '.repeat(500)}
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" alt=""/>
      </div>
    );
  }
}

export default withMouse(MouseDot);
