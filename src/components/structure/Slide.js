import React from 'react';
import Images from '../../ressources/images/images';

import '../scss/slide.scss';

import { Link } from "react-router-dom";

function Slide({ object, id }) {
  return (
    <div className="Slide">
      <Link to={`/project/${id}`}>
        <div className="component date">
          <p>{object[id].date}</p>
        </div>
        <div className="component image">
          <img src={Images.find(x => x.id === object[id].images.slide).src} />
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

export default Slide;