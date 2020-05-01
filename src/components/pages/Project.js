import React from 'react';
import Langues from '../structure/Langues';
import Logo from '../structure/Logo';
import Social from '../structure/Social';
import Button from '../structure/Button';
import ProjectTitle from '../structure/Project_Title';

import '../scss/project.scss';

import datas from '../../ressources/datas/fr.json';

import {useParams, Link} from "react-router-dom";


function Project() {

    // Objet
    let { id } = useParams();
    const project = datas.projects.find((element) => element.id === id);

    // Couleurs
    const primaryStyle = {backgroundColor: project.couleurs.primaire};
    const secondaryStyle = {backgroundColor: project.couleurs.secondaire};
    const thirdStyle = {backgroundColor: project.couleurs.tertiaire};

    return (
        <div className="Project">
            <Langues></Langues>
            <Logo></Logo>
            <Social></Social>

            <h1>{project.name}</h1>
            <Link to={`/`}><Button rotate="gauche" shadow="true"></Button></Link>

            <ProjectTitle project={project}></ProjectTitle>
        </div>
    );
}

export default Project;