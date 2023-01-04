// Square Every Digit

// DESCRIPTION
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
// squareDigits(3212) should equal 9414


function squareDigits(num){

    let concatString = '';

    for(let i of num.toString()){
        concatString += Math.pow(Number(i), 2);
    }

    return Number(concatString);

}

console.log(squareDigits(3212));