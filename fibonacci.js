// var fibo [0, 1, 1, 2]
//calculation of fibo index-
// 2 = fibo[2-1]{[1], 1} + fibo[2-2]{[0], 0}
// 3 = fibo[3-1]{[2], 1} + fibo[3-2]{[1], 1}
// n = fibo[n-1] + fibo[n-2]

function fibonacci(n) {
    let fibo = [0, 1];
    for (i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}

let result = fibonacci(12);
console.log(result);