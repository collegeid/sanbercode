function calculateArea(radius) {
    const pi = 3.14;
    let area = pi * radius * radius;
    return area;
}

console.log("Luas lingkaran dengan jari-jari 5 adalah:", calculateArea(5));

function squareNumbers(numbers) {
    let squaredNumbers = numbers.map(function(num) {
        return num * num;
    });
    return squaredNumbers;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Array awal:", numbers);
console.log("Array dengan angka-angka dikuadratkan:", squareNumbers(numbers));
