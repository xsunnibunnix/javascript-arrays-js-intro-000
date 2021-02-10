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

function accessElementInArray(catNames,n){
  return catNames[n]
}

function destructivelyRemoveElementFromBeginningOfArray(catNames){
  catNames.shift()
  return catNames;
}

function removeElementFromBeginningOfArray(catNames){
  catNames.slice(1)
  return catNames
}

function destructivelyRemoveElementFromEndOfArray(catNames){
  catNames.pop()
  return catNames
}
