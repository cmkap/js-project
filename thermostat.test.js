const Thermostat = require('./thermostat')

let thermostat;
beforeEach(() => {
  thermostat = new Thermostat();
});

describe('Thermostat', () => {
    it('returns a temperature of 20', () =>{
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('increases the temperature by 1', () => {
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(21);
    });

    it('decreases the temperature by 1', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10', () =>{
        for(let i = 0; i < 15; i++) {
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toEqual(10);
    });

    it('has a default power saving mode that can be set to false', () => {
        thermostat.setPowerSavingMode(false);
        expect(thermostat.getPowerSavingMode()).toEqual(false);
    });

    it('has a maximum temperature of 25 degrees if power saving mode is on', () => {
        for(let i = 0; i < 15; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    });


    it('has a maximum temperature of 32 degrees if power saving mode is off', () => {
        thermostat.setPowerSavingMode(false)
        for(let i = 0; i < 15; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(32);
    });

    it('sets the temperature to 20 when "reset"', () => {
        for(let i = 0; i < 5; i++) {
            thermostat.down();
        }
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('has a current energy usage of "low-usage" if the temperature is less  18', () => {
        for(let i = 0; i < 5; i++) {
            thermostat.down();
        }
        expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('has a current energy usage of "medium-usage" if the temperature is less  than or equal to 25', () => {
        expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });

    it('has a current energy usage of "high-usage" if the temperature is less  than or equal to 25', () => {
        thermostat.setPowerSavingMode(false);
        for(let i = 0; i < 10; i++) {
            thermostat.up();
        }
        expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });
})