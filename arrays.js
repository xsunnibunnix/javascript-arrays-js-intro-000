var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var catNames = ["Belle", "Ariel", "Jasmine"];
function addElementToBeginningOfArray(catNames,n){
  [n, ...catNames]
  return catNames;
}

var catNames = ["Belle", "Ariel", "Jasmine"];
function destructivelyAddElementToBeginningOfArray(catNames,n){
  catNames = catNames.unshift(n,...catNames);
  return catNames;
}
