function inchToFeet(num) {
    var feet = num / 12;
    feet = feet.toFixed(2)

    return feet;
}

var fristHeight = 67;
console.log(inchToFeet(fristHeight));


//feet calculation with for-loop

let senior = [20, 69, 36];
for (var i = 0; i < senior.length; i++) {
    var feet = (senior[i] / 12).toFixed(1);
    console.log(feet);
}

//parctice with first function
const arraySecondHeight = inchToFeet(senior[1]);
console.log("arraySecondHeight value:", arraySecondHeight);