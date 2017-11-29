'use strict';

window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeRect(110, 20, 420, 270);
	ctx.fillRect(110, 20, 420, 270);

	ctx.fillStyle = 'orange';
	ctx.strokeRect(100, 10, 420, 270);
	ctx.fillRect(100, 10, 420, 270);

	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';

	ctx.fillText('Ура, Вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 60);

	var max = -1;
    var maxIndex = -1;

    ctx.fillStyle = 'blue';
    for (var i = 0; i < times.length; i++) {
       var time = times[i];

       if(time > max){
          max = time;
          maxIndex = i;
        }
    }

	var histogramHeight = 150;
	var step = histogramHeight / (max - 0);

	var initialX = 140;
	var initialYNames = 270;
	var initialYTimes = 85;
	var initialYHistogram = 100;
	var bais = 100;
	var width = 40;

    for(var i = 0; i < times.length; i++) {
	   var randomOpacity = function (minValue, maxValue) {
		  return Math.random() * (maxValue - minValue) + minValue;
	    };

	   if(names[i] === 'Вы'){
		  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		}else {
       ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity(0.5, 1) + ')';
	   }

	   ctx.fillRect(initialX + bais * i, histogramHeight - times[i] * step + initialYHistogram, width, times[i] * step);
	   ctx.fillText(names[i], initialX + bais * i, initialYNames);
	   ctx.fillText(times[i].toFixed(0), initialX + bais * i, initialYTimes + histogramHeight - times[i] * step );
	}
};
