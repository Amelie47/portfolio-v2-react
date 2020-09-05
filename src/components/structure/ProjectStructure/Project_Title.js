import React from 'react';
import Bandeau from './Bandeau';

import '../../scss/ProjectStyles/project_title.scss';

import Images from '../../../ressources/images/imagesProjects';

function ProjectTitle({ project }) {

    const image = Images.find(x => x.code === project.images.code + project.images.title);

    return (
        <div className="ProjectTitle">
            <div className="project-title-content">
                <div className="component date">
                    <p>{project.date}</p>
                </div>
                <div className="component image">
                    <img src={image.src} alt={image.description}/>
                </div>
                <div className="component techno">
                    <ul>
                        {Object.keys(project.techno).map((v, i) => <li key={i}>{project.techno[i].name}</li>)}
                    </ul>
                </div>
            </div>
            <Bandeau id={project.id}></Bandeau>
        </div>
    );
}

export default ProjectTitle;