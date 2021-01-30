// 10! = 1*2*3*4*5*6*7*8*9*10
// or, n * (n-1)!

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

var number = factorial(10);
console.log(number);


