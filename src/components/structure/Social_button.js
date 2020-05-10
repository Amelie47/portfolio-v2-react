import React from 'react';
import Line from './Line';
import Images from '../../ressources/images/images';

import '../scss/social_button.scss';


function SocialButton({social,id}) {
  return (
    <div className="SocialButton">
        <a href={social.liens[id].url} target='blank'>
            <span className="circle"></span>
            <Line h="25"></Line>
            <img src={Images.find(y => y.code === social.code + social.liens[id].image_id).src}/>
        </a>
        <p className="text">{social.liens[id].name}</p>
    </div>
  );
}

export default SocialButton;