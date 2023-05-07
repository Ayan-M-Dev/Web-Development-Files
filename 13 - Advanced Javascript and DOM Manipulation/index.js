//Adding event listeners to all  the buttons with the class name 'drum' and putting it through a for loop so that it goes every button with class 'drum'   

// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  // Add click event listener to each button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
    // Get the innerHTML of the clicked button
    var buttonInnerHTML = this.innerHTML;
    // Call makeSound function with the button's innerHTML
    makeSound(buttonInnerHTML);
    // Call buttonAnimation function with the button's innerHTMl
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  // Call makeSound function with the key that was pressed
  makeSound(event.key)
  //Call buttonAnimation function with the key that was pressed
  buttonAnimation(event.key)
});

// Function to play the sound based on the key or button that was pressed
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log("Invalid key/button pressed");
  }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); 
    setTimeout(function() { 
        activeButton.classList.remove("pressed");
        }, 100);

}