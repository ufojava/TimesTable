/*
This Application will use Data from the London Underground JSOn File
(1) Print to standard output all the underground stations
(2) Name search for Ungerground station
(3) Zone search for Underground station
*/

//Load Library File System,lodash & Varaibles
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
let UGstations = fs.readFileSync('LondonUnderground.JSON');
let ldnConvertStations = JSON.parse(UGstations);
let stations = ldnConvertStations.stations;
let  myArraySize = _.size(stations);

//Section to take search option 
let argv = yargs

.options ({

underground: {

  description:  'Underground Station',
  alias:  ('underground', 'u'),
  string: true

},

 zone: {
   description:  'Station location zone',
     alias:  ('zone','z'),
     string: true
  
 },

 line: {
   description:  'Train Line',
   alias:  ('line','l'),
   string: true
 },

 selector: {
   description: 'Function Selector All stations or (Zones, Lines, Stations',
   alias:       ('selector', 's')

 },

 help: {
   'All Underground Stations': 'Type -s 1 and press enter',
   'Underground Station Search by Zone': 'Type -s 2 -z [Station Zone]',
   'Station Line Search': 'Type -s 3 Enter Underbround line - ba, bak for bakerloo',
   alias: ('help', 'h')
 }



})

.argv;


let lndUnderGound = () => {

//All stations in the JSON file
  if (argv.selector == 1) {

    
    try {

      if (argv.underground == 'undefined' || argv.line == 'undefined' || argv.zone == 'underfined'
    
            || typeof argv.underground == 'string' || typeof argv.line == 'string' || typeof argv.zone == 'string') {
          throw 'No other options are allowed!!!'
      } 
    }
  
      catch(error1) {
      console.log(error1);
      return
    };


  console.log('The London Stations are:');
  console.log('--------------------------------------');
  console.log('');

    for (let i = 0; i < myArraySize; i ++) {
 
  console.log(`${stations[i].name} - ${stations[i].lines} - ${stations[i].zones}`);

     };

} else if (argv.selector == 2) {

  console.log('The Underground Search:');
  console.log('--------------------------------------');
  console.log('');

  argv.underground = _.startCase(argv.underground);
  
  

  for (let i = 0; i < myArraySize; i ++ ) {
    let srchStationString = _.startsWith(stations[i].name, argv.underground);

    if (srchStationString) {
      console.log(stations[i].name);
    };
  };
   
    

} else if (argv.selector == 3) {

  console.log(`The stations in zone ${argv.zone} `);
  console.log('--------------------------------------');
  console.log('');

  
  for (let i = 0; i < myArraySize; i ++ ) {


    if (stations[i].zones == argv.zone) {
      console.log(stations[i].name);
    };
  };



} else if (argv.selector == 4) {

  argv.line = _.startCase(argv.line);
  let myGlobalLineInput = argv.line;

  //The section will complete the line name
  

    let switchLine = ()  => {

    let allUnLine = ['Bakerloo', 'Circle','Disrict','Hammersmith & City', 'Metropolitan', 'Northern', 'Piccadilly'];
    
    let myLineInput = argv.line;
       
        switch (true) {

          case myLineInput.startsWith('B'):
          myGlobalLineInput = allUnLine[0];
          break;

          case myLineInput.startsWith('C'):
          myGlobalLineInput = allUnLine[1];
          break;

          case myLineInput.startsWith('D'):
          myGlobalLineInput = allUnLine[2];
          break;

          case myLineInput.startsWith('H'):
          myGlobalLineInput = allUnLine[3];
          break;

          case myLineInput.startsWith('M'):
          myGlobalLineInput = allUnLine[4];
          break;

          case myLineInput.startsWith('N'):
          myGlobalLineInput = allUnLine[5];
          break;

          case myLineInput.startsWith('P'):
          myGlobalLineInput = allUnLine[6];
          break;

          default:
          'Not an Underground Station'


        };
      };
 

switchLine();
  console.log('');
  console.log('');
  console.log(`List of ${myGlobalLineInput} Line Stations`);
  console.log('--------------------------------------');
  console.log('');

  
  for (let i = 0; i < myArraySize; i ++ ) {
    let srchLineString = _.startsWith(stations[i].lines, argv.line);
    

      if (srchLineString){

        console.log(stations[i].name);
      
      };
  
      };
      
};

};

lndUnderGound();