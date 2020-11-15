import initActiveLanguage from '../js/Lang';
import setMenu from '../js/Menu';
import Pattern1 from './patterns/Pattern1';
// import Theme from './Theme';

function onLoad() {
  document.addEventListener('DOMContentLoaded', () => {
    initActiveLanguage();
    setMenu();

    // let theme = new Theme();
    // theme.launch();

    let pattern = new Pattern1();
    pattern.launch();

    window.onstorage = () => {
      console.log(localStorage.getItem('theme'));
    };
  });
}

export default onLoad;
