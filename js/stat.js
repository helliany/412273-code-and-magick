'use strict';

(function () {
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
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (ctx, text, x, y) {
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = '#000';
    ctx.fillText(text, x, y);
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

    renderText(ctx, 'Ура вы победили!', TEXT_X, 2 * GAP);
    renderText(ctx, 'Список результатов:', TEXT_X, 2 * GAP + TEXT_GAP);

    var maxTime = getMaxElement(times);

    var getRandomColor = function () {
      return Math.random().toFixed(2);
    };

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + getRandomColor() + ')';
      ctx.fillRect(BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y + GAP);
      ctx.fillText(Math.round(times[i]), BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_Y + (-BAR_HEIGHT * times[i]) / maxTime - 2 * GAP);
    }
  };

})();
