function factorialWhile(num) {
    let i = 1;
    factorial = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

number = factorialWhile(7);
console.log(number);