// WITHOUT USING CONDITIONALS
// var firstName = prompt("Enter your name");
// var secondName = prompt("Enter your partner's name");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1; // 1-100
// alert(firstName + " and " + secondName + " love score is " + loveScore + "%");

// USING CONDITIONALS
    var firstName = prompt("Enter your name");
    var secondName = prompt("Enter your partner's name");
    var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1; // 1-100
    if (loveScore > 70) {
        alert(firstName + " and " + secondName + " love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
    } else {
        alert(firstName + " and " + secondName + " love score is " + loveScore + "%" + " You go together like coke and mentos.");
    }
