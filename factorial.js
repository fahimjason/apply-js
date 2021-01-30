function factorial(num) {
    let factorial = 1;
    for (i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let number = 20;
console.log(factorial(number));