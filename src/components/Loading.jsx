import React from 'react';
//import Hotel from './Hotel';
import animation from '../animations/Pinpoinx.png';
import './Loading.css';

function Loading() {
  const windowWidth = window.innerWidth;
  const hotelLogoSize = windowWidth < 550 ? 150 : 400;

  return (
    <div className='loading-screen'>
      {//<Hotel
       // lotti={animation}
       // height={hotelLogoSize}
       // width={hotelLogoSize}
      ///>
      }
      <img src={animation}
        className="sprite"
        style={{ height: { hotelLogoSize } }}
        alt="logo"
      />
    </div>
  );
}

export default Loading;