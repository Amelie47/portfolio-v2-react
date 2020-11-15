export default class Theme {
  launch() {
    this.initElements();
    this.initEvents();
  }

  initElements() {
    this.currentTheme = localStorage.getItem('theme') || 'th1';
    this.appElement = document.querySelector('.App');
    this.theme = null;
  }

  initEvents() {
    this._setDefaultTheme();
    this.setThemeStyle();
  }

  setThemeStyle() {
    switch (this.currentTheme) {
      case 'th1':
        this._setAppClassname('Theme1');
      case 'th2':
        this._setAppClassname('Theme2');
      default:
        this._setAppClassname('Theme1');
    }
  }

  _setAppClassname(themeClassName) {
    this.appElement.className = 'App ' + themeClassName;
  }

  _setDefaultTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }
}
