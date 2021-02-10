var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(){
  var catNames = ["Belle", "Ariel", "Jasmine"]
  return ["Aurora",...catNames];
}

function destructivelyAddElementToBeginningOfArray(){
  var catNames = ["Belle", "Ariel", "Jasmine"]
  catNames.unshift("Aurora")
  return catNames;
}
