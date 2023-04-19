function whosPaying(names) {

    var numberOfNames = names.length;
    var chooseRandomName = Math.floor(Math.random() * numberOfNames);
    var randomName = names[chooseRandomName];

    return randomName + " is going to pay the bill!"
}

names = ["Angela" , "Ben" , "Alex" , "Usaka" , "Ayan"]

console.log(whosPaying(names));