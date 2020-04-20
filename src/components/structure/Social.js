import React from 'react';
import '../scss/social.scss';
import SocialButton from './Social_button';

import github from '../../ressources/images/github.png';
import linkedin from '../../ressources/images/linkedin.png';

function Social() {
  return (
    <div className="Social">
      <ul>
        <li><SocialButton text="Github" href="https://github.com/Amelie47" img={github}></SocialButton></li>
        <li><SocialButton text="Linkedin" href="https://www.google.com" img={linkedin}></SocialButton></li>
      </ul>
    </div>
  );
}

export default Social;