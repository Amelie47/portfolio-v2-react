import React from 'react';
import '../../scss/ProjectStyles/section_resume.scss';
import Citation from './Citation';

function SectionResume({ resume, colors }) {
  return (
    <div className='SectionResume'>
      <Citation
        titre={resume.titre}
        params={resume.params}
        w='40'
        color={colors.primaire}
      ></Citation>
    </div>
  );
}

export default SectionResume;
