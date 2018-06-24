'use strict';

(function () {
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
    'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
    'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_LENGTH = 4;

  var setup = document.querySelector('.setup');

  // создание массива
  var fillArray = function () {
    var wizardsArray = [];

    for (var j = 0; j < WIZARDS_LENGTH; j++) {
      wizardsArray[j] = {
        name: window.utils.getRandom(WIZARD_NAMES) + ' ' + window.utils.getRandom(WIZARD_SURNAMES),
        coatColor: window.utils.getRandom(WIZARD_COAT),
        eyesColor: window.utils.getRandom(WIZARD_EYES)
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
    var similarListElement = setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_LENGTH; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  addElements();

  // показываем блок setup-similar
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
