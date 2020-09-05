import React from 'react';
import '../scss/logo.scss';
import img from '../../ressources/images/logo/classic.png'

function Logo() {
  return (
    <div className="Logo">
        <img src={img} alt="logo"></img>
    </div>
  );
}

export default Logo;