'use strict';

(function () {

  // создание массива
  var fillArray = function () {
    var wizardsArray = [];

    for (var j = 0; j < window.constants.WIZARDS_LENGTH; j++) {
      wizardsArray[j] = {
        name: window.getRandom(window.constants.WIZARD_NAMES) + ' ' + window.getRandom(window.constants.WIZARD_SURNAMES),
        coatColor: window.getRandom(window.constants.WIZARD_COAT),
        eyesColor: window.getRandom(window.constants.WIZARD_EYES)
      };
    }
    return wizardsArray;
  };

  var wizards = fillArray();

  // создание волшебников
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // отрисовка волшебников
  var addElements = function () {
    var similarListElement = window.setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.constants.WIZARDS_LENGTH; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  addElements();

  // показываем блок setup-similar
  window.setup.querySelector('.setup-similar').classList.remove('hidden');

})();
