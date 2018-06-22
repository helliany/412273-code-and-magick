// рандомный элемент массива
'use strict';

(function () {

  window.getRandom = function (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
  };

})();
