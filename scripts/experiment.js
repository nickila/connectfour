var num = 9;
var arr = [];
var index = 0;
var diff = (num + 7) - ((num + 7) % 7);
//console.log(diff)
for (i = diff - 1; i > num - 1; i--) {
    arr.push(i)
}
var interval = setInterval(function () {
    console.log(arr[index++]);
    if (index === arr.length) {
        clearInterval(interval)
    }
}, 500)

console.log(arr)

// var arr = [0, 1, 2, 3, 4];
// var index = 0;
// var interval = setInterval(function () {
//     console.log(arr[index++]);
//     if (index == arr.length) {
//         clearInterval(interval);
//     }
// }, 1000)
//  (7)  6  5  4  3  2  1
// (14) 13 12 11 10  9  8
// (21) 20 19 18 17 16 15
// (28) 27 26 25 24 23 22
// (35) 34 33 32 31 30 29
// (42) 41 40 39 38 37 36
// (49) 48 47 46 45 44 43

// Find number at top row of whatever column the number is in.
// var modulo = num % 7;
// function countDown() {

// }

    // If rowLetter is 1, I want it to cycle through 6, 5, 4, 3, 2 and land on 1
    // If rowLetter is 5, I want it to cycle through 6 and land on 5
    // If rowLetter is 8, I want it to cycle through 13, 12, 11, 10, 9 and land on 8