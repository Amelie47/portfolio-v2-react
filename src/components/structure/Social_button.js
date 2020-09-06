import React from 'react';
import Line from './Line';
import Images from '../../ressources/images/imagesSocial';

import '../scss/social_button.scss';

function SocialButton({ social, id }) {
  const logo = Images.find(
    (y) => y.code === social.code + social.liens[id].image_id
  );

  return (
    <div className='SocialButton'>
      <a href={social.liens[id].url} target='blank'>
        <span className='circle'></span>
        <Line h='25'></Line>
        <img src={logo.src} alt={logo.description} />
      </a>
      <p className='text'>{social.liens[id].name}</p>
    </div>
  );
}

export default SocialButton;
