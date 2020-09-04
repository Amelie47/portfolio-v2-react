import React from 'react';
import '../scss/whoami.scss';
import Line from './Line';
import portrait from '../../ressources/images/portrait.png';
import datas from '../../ressources/datas/fr.json';

function Whoami() {
  return (
    <div className="Whoami section">
      <Line h="30" right="50-vw"></Line>
      <div className="principal_content relative left-15-vw top-20-vh">
        <p className="overline">_I_Am_...</p>
          <h1>Whoami</h1>
        <Line name="toDisplayNone"></Line>
        <img src={portrait} />
        <div className="content">
          {Object.keys(datas.whoami).map((v, i) => <p dangerouslySetInnerHTML={{__html: datas.whoami[i]}}/> )}
        </div>
      </div>
    </div>
  );
}

export default Whoami;