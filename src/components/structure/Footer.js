import React from 'react';
import '../scss/footer.scss';
import Line from './Line';

function Footer() {
  return (
    <div className="Footer">
        <Line type='hoirzontal' shadow='shadow-bottom'></Line>
        <h1>A bientot !</h1>
    </div>
  );
}

export default Footer;