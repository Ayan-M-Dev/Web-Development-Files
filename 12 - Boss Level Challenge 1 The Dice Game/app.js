randomNUmber1 = Math.floor(Math.random() * 6) + 1; // 1-6
randomNUmber2 = Math.floor(Math.random() * 6) + 1; // 1-6

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNUmber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNUmber2 + ".png");

if (randomNUmber1 > randomNUmber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNUmber1 < randomNUmber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

//---------------------------------------------------------------OR--------------------------------------------------------------------------//

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice 6.png

var image1 = document.querySelectorAll("img")[0]; //Selecting all the <img> tag from the whole html file but has the index of [0] ie the first element out of all the <img> tags

    image1.setAttribute("src", randomImageSource); //Selecting the thing you want to change the attribute ie 'src' to randomImageSource



    

var randomNumber2 = (Math.floor(Math.random() * 6) + 1); //Generating other random numbers so that it is not the same

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice 6.png

var image2 = document.querySelectorAll("img")[1]; //Selecting all the <img> tag from the whole html file but has the index of [1] ie the second element out of all the <img> tags

    image2.setAttribute("src", randomImageSource2); //Selecting the thing you want to change the attribute ie 'src' to randomImageSource

//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
 



