import React from 'react';
import '../scss/formations.scss';
import Line from './Line';

function Formations() {
  return (
    <div className="Formations section">
        <div className="relative left-15-vw top-20-vh">
        <p className="overline">_Découvertes</p>
        <h1>Formations</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
        </div>
        </div>
    </div>
  );
}

export default Formations;