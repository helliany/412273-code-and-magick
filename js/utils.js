'use strict';

// рандомный элемент массива
(function () {
  var getRandom = function (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
  };

  window.utils = {
    getRandom: getRandom
  };
})();
