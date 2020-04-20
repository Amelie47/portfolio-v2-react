import React from 'react';
import '../scss/projets.scss';
import Line from './Line';

function Projets() {
  return (
    <div className="Projets">
        <div className="relative left-15-vw top-20-vh">
        <p className="overline">_Créativité</p>
        <h1>Projets</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
        </div>
        </div>
    </div>
  );
}

export default Projets;