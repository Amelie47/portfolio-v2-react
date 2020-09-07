import React from 'react';

import '../scss/menu.scss';

import getDatas from '../js/Datas';
import setMenu from '../js/Menu';

function Menu() {
  setMenu();
  const datas = getDatas().titles;
  return (
    <div className='Menu'>
      <ul>
        {Object.keys(datas).map((v, i) => (
          <li key={i}>{datas[i].name.toLowerCase()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
