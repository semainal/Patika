// Task
// Given an integer, , perform the following conditional actions:

// If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20, print Weird
// If N is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);

    if (N%2 == 1) {
        console.log("Weird");
    } else if ((N%2 ==0) && (2<=N && N<=5)) {
        console.log("Not Weird");
    } else if (N%2 == 0 && (6<=N && N<=20)) {
        console.log("Weird");
    } else if (N%2 ==0 && N>20) {
        console.log("Not Weird");
    }
}
