function setMenu() {
  let menu = document.querySelector('.Menu');

  if (menu != null) {
    const menulist = menu.querySelector('ul').children;
    const sections = initSectionsArray();

    for (let i = 0; i < menulist.length; i++) {
      const element = menulist[i];
      const targetId = element.dataset.target;
      const section = sections.find((element) => element.id === targetId);
      mooveTo(element, section.top);
    }

    window.onscroll = function () {
      let current = sections.find(
        (el) =>
          el.top - el.heigth / 2 <= window.scrollY &&
          window.scrollY <= el.top + el.heigth - el.heigth / 2
      );
      if (current == null) {
        for (let i = 0; i < menulist.length; i++) {
          menulist[i].removeAttribute('class');
        }
      } else {
        for (let i = 0; i < menulist.length; i++) {
          if (menulist[i].dataset.target === current.id)
            menulist[i].className = 'active';
          else menulist[i].removeAttribute('class');
        }
      }
    };

    function mooveTo(element, target) {
      element.addEventListener('click', function () {
        window.scrollTo({ top: target, behavior: 'smooth' });
        setActive(element);
      });
    }

    function setActive(element) {
      for (let i = 0; i < menulist.length; i++) {
        const item = menulist[i];
        item.removeAttribute('class');
      }

      element.classList = 'active';
    }

    function initSectionsArray() {
      const array = [];

      for (let i = 0; i < menulist.length; i++) {
        const element = menulist[i];
        const targetId = element.dataset.target;
        let target = document.querySelector('#' + targetId);
        array.push({
          id: targetId,
          top: target.offsetTop,
          heigth: target.clientHeight,
        });
      }

      return array;
    }
  }
}

export default setMenu;
