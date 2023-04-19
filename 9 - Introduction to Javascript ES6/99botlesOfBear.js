numberOfBottles = 99;
for (i >=100 ; i >= 0; i--) {
    if (i > 1) {
        console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");
    } else if (i === 1) {
        console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }