export default class Utils {
  setClass(element, classname) {
    element.classList.add(classname);
  }

  unsetClass(element, classname) {
    element.classList.remove(classname);
  }

  setClassAll(array, classname) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      this.setClass(element, classname);
    }
  }

  unsetClassAll(array, classname) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      this.unsetClass(element, classname);
    }
  }
}
