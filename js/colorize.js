// изменение цвета мантии, глаз и файерболла по нажатию
'use strict';

(function () {
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var inputCoat = setup.querySelector('input[name=coat-color]');
  var inputEyes = setup.querySelector('input[name=eyes-color]');
  var inputFireball = setup.querySelector('input[name=fireball-color]');

  var colorize = function (element, wizardColor, wizardInput) {
    element.addEventListener('click', function () {
      var randomColor = window.utils.getRandom(wizardColor);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = randomColor;
      } else {
        element.style.fill = randomColor;
      }
      wizardInput.value = randomColor;
    });
  };

  colorize(wizardCoat, WIZARD_COAT, inputCoat);
  colorize(wizardEyes, WIZARD_EYES, inputEyes);
  colorize(wizardFireball, WIZARD_FIREBALL, inputFireball);

})();
