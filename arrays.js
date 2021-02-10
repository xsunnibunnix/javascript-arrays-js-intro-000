var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(n){
  var catNames = ["Belle", "Ariel", "Jasmine"];
  [n, ...catNames];
  return catNames;
}

function destructivelyAddElementToBeginningOfArray(n){
  var catNames = ["Belle", "Ariel", "Jasmine"];
  catNames = [n, ...catNames];
  return catNames;
}
