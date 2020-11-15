import React from 'react';
import Citation from '../Citation';
import '../../../scss/ProjectStyles/Patterns/pattern2.scss';
import Images from '../../../../ressources/images/imagesProjects';

function Pattern2({ imageCode, projectScreenSectionImages }) {
  const imageObject = projectScreenSectionImages[0];
  const image = Images.find((x) => x.code === imageCode + imageObject.id);

  return (
    <div className='Pattern2'>
      <img src={image.src} alt={image.description} />
      <Citation
        titre={imageObject.title}
        params={imageObject.legende}
        w='40'
      ></Citation>
    </div>
  );
}

export default Pattern2;
