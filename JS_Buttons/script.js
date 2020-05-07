var response = prompt("What's your name?", "Good Morning");
var myHeader = document.getElementById("header1");

var tealPane = document.getElementById("tealPane");
var redButton = document.getElementById("changeToRed");
var purpleButton = document.getElementById("changeToPurple");
var orangePane = document.getElementById("orangePane");

myHeader.style.color = "red";
myHeader.style.backgroundColor = "plum";
myHeader.style.fontSize = "56px";
myHeader.innerText = "Hello, " + response;

console.log("Hello" + 5 + "pickles");

redButton.addEventListener("click", function () {
  console.log("Click happened!");
  tealPane.style.backgroundColor = "lightsalmon";
  var notification = document.createElement("h5");
  notification.innerText = "This is red now";
  tealPane.appendChild(notification);
});

purpleButton.addEventListener("click", function () {
  console.log("Click happened!");
  orangePane.style.backgroundColor = "purple";
  var notification = document.createElement("h5");
  notification.innerText = "This is purple now";
  orangePane.appendChild(notification);
});

var myHeader = document.getElementById("header2");
var response = prompt("What's your favorite color?", "Good Morning");

myHeader.style.color = "red";
myHeader.style.backgroundColor = "plum";
myHeader.style.fontSize = "56px";
myHeader.innerText = "I know you like... " + response;

var today = new Date();
var hourNow = today.getHours();
var greeting;

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
