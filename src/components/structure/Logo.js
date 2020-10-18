import React from 'react';
import '../scss/logo.scss';
import img from '../../ressources/images/logo/classic.png';
import { toSmoothTop } from '../js/Scroll';

function Logo() {
  return (
    <div className='Logo' onClick={toSmoothTop}>
      <img src={img} alt='logo'></img>
    </div>
  );
}

export default Logo;
