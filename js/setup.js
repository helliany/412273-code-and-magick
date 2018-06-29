'use strict';

(function () {
  var WIZARDS_LENGTH = 4;

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

  // создание волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // отрисовка волшебников
  var successHandler = function (wizards) {
    var similarListElement = setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var arrWizards = window.utils.shuffleArr(wizards);
    for (var i = 0; i < WIZARDS_LENGTH; i++) {
      fragment.appendChild(renderWizard(arrWizards[i]));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 80px auto; padding: 20px; width: 760px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '25px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  // отмена действия формы по умолчанию
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    },
    errorHandler);
    evt.preventDefault();
  });

})();
