// Regex validate PIN code

// DESCRIPTION:
// ATMs allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

const regularExp = new RegExp('[0-9]{4}');
console.log(regularExp.test('1234'))