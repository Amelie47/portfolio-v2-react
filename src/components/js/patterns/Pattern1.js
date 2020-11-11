import Pattern from './Pattern';
import Utils from '../utils';

export default class Pattern1 extends Pattern {
  lauch() {
    super.launch();
  }

  initElements() {
    super.initElements();

    this.imagesComponents = document.querySelectorAll('.PatternImageComponent');
    this.backArrows = document.querySelectorAll('.back');

    this.imagesDiv = [];
    this._getImagesElements();

    this.activeElement = document.querySelector('.image.active');
    this.utils = new Utils();
  }

  initEvents() {
    super.initEvents();

    this._setActiveOnClick();
    this._unsetActiveOnClick();
  }

  _getImagesElements() {
    for (let i = 0; i < this.imagesComponents.length; i++) {
      const element = this.imagesComponents[i];
      const imageDiv = element.querySelector('.image');
      this.imagesDiv.push(imageDiv);
    }
  }

  _setActiveOnClick() {
    for (let i = 0; i < this.imagesComponents.length; i++) {
      const element = this.imagesComponents[i];
      const imageDiv = element.querySelector('.image');
      element.addEventListener('click', () => {
        if (this.activeElement == null) {
          this.utils.unsetClassAll(this.imagesDiv, 'active');
          this.utils.setClassAll(this.imagesDiv, 'unactive');
          this.utils.unsetClass(imageDiv, 'unactive');
          this.utils.setClass(imageDiv, 'active');

          this.activeElement = document.querySelector('.image.active');
          let commentId = this.activeElement.dataset.target;
          let commentElement = document.querySelector('#comment' + commentId);

          this.utils.setClass(commentElement, 'active');
        }
      });
    }
  }

  _unsetActiveOnClick() {
    for (let i = 0; i < this.backArrows.length; i++) {
      const back = this.backArrows[i];
      back.addEventListener('click', (e) => {
        if (e.target.dataset.tag != 'img-tag' && this.activeElement != null) {
          this._backToAll();
        }
      });
    }
    if (this.activeElement != null) {
      this.activeElement.addEventListener('click', () => {
        this._backToAll();
      });
    }
  }

  // Functions

  _backToAll() {
    this.utils.unsetClassAll(this.imagesDiv, 'active');
    this.utils.unsetClassAll(this.imagesDiv, 'unactive');
    let commentId = this.activeElement.dataset.target;
    let commentElement = document.querySelector('#comment' + commentId);
    this.utils.unsetClass(commentElement, 'active');
    this.activeElement = document.querySelector('.image.active');
  }
}
