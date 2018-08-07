"use strict";
describe("Thermostat", function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("Temperature Tests", function () {
    it("Has a strating temperature of 20", function () {
      expect(thermostat.temperature).toEqual(20);
    });
    it("can increase temperature", function () {
      thermostat.increaseTemp(2);
      expect(thermostat.temperature).toEqual(22);
    });
    describe("decrease temperature", function () {
      it("can decrease temperature", function () {
        thermostat.decreaseTemperature(2);
        expect(thermostat.temperature).toEqual(18);
      });
      it("throws an error if temp < min temp", function () {
        expect(function () { thermostat.decreaseTemperature(20) } ).toThrow(new Error("Temperature below minimum"))
      });
    });
  });
  describe("Power save mode", function () {
    describe("Power save mode on", function () {
      it("loads powermode on by default", function () {
        expect(thermostat.powerMode).toEqual(true);
      });
      it("has the correct maximum temperature", function () {
        expect(thermostat.maximumTemperature).toEqual(25);
      });
      it("throws an error at the correct temperature", function () {
        expect(function () { thermostat.increaseTemp(10) } ).toThrow(new Error("Temperature above maximum\n power-save mode true"))
      });
    });
    describe("Power save mode off", function () {
      beforeEach(function () {
        thermostat.powerSwitch(); 
      });
      it("has the correect maximum temperature", function () {
        expect(thermostat.maximumTemperature).toEqual(35);
      });
      it("throws an error at the correct temperature", function () {
        expect(function () { thermostat.increaseTemp(10) } ).not.toThrow(new Error("Temperature above maximum\n power-save mode true"))
        expect(function () { thermostat.increaseTemp(10) } ).toThrow(new Error("Temperature above maximum\n power-save mode false"))
      });
    });
  });
  describe("reset temperature", function () {
    it("can reset temperature to 20 deg", function () { 
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    })
  });
  describe("energy usage", function () {
    it("returns low-usage when below 18", function () {
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("returns medium-usage when below 25", function () {
      thermostat.powerConsumption = 20;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it("returns high usage when above 24", function () {
      thermostat.powerConsumption = 25;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
