'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 225;
var TEXT_GAP = 22;
var GAP = 10;
var BAR_X = 155;
var BAR_Y = 240;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXT_X, 2 * GAP);
  ctx.fillText('Список результатов:', TEXT_X, 2 * GAP + TEXT_GAP);

  var maxTime = getMaxElement(times);

  var red = 'rgba(255, 0, 0, 1)';
  var blue;

  var getRandomColor = function () {
    return Math.random();
  };

  var setBarColor = function () {
    if (names[i] === 'Вы') {
      return red;
    }
    return blue;
  };

  for (var i = 0; i < names.length; i++) {
    blue = 'rgba(0, 0, 255, ' + getRandomColor() + ')';
    ctx.fillStyle = setBarColor();
    ctx.fillRect(BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y + GAP);
    ctx.fillText(Math.round(times[i]), BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y + BAR_HEIGHT * times[i] / maxTime - 2 * GAP);
  }
};
