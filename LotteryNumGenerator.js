/*
This is an application that will create weekly lottery numbers 
It will consist of six regular numbers between 1 and 59
One bonus number, also between 1 and 59
Total numbers that will be generated will be 7
*/

//lodash used to sort numbers
const _ = require('lodash');

//Array where the number are stored
let weeklyLottoNumber = [];


//Function to create the random numbers
let LottoGen = () => {

   let genNumbers = 0;
    for (let i = 0; i < 8; i ++) {

    genNumbers = Math.floor(Math.random() * 60);
    weeklyLottoNumber.push(genNumbers);
    
    }
    
};


//Process to sort the order of the numbers

let orderArray = (inLottoArray) => {
    console.log(" ");
    console.log(" ");
    console.log('!!!!!!GENERATED WEEKLY NUMBERS !!!!!!!!');
    console.log("---------------------------------------- ");
    console.log(" ");
    console.log(" ");
    console.log(`All the Lotto numbers are:         ${inLottoArray}`);
    console.log(" ");
    inLottoArray = (_.orderBy(inLottoArray));
    console.log(`All the Lotto numbers in order:    ${inLottoArray}`);
    console.log(" ");
    console.log(" ");
};

//The program starts here!!!!!!

//Call function to the number genrator
LottoGen();

//Call function to sort the genrated numbers
orderArray(weeklyLottoNumber);
