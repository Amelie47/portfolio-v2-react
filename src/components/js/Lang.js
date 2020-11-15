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
export default initActiveLanguage;
