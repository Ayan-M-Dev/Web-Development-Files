//Adding event listeners to all  the buttons with the class name 'drum' and putting it through a for loop so that it goes every button with class 'drum'   

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
        
        var audio = new Audio ("sounds/tom-1.mp3");
        audio.play();
        
    });
    
}
