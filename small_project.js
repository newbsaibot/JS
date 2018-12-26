
// Prompting the user for information such as first and last name, age, height etc.
var firstName = prompt ("First name please: ")
var lastName = prompt ("What is your last name please: ")
var age = prompt ("How old are you: ")
var height = prompt ("How tall are you: ")
var petName = prompt ("What is you pets Name: ")
var petType = prompt ("What kind of pet is it: ")





//created 5 conditions with a null value meaning nothing is realy stored in them just yet.
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;
var typeCond = null;


//Condition for nameCond
if (firstName[0] === "L" && lastName[0] === "C") {
  nameCond = true;
}else {
  nameCond = false;
}


//Condition for ageCond
if (age < 33 && age > 31) {
  ageCond = true;
  console.log("So far it seems you are who you say you are");
}else {
  ageCond = false;
}


//Condition for heightCond
if (height < 166 && height > 164) {
  heightCond = true;
  console.log("You're getting closer to accessing the worlds most Classified files");
}else {
  heightCond = false;
}


// Condition for petName
if (petName === "Rhino") {
  petCond = true;
  console.log("Nice name for a pet");
}else {
  petCond =  false;
}


//condition for petType
if (petType[petType.length-1] === "g") {
  typeCond = true;
  console.log("Looking good so far, one more security check........ ");
}else {
  typeCond = false;
}

//Check all conditions
if (nameCond && ageCond && heightCond && petCond && typeCond){
  // My secret message
  console.log("Time to spy using the worlds most high profiled files")
}else{
  console.log("You're a fraud! Get out of here, System will self destruct after a few more attempts")
}
