const Thermostat = require('./thermostat');
const readline = require('readline');

const thermostat = new Thermostat();

const rl = readline.createInterface({
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
        case 'exit':
            rl.close()
            break;
        default:
            console.log('Incorrect input')
        
    }
    console.log(`Temperature is ${thermostat.getTemperature()}`);
    rl.question('Enter command > ', commands)
};
   
console.log(`Temperature is ${thermostat.getTemperature()}`);
rl.question('Enter command > ', commands)

rl.on('close', () => {
    process.exit()
})


