function setMenu() {
  let menulist = document.querySelector('.Menu').querySelector('ul').children;

  for (let i = 0; i < menulist.length; i++) {
    const element = menulist[i];
    const targetId = element.dataset.target;
    let target = document.querySelector('#' + targetId);
    element.addEventListener('click', function () {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
  }
}

export default setMenu;
