import React from 'react';
import Images from '../../../ressources/images/imagesProjects';

import '../../scss/ProjectStyles/slide.scss';

import { Link } from 'react-router-dom';
import { setScrollPosition } from '../../js/Scroll';

function ProjectSlide({ object, id }) {
  const image = Images.find(
    (x) => x.code === object.images.code + object.images.slide
  );

  return (
    <div className='ProjectSlide'>
      <Link to={`/project/${id}`} onClick={setScrollPosition}>
        <div className='component date'>
          <p>{object.date}</p>
        </div>
        <div className='component image'>
          <img src={image.src} alt={image.description} />
        </div>
        <div className='component techno'>
          <ul>
            {Object.keys(object.techno).map((v, i) => (
              <li key={i}>{object.techno[i].name}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default ProjectSlide;
