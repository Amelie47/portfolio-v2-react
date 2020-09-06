import React from 'react';
import '../scss/footer.scss';
import Line from './Line';
import getDatas from '../js/Datas';

function Footer() {
  const datas = getDatas().footer;
  return (
    <div className='Footer'>
      <Line type='hoirzontal' shadow='shadow-bottom'></Line>
      <h1>{datas.sentence}</h1>
    </div>
  );
}

export default Footer;
