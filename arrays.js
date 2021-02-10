var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var catNames = ["Belle", "Ariel", "Jasmine"];
function addElementToBeginningOfArray(catNames,n){
  return [n, ...catNames]
}

var catNames = ["Belle", "Ariel", "Jasmine"];
function destructivelyAddElementToBeginningOfArray(catNames,n){
  catNames.unshift(n);
  return catNames;
}

function addElementToEndOfArray(catNames,n){
  return [...catNames, n];
}

function destructivelyAddElementToEndOfArray(catNames,n){
  catNames.push(n)
  return catNames;
}
