import React from 'react';

import datas from '../../ressources/datas/fr.json';

import '../scss/bandeau.scss';


function Bandeau({ id }) {

    const project = datas.projects.find((element) => element.id === id);

    // Couleurs
    const primaryStyle = {
        color: project.couleurs.primaire,
        textStrokeColor: project.couleurs.primaire
    };
    const secondaryStyle = {backgroundColor: project.couleurs.secondaire};
    const thirdStyle = {backgroundColor: project.couleurs.tertiaire};

    return (
        <div className="Bandeau">
            <ul  className="slide-right">
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
            </ul>
            <ul  className="slide-left">
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
                {Object.keys(project.bandeau).map((v, i) => <li style={primaryStyle}>{project.bandeau[i].name}</li>)}
            </ul>
        </div>
    );
}

export default Bandeau;