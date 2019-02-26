import React, { useEffect, useReducer } from 'react';

const t = {
  ON_MOUSE_MOVE: 'ON_MOUSE_MOVE',
  ON_MOUSE_DOWN: 'ON_MOUSE_DOWN',
  ON_MOUSE_UP: 'ON_MOUSE_UP'
};

const initialState = {
  x: null,
  y: null,
  isDown: false,
};

function reducer(state, action) {
  switch (action.type) {
    case t.ON_MOUSE_MOVE: return {
      ...state,
      x: action.x,
      y: action.y
    };
    case t.ON_MOUSE_DOWN: return {
      ...state,
      isDown: true
    };
    case t.ON_MOUSE_UP: return {
      ...state,
      isDown: false
    };
    default: return;
  }
}

const withMouse = (Component) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onMouseMove = ({ x, y } = {}) => dispatch({
      type: t.ON_MOUSE_MOVE,
      x,
      y,
    });
    const onMouseDown = () => dispatch({
      type: t.ON_MOUSE_DOWN
    });
    const onMouseUp = () => dispatch({
      type: t.ON_MOUSE_UP
    });

    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('mousedown', onMouseDown, false);
      window.addEventListener('mouseup', onMouseUp, false);
      return () => {
        window.removeEventListener('mousemove', onMouseMove, false);
        window.removeEventListener('mousedown', onMouseDown, false);
        window.removeEventListener('mouseup', onMouseUp, false);
      }
    }, []);

    return (
      <Component
        {...props}
        mouse={state}
      />
    );
  };
}

export default withMouse;