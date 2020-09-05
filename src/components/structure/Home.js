import React from 'react';
import Line from './Line';
import Button from './Button';

import '../scss/home.scss';
import '../scss/element.scss';

import datas from '../../ressources/datas/fr.json';

function Home() {
  return (
    <div className="Home">
      <div className="relative left-15-vw top-20-vh">
      <p className="overline">_Hello</p>
        <h1>Bonjour !</h1>
        <Line></Line>
        <div className="presentation">
          <ul>
            <li>Amélie Mouillac</li>
            {Object.keys(datas.home).map((v,i) => <li key={i}>{datas.home[i].name}</li> )}
          </ul>
        </div>
      </div>
      <Line h="50" left="50-vw" top="0-vh" name="toDisplayNone"></Line>
      <Button anime="slide-top"></Button>
    </div>
  );
}

export default Home;