import React, { Component } from 'react';
import withHowMany from './withHowMany';

class HowManyTestHoc extends Component {
  render() {
    return (
      <>
        <div>1</div>
        <div>1</div>
        <a href="/"> </a>
        <img src="/" alt=""></img>
        <a href="/"> </a>
      </>
    );
  }
}

export default withHowMany(HowManyTestHoc);
