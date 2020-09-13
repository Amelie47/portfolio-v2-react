import React from 'react';
import '../scss/langues.scss';

import getDatas from '../js/Datas';

function Langues() {
  const languages = getDatas().languages;

  const changeLang = (e) => {
    e.preventDefault();
    localStorage.setItem('lang', e.target.dataset.lang);
    window.location.reload();
  };

  return (
    <div className='Langues'>
      <ul className='langlist'>
        {Object.keys(languages).map((v, i) => (
          <li onClick={changeLang} data-lang={languages[i].dataset} key={i}>
            {languages[i].name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Langues;
