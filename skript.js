

var hot = false
var temp = -32


if (temp > 80) {

  console.log("Hot Outside!");

}
else if (temp <= 80 && temp >= 50) {
  console.log("Average temp outside");

  }
else if (temp < 50 && temp >= 32) {
  console.log("it is pretty darn cold outside");
}
else if (temp < 32 && temp > 0) {
  console.log("Its damn near frezzing out, bundle up");
}
else if (temp <= 0 && temp < 0) {
  console.log("you'll freeze to death in those sub-zero temperatures out there. Please stay inside and stay warm");
}
