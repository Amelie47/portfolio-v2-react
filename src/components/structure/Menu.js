import React from 'react';

import '../scss/menu.scss';

import datas from '../../ressources/datas/fr.json';

function Menu() {
  return (
    <div className="Menu">
      <ul>
        {Object.keys(datas.menu).map((v,i) => <li>{datas.menu[i].name}</li> )}
      </ul>
    </div>
  );
}

export default Menu;