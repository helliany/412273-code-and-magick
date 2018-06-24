// валидация ввода имени персонажа
'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var userNameField = setup.querySelector('.setup-user-name');

  var validateField = function () {
    if (userNameField.validity.tooShort) {
      userNameField.setCustomValidity('Имя слишком короткое');
    } else if (userNameField.validity.tooLong) {
      userNameField.setCustomValidity('Имя слишком длинное');
    } else if (userNameField.validity.valueMissing) {
      userNameField.setCustomValidity('Обязательное поле');
    } else {
      userNameField.setCustomValidity('');
    }
  };

  userNameField.addEventListener('invalid', function () {
    validateField();
  });

})();
