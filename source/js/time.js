'use strict';

(function () {

const timeContainer = document.querySelector('.time');

const getTime = function () {
  const data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();

  hour = updateTime(hour);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);

  timeContainer.textContent = hour + ":" + minutes + ":" + seconds;

  setTimeout(getTime, 1000);
}

const  updateTime = function(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

getTime();

})();
