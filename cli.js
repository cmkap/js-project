const Thermostat = require('./thermostat');
const Readline = require('readline');

const thermostat = new Thermostat();

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const commands = (answer) => {
    switch(answer) {
        case 'up':
            thermostat.up()
            break;
        case 'down':
            thermostat.down()
            break;
        case 'stop':
            rl.close()
            break;
        case 'psm on':
            thermostat.setPowerSavingMode(true)
            break;
        case 'psm off':
            thermostat.setPowerSavingMode(false)
            break;
        default:
            console.log('Incorrect input')
        
    }
    
    thermostat.getTemperature() === 25 || thermostat.getTemperature() === 32 ? console.log(`Temperature is ${thermostat.getTemperature()} (maximum reached)`) : console.log(`Temperature is ${thermostat.getTemperature()}`);
    rl.question('Enter command > ', commands)
};
   
console.log(`Temperature is ${thermostat.getTemperature()}`);
rl.question('Enter command > ', commands)

rl.on('close', () => {
    process.exit()
})


