import React, { Component } from 'react';
import Shuffle from './Shuffle';

class ShuffleTest extends Component {
  render() {
    return (
      <Shuffle>
        {[...Array(10)].map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </Shuffle>
    );
  }
}

export default ShuffleTest;
