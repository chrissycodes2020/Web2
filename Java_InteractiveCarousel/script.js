var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect");
var galleryImage = document.getElementById("galleryImg");

var catStandingLevel = ["Beginner", "Intermediate", "Advanced"];
var catSeatedLevel = ["Beginner", "Intermediate", "Advanced"];
var catInvertedLevel = ["Beginner", "Intermediate", "Advanced"];

var imageCounter = 1;

groupSelect.addEventListener("change", function () {
  console.log(groupSelect.value);

  if (groupSelect.value == "standing") {
    fillCategory(catStandingLevel);
  } else if (groupSelect.value == "seated") {
    fillCategory(catSeatedLevel);
  } else if (groupSelect.value == "inverted") {
    fillCategory(catInvertedLevel);
  } else {
    catSelect.innerHTML = "";
  }
});

var fillCategory = function (catArray) {
  catSelect.innerHTML = "";
  catArray.forEach(function (member) {
    var opt = document.createElement("option");
    opt.value = member;
    opt.textContent = member;
    catSelect.appendChild(opt);
  });
};

var timerFunction = function () {
  if (imageCounter == 1) {
    galleryImage.src = "Images/standingeasy2.jpg";
    imageCounter = 2;
  } else if (imageCounter == 2) {
    galleryImage.src = "Images/standingeasy3.jpg";
    imageCounter = 3;
  } else if (imageCounter == 3) {
    galleryImage.src = "Images/standingeasy1.jpg";
    imageCounter = 1;
  }
};

window.setInterval(timerFunction, 3000);
