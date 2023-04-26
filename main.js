function showContextMenu(event) {
    event.preventDefault();
    var contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";
  }
  var myButton = document.getElementById("myButton");
myButton.addEventListener("contextmenu", showContextMenu);
function changeToRed(event) {
    event.preventDefault();
    var myButton = document.getElementById("myButton");
    myButton.style.backgroundColor = "red";
  }
  
  function changeToBlue(event) {
    event.preventDefault();
    var myButton = document.getElementById("myButton");
    myButton.style.backgroundColor = "blue";
  }
  
  function changeToGreen(event) {
    event.preventDefault();
    var myButton = document.getElementById("myButton");
    myButton.style.backgroundColor = "green";
  }
  var redButton = document.getElementById("redButton");
var blueButton = document.getElementById("blueButton");
var greenButton = document.getElementById("greenButton");

redButton.addEventListener("click", changeToRed);
blueButton.addEventListener("click", changeToBlue);
greenButton.addEventListener("click", changeToGreen);
