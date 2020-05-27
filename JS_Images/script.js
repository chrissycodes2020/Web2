var response = prompt("Hello. What's your name?");
var myHeader = document.getElementById("header1");
var hColorChangeButton = document.getElementById("headerControlButton");

var breatheImageOne = document.getElementById("breatheInImage");
var breatheButton = document.getElementById("breatheControlButton");

myHeader.style.color = "black";
myHeader.style.fontFamily = "Times New Roman";
myHeader.style.fontSize = "60px";
myHeader.innerText = "Hello, " + response;

var myHeaderColorChange = function () {
  var redComp = Math.random() * 255;
  console.log(redComp);
  var greenComp = Math.random() * 255;
  var blueComp = Math.random() * 255;
  myHeader.style.backgroundColor =
    "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
};

var swapBreatheImage = function () {
  console.log(breatheImageOne.alt);

  if (breatheImageOne.alt == "First breathing step") {
    breatheImageOne.src = "Images/Java Images-03.jpg";
    breatheImageOne.alt = "Second breathe image";
  } else {
    //otherwise

    breatheImageOne.src = "Images/Java Images-01.jpg";
    breatheImageOne.alt = "First breathing step";
  }
};

//just when the JS loads
myHeaderColorChange();
//when the button is clicked
hColorChangeButton.addEventListener("click", myHeaderColorChange);

breatheButton.addEventListener("click", swapBreatheImage);
