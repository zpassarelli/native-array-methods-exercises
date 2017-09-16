var data = require('./data');

function entryCalculator (entrants) {
  if(entrants == undefined) return 0;
  let total = 0
  if(entrants['Adult']){
    total += entrants['Adult'] * data.prices['Adult'];
  }
  if(entrants['Senior']){
    total += entrants['Senior'] * data.prices['Senior'];
  }
  if(entrants['Child']){
    total += entrants['Child'] * data.prices['Child'];
  }
  return total;
};

function schedule (dayName) {
  // your code here
};

function animalCount (species) {
  // your code here
};

function animalMap (options) {
  // your code here
};

function animalPopularity (rating) {
  // your code here
};

function animalsByIds (ids) {
  // your code here
};

function animalByName (animalName) {
  // your code here
};

function employeesByIds (ids) {
  // your code here
};

function employeeByName (employeeName) {
  // your code here
};

function managersForEmployee (idOrName) {
  // your code here
};

function employeeCoverage (idOrName) {
  // your code here
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
