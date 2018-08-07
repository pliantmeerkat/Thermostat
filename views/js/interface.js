$(document).ready(function() {
var thermostat = new Thermostat();
$('#current_temp').text(thermostat.temperature);

$('#temp_up').on('click', function() {
  thermostat.increaseTemp(1);
  $('#current_temp').text(thermostat.temperature)
  $('#current_temp').css('color', temp_color (thermostat.temperature))
});
$('#temp_down').on('click', function() {
  thermostat.decreaseTemperature(1);
  $('#current_temp').text(thermostat.temperature)
  $('#current_temp').css('color', temp_color (thermostat.temperature))
});
$('#powersaving').on('click', function() {
  if(thermostat.powerMode == true) {
    $('#powersaving').css('background-color', 'red');
  }
  else {
    $('#powersaving').css('background-color', 'green');
  }
  thermostat.powerSwitch();
  });
  function temp_color (temp) {
    if(temp < 15) {
      return('blue');
    }
    else if(temp < 26) {
      return('lime');
    }
    else if(temp < 34) {
      $('#tempdisplay').css('background-color', 'yellow');
      return('red');
    }
    else {
      $('#tempdisplay').css('background-image', "url('https://media.giphy.com/media/z9AUvhAEiXOqA/giphy.gif'");
      return('black')
    }
  }
});