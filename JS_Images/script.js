var response = prompt("Hello. " + "Whats your name?");
var myHeader = document.getElementById("header1");
var hColorChangeButton = document.getElementById("headerControlButton");
var breatheImageOne = document.getElementById("breatheInImage");
var breatheButton = document.getElementById("breatheControlButton");

myHeader.innerText = "Hello, " + response;

var myheaderColorChange = function () {
  var redComp = Math.random() * 255;
  console.log(redComp);
  var greenComp = Math.random() * 255;
  var blueComp = Math.random() * 255;
  myHeader.style.backgroundColor =
    "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
};

var breatheImageSwap = function () {
if(breatheInImage.alt == "First breathing step"){
  breatheImageOne.src = "Images/Java Images-02.jpg";
  breatheInImage.alt = 

}

else {




}



  breatheImageOne.src = "Images/Java Images-02.jpg";
};

hColorChangeButton.addEventListener("click", myheaderColorChange);
breatheButton.addEventListener("click", breatheImageSwap);
