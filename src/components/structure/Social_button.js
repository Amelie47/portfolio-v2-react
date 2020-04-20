import React from 'react';
import '../scss/social_button.scss';
import Line from './Line';

function SocialButton({text,href,img}) {
  return (
    <div className="SocialButton">
        <a href={href} target='blank'>
            <span className="circle"></span>
            <Line h="25"></Line>
            <img src={img}/>
        </a>
        <p className="text">{text}</p>
    </div>
  );
}

export default SocialButton;