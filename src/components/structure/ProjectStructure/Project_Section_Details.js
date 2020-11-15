import React from 'react';
import '../../scss/ProjectStyles/section_details.scss';
import Citation from './Citation';

function SectionDetails({ details, colors }) {
  return (
    <div className='SectionDetails'>
      <div className='citations'>
        {Object.keys(details).map((v, i) => (
          <Citation
            titre={details[i].titre}
            params={details[i].detail}
            w='40'
            color={colors.primaire}
            key={i}
          ></Citation>
        ))}
      </div>
    </div>
  );
}

export default SectionDetails;
