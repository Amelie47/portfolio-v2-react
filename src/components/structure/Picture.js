import React from 'react';
import '../scss/picture.scss';
import Line from './Line';

function Picture({name,h, pos='top'}) {
  return (
    <div className={`Picture Picture-${name} Picture-${h} Picture-${pos}`}>
      <Line type='hoirzontal' shadow='shadow-bottom'></Line>
      <Line type='hoirzontal' shadow='shadow-top' bottom="0-vh"></Line>
    </div>
  );
}

export default Picture;