import React from 'react';
import '../scss/social.scss';
import SocialButton from './Social_button';

import datas from '../../ressources/datas/fr.json';

function Social() {
  return (
    <div className="Social">
      <ul>
        {Object.keys(datas.social).map((v, i) => <li key={i}><SocialButton social={datas.social} id={i}></SocialButton></li> )}
      </ul>
    </div>
  );
}

export default Social;