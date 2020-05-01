import React from 'react';
import '../../scss/ProjectStyles/section_resume.scss';
import Citation from './Citation';

function SectionResume({project}) {
    return (
        <div className="SectionResume">
            <Citation titre="Résumé" para={project.resume} w="40"></Citation>
        </div>
    );
}

export default SectionResume;