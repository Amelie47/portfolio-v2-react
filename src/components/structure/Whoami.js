import React from 'react';
import '../scss/whoami.scss';
import Line from './Line';
import portrait from '../../ressources/images/portrait.png';

function Whoami() {
  return (
    <div className="Whoami">
      <Line h="230" right="50-vw"></Line>
      <div className="relative left-15-vw top-20-vh">
        <p className="overline">_I_Am_...</p>
          <h1>Whoami</h1>
        <Line></Line>
        <img src={portrait} />
        <div className="content">
          <p>Lorem ipsum dolor <span className="italic">sit amet</span> y pure sit etas <span className="bold">dimetrum</span> Putretas simun aler da mimetum <span className="bold">Sierra</span> e di misera e da amertum dolor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whoami;