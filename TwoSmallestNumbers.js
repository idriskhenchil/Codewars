
// Description
// Create a function that returns the sum of the two lowest
// positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

let numbers = [4, 1, 1, 4];
// let numbers = [15, 28, 4, 2, 43];


// numArray = numArray.sort((a, b) => a - b);

function sumTwoSmallestNumbers(numbers) {
    let lowerBound = numbers[0];
    let upperBound = numbers[0];

    for (let nums of numbers){
        nums < lowerBound ? lowerBound = nums : upperBound = nums
        for(let nums of numbers){
            if (nums > lowerBound && nums <= upperBound) {
                upperBound = nums
            }
        }
    }

    return lowerBound + upperBound
}

console.log(sumTwoSmallestNumbers(numbers))