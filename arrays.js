var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(n){
  var catNames = ["Belle", "Ariel", "Jasmine"]
  return [n,...catNames];
}

function destructivelyAddElementToBeginningOfArray(n){
  var catNames = ["Belle", "Ariel", "Jasmine"]
  catNames.unshift(n)
  return catNames;
}
