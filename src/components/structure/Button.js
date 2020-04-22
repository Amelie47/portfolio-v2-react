import React from 'react';
import '../scss/button.scss';
import img from '../../ressources/images/button_without_border.png';

function Button({url=img, rotate ="bas", anime}) {
  return (
    <div className="Button">
        <img src={img} className={`Button-rotate-${rotate} Button-${anime}`}></img>
    </div>
  );
}

export default Button;