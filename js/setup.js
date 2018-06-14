'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_LENGTH = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// открытие/закрытие окна настройки персонажа
// Нажатие на элемент .setup-open удаляет класс hidden у блока setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !userNameInput.matches(':focus')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// валидация ввода имени персонажа
var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// изменение цвета мантии, глаз и файерболла по нажатию
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputCoat = setup.querySelector('input[name=coat-color]');
var inputEyes = setup.querySelector('input[name=eyes-color]');
var inputFireball = setup.querySelector('input[name=fireball-color]');

wizardCoat.addEventListener('click', function () {
  var randomCoat = getRandom(WIZARD_COAT);
  wizardCoat.style.fill = randomCoat;
  inputCoat.value = randomCoat;
});

wizardEyes.addEventListener('click', function () {
  var randomEyes = getRandom(WIZARD_EYES);
  wizardEyes.style.fill = randomEyes;
  inputEyes.value = randomEyes;
});

wizardFireball.addEventListener('click', function () {
  var randomFireball = getRandom(WIZARD_FIREBALL);
  wizardFireball.style.backgroundColor = randomFireball;
  inputFireball.value = randomFireball;
});

// рандомный элемент массива
var getRandom = function (arr) {
  return arr[Math.floor((Math.random() * arr.length))];
};

// создание массива
var fillArray = function () {
  var wizardsArray = [];

  for (var j = 0; j < WIZARDS_LENGTH; j++) {
    wizardsArray[j] = {
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(WIZARD_COAT),
      eyesColor: getRandom(WIZARD_EYES)
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
var similarListElement = document.querySelector('.setup-similar-list');

var addElements = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_LENGTH; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

addElements();

// показываем блок setup-similar
setup.querySelector('.setup-similar').classList.remove('hidden');
