import React, { useState } from 'react';
import ImageAnimaiton from './image-animation';

const Images = () => {
  const [skew, setSkew] = useState(20);
// TODO: dymanic skew changing
// TODO: add transition, with proper control of .top&.bottom images
  return (
    <>
      <div style={{ position: 'absolute', opacity: .2, zIndex: 5 }}>
        <button onClick={() => setSkew(skew => skew + 1)} disabled={skew >= 90}>+</button>
        <button onClick={() => setSkew(skew => skew - 1)} disabled={skew <= -90}>-</button>
      </div>
      <ImageAnimaiton
        leftImage={"url('https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress')"}
        rightImage={"url('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress')"}
        skew={skew}
      />
    </>
  );
};

export default Images;