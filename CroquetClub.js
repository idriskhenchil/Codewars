// Categorize New Member

// Description
// The Western Suburbs Croquet Club has two categories of membership, 
// Senior and Open. They would like your help with an application form 
// that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap
// greater than 7. In this croquet club, handicaps range from -2 to +26; the 
// better the player the lower the handicap.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let output = [];

    for (let items of data) {
        let [age, handicap] = items;

        if (age >= 55 & handicap > 7) {
            output.push("Senior");
        } else {
            output.push("Open");
        }
    }
    return output;
}

