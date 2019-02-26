import React, { useState, useEffect } from 'react';

const withMouse = (Component) => {
  return (props) => {
    const [mouse, setMouse] = useState({ x: null, y: null });
    const onMouseMove = ({ x, y } = {}) => {
      setMouse({ x, y });
    }

    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove, false);
      return () => {
        window.removeEventListener('mousemove', onMouseMove, false);
      }
    }, []);

    return (
      <Component
        {...props}
        mouse={mouse}
      />
    );
  };
}

export default withMouse;