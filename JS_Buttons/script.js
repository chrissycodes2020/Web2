var response = prompt("What's your name?", "Good Morning");
var myHeader = document.getElementById("header1");

var tealPane = document.getElementById("tealPane");
var redButton = document.getElementById("changeToRed");
var purpleButton = document.getElementById("changeToPurple");
var orangePane = document.getElementById("orangePane");
var blackPane = document.getElementById("blackPane");
var headerSizeButton = document.getElementById("headerSizeButton");
var changeToPinkButton = document.getElementById("changeToPinkButton");

myHeader.style.color = "orange";
myHeader.style.backgroundColor = "blue";
myHeader.innerText = "Hello, " + response;

console.log("Hello" + 5 + "pickles");

headerSizeButton.addEventListener("click", function () {
  console.log("Click happened!");
  myHeader.style.fontSize = "100px";
});

redButton.addEventListener("click", function () {
  console.log("Click happened!");
  tealPane.style.backgroundColor = "red";
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
var response = prompt("What's your favorite color?", "Black");

myHeader.style.color = "white";
myHeader.style.backgroundColor = "black";
myHeader.style.fontSize = "56px";
myHeader.innerText = "I know you like... " + response;

changeToPinkButton.addEventListener("click", function () {
  console.log("Click happened!");
  blackPane.style.backgroundColor = "pink";
  var notification = document.createElement("h5");
  notification.innerText = "This is pink now";
  blackPane.style.appendChild(notification);
});

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
