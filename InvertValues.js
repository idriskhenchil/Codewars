// Invert values

// Description
// Given a set of numbers, return the additive inverse of
// each. Each positive becomes negatives, and the negatives
// become positives.


let items = [1, -2, 3, -4, 5]

function invert(array) {
    let inverted = []
    array.forEach(x => {
        if(x === +0){
            inverted.push(-0)
        }
        else if (x < 0) {
            inverted.push(Math.abs(x))
        } else {
            inverted.push(x - (x * 2))
        }
    })
    return inverted
}

// Afterthought
// Unary negation -(x)
// -(10) = 10, -(-10) = -10
