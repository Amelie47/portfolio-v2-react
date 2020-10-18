function toSmoothTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toTop() {
  window.scrollTo(0, 0);
}

function toInitialPos() {
  window.scrollTo(0, localStorage.getItem('pos'));
}

function setScrollPosition() {
  localStorage.setItem('pos', window.scrollY);
}

function removeScrollPosition() {
  localStorage.removeItem('pos');
}

export {
  toTop,
  toSmoothTop,
  toInitialPos,
  setScrollPosition,
  removeScrollPosition,
};
