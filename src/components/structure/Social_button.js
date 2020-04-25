import React from 'react';
import Line from './Line';
import Images from '../../ressources/images/images';

import '../scss/social_button.scss';


function SocialButton({object,id}) {
  return (
    <div className="SocialButton">
        <a href={object[id].url} target='blank'>
            <span className="circle"></span>
            <Line h="25"></Line>
            <img src={Images.find(x => x.id === object[id].image_id).src}/>
        </a>
        <p className="text">{object[id].name}</p>
    </div>
  );
}

export default SocialButton;