import React from 'react';
import '../../scss/ProjectStyles/section_resume.scss';
import Citation from './Citation';

function SectionResume({ resume }) {
  return (
    <div className='SectionResume'>
      <Citation titre={resume.titre} params={resume.params} w='40'></Citation>
    </div>
  );
}

export default SectionResume;
