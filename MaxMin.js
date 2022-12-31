// Find Maximum and Minimum Values of a List

// Description
// Your task is to make two functions ( max and min, or
// maximum and minimum, etc., depending on the language )
// that receive a list of integers as input, and return
// the largest and lowest number in that list, respectively.

list = [4,6,2,1,9,63,-134,566]

var min = function(list){
    return list.sort((a,b) => {return a-b})[0];
}

var max = function(list){
    return list.sort((a,b) => {return b-a})[0]
}
