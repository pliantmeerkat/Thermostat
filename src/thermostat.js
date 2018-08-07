"use strict";
function Thermostat () {
  this.powerMode = true;
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
  this.powerConsumption = 10;
}

Thermostat.prototype.powerSwitch = function () {
  switch(this.powerMode) {
    case true:
      this.maximumTemperature = 35;
      this.powerMode = false;
      break;
    case false:
      this.maximumTemperature = 25;
      this.powerMode = true;
      break;
  }
};

Thermostat.prototype.increaseTemp = function(num) {
  if(this.temperature + num > this.maximumTemperature) {
    throw new Error("Temperature above maximum\n power-save mode " + this.powerMode);
  }
  else {
    this.temperature += num;
  }
};

Thermostat.prototype.decreaseTemperature = function(num) {
  if(this.temperature - num < this.minimumTemperature) {
    throw new Error("Temperature below minimum");
  }
  else {
    this.temperature -= num;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if(this.powerConsumption < 18) {
    return "low-usage";
  }
  else if(this.powerConsumption < 25) {
    return "medium-usage";
  }
  else {
    return "high-usage";
  }
};

$( document ).ready(function() {
  
});
