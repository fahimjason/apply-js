let year = 2020;

function leapYear(year) {
    if ((year % 4) == 0 && (year % 100) != 0) {
        console.log("The year is Leap Year");
    }
    else if ((year % 400) == 0) {
        console.log("The year is Leap Year");
    }
    else {
        console.log("The year isn't Leap Year");
    }
}

leapYear(year);