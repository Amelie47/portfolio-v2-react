import React from 'react';
import Bandeau from '../structure/Bandeau';

import '../scss/project_title.scss';

import Images from '../../ressources/images/images';

function ProjectTitle({ project }) {

    return (
        <div className="ProjectTitle">
            <div className="project-title-content">
                <div className="component date">
                    <p>{project.date}</p>
                </div>
                <div className="component image">
                    <img src={Images.find(x => x.id === project.images.title).src} />
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