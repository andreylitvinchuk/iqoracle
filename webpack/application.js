// require('./utils/vanilla-ujs');
// require('./utils/mountComponents');

require('./js/libs/amcharts');
require('./js/libs/serial');
require('./js/libs/light');
require('./js/libs/amstock');
require('./js/main');
require('./js/charts');

$(document).ready(function(){
  $('#chartdiv').each(function(){
    var w = $(this).parents('.content').width(),
      h = $(this).parents('.content').height()-(($(this).parents('.content').height()/100)*4);
    $(this).attr("height", h);
    $(this).attr("width", w);
    $(this).css("height", h);
    $(this).css("width", w);
  });


});
