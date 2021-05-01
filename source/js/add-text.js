'use strict';

(function () {

const TextTemplate = document.querySelector('#text')
  .content
  .querySelector('.slider__text-item');
const form = document.querySelector('.form');
const input = form.querySelector('.form__input');
const textContainer = document.querySelector('.slider__first-screen-text');


const addBlockText = function () {
  const textElement = TextTemplate.cloneNode(true);
  textElement.textContent = input.value;

  // const fragment = document.createDocumentFragment();
  // fragment.appendChild(textElement);
  textContainer.appendChild(textElement);
}

const addAnimation = function () {
  const textItem = document.querySelectorAll('.slider__text-item');
  textItem[textItem.length - 1].classList.add('animation-active');
}


const onFormSubmit = function (evt) {
  evt.preventDefault();
  addBlockText();
  setTimeout(addAnimation, 500);
  form.reset();
}

form.addEventListener('submit', onFormSubmit);

})();
