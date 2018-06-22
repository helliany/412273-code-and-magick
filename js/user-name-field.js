// валидация ввода имени персонажа
'use strict';

(function () {

  window.userNameField = window.setup.querySelector('.setup-user-name');

  var validateInput = function () {
    if (window.userNameField.validity.tooShort) {
      window.userNameField.setCustomValidity('Имя слишком короткое');
    } else if (window.userNameField.validity.tooLong) {
      window.userNameField.setCustomValidity('Имя слишком длинное');
    } else if (window.userNameField.validity.valueMissing) {
      window.userNameField.setCustomValidity('Обязательное поле');
    } else {
      window.userNameField.setCustomValidity('');
    }
  };

  window.userNameField.addEventListener('invalid', function () {
    validateInput();
  });

})();
