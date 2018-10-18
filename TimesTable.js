/*
This is an application to demostrate the use of foeach in a multiplication application

*/

const yargs = require('yargs');
const argv = yargs

.options ({
    TimesTable: {
        demand: true,
        alias: ('TimesTable', 't')
    } 

})

.argv;

//Try catch to ensure input is between 2 and 12

try {
    if( argv.TimesTable < 2 || argv.TimesTable > 12) {
        throw ' Number must be between 2 and 12'; 
    };

    if (typeof argv.TimesTable != 'number') {
        throw 'Input must be a number'
    };
}

catch(err) {
        console.log(err)
        return;
    }

    // Function to calculate the times table

let timesCalculator = () => {

    let Times = [1,2,3,4,5,6,7,8,9,10,11,12];

    let numCount = 0;

    Times.forEach(element => {
        element *= argv.TimesTable;
        numCount += 1;
        console.log(`${argv.TimesTable} * ${numCount} =  ${element}`);
        
        
    });
};

timesCalculator();