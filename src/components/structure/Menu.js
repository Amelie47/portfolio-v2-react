import React from 'react';

import '../scss/menu.scss';

import getDatas from '../js/Datas';

function Menu() {
  const datas = getDatas();
  return (
    <div className='Menu'>
      <ul>
        {Object.keys(datas.titles).map((v, i) => (
          <li key={i}>{datas.titles[i].name.toLowerCase()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
