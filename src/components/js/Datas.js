import french_datas from '../../ressources/datas/fr.json';
import english_datas from '../../ressources/datas/en.json';

function getDatas() {
  const lang = localStorage.getItem('lang') || 'fr';
  if (lang === 'en') return english_datas;
  else return french_datas;
}

export default getDatas;
