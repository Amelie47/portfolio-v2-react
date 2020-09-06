import React from 'react';
import '../scss/langues.scss';

function Langues() {
  window.onload = function () {
    setDefaultActiveLang();
  };

  const changeLang = (e) => {
    e.preventDefault();
    localStorage.setItem('lang', e.target.dataset.lang);
    removeAllActive();
    e.target.className = 'active';
    window.location.reload();
  };

  return (
    <div className='Langues'>
      <ul className='langlist'>
        <li onClick={changeLang} data-lang='fr'>
          FR
        </li>
        <li onClick={changeLang} data-lang='en'>
          EN
        </li>
        <li onClick={changeLang} data-lang='it'>
          IT
        </li>
      </ul>
    </div>
  );

  function setDefaultActiveLang() {
    let items = document.querySelector('.langlist').children;
    const lang = localStorage.getItem('lang') || 'fr';
    for (var i = 0; i < items.length; i++) {
      if (items[i].dataset.lang === lang) items[i].className = 'active';
    }
  }

  function removeAllActive() {
    let items = document.querySelector('.langlist').children;
    for (var i = 0; i < items.length; i++) {
      items[i].className = '';
    }
  }
}

export default Langues;
