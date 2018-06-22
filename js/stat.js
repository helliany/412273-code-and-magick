'use strict';

(function () {

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT);
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
    renderCloud(ctx, window.constants.CLOUD_X + window.constants.GAP, window.constants.CLOUD_Y + window.constants.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, '#fff');

    renderText(ctx, 'Ура вы победили!', window.constants.TEXT_X, 2 * window.constants.GAP);
    renderText(ctx, 'Список результатов:', window.constants.TEXT_X, 2 * window.constants.GAP + window.constants.TEXT_GAP);

    var maxTime = getMaxElement(times);

    var getRandomColor = function () {
      return Math.random().toFixed(2);
    };

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + getRandomColor() + ')';
      ctx.fillRect(window.constants.BAR_X + i * (window.constants.BAR_WIDTH + window.constants.BAR_GAP),
          window.constants.BAR_Y, window.constants.BAR_WIDTH, (-window.constants.BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], window.constants.BAR_X + i * (window.constants.BAR_WIDTH + window.constants.BAR_GAP), window.constants.BAR_Y + window.constants.GAP);
      ctx.fillText(Math.round(times[i]), window.constants.BAR_X + i * (window.constants.BAR_WIDTH + window.constants.BAR_GAP),
          window.constants.BAR_Y + (-window.constants.BAR_HEIGHT * times[i]) / maxTime - 2 * window.constants.GAP);
    }
  };

})();
