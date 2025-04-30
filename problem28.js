// TODO: SOLVED

// Starting with the number 1 and moving to the right in a clockwise direction a
// 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101. 

// What is the sum of the diagonals in a 1001 by 1001 spiral formed in the same way?

// 43 44 45 46 47 48 49
// 42 21 22 23 24 25 26
// 41 20  7  8  9 10 27
// 40 19  6  1  2 11 28
// 39 18  5  4  3 12 29
// 38 17 16 15 14 13 30
// 37 36 35 34 33 32 31

// 1 + 2 + 2 + 2 + 2 + 4 + 4 + 4 + 4 + 6 + 6 + 6 + 6 + 8 + 8 + 8 + 8

// 3 * 3
// 1 + 3 + 5 + 7 + 9 = 25

// 5 * 5
// 1 + 3 + 5 + 7 + 9 + 13 + 17 + 21 + 25 = 101

// 6 * 6
// 1 + 3 + 5 + 7 + 9 + 13 + 17 + 21 + 25 + 31 + 37 + 43 + 49 = 261

function getSpiralDiagnolsSum(sideLength){
    let total = 1;
    let cornerValue = 1;
    let increment = 2;
    while(increment < sideLength){
        for(let i = 0; i < 4; i++){
            cornerValue += increment;
            total += cornerValue;
        }
        increment += 2;
    }
    return total;
}

console.log(getSpiralDiagnolsSum(3))
console.log(getSpiralDiagnolsSum(5))
console.log(getSpiralDiagnolsSum(7))
console.log(getSpiralDiagnolsSum(1001))