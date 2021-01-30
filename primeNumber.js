function checkPrimeNumber(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'The number is not a prime number';
        }
    }
    return 'The number is a prime number';
}

let result = checkPrimeNumber(57);
console.log(result);