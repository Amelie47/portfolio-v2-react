function pattern1() {
  console.log('pattern 1');

  let imagesComponents = document.querySelectorAll('.PatternImageComponent');
  let backArrows = document.querySelectorAll('.back');
  let imagesDiv = [];
  let activeElement = document.querySelector('.image.active');

  // Récupère les elements image dans un tableau
  for (let i = 0; i < imagesComponents.length; i++) {
    const element = imagesComponents[i];
    const imageDiv = element.querySelector('.image');
    imagesDiv.push(imageDiv);
  }

  // Affecte la class active lorsqu'une image est cliquée
  for (let i = 0; i < imagesComponents.length; i++) {
    const element = imagesComponents[i];
    const imageDiv = element.querySelector('.image');
    element.addEventListener('click', () => {
      console.log("clicked");
      if (activeElement == null) {
        unsetClassAll(imagesDiv, 'active');
        setClassAll(imagesDiv, 'unactive');
        unsetClass(imageDiv, 'unactive');
        setClass(imageDiv, 'active');

        activeElement = document.querySelector('.image.active');
        let commentId = activeElement.dataset.target;
        let commentElement = document.querySelector('#comment' + commentId);

        setClass(commentElement, 'active');
      }
    });
  }

  // Enlève la classe active et retour à la normale
  for (let i = 0; i < backArrows.length; i++) {
    const back = backArrows[i];
    back.addEventListener("click", (e) => {
      if (e.target.dataset.tag != 'img-tag' && activeElement != null) {
        backToAll();
      }
    })
  }
  activeElement.addEventListener("click", () => {
    backToAll();
  })
  
}

function backToAll() {
  unsetClassAll(imagesDiv, 'active');
  unsetClassAll(imagesDiv, 'unactive');
  let commentId = activeElement.dataset.target;
  let commentElement = document.querySelector('#comment' + commentId);
  unsetClass(commentElement, 'active');
  activeElement = document.querySelector('.image.active');
}

function setClass(element, classname) {
  element.classList.add(classname);
}

function unsetClass(element, classname) {
  element.classList.remove(classname);
}

function setClassAll(array, classname) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    setClass(element, classname);
  }
}

function unsetClassAll(array, classname) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    unsetClass(element, classname);
  }
}

export default pattern1;
