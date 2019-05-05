import React from 'react';
import './index.scss';

const ImageAnimaiton = ({ leftImage, rightImage, skew = 20 }) => {
  const parsedSkew = Math.max(-90, Math.min(skew, 90));
  const isFallToTheLeft = parsedSkew > 0;
  const topStyles = {
    order: isFallToTheLeft ? 1 : 0
  };
  const rootStyles = {
    '--skew': `${parsedSkew}deg`,
    '--left': leftImage,
    '--right': rightImage,
  };
  const rootClasses = [
    'image-animaiton',
    isFallToTheLeft ? 'fall-to-left' : 'fall-to-right'
  ].join(' ');

  return (
    <div className={rootClasses} style={rootStyles}>
      <div className="left-wrapper">
        <div className="left"></div>
      </div>
      <div className="right-wrapper">
        <div className="right"></div>
      </div>
      <div className="backside">
        <div className="top" style={topStyles}></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default ImageAnimaiton;
