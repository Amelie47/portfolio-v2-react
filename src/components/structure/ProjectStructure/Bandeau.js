import React from 'react';

import getDatas from '../../js/Datas';

import '../../scss/ProjectStyles/bandeau.scss';

function Bandeau({ id }) {
  const project = getDatas().projects.find((element) => element.id === id);

  // Couleurs
  const primaryStyle = {
    color: project.couleurs.primaire,
    textStrokeColor: project.couleurs.primaire,
  };
  // const secondaryStyle = {backgroundColor: project.couleurs.secondaire};
  // const thirdStyle = {backgroundColor: project.couleurs.tertiaire};

  return (
    <div className='Bandeau'>
      <ul className='slide-right'>
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
      </ul>
      <ul className='slide-left'>
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
      </ul>
      <ul className='slide-right'>
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
        {Object.keys(project.bandeau).map((v, i) => (
          <li style={primaryStyle} key={i}>
            {project.bandeau[i].name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bandeau;
