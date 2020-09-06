import french_datas from '../../ressources/datas/fr.json';
import english_datas from '../../ressources/datas/en.json';
import italian_datas from '../../ressources/datas/it.json';

function getDatas() {
  const lang = localStorage.getItem('lang') || 'fr';

  switch (lang) {
    case 'en':
      return english_datas;
    case 'it':
      return italian_datas;
    default:
      return french_datas;
  }
}

export default getDatas;
