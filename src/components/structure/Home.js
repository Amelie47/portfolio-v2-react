import React from 'react';
import Line from './Line';
import '../scss/home.scss';
import '../scss/element.scss';
import '../js/home';
import Button from './Button';
import Logo from './Logo';

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
            <li>Développeuse web</li>
            <li>Alternante</li>
            <li>Ecole des Gobelins</li>
            <li>Annecy</li>
          </ul>
        </div>
      </div>
      <Line h="50" right="60-vw" top="0-vh" name="toDisplayNone"></Line>
      <Button anime="slide-top"></Button>
      <Logo></Logo>
    </div>
  );
}

export default Home;