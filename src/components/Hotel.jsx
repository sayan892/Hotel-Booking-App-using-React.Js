import React from 'react';
import Lottie from 'react-lottie';

function Hotel({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='lottie-container'>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}

export default Hotel;