import setMenu from '../js/Menu';

function onLoad() {
  window.onload = function () {
    initActiveLanguage();
    setMenu();
  };

  function initActiveLanguage() {
    let items = document.querySelector('.langlist').children;
    let lang = localStorage.getItem('lang') || 'fr';
    console.log(lang);
    for (var i = 0; i < items.length; i++) {
      if (items[i].dataset.lang === lang) items[i].className = 'active';
    }
  }
}

export default onLoad;
