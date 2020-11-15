import React from 'react';
import '../scss/button.scss';
import getImage from '../js/Image';

function Button({ url = getImage(), rotate = 'bas', anime, shadow }) {
  return (
    <div className='Button'>
      <img
        src={url}
        className={`Button-rotate-${rotate} Button-${anime} Button-shadow-${shadow}`}
        alt='button img'
      ></img>
    </div>
  );
}

export default Button;
