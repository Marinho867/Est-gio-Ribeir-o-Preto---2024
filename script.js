function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (b &lt, number) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === number;
}

let input = Number(prompt("Informe um número:"));

if (isFibonacciNumber(input)) {
    console.log(`${ input } pertence à sequência de Fibonacci.`);
} else {
    console.log(`${ input } não pertence à sequência de Fibonacci.`);
}
