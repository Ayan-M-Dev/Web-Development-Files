var firstName = prompt("Enter your name");
var secondName = prompt("Enter your partner's name");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100
alert(firstName + " and " + secondName + " love score is " + loveScore + "%");