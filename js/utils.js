'use strict';

(function () {
  // рандомный элемент массива
  var getRandom = function (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
  };

  // перемешать массив
  var shuffleArr = function (array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  window.utils = {
    getRandom: getRandom,
    shuffleArr: shuffleArr
  };
})();
