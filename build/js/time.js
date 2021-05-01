'use strict';

(function () {

const data = new Date();
const hour = data.getHours();
const minutes = data.getMinutes();
const seconds = data.getSeconds();
const timeContainer = document.querySelector('.time');


timeContainer.textContent = hour + ":" + minutes + ":" + seconds;

})();
