import React from 'react';

import '../scss/menu.scss';

import datas from '../../ressources/datas/fr.json';

function Menu() {

  return (
    <div className="Menu">
      <ul>
        {Object.keys(datas.titles).map((v,i) => <li key={i}>{datas.titles[i].name.toLowerCase()}</li> )}
      </ul>
    </div>
  );
}

export default Menu;