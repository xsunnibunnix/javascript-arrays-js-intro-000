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
  return catNames.unshift(n);
}
