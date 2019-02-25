// libs
import React, { Component } from 'react';
// styles
import './index.scss';

class Difference extends Component {
  render() {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="container"></div>
        ))}
      </>
    );
  }
}

export default Difference;