import React from 'react';
import Citation from '../Citation';

import '../../../scss/ProjectStyles/Patterns/pattern1.scss';
import Images from '../../../../ressources/images/imagesProjects';

function Pattern1({ imageCode, projectScreenSectionImages }) {
  return (
    <div className='Pattern1'>
      <div className='images-container'>
        {Object.keys(projectScreenSectionImages).map((v, i) => (
          <PatternImageComponent
            code={imageCode}
            imageObject={projectScreenSectionImages[i]}
            index={i}
          ></PatternImageComponent>
        ))}
      </div>

      <div className='comments-container'>
        {Object.keys(projectScreenSectionImages).map((v, i) => (
          <PatternCommentComponent
            imageObject={projectScreenSectionImages[i]}
            index={i}
          ></PatternCommentComponent>
        ))}
      </div>
    </div>
  );
}

function PatternImageComponent({ code, imageObject, index }) {
  const image = Images.find((x) => x.code === code + imageObject.id);

  return (
    <div className='PatternImageComponent'>
      <div className='image' id={'image' + (index + 1)} data-target={index + 1}>
        <p className='imageTitle'>{imageObject.title}</p>
        <img src={image.src} alt={image.description} data-tag='img-tag' />
      </div>
    </div>
  );
}

function PatternCommentComponent({ imageObject, index }) {
  return (
    <div className='PatternCommentComponent'>
      <div
        className='comment'
        id={'comment' + (index + 1)}
        data-image={index + 1}
      >
        <p>
          <span className='commentTitle'>{imageObject.title}</span>
          {imageObject.legende}
        </p>
      </div>
    </div>
  );
}

export default Pattern1;
