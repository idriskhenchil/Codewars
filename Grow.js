// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let total = 1
    x.map(x => {
        total *= x
    })
    return total

}

// Afterthought
// Use .reduce()