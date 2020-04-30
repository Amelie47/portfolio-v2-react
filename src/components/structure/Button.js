import React from 'react';
import '../scss/button.scss';
import img from '../../ressources/images/button_without_border.png';

function Button({url=img, rotate="bas", anime, shadow}) {
  return (
    <div className="Button">
        <img src={img} className={`Button-rotate-${rotate} Button-${anime} Button-shadow-${shadow}`}></img>
    </div>
  );
}

export default Button;