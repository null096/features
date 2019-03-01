// libs
import React, { Component } from 'react';
import posed from 'react-pose';
import uuidv1 from 'uuid/v1';
// hocs
import withMouse from '../../hoc/withMouse';
// styles
import './index.scss';
// constants
import { shadowDotInitialSize, dotShadowAminDuration } from './constants';
// utils
import { getDotPositionByCursorPosition } from './utils';

const ClickShadow = posed.div({
  hidden: {
    opacity: 0,
    transform: 'scale(1)',
    transition: {
      opacity: {
        duration: 0
      },
      transfrom: {
        duration: 0
      }
    }
  },
  visible: {
    opacity: .6,
    transform: 'scale(1)',
    transition: {
      opacity: () => ({
        type: 'keyframes',
        values: [.6, 0],
        times: [0, .9],
        duration: dotShadowAminDuration,
      }),
      transform: () => ({
        type: 'keyframes',
        values: [
          'scale(1)',
          'scale(20)',
        ],
        times: [0, .9],
        duration: dotShadowAminDuration,
      })
    }
  }
});

class MouseClickShadows extends Component {
  state = {
    dotShadows: [],
    isShadowAdded: false,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      mouse: { y, x, isUpAfterDown }
    } = nextProps;

    if (!prevState.isShadowAdded && isUpAfterDown) {
      const dotPosition = getDotPositionByCursorPosition({ y, x, dotSize: shadowDotInitialSize });
      prevState.dotShadows.push({
        id: uuidv1(),
        top: `${dotPosition.y}px`,
        left: `${dotPosition.x}px`
      });

      return {
        dotShadows: prevState.dotShadows,
        isShadowAdded: true
      };
    }
    return { isShadowAdded: false };
  }
  onDotShadowAnimationComplete = (dotId) => () => {
    const { dotShadows } = this.state;
    const index = dotShadows.findIndex(e => e.id === dotId);

    if (index < 0) return;

    const dotShadowsNew = dotShadows.slice();
    dotShadowsNew.splice(index, 1);
    this.setState({ dotShadows: dotShadowsNew });
  }
  render() {
    const { dotShadows } = this.state;
    const defaultShadowStyles = {
      height: `${shadowDotInitialSize}px`,
      width: `${shadowDotInitialSize}px`
    };

    return (
      <>
        {dotShadows.map(e =>
          <ClickShadow
            key={e.id}
            className="dot-shadow"
            style={{
              ...defaultShadowStyles,
              left: e.left,
              top: e.top
            }}
            initialPose="hidden"
            pose="visible"
            onPoseComplete={this.onDotShadowAnimationComplete(e.id)}
          />
        )}
      </>
    );
  }
}


export default withMouse(MouseClickShadows);
