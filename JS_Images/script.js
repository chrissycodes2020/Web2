var response = prompt("Hello. What's your name?");
var myHeader = document.getElementById("header1");
var hColorChangeButton = document.getElementById("headerControlButton");

var breatheImageOne = document.getElementById("breatheInImage");
var breatheButton = document.getElementById("breatheControlButton");

myHeader.innerText = "Hello, " + response;
myHeader.style.color = "green";

var myHeaderColorChange = function () {
  var redComp = Math.random() * 255;
  console.log(redComp);
  var greenComp = Math.random() * 255;
  var blueComp = Math.random() * 255;
  myHeader.style.backgroundColor =
    "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
};

var swapBreatheImage = function () {
  if(breatheImageOne.alt == "First breathing step");
  breatheImageOne.src = "Images/Java Images-02.jpg";



}
else { //otherwise 


}

}




//just when the JS loads
myHeaderColorChange();
//when the button is clicked
hColorChangeButton.addEventListener("click", myheaderColorChange);

breatheButton.addEventListener("click", swapBreatheImage);
