import React from 'react';

import '../scss/menu.scss';

import getDatas from '../js/Datas';

function Menu() {
  const datas = getDatas().titles;
  return (
    <div className='Menu'>
      <ul>
        {Object.keys(datas).map((v, i) => (
          <li key={i} data-target={datas[i].section_id}>
            {datas[i].name.toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
