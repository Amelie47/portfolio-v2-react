import React from 'react';
import '../scss/line.scss';
import '../scss/element.scss';

function Line({h='520',left='0',right='0',top='0',bottom='0', type='vertical', shadow=''}) {
  return (
    <div className={`Line Line-${h} left-${left} right-${right} top-${top} bottom-${bottom} Line-${type} Line-${shadow}`}>
    </div>
  );
}

export default Line;
