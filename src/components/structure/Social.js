import React from 'react';
import '../scss/social.scss';
import SocialButton from './Social_button';

import getDatas from '../js/Datas';

function Social() {
  const datas = getDatas().social;
  return (
    <div className='Social'>
      <ul>
        {Object.keys(datas).map((v, i) => (
          <li key={i}>
            <SocialButton social={datas} id={i}></SocialButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
