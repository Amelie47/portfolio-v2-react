import setMenu from '../js/Menu';
import Pattern1 from './patterns/Pattern1';

function onLoad() {
  document.addEventListener('DOMContentLoaded', () => {
    initActiveLanguage();
    setMenu();

    let pattern = new Pattern1();
    pattern.launch();
  });

  function initActiveLanguage() {
    let langlist = document.querySelector('.langlist');
    if (langlist != null) {
      const items = langlist.children;
      let lang = localStorage.getItem('lang') || 'fr';
      console.log(lang);
      for (var i = 0; i < items.length; i++) {
        if (items[i].dataset.lang === lang) items[i].className = 'active';
      }
    }
  }
}

export default onLoad;
