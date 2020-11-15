import arrow_th1 from '../../ressources/images/arrow_th1.png';
import arrow_th2 from '../../ressources/images/arrow_th2.png';

function getImage() {
  const theme = localStorage.getItem('theme') || 'th1';

  switch (theme) {
    case 'th1':
      return arrow_th1;
    case 'th2':
      return arrow_th2;
    default:
      return arrow_th1;
  }
}

export default getImage;
