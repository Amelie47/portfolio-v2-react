import React from 'react';
import '../../scss/ProjectStyles/section_details.scss';
import Citation from './Citation';

function SectionDetails({ details }) {
  return (
    <div className='SectionDetails'>
      <div className='citations'>
        {Object.keys(details).map((v, i) => (
          <Citation
            titre={details[i].titre}
            params={details[i].detail}
            w='40'
            key={i}
          ></Citation>
        ))}
      </div>
    </div>
  );
}

export default SectionDetails;
