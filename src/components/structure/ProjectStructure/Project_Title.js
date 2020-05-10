import React from 'react';
import Bandeau from './Bandeau';

import '../../scss/ProjectStyles/project_title.scss';

import Images from '../../../ressources/images/images';

function ProjectTitle({ project }) {

    return (
        <div className="ProjectTitle">
            <div className="project-title-content">
                <div className="component date">
                    <p>{project.date}</p>
                </div>
                <div className="component image">
                    <img src={Images.find(x => x.code === project.images.code + project.images.title).src} />
                </div>
                <div className="component techno">
                    <ul>
                        {Object.keys(project.techno).map((v, i) => <li>{project.techno[i].name}</li>)}
                    </ul>
                </div>
            </div>
            <Bandeau id={project.id}></Bandeau>
        </div>
    );
}

export default ProjectTitle;