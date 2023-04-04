function noOfDaysLeft (age) {
    var yearsremaing = 90 - age;
    var days = yearsremaing * 365;
    var weeks = yearsremaing * 52;
    var months = yearsremaing * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

noOfDaysLeft(25);