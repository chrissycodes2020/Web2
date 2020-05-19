var response = prompt("Hello. " + "Whats your name?");
var myHeader = document.getElementById("header1");

var today = new Date();
var hourNow = today.getHours();
var greeting;

myHeader.style.color = "black";
myHeader.style.backgroundColor = "teal";
myHeader.innerText = "Hello, " + response;

if (hourNow > 18) {
  greeting = "Good evening";
} else if (hourNow > 12) {
  greeting = "Good afternoon";
} else if (hourNow > 0) {
  greeting = "Good morning";
} else {
  greeting = "Welcome";
}
document.write(greeting);
