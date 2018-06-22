// изменение цвета мантии, глаз и файерболла по нажатию
'use strict';

(function () {

  var wizardCoat = window.setup.querySelector('.wizard-coat');
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var inputCoat = window.setup.querySelector('input[name=coat-color]');
  var inputEyes = window.setup.querySelector('input[name=eyes-color]');
  var inputFireball = window.setup.querySelector('input[name=fireball-color]');

  var colorize = function (element, wizardColor, wizardInput) {
    element.addEventListener('click', function () {
      var randomColor = window.getRandom(wizardColor);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = randomColor;
      } else {
        element.style.fill = randomColor;
      }
      wizardInput.value = randomColor;
    });
  };

  colorize(wizardCoat, window.constants.WIZARD_COAT, inputCoat);
  colorize(wizardEyes, window.constants.WIZARD_EYES, inputEyes);
  colorize(wizardFireball, window.constants.WIZARD_FIREBALL, inputFireball);

})();
