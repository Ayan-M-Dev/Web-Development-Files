//Adding event listeners to all  the buttons with the class name 'drum' and putting it through a for loop so that it goes every button with class 'drum'   
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClicked);
    function handleClicked() {
        alert("I got clicked");
    }
}    

