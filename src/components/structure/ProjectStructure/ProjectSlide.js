import React from 'react';
import Images from '../../../ressources/images/images';

import '../../scss/ProjectStyles/slide.scss';

import { Link } from "react-router-dom";

function ProjectSlide({ object, id }) {
  return (
    <div className="ProjectSlide">
      <Link to={`/project/${id}`}>
        <div className="component date">
          <p>{object[id].date}</p>
        </div>
        <div className="component image">
          <img src={Images.find(x => x.code === object[id].images.code + object[id].images.slide).src} />
        </div>
        <div className="component techno">
          <ul>
            {Object.keys(object[id].techno).map((v, i) => <li>{object[id].techno[i].name}</li>)}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default ProjectSlide;