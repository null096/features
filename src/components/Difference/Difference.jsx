// libs
import React, { Component } from 'react';
// hoc
import withHtmlClass from '../../hoc/withHtmlClass';
// styles
import './index.scss';

class Difference extends Component {
  render() {
    return (
      <div className="difference-page">
        <div className="fixed-text-container">
          This text is fixed
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="container"></div>
        ))}
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" alt=""/>
      </div>
    );
  }
}

export default withHtmlClass('difference')(Difference);