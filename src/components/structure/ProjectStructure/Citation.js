import React from 'react';
import '../../scss/ProjectStyles/citation.scss';

function Citation({ titre, params, w, color }) {
  return (
    <div className={`Citation Citation-${w}`}>
      <div className='titre' style={{ borderRight: `2px solid ${color}` }}>
        {titre}
      </div>
      <div className='paragraphe'>
        {Object.keys(params).map((v, i) => (
          <p key={i}>{params[i]}</p>
        ))}
      </div>
    </div>
  );
}

export default Citation;
