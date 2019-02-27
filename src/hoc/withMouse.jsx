import React, { useEffect, useReducer } from 'react';
import usePrevious from '../hooks/usePrevious';

const t = {
  ON_MOUSE_MOVE: 'ON_MOUSE_MOVE',
  ON_MOUSE_DOWN: 'ON_MOUSE_DOWN',
  ON_MOUSE_UP: 'ON_MOUSE_UP',
  ON_UP_DOWN_CHANGE: 'ON_UP_AFTER_DOWN'
};

const initialState = {
  x: null,
  y: null,
  isDown: false,
  isUpAfterDown: false,
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
    case t.ON_UP_DOWN_CHANGE: return {
      ...state,
      isUpAfterDown: action.isUpAfterDown
    };
    default: return state;
  }
}

const withMouse = (Component) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const prevState = usePrevious(state);
    const prevIsDown = (prevState || {}).isDown;

    useEffect(() => {
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

      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('mousedown', onMouseDown, false);
      window.addEventListener('mouseup', onMouseUp, false);

      return () => {
        window.removeEventListener('mousemove', onMouseMove, false);
        window.removeEventListener('mousedown', onMouseDown, false);
        window.removeEventListener('mouseup', onMouseUp, false);
      }
    }, []);

    useEffect(()=> {
      const onUpAfterDownChange = (val) => dispatch({
        type: t.ON_UP_DOWN_CHANGE,
        isUpAfterDown: val
      });

      if (prevIsDown && !state.isDown) {
        onUpAfterDownChange(true);
      } else if (state.isUpAfterDown) {
        onUpAfterDownChange(false);
      }
    }, [prevIsDown, state.isDown]);

    return (
      <Component
        {...props}
        mouse={state}
      />
    );
  };
}

export default withMouse;