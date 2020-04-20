import React from 'react';
import '../scss/whoami.scss';
import Line from './Line';

function Whoami() {
  return (
    <div className="Whoami">
        <div className="relative left-15-vw top-20-vh">
        <p className="overline">_I_Am_...</p>
        <h1>Whoami</h1>
        <Line></Line>
        </div>
    </div>
  );
}

export default Whoami;