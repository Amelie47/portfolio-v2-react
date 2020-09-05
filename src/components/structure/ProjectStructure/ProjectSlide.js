import React from 'react';
import Images from '../../../ressources/images/imagesProjects';

import '../../scss/ProjectStyles/slide.scss';

import { Link } from "react-router-dom";

function ProjectSlide({ object, id }) {

  const image = Images.find(x => x.code === object[id].images.code + object[id].images.slide);

  return (
    <div className="ProjectSlide">
      <Link to={`/project/${id}`}>
        <div className="component date">
          <p>{object[id].date}</p>
        </div>
        <div className="component image">
          <img src={image.src} alt={image.description}/>
        </div>
        <div className="component techno">
          <ul>
            {Object.keys(object[id].techno).map((v, i) => <li key={i}>{object[id].techno[i].name}</li>)}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default ProjectSlide;